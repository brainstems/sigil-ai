import { Card } from "@/components/ui/card";
import { Shield, Eye, Zap, Globe } from "lucide-react";

const EnterpriseBinding = () => {
  const sectorColors = [
    { name: "Automotive", color: "bg-crimson", code: "AUTO" },
    { name: "Retail", color: "bg-azure", code: "RETL" },
    { name: "Gaming", color: "bg-gold", code: "GAME" },
    { name: "Travel", color: "bg-violet", code: "TRVL" },
    { name: "Finance", color: "bg-tech-cyan", code: "FINC" },
  ];

  return (
    <section id="seals" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Enterprise Binding
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Compliance-forward verification that protects privacy while enabling trusted enterprise engagement.
          </p>
        </div>

        {/* Main Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl border-2 border-azure text-azure">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Privacy First
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Enterprises don't see your data; they see your <strong className="text-azure">infused capability</strong> and verifiable receipts. No raw data sharing, only cryptographic proof.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl border-2 border-gold text-gold">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Cryptographic Seals
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Binding adds a cryptographic <strong className="text-gold">seal</strong> to your badge. No trademarks, no data leakage—only verifiable codes and sector identifiers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl border-2 border-violet text-violet">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Cross-Chain Protocol
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Works across chains and organizations via <strong className="text-violet">Intellex Protocol</strong>: shared memory, protected intelligence, coordinated action.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Central Badge with Enhanced Lightning */}
            <div className="relative mx-auto w-56 h-56 flex items-center justify-center">
              {/* Main Lightning Container - Positioned Left of Center */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-36 h-36 rounded-2xl border-2 border-azure bg-azure/10 flex items-center justify-center animate-glow-pulse">
                {/* Enhanced Lightning Icon */}
                <div className="relative animate-lightning-pulse">
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-2xl"
                  >
                    <defs>
                      <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--azure))" />
                        <stop offset="30%" stopColor="hsl(var(--tech-cyan))" />
                        <stop offset="70%" stopColor="hsl(var(--brand-green))" />
                        <stop offset="100%" stopColor="hsl(var(--azure))" />
                      </linearGradient>
                      <linearGradient id="lightningCore" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--brand-green))" />
                        <stop offset="50%" stopColor="hsl(var(--tech-cyan))" />
                        <stop offset="100%" stopColor="hsl(var(--azure))" />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="softGlow"/>
                        <feMerge> 
                          <feMergeNode in="softGlow"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Outer Lightning Bolt with Enhanced Details */}
                    <path
                      d="M38 6L20 28H32L28 48L52 24H40L38 6Z"
                      fill="url(#lightningGradient)"
                      stroke="hsl(var(--azure))"
                      strokeWidth="1.5"
                      filter="url(#glow)"
                      className="animate-lightning-flicker"
                    />
                    
                    {/* Inner Lightning Core */}
                    <path
                      d="M36 10L24 26H34L30 42L48 26H38L36 10Z"
                      fill="url(#lightningCore)"
                      opacity="0.9"
                      filter="url(#innerGlow)"
                      className="animate-lightning-inner"
                    />
                    
                    {/* Lightning Ridge Details */}
                    <path
                      d="M34 12L26 24H32L30 38L44 26H36L34 12Z"
                      fill="hsl(var(--tech-cyan))"
                      opacity="0.7"
                      className="animate-lightning-ridge"
                    />
                    
                    {/* Energy Core Points */}
                    <circle cx="36" cy="18" r="2.5" fill="hsl(var(--brand-green))" className="animate-pulse opacity-95" />
                    <circle cx="36" cy="30" r="2" fill="hsl(var(--tech-cyan))" className="animate-pulse opacity-90" style={{animationDelay: '0.3s'}} />
                    
                    {/* Electric Sparks - Enhanced */}
                    <g className="animate-spark-1">
                      <circle cx="18" cy="20" r="1.5" fill="hsl(var(--azure))" opacity="0.8" />
                      <circle cx="54" cy="32" r="1.2" fill="hsl(var(--tech-cyan))" opacity="0.8" />
                      <circle cx="25" cy="35" r="1" fill="hsl(var(--brand-green))" opacity="0.7" />
                    </g>
                    <g className="animate-spark-2">
                      <circle cx="50" cy="18" r="1" fill="hsl(var(--brand-green))" opacity="0.6" />
                      <circle cx="15" cy="42" r="1.3" fill="hsl(var(--azure))" opacity="0.7" />
                      <circle cx="45" cy="38" r="0.8" fill="hsl(var(--tech-cyan))" opacity="0.6" />
                    </g>
                    
                    {/* Lightning Tendrils */}
                    <path d="M22 16L18 12M50 20L54 16M26 40L22 44M46 36L50 40" 
                          stroke="hsl(var(--azure))" 
                          strokeWidth="0.8" 
                          opacity="0.6" 
                          className="animate-tendril-flicker" />
                  </svg>
                  
                  {/* Multi-layered Lightning Aura */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-azure/15 via-tech-cyan/20 to-brand-green/15 blur-md animate-aura-pulse" />
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-brand-green/10 to-azure/10 blur-sm animate-aura-secondary" />
                </div>
              </div>
              
              {/* Enterprise Seals - Positioned Right with Better Spacing */}
              <div className="absolute top-6 right-4 space-y-3 z-10">
                {["BEV-721A", "CPG-19C7", "RETL-5B2D"].map((seal, index) => (
                  <div
                    key={seal}
                    className="px-3 py-2 bg-gold/20 text-gold border border-gold/40 rounded-lg text-xs font-mono font-medium shadow-lg backdrop-blur-sm animate-seal-attach hover:bg-gold/30 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    {seal}
                  </div>
                ))}
              </div>

              {/* Enhanced Energy Threads */}
              <div className="absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-10 bg-gradient-to-b from-azure/60 via-tech-cyan/40 to-transparent origin-bottom animate-float"
                    style={{
                      left: `${40 + 25 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      top: `${50 + 25 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                      transform: `rotate(${i * 60}deg)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Floating Particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full animate-float opacity-60 ${
                  i % 3 === 0 ? 'bg-azure' : i % 3 === 1 ? 'bg-tech-cyan' : 'bg-brand-green'
                }`}
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2.5 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Sector Color Legend */}
        <div className="text-center">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
            Sector Color Legend
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectorColors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg"
              >
                <div className={`w-4 h-4 rounded-full ${sector.color}`} />
                <span className="font-body text-sm text-foreground">
                  {sector.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {sector.code}-XXXX
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBinding;