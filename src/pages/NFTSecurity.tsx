import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, ArrowLeft, BookOpen, Video, FileText, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NFTSecurity = () => {
  const navigate = useNavigate();

  const learningModules = [
    {
      title: "Blockchain Fundamentals",
      description: "Understanding the foundation of NFT technology and blockchain networks",
      duration: "20 min",
      type: "Article",
      icon: FileText
    },
    {
      title: "Smart Contract Security",
      description: "How smart contracts work and common security considerations",
      duration: "25 min", 
      type: "Video",
      icon: Video
    },
    {
      title: "Wallet Security Best Practices",
      description: "Protecting your digital assets with proper wallet management",
      duration: "15 min",
      type: "Interactive",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-green/10 rounded-lg">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h1 className="font-modern font-bold text-xl text-foreground">NFT Security & Ownership</h1>
                <p className="text-sm text-muted-foreground">Intermediate Level • 15 min read</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-4">
                <Shield className="w-4 h-4" />
                NFT Security Fundamentals
              </span>
              <h2 className="font-modern font-black text-3xl md:text-4xl text-foreground mb-4">
                Master NFT Technology & Digital Asset Security
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn the essential concepts of NFT technology, blockchain security, and how to safely 
                manage your digital assets in the decentralized world.
              </p>
            </div>

            {/* Key Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">Immutable Ownership</h3>
                <p className="text-muted-foreground text-sm">
                  NFTs provide cryptographic proof of ownership that cannot be duplicated or forged.
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">Smart Contracts</h3>
                <p className="text-muted-foreground text-sm">
                  Automated agreements that execute when conditions are met, ensuring secure transactions.
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">Wallet Security</h3>
                <p className="text-muted-foreground text-sm">
                  Best practices for protecting your private keys and securing your digital assets.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        {/* <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-modern font-bold text-2xl text-foreground mb-8">Learning Modules</h3>
            
            <div className="space-y-4">
              {learningModules.map((module, index) => (
                <Card key={index} className="p-6 bg-card/50 border border-foreground/10 hover:border-brand-green/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                      <module.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-brand-green transition-colors">
                          {module.title}
                        </h4>
                        <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded-full">
                          {module.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-brand-green transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Security Tips */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-modern font-bold text-2xl text-foreground mb-8">Security Best Practices</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h4 className="font-bold text-lg text-foreground mb-3">Private Key Management</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Never share your private keys or seed phrases</li>
                  <li>• Use hardware wallets for long-term storage</li>
                  <li>• Keep multiple secure backups</li>
                  <li>• Use strong, unique passwords</li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h4 className="font-bold text-lg text-foreground mb-3">Transaction Safety</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Always verify contract addresses</li>
                  <li>• Check transaction details before signing</li>
                  <li>• Use reputable marketplaces</li>
                  <li>• Be aware of phishing attempts</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-brand-green/5 to-gold/5 border border-brand-green/20">
              <div className="text-center">
                <h3 className="font-modern font-bold text-2xl text-foreground mb-4">Ready for Advanced Topics?</h3>
                <p className="text-muted-foreground mb-6">
                  Continue with Revenue Generation to learn how to monetize your digital assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate("/learn/revenue-generation")}
                    className="bg-brand-green hover:bg-brand-green/80"
                  >
                    Revenue Generation
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NFTSecurity;