import { Card } from "@/components/ui/card";
import { Gem, Shield, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const pillars = [
    {
      icon: Gem,
      title: "Scarcity",
      description: "Only some Activators have rare badges (Navigator, Collector, Guardian).",
      detail: "Limited availability creates natural value through exclusivity and proven capability.",
      color: "violet"
    },
    {
      icon: Shield,
      title: "Proof",
      description: "Seals are on-chain codes (e.g., BEV-721A)—tamper-evident.",
      detail: "Cryptographic verification ensures authenticity without compromising privacy.",
      color: "azure"
    },
    {
      icon: TrendingUp,
      title: "Upside",
      description: "More infused/sealed badges → more routes to paid work and reputation.",
      detail: "Expanded capabilities unlock additional earning opportunities and trust networks.",
      color: "gold"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      violet: "text-violet border-violet shadow-glow-violet",
      azure: "text-azure border-azure shadow-glow-azure", 
      gold: "text-gold border-gold shadow-glow-gold",
    };
    return colorMap[color as keyof typeof colorMap] || "";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            From Badge to Value
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Credible value creation for Web3 speculators through verifiable scarcity and utility.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const colorClasses = getColorClasses(pillar.color);
            
            return (
              <Card
                key={pillar.title}
                className={`
                  p-8 text-center bg-gradient-card border-2 transition-all duration-500 hover:scale-105
                  ${colorClasses}
                `}
              >
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 mb-6
                  ${colorClasses}
                `}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <p className="font-body text-sm text-muted-foreground/80 leading-relaxed">
                  {pillar.detail}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Sample Activator Card */}
        <div className="max-w-md mx-auto">
          <h3 className="font-heading font-semibold text-xl text-foreground text-center mb-6">
            Sample Activator Rarity
          </h3>
          
          <Card className="p-6 bg-gradient-card border border-border">
            {/* Activator Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-sigil rounded-xl mx-auto mb-3 animate-glow-pulse" />
              <h4 className="font-display font-bold text-lg text-foreground">
                Activator #42.3K
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Rarity Score: 847
              </p>
            </div>

            {/* Badge States */}
            <div className="space-y-3">
              {/* Slot Badge */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-muted">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg border-2 border-muted bg-muted/20 flex items-center justify-center">
                    <Gem className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">Navigator</span>
                </div>
                <span className="text-xs text-muted-foreground border border-muted px-2 py-1 rounded">
                  Slot
                </span>
              </div>

              {/* Infused Badge */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-azure bg-azure/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg border-2 border-azure bg-azure/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-azure" />
                  </div>
                  <span className="font-body text-sm text-foreground">Driver</span>
                </div>
                <span className="text-xs text-azure border border-azure px-2 py-1 rounded">
                  Infused
                </span>
              </div>

              {/* Sealed Badge */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gold bg-gold/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg border-2 border-gold bg-gold/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-sm text-foreground">Collector</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="text-xs text-gold bg-gold/20 border border-gold/30 px-1 rounded">
                      ART-G7H8
                    </span>
                    <span className="text-xs text-gold bg-gold/20 border border-gold/30 px-1 rounded">
                      NFT-I9J0
                    </span>
                  </div>
                  <span className="text-xs text-gold border border-gold px-2 py-1 rounded">
                    Sealed
                  </span>
                </div>
              </div>
            </div>

            {/* Rarity Meter */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Common</span>
                <span>Rare</span>
                <span>Legendary</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-neon h-2 rounded-full transition-all duration-1000" 
                  style={{ width: '73%' }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;