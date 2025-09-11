import { CavosAuth, formatAmount, getBalanceOf, executeCalls, deployWallet } from 'cavos-service-sdk';

// Environment variables setup
const config = {
  appId: process.env.CAVOS_APP_ID!, // Your app ID (safe for frontend)
  orgSecret: process.env.CAVOS_ORG_SECRET!, // Your organization secret (backend only)
  apiKey: process.env.CAVOS_API_KEY!, // Your API key for wallet operations (backend only)
  baseURL: 'https://services.cavos.xyz/api/v1/external',
  defaultNetwork: 'sepolia' 
};

// Initialize CavosAuth instance
const cavosAuth = new CavosAuth(config.defaultNetwork, config.appId);

// Example usage with environment-specific configuration
const getConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    appId: process.env.CAVOS_APP_ID!,
    orgSecret: process.env.CAVOS_ORG_SECRET!,
    apiKey: process.env.CAVOS_API_KEY!,
    baseURL: isDevelopment 
      ? 'https://services-dev.cavos.xyz/api/v1/external'
      : 'https://services.cavos.xyz/api/v1/external',
    defaultNetwork: isDevelopment ? 'sepolia' : 'mainnet',
    
    // Development-specific settings
    debug: isDevelopment,
    timeout: isDevelopment ? 30000 : 10000
  };
};

// Create environment-specific CavosAuth instance
const createCavosAuth = () => {
  const config = getConfig();
  return new CavosAuth(config.defaultNetwork, config.appId);
};

// Example authentication flow
async function authenticateUser(email: string, password: string) {
  try {
    // Register new user
    const signUpResult = await cavosAuth.signUp(
      email,
      password,
      config.orgSecret
    );
    
    console.log('User registered:', signUpResult.user);
    console.log('Wallet deployed:', signUpResult.wallet);
    
    return signUpResult;
  } catch (error:any) {
    // If user already exists, try to sign in
    if (error.message.includes('already exists')) {
      const signInResult = await cavosAuth.signIn(
        email,
        password,
        config.orgSecret
      );
      
      console.log('User signed in:', signInResult.user);
      return signInResult;
    }
    
    throw error;
  }
}

// Example transaction execution (session-based)
async function executeTransaction(
  accessToken: string,
  walletAddress: string,
  calls: any[]
) {
  try {
    const result = await cavosAuth.executeCalls(
      walletAddress,
      calls,
      accessToken
    );
    
    console.log('Transaction executed:', result.txHash);
    // Handle potential token refresh
    if (result.accessToken) {
      console.log('Token automatically refreshed');
      // Update stored token
      localStorage.setItem('accessToken', result.accessToken);
    }
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
}

// Example balance checking
async function checkTokenBalance(
  walletAddress: string,
  tokenAddress: string,
  decimals: string = '18'
) {
  try {
    const balance = await getBalanceOf(
      walletAddress,
      tokenAddress,
      decimals,
      config.apiKey
    );
    
    console.log('Token balance:', balance);
    return balance;
  } catch (error) {
    console.error('Balance check failed:', error);
    throw error;
  }
}