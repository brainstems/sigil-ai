import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CollectiveMemory = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    {
      title: "Sigil → SBT",
      description: "Soulbind flash transforms NFT to permanent identity",
      visual: "🔒 Sigil locks into Activator (SBT)"
    },
    {
      title: "Infused Badges", 
      description: "Energy threads light up human capabilities",
      visual: "⚡ Capabilities activate with proof threads"
    },
    {
      title: "Sealed Badges",
      description: "Enterprise seals create cryptographic verification",
      visual: "🏷️ Seal chips: BEV-721A, AUTO-43F9 + royalty streams"
    }
  ];

  const nextFrame = () => setCurrentFrame((prev) => (prev + 1) % frames.length);
  const prevFrame = () => setCurrentFrame((prev) => (prev - 1 + frames.length) % frames.length);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Collective Memory</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              From NFT to Soulbound Identity to{" "}
              <span className="relative inline-block text-primary">
                Activator agent
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your NFT mints a Soulbound identity and personal agent-- an Activator. You infuse human dimensions. Enterprises add <span className="text-azure font-semibold bg-azure/10 px-2 py-1 rounded-lg">Seals</span> that prove engagement. Together, they power collective memory markets.
            </p>
          </div>

          {/* Body */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Your Activator contributes to <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded-lg">collective memory</span> without exposing raw data: enterprises license capabilities from cohorts (e.g., Drinkers, Drivers) and pay in $ITLX for <span className="text-crimson font-semibold bg-crimson/10 px-2 py-1 rounded-lg">results with proofs</span>, not data dumps. Cohorts can join <span className="text-violet font-semibold bg-violet/10 px-2 py-1 rounded-lg">federated rounds</span> funded in $ITLX—updates that improve shared models earn rewards; misuse can be revoked and challenged.
              </p>
            </div>
          </div>

          {/* Visual Carousel */}
          <div className="relative bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-50" />
            
            <div className="relative text-center">
              <div className="bg-gradient-to-br from-background/50 to-card/30 rounded-2xl p-12 mb-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-8xl mb-6 animate-pulse">{frames[currentFrame].visual}</div>
                <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                  {frames[currentFrame].title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {frames[currentFrame].description}
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-6">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={prevFrame}
                  className="group border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </Button>
                
                <div className="flex gap-3">
                  {frames.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFrame(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentFrame 
                          ? 'bg-primary shadow-lg shadow-primary/25' 
                          : 'bg-muted hover:bg-primary/60'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={nextFrame}
                  className="group border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="text-center">
            <div className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-azure/10 to-primary/10 border border-azure/20 rounded-2xl backdrop-blur-sm hover:border-azure/40 hover:bg-azure/20 transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-azure rounded-full animate-pulse" />
              <span className="font-display font-bold text-lg text-azure group-hover:text-azure/80 transition-colors duration-300">
                "Results, not raw data."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectiveMemory;
