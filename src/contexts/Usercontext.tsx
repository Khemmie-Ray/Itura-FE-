'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import abiJson from '../Abis/abi.json';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
  useAccount,
  useConnect,
  useDisconnect,
  Connector,
} from '@starknet-react/core';
import type { AccountInterface, Abi } from 'starknet';

interface StarknetContextType {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  account: AccountInterface | undefined;
  setAccount: (account: AccountInterface | undefined) => void;
  contractAddr: `0x${string}`;
  abi: Abi;
  token_addr: `0x${string}`;
  address: string | undefined;
  status: 'disconnected' | 'connected' | 'connecting' | 'reconnecting';
  handleClearSession: () => Promise<void>;
  setAddress: (address: string | undefined) => void;
  username: string | undefined;
  handleConnect: (connector: Connector) => Promise<void>;
}

export const StarknetContext = createContext<StarknetContextType>(
  {} as StarknetContextType
);

interface StarknetProviderProps {
  children: ReactNode;
}

export const StarknetContextProvider = ({ children }: StarknetProviderProps) => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const { address, account, status } = useAccount();

  const [isLoading, setIsLoading] = useState(false);
  const [localAccount, setLocalAccount] = useState<AccountInterface | undefined>();
  const [localAddress, setLocalAddress] = useState<string | undefined>();
  const [username, setUsername] = useState<string>();

  // Contract addresses from env
  const token_addr =
    (process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`) || '0x0';
  const contractAddr =
    (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`) || '0x0';

  const abi = abiJson as Abi;

  // Sync connected account/address into local state (so you can modify them if needed)
  useEffect(() => {
    setLocalAccount(account);
    setLocalAddress(address);
  }, [account, address]);

  // Optionally get username if connected via Cartridge
  useEffect(() => {
    const controller = connectors.find((c) => c.id === 'cartridge');

    if (controller && address && 'username' in controller) {
      (controller as { username?: () => Promise<string> })
        .username?.()
        .then((n) => setUsername(n));
    }
  }, [connectors, address]);

  const handleConnect = async (connector: Connector) => {
    try {
      await connect({ connector });
    } catch (err) {
      toast.error(`Connection failed: ${err}`);
    }
  };

  const handleClearSession = async () => {
    try {
      disconnect();
      setLocalAccount(undefined);
      setLocalAddress(undefined);
      setUsername(undefined);
      router.push('/');
      toast.success('Wallet Disconnected Successfully');
    } catch (err) {
      toast.error(`Error disconnecting: ${err}`);
    }
  };

  return (
    <StarknetContext.Provider
      value={{
        isLoading,
        setIsLoading,
        account: localAccount,
        setAccount: setLocalAccount,
        contractAddr,
        abi,
        token_addr,
        address: localAddress,
        status,
        handleClearSession,
        setAddress: setLocalAddress,
        username,
        handleConnect,
      }}
    >
      {children}
    </StarknetContext.Provider>
  );
};
