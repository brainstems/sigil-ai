import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, LogOut } from "lucide-react";
import newLogo from "@/assets/new-logo.png";
import WalletModal from "./WalletModal";
import { WalletData } from "@/lib/walletUtils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<WalletData | null>(null);

  const navLinks = [
    { href: "#learn", label: "Learn" },
    { href: "#badges", label: "Badges" },
    { href: "#seals", label: "Seals" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#faq", label: "FAQ" },
  ];

  const truncateAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Load wallet connection state from localStorage on component mount
  useEffect(() => {
    const savedWallet = localStorage.getItem('connectedWallet');
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet);
        setConnectedWallet(walletData);
      } catch (error) {
        console.error('Error parsing saved wallet data:', error);
        localStorage.removeItem('connectedWallet');
      }
    }
  }, []);

  // Listen for custom event to open wallet modal from other components
  useEffect(() => {
    const handleOpenWalletModal = () => {
      setIsWalletModalOpen(true);
    };

    window.addEventListener('openWalletModal', handleOpenWalletModal);
    
    return () => {
      window.removeEventListener('openWalletModal', handleOpenWalletModal);
    };
  }, []);

  // Save wallet connection state to localStorage whenever it changes
  useEffect(() => {
    if (connectedWallet) {
      localStorage.setItem('connectedWallet', JSON.stringify(connectedWallet));
    } else {
      localStorage.removeItem('connectedWallet');
    }
  }, [connectedWallet]);

  const handleLogout = () => {
    // Clear wallet-specific localStorage data
    localStorage.removeItem('connectedWallet');
    
    // Reset wallet state
    setConnectedWallet(null);
    
    // Optional: Clear other wallet-related data
    localStorage.removeItem('walletConnectionTime');
    localStorage.removeItem('lastWalletType');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img 
                src={newLogo} 
                alt="Sigil Logo" 
                className="w-auto h-8"
              />
            </div>
            <span className="font-display font-black text-2xl text-primary tracking-tight" style={{ fontWeight: 1000 }}>
              Sigil
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-base font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              {connectedWallet ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 bg-card/60 border border-primary/20 rounded-xl px-3 py-2">
                    <Wallet className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {truncateAddress(connectedWallet.address)}
                    </span>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:hover:border-red-700 dark:hover:bg-red-950"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="wallet" 
                  size="wallet"
                  className="relative"
                  onClick={() => setIsWalletModalOpen(true)}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {connectedWallet ? (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-center space-x-2 bg-card/60 border border-primary/20 rounded-xl px-3 py-2">
                    <Wallet className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {truncateAddress(connectedWallet.address)}
                    </span>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:hover:border-red-700 dark:hover:bg-red-950"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="wallet" 
                  size="wallet"
                  className="mt-4 w-full"
                  onClick={() => {
                    setIsWalletModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Wallet Modal */}
      <WalletModal 
        open={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)}
        onWalletConnected={(walletData) => {
          setConnectedWallet(walletData);
          console.log('Wallet connected:', walletData);
        }}
      />
    </nav>
  );
};

export default Navigation;