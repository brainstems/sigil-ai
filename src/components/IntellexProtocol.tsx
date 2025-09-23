import { ExternalLink, Network, Coins } from "lucide-react";

const IntellexProtocol = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Introducing the Intellex Protocol
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="font-heading font-medium text-xl text-foreground/90 leading-relaxed">
                We make the interop protocol on <span className="text-tech-cyan font-semibold">NEAR Intent</span> that lets agents own, share, and use collective memory.
              </p>
              <p className="font-heading font-medium text-xl text-foreground/90 leading-relaxed">
                Intellex protocol guides the network for creating, proving, permitting, moving and improving memory.
              </p>
            </div>
            
            {/* Protocol Link */}
            <div className="mt-8">
              <a 
                href="https://www.intellex.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Network className="w-5 h-5" />
                Learn more at intellex.xyz
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Token Value Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Coins className="w-6 h-6 text-gold" />
                <h3 className="font-heading font-semibold text-2xl text-foreground">TOKEN Value</h3>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Key Value Proposition */}
              <div className="text-center">
                <p className="font-heading font-medium text-lg text-gold mb-2">
                  $ITLX handles memory ownership and permissions—creating it, granting access, and taking it back.
                </p>
                <p className="font-heading font-semibold text-xl text-tech-cyan">
                  $ITLX is the rail for memory in motion.
                </p>
              </div>

              {/* Flow Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet/10 border border-violet/20 rounded-lg p-6">
                  <h4 className="font-heading font-medium text-violet mb-3">Memory Movement</h4>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    Every time memory is created, licensed, used, updated, or revoked, $ITLX moves.
                  </p>
                </div>
                
                <div className="bg-azure/10 border border-azure/20 rounded-lg p-6">
                  <h4 className="font-heading font-medium text-azure mb-3">Value Settlement</h4>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                    If memory doesn't move, $ITLX doesn't move. When memory is created, licensed, used, or improved, $ITLX settles it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Microcopy Chips */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              'Memory ownership on NEAR Intent',
              'Interop protocol for agents',
              'Collective memory markets'
            ].map((text) => (
              <div key={text} className="px-4 py-2 bg-tech-cyan/10 border border-tech-cyan/20 rounded-lg">
                <span className="font-body text-sm text-tech-cyan">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntellexProtocol;