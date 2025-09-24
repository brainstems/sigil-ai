import { useState } from "react";
import { Zap, ShoppingCart, DollarSign, Users, ArrowRight, Shield, RefreshCw } from "lucide-react";

const Activators = () => {
  const [activeFlow, setActiveFlow] = useState<string | null>(null);

  const acquisitionOptions = [
    {
      id: "crypto-native",
      title: "Option A: Crypto-Native",
      description: "Buy an Activator NFT (transferable) on a marketplace",
      icon: ShoppingCart,
      color: "azure",
      details: "Transferable NFT with collectible value"
    },
    {
      id: "direct",
      title: "Option B: Direct Payment", 
      description: "Pay in $ITLX to mint a soulbound Activator ID",
      icon: DollarSign,
      color: "gold",
      details: "No collectible, just the right to run one"
    }
  ];

  const usageSteps = [
    {
      title: "Stake & Activate",
      description: "Stake + pay fees in $ITLX to turn it on",
      icon: Zap,
      color: "violet"
    },
    {
      title: "Maintain Memory",
      description: "Keep memory/reputation/event rails running",
      icon: RefreshCw,
      color: "azure"
    },
    {
      title: "Top-up Coverage",
      description: "Periodic $ITLX for storage proofs, fused Collective Memory, coordination",
      icon: Shield,
      color: "crimson"
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      azure: "text-azure border-azure bg-azure/10",
      gold: "text-gold border-gold bg-gold/10", 
      crimson: "text-crimson border-crimson bg-crimson/10",
      violet: "text-violet border-violet bg-violet/10"
    };
    return colorMap[color as keyof typeof colorMap] || "";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-violet/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-l from-azure/10 to-transparent rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Activators</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Personal language models{" "}
              <span className="relative inline-block text-primary">
                activated as agents
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Activators are personal agents infused with your memory, running on self-owned, portable infrastructure that coordinates without giving up control.
            </p>
          </div>

          {/* Purchase & Usage Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Acquire Section */}
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-azure/10 border border-azure/20 mb-4">
                  <ShoppingCart className="w-8 h-8 text-azure" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  1. Acquire Rights
                </h3>
                <p className="font-body text-muted-foreground">
                  Choose your path to ownership
                </p>
              </div>

              <div className="space-y-4">
                {acquisitionOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = activeFlow === option.id;
                  
                  return (
                    <div
                      key={option.id}
                      className={`
                        group p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300
                        ${isActive 
                          ? `${getColorClass(option.color)} shadow-lg` 
                          : 'border-primary/20 bg-gradient-to-br from-background/50 to-card/30 hover:border-primary/40'
                        }
                      `}
                      onMouseEnter={() => setActiveFlow(option.id)}
                      onMouseLeave={() => setActiveFlow(null)}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-current' : 'text-primary/60'}`} />
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-foreground mb-1">
                            {option.title}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground mb-2">
                            {option.description}
                          </p>
                          {isActive && (
                            <p className="font-body text-xs text-foreground/80 bg-background/80 p-2 rounded-lg border border-primary/20">
                              {option.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activate Section */}
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-4">
                  <Zap className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  2. Activate & Run
                </h3>
                <p className="font-body text-muted-foreground">
                  Power your memory infrastructure
                </p>
              </div>

              <div className="space-y-4">
                {usageSteps.map((step, index) => {
                  const Icon = step.icon;
                  
                  return (
                    <div
                      key={index}
                      className="group p-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/50 to-card/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${getColorClass(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-foreground mb-1">
                            {step.title}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lease Section */}
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet/10 border border-violet/20 mb-4">
                  <Users className="w-8 h-8 text-violet" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  3. Lease to Enterprise
                </h3>
                <p className="font-body text-muted-foreground">
                  Personal Language Model monetization
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/50 to-card/30">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-5 h-5 text-violet" />
                    <h4 className="font-display font-semibold text-foreground">
                      Settlement in $ITLX
                    </h4>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Lessors and lessees settle transactions using $ITLX tokens
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/50 to-card/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-azure" />
                    <h4 className="font-display font-semibold text-foreground">
                      Reputation Staking
                    </h4>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Both sides stake $ITLX for reputation and slashable guarantees
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Circle */}
          <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Why This Matters
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-bold text-2xl text-gold">WHY</span>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  Coordinate without giving up control
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  $ITLX powers rails that coordinate agents without revaling who you are; the currency aligns with the purpose.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-azure/10 border border-azure/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-bold text-2xl text-azure">HOW</span>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  Self-owned, portable memory inside agents
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Activators are the embodiment; $ITLX keeps that memory portable and verifiable (fees, staking, attestations).
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet/10 border border-violet/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-bold text-2xl text-violet">WHAT</span>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  We make the interop layer for AI agents
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Activators are first-party nodes on that layer; $ITLX is the fuel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Activators;
