export interface WalletData {
  address: string;
  chainId: string;
  hasPublicAiNft: boolean;
  walletType: 'metamask' | 'near';
  whitelistStatus?: string;
}

export const isMetaMaskInstalled = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined';
};

export const isNearWalletInstalled = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).near !== 'undefined';
};

export const connectMetaMask = async (): Promise<WalletData> => {
  if (!isMetaMaskInstalled()) {
    throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
  }

  try {
    const ethereum = (window as any).ethereum;


    try {
      await ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }]
      });
      
    } catch (e) {
      throw new Error('Connection cancelled by user');
      // If eth_accounts fails, proceed with eth_requestAccounts
    }
    
    // Request account access
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const address = accounts[0];
    
    // Get chain ID
    const chainId = await ethereum.request({
      method: 'eth_chainId',
    });
    
    // Mock NFT check - in real app, this would check the blockchain
    const hasPublicAiNft = Math.random() > 0.5; // 50% chance

    return {
      address: address, // This is the actual connected wallet address
      chainId: chainId, // This is the actual chain ID
      walletType: 'metamask',
      hasPublicAiNft,
      whitelistStatus: hasPublicAiNft ? 'eligible' : 'not_eligible'
    };
  } catch (error) {
    // Handle user cancellation specifically
    if (error instanceof Error) {
        if (error.message.includes('User rejected') || 
            error.message.includes('User denied') ||
            error.message.includes('rejected') ||
            error.message.includes('cancelled') ||
            error.message.includes('denied')) {
          throw new Error('Connection cancelled by user');
        }
      }
      
      // Handle MetaMask specific error codes
      if ((error as any)?.code === 4001) {
        throw new Error('Connection cancelled by user');
      }
      
      throw new Error(`MetaMask connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const connectNearWallet = async (): Promise<WalletData> => {
  try {
    // Check if NEAR wallet is available
    if (typeof window === 'undefined' || !(window as any).near) {
      throw new Error('NEAR wallet not found. Please install NEAR wallet extension.');
    }

    const near = (window as any).near;
    
    // Request account access
    const account = await near.requestSignIn({
      contractId: 'app.sigil.near', // Your app's contract ID
      methodNames: [], // Methods your app needs access to
    });

    if (!account || !account.accountId) {
      throw new Error('No NEAR account found');
    }

    const nearAddress = account.accountId;
    const nearChainId = 'near-mainnet';
    
    // Simulate NFT check
    const hasPublicAiNft = Math.random() > 0.3; // Slightly higher chance for NEAR

    return {
      address: nearAddress,
      chainId: nearChainId,
      hasPublicAiNft,
      walletType: 'near'
    };
  } catch (error) {
    // Fallback to mock connection if NEAR wallet is not available
    console.warn('NEAR wallet not available, using mock connection:', error);
    
    const mockAddress = 'user.near'; // Fallback address
    const mockChainId = 'near-mainnet';
    
    // Simulate NFT check
    const hasPublicAiNft = Math.random() > 0.3;

    return {
      address: mockAddress,
      chainId: mockChainId,
      hasPublicAiNft,
      walletType: 'near'
    };
  }
};
