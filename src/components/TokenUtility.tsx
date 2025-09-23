import { useState } from "react";
import { DollarSign, ArrowRight, Coins, FileX, Link2 } from "lucide-react";

const TokenUtility = () => {
  const [hoveredFlow, setHoveredFlow] = useState<string | null>(null);

  const flows = [
    {
      id: "license",
      title: "License",
      description: "LicensePasses for memory access",
      icon: Coins,
      color: "azure",
      flow: "License → Micro-royalties to owners"
    },
    {
      id: "use", 
      title: "Use",
      description: "Settlement with cryptographic proofs",
      icon: ArrowRight,
      color: "gold",
      flow: "Use → Settlement + proofs"
    },
    {
      id: "revoke",
      title: "Revoke", 
      description: "Network fees and tombstone propagation",
      icon: FileX,
      color: "crimson",
      flow: "Revoke → network fee + tombstone propagation"
    },
    {
      id: "bridge",
      title: "Bridge",
      description: "Cross-chain memory wrapping",
      icon: Link2,
      color: "violet", 
      flow: "Cross-chain wraps"
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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Token Utility</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              $ITLX settles memory{" "}
              <span className="relative inline-block text-primary">
                in motion
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              When memory is created, licensed, used, updated, moved, or revoked—$ITLX moves; when it doesn't, it doesn't.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-50" />
            
            <div className="relative text-center mb-8">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <DollarSign className="relative w-20 h-20 text-gold mx-auto mb-6 animate-pulse group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Token Flow Visualization
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flows.map((flow) => {
                const Icon = flow.icon;
                const isHovered = hoveredFlow === flow.id;
                
                return (
                  <div
                    key={flow.id}
                    className={`
                      group relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 overflow-hidden
                      ${isHovered 
                        ? `${getColorClass(flow.color)} shadow-lg scale-105` 
                        : 'border-primary/20 bg-gradient-to-br from-background/50 to-card/30 hover:border-primary/40 hover:bg-primary/5'
                      }
                    `}
                    onMouseEnter={() => setHoveredFlow(flow.id)}
                    onMouseLeave={() => setHoveredFlow(null)}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative text-center">
                      <div className={`
                        inline-flex items-center justify-center w-12 h-12 rounded-2xl border-2 mb-4 transition-all duration-300 group-hover:scale-110
                        ${isHovered ? getColorClass(flow.color) : 'border-primary/20 text-primary/60 group-hover:border-primary/40 group-hover:text-primary'}
                      `}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {flow.title}
                      </h4>
                      
                      <p className="font-body text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                        {flow.description}
                      </p>
                      
                      {isHovered && (
                        <div className="text-xs font-mono text-foreground bg-background/80 p-3 rounded-lg border border-primary/20 animate-fade-in">
                          {flow.flow}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Microcopy Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'LicensePasses',
              'Micro-royalties', 
              'Revocation tombstones',
              'Cross-chain wraps'
            ].map((text) => (
              <div key={text} className="group px-6 py-3 bg-gradient-to-r from-tech-cyan/10 to-primary/10 border border-tech-cyan/20 rounded-2xl backdrop-blur-sm hover:border-tech-cyan/40 hover:bg-tech-cyan/20 transition-all duration-300 hover:scale-105">
                <span className="font-body text-sm text-tech-cyan group-hover:text-tech-cyan/80 transition-colors duration-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;