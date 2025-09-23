import { Card } from "@/components/ui/card";
import { Zap, Link, Lightbulb, Shield } from "lucide-react";
import { useState } from "react";

const Learn = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: Zap,
      title: "Redeem your NFT",
      subtitle: "Turn your Sigil into a living Activator.",
      description: "Burn/lock Sigil to instantiate your Activator- a soulbound Personal Language Model that represents you.",
      detail: "Transform your NFT into a permanent, non-transferable identity that grows from your intelligence and is valued based on your reputation.",
      color: "crimson",
    },
    {
      id: 2,
      icon: Link,
      title: "Soulbind",
      subtitle: "Lock identity, unlock reputation.",
      description: "Your Activator becomes a non-transferable identity fused with intelligence, memory and reputation.",
      detail: "Create an immutable connection between you and your digital identity, building trust through a verifiable history.",
      color: "azure",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Infuse Badges",
      subtitle: "Light up human intelligence.",
      description: "Build a Personal Language Model with specific capabilities (Driver, Drinker, Shopper…). \"Infused\" = ready to be put to work.",
      detail: "Activate your unique human capabilities as verifiable badges that enterprises can recognize and value.",
      color: "gold",
    },
    {
      id: 4,
      icon: Shield,
      title: "Enterprise Seals",
      subtitle: "Let enterprises verify and engage.",
      description: "Enterprises bind to the intelligence embedded in badges; sealed badges show cryptographic stamps.",
      detail: "Businesses pay to access the cryptographic seals to your badges, and the intelligence behind it.",
      color: "violet",
    },
  ];

  const getGlowClass = (color: string) => {
    const glowMap = {
      crimson: "shadow-glow-crimson",
      azure: "shadow-glow-azure", 
      gold: "shadow-glow-gold",
      violet: "shadow-glow-violet",
    };
    return glowMap[color as keyof typeof glowMap] || "";
  };

  const getColorClass = (color: string) => {
    const colorMap = {
      crimson: "text-crimson border-crimson",
      azure: "text-azure border-azure",
      gold: "text-gold border-gold", 
      violet: "text-violet border-violet",
    };
    return colorMap[color as keyof typeof colorMap] || "";
  };

  return (
    <section id="learn" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            From NFT to{" "}
            <span className="relative inline-block text-primary">
              Verified Capability
              <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
            </span>
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four steps from NFT to verified capability. Tap any card to explore the process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            
            return (
              <Card
                key={step.id}
                className={`
                  group relative p-6 pt-8 pr-8 cursor-pointer transition-all duration-500
                  bg-gradient-to-br from-card/60 via-background/80 to-card/60 
                  border backdrop-blur-sm shadow-2xl hover:shadow-primary/20
                  ${isActive 
                    ? `${getColorClass(step.color)} ${getGlowClass(step.color)} scale-105 border-2` 
                    : 'border-primary/20 hover:border-primary/40 hover:scale-105'
                  }
                `}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Step Number */}
                <div className={`
                  absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm z-10
                  ${isActive 
                    ? `bg-${step.color} text-white shadow-lg border-2 border-white/20` 
                    : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300'
                  }
                `}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`
                  mb-6 p-4 rounded-2xl border-2 w-fit group-hover:scale-110 transition-all duration-300
                  ${isActive 
                    ? `${getColorClass(step.color)} shadow-lg` 
                    : 'border-primary/20 text-primary/60 group-hover:border-primary/40 group-hover:text-primary'
                  }
                `}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className={`
                  font-body text-sm mb-4 font-semibold
                  ${isActive ? getColorClass(step.color).split(' ')[0] : 'text-primary/80 group-hover:text-primary transition-colors duration-300'}
                `}>
                  {step.subtitle}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Active Step Detail */}
        <div className="relative bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl hover:shadow-primary/20 transition-all duration-500">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-50" />
          
          <div className="relative">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-full border-2 mb-8 shadow-lg
              ${getColorClass(steps[activeStep - 1].color)} ${getGlowClass(steps[activeStep - 1].color)}
            `}>
              {(() => {
                const Icon = steps[activeStep - 1].icon;
                return <Icon className="w-10 h-10" />;
              })()}
            </div>
            <h3 className="font-display font-bold text-3xl text-foreground mb-6">
              {steps[activeStep - 1].title}
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {steps[activeStep - 1].detail}
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="font-body text-sm text-foreground font-medium">
              No business logos, only verifiable codes for enterprise seals. Proof, not promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;