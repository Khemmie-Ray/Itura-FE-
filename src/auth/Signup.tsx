import React, { useState } from 'react';
import { CavosAuth, executeCalls, getBalanceOf } from 'cavos-service-sdk';

const cavosAuth = new CavosAuth('sepolia', process.env.REACT_Signup_CAVOS_APP_ID!);

function App() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.signUp(
        'user@example.com',
        'SecurePassword123!',
        process.env.REACT_APP_CAVOS_ORG_SECRET!
      );
      
      setUser(result.user);
      setWallet(result.wallet);
      
      // Store tokens
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await cavosAuth.signIn(
        'user@example.com',
        'SecurePassword123!',
        process.env.REACT_APP_CAVOS_ORG_SECRET!
      );
      
      setUser(result.user);
      setWallet(result.wallet);
      
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };


  const getBalance = async () => {
    if (!wallet) return;
    
    try {
      const balance = await getBalanceOf(
        wallet.address,
        '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
        '18',
        process.env.REACT_APP_CAVOS_API_KEY! 
      );
      
      console.log('STRK Balance:', balance);
    } catch (error) {
      console.error('Balance check failed:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (user && wallet) {
    return (
      <div>
        <h2>Welcome, {user.email}!</h2>
        <p>Wallet: {wallet.address}</p>
        <p>Network: {wallet.network}</p>
        
        <button onClick={executeTransaction}>
          Send STRK Transaction
        </button>
        
        <button onClick={getBalance}>
          Check STRK Balance
        </button>
        
        <button onClick={() => {
          setUser(null);
          setWallet(null);
          localStorage.clear();
        }}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleRegister}>
        Register New User
      </button>
      <button onClick={handleLogin}>
        Login Existing User
      </button>
    </div>
  );
}

export default Signup;