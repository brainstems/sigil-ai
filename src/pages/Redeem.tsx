import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, CheckCircle, Circle, Lock, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const steps = [
  { id: 1, title: "Redeem Sigil", description: "Convert your NFT to Activator" },
  { id: 2, title: "Soulbind", description: "Create non-transferable identity" },
  { id: 3, title: "Infuse Badges", description: "Activate human dimensions" },
  { id: 4, title: "Receive Seals", description: "Enterprise verification" },
];

const Redeem = () => {
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAllowlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && wallet) {
      setIsSubmitted(true);
      // In a real app, this would submit to an API
      console.log('Allowlist submission:', { email, wallet });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Redemption Portal
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your Sigil NFT into a soulbound Activator with verified capabilities.
            </p>
          </div>

          {/* Status Alert */}
          <Card className="max-w-2xl mx-auto p-6 mb-12 bg-card/80 border border-gold shadow-glow-gold backdrop-blur-lg">
            <div className="flex items-center space-x-4">
              <Lock className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Redemption Opens Post-TGE
                </h3>
                <p className="font-body text-muted-foreground">
                  The redemption window will open after the Token Generation Event. Join the allowlist to be notified when conversion becomes available.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Wallet Connection (Disabled) */}
            <Card className="p-8 bg-gradient-card border border-border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                  Connect Wallet
                </h2>
                <p className="font-body text-muted-foreground">
                  Connect your wallet to view eligible Sigil NFTs
                </p>
              </div>

              <div className="relative">
                <Button 
                  variant="disabled" 
                  size="lg" 
                  className="w-full"
                  disabled
                >
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 text-xs text-muted-foreground whitespace-nowrap opacity-100 pointer-events-none">
                  Opens post-TGE
                </div>
              </div>
            </Card>

            {/* Process Steps */}
            <Card className="p-8 bg-gradient-card border border-border">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                Redemption Process
              </h2>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-muted bg-muted/20 flex items-center justify-center">
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 border border-border rounded-lg bg-muted/10">
                <p className="font-body text-xs text-muted-foreground text-center">
                  All steps will be available once redemption opens. 
                  The process is fully automated and secure.
                </p>
              </div>
            </Card>
          </div>

          {/* Allowlist Section */}
          <Card className="max-w-lg mx-auto mt-16 p-8 bg-gradient-card border border-azure shadow-glow-azure">
            <div className="text-center mb-6">
              <Mail className="w-12 h-12 text-azure mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Join Priority Allowlist
              </h3>
              <p className="font-body text-muted-foreground">
                Be the first to know when redemption opens. Priority access for early adopters.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleAllowlistSubmit} className="space-y-4">
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent font-mono text-sm"
                    placeholder="0x..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  Join Allowlist
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-azure mx-auto mb-4" />
                <h4 className="font-display font-bold text-xl text-foreground mb-2">
                  Welcome to the Allowlist!
                </h4>
                <p className="font-body text-muted-foreground">
                  You'll receive priority access when redemption opens. Check your email for confirmation.
                </p>
              </div>
            )}
          </Card>

          {/* Technical Details */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-display font-bold text-2xl text-foreground text-center mb-8">
              Technical Requirements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-card border border-border text-center">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Eligible NFTs
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Original Sigil collection holders with verified ownership history
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-card border border-border text-center">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Gas Optimization
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Batch processing available to minimize transaction costs
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-card border border-border text-center">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Security Audit
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Smart contracts audited by leading security firms
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;