"use client";

import React, { useEffect, useState } from 'react';

interface WalletConnectionWrapperProps {
  children: React.ReactNode;
}

export const WalletConnectionWrapper: React.FC<WalletConnectionWrapperProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const [hasWalletError, setHasWalletError] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Listen for wallet-related errors
    const handleError = (error: ErrorEvent) => {
      if (error.message?.includes('externalDetectWallets') || 
          error.message?.includes('WebAssembly.Module')) {
        setHasWalletError(true);
        console.warn('Wallet detection error caught:', error.message);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('externalDetectWallets') ||
          event.reason?.message?.includes('WebAssembly.Module')) {
        setHasWalletError(true);
        console.warn('Wallet promise rejection caught:', event.reason);
        event.preventDefault(); // Prevent the error from being logged
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (!isClient) {
    // Render a loading state during SSR
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange"></div>
      </div>
    );
  }

  if (hasWalletError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Wallet Connection Issue</h2>
          <p className="mb-4">There seems to be an issue with wallet detection. Please try:</p>
          <ul className="text-left mb-4 space-y-2">
            <li>• Refreshing the page</li>
            <li>• Installing a Starknet wallet (Argent or Braavos)</li>
            <li>• Using the Cartridge controller for connection</li>
          </ul>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white px-6 py-3"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};