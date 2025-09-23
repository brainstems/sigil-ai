import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ExternalLink, CheckCircle } from "lucide-react";
import { connectMetaMask, connectNearWallet, isMetaMaskInstalled, isNearWalletInstalled, WalletData } from "@/lib/walletUtils";
import { useToast } from "@/hooks/use-toast";

interface WalletModalProps {
  open: boolean;
  onClose: () => void;
  onWalletConnected: (walletData: WalletData) => void;
}

const WalletModal = ({ open, onClose, onWalletConnected }: WalletModalProps) => {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWalletConnect = async (walletType: 'metamask' | 'near') => {
    setIsConnecting(walletType);
    
    try {
      let walletData: WalletData;
      
      if (walletType === 'metamask') {
        walletData = await connectMetaMask();
      } else {
        walletData = await connectNearWallet();
      }
      
      onWalletConnected(walletData);
      onClose();
      
      toast({
        title: "Wallet Connected!",
        description: walletData.hasPublicAiNft 
          ? "Public.ai NFT detected - Dual Holder Boost Ready!" 
          : "Ready to start earning rewards",
      });
    } catch (error) {
      console.error('Wallet connection error:', error);
      
      // Check if the error is due to user cancellation
      if (error instanceof Error && error.message.includes('cancelled by user')) {
        // Show cancellation toast and close modal
        toast({
          title: "Connection Cancelled",
          description: "Wallet connection was cancelled",
        });
        onClose();
        return;
      }
      
      toast({
        title: "Connection Failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(null);
    }
  };

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Connect using MetaMask browser extension',
      icon: '🦊',
      installed: isMetaMaskInstalled(),
      connect: () => handleWalletConnect('metamask')
    },
    {
      id: 'near',
      name: 'NEAR Wallet',
      description: 'Connect using NEAR Protocol wallet',
      icon: '🌐',
      installed: isNearWalletInstalled(),
      connect: () => handleWalletConnect('near')
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black border-black">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose your preferred wallet to connect and start earning rewards
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <Card 
              key={wallet.id}
              className={`cursor-pointer transition-all hover:shadow-md bg-black border-gray-800 ${
                !wallet.installed ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={wallet.installed ? wallet.connect : undefined}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{wallet.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white">{wallet.name}</h3>
                      <p className="text-sm text-gray-400">{wallet.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {wallet.installed ? (
                      <>
                        {isConnecting === wallet.id ? (
                          <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://metamask.io/', '_blank');
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Install
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
