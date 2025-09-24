import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Zap, Link, Library, Lightbulb, Shield } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Library,
    title: "Convert your NFT,
    subtitle: "Your NFT unlocks a Personal Language Model (PLM).",
    description: "Burn your NFT and instantiate your Personal Language Model designed to power personal agents--Acctivators",
    detail: "Transform your NFT into a permanent, non-transferable soulbound Personal Language Model that grows from your intelligence and is valued based on your reputation.",
    color: "crimson",
  },
  {
    id: 2,
    icon: Link,
    title: "Soulbind",
    subtitle: "Lock identity, unlock reputation.",
    description: "Your Personal Language Model is a linked non-transferable identity fused with intelligence, memory and reputation. a soulbound Personal Language Model that represents you.",
    detail: "Create an immutable connection between you and your digital identity, building trust through a verifiable history.",
    color: "azure",
  },
    {
    id: 3,
    icon: Zap,
    title: "Power an Activator",
    subtitle: "Use your Personal Langage Model to manage autonomous agents.",
    description: "Enfuse your personal agent-- an Activator-- with your Personal Language Model to represent you.",
    detail: "The intelligence of your Personal Language Model can be put to work powering Activators to perform tasks as you engage with global businesses.",
    color: "rebeccapurple",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Infuse Badges",
    subtitle: "Extend the human intelligence.",
    description: "Cultivate your Personal Language Model with specific capabilities (Driver, Drinker, Shopper…). \"Infused\" = ready to be put to work.",
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

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

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
    <section id="learn" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            How It Works
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Four steps from NFT to verified capability. Tap any card to explore the process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            
            return (
              <Card
                key={step.id}
                className={`
                  relative p-6 cursor-pointer transition-all duration-500 bg-gradient-card border-2
                  ${isActive 
                    ? `${getColorClass(step.color)} ${getGlowClass(step.color)} scale-105` 
                    : 'border-border hover:border-muted hover:shadow-card'
                  }
                `}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Number */}
                <div className={`
                  absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm
                  ${isActive ? `bg-${step.color} text-white` : 'bg-muted text-muted-foreground'}
                `}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`
                  mb-4 p-3 rounded-xl border-2 w-fit
                  ${isActive ? getColorClass(step.color) : 'border-muted text-muted-foreground'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className={`
                  font-body text-sm mb-3
                  ${isActive ? getColorClass(step.color).split(' ')[0] : 'text-muted-foreground'}
                `}>
                  {step.subtitle}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Active Step Detail */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <div className={`
            inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-6
            ${getColorClass(steps[activeStep - 1].color)} ${getGlowClass(steps[activeStep - 1].color)}
          `}>
            {(() => {
              const Icon = steps[activeStep - 1].icon;
              return <Icon className="w-8 h-8" />;
            })()}
          </div>
          <h3 className="font-display font-bold text-2xl text-foreground mb-4">
            {steps[activeStep - 1].title}
          </h3>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {steps[activeStep - 1].detail}
          </p>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="font-body text-sm text-muted-foreground border border-border rounded-lg px-4 py-2 inline-block bg-card/50">
            No business logos, only verifiable codes for enterprise seals. Proof, not promises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
