import { Shield, Building2, Car, Coffee, ShoppingBag, Gamepad2, Trophy, Home, Heart, Briefcase, Zap, Award, CheckCircle, Star, Verified } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Seal {
  id: string;
  code: string;
  name: string;
  sector: string;
  description: string;
  icon: any;
  rarity: 'common' | 'rare' | 'legendary';
  enterprises: string[];
  value: number;
}

const seals: Seal[] = [
  {
    id: 'auto-43f9',
    code: 'AUTO-43F9',
    name: 'Automotive Excellence',
    sector: 'Automotive',
    description: 'Premium driving capabilities verified by leading auto manufacturers',
    icon: Car,
    rarity: 'rare',
    enterprises: ['Tesla', 'BMW', 'Mercedes-Benz'],
    value: 850
  },
  {
    id: 'ride-8b2a',
    code: 'RIDE-8B2A',
    name: 'Mobility Master',
    sector: 'Transportation',
    description: 'Elite rideshare and transportation expertise certification',
    icon: Building2,
    rarity: 'common',
    enterprises: ['Uber', 'Lyft', 'DoorDash'],
    value: 420
  },
  {
    id: 'game-a1b2',
    code: 'GAME-A1B2',
    name: 'Gaming Virtuoso',
    sector: 'Entertainment',
    description: 'Professional gaming skills endorsed by top gaming companies',
    icon: Gamepad2,
    rarity: 'legendary',
    enterprises: ['Epic Games', 'Valve', 'Riot Games'],
    value: 1200
  },
  {
    id: 'coll-e5f6',
    code: 'COLL-E5F6',
    name: 'Digital Collector',
    sector: 'Collectibles',
    description: 'Authenticated curation and collection expertise',
    icon: Trophy,
    rarity: 'rare',
    enterprises: ['OpenSea', 'Sotheby\'s', 'Christie\'s'],
    value: 750
  },
  {
    id: 'prop-k1l2',
    code: 'PROP-K1L2',
    name: 'Property Pioneer',
    sector: 'Real Estate',
    description: 'Verified real estate and property management capabilities',
    icon: Home,
    rarity: 'common',
    enterprises: ['Zillow', 'Redfin', 'Compass'],
    value: 600
  },
  {
    id: 'prof-o5p6',
    code: 'PROF-O5P6',
    name: 'Professional Elite',
    sector: 'Business',
    description: 'Executive-level professional competencies certification',
    icon: Briefcase,
    rarity: 'legendary',
    enterprises: ['McKinsey', 'Goldman Sachs', 'Google'],
    value: 1500
  },
  {
    id: 'tech-q7r8',
    code: 'TECH-Q7R8',
    name: 'Innovation Leader',
    sector: 'Technology',
    description: 'Cutting-edge technology adoption and expertise',
    icon: Zap,
    rarity: 'rare',
    enterprises: ['Apple', 'Microsoft', 'Amazon'],
    value: 950
  },
  {
    id: 'wellness-s9t0',
    code: 'WELL-S9T0',
    name: 'Wellness Expert',
    sector: 'Health & Fitness',
    description: 'Holistic health and wellness mastery verification',
    icon: Heart,
    rarity: 'common',
    enterprises: ['Peloton', 'Nike', 'Fitbit'],
    value: 380
  }
];

const Seals = () => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-azure border-azure bg-azure/10';
      case 'rare': return 'text-gold border-gold bg-gold/10';
      case 'legendary': return 'text-crimson border-crimson bg-crimson/10';
      default: return 'text-muted-foreground border-muted bg-muted/10';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'group-hover:shadow-azure/30';
      case 'rare': return 'group-hover:shadow-gold/30';
      case 'legendary': return 'group-hover:shadow-crimson/30';
      default: return 'group-hover:shadow-muted/30';
    }
  };

  return (
    <section id="seals" className="py-16 bg-gradient-to-br from-background via-background/98 to-accent/3 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:40px_40px]" />
      <div className="absolute top-16 left-8 w-48 h-48 bg-accent/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-16 right-8 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-float-delayed" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/60 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-crimson/50 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-azure/40 rounded-full animate-float" />
        
        {/* Section Header - Enhanced Visual Harmony */}
        <div className="text-center mb-12">
          {/* Icon and Title Group - Perfect Visual Balance */}
          <div className="relative inline-flex flex-col items-center mb-8">
            {/* Dynamic Icon Container - Larger and More Prominent */}
            <div className="relative mb-8 group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-accent/25 via-primary/20 to-accent/25 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Main Icon Container */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-card via-background to-card border border-accent/20 rounded-3xl shadow-2xl shadow-accent/25 group-hover:shadow-accent/40 transition-all duration-500 group-hover:scale-110">
                {/* Inner Gradient Overlay */}
                <div className="absolute inset-2 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-2xl opacity-80" />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-accent/30 via-primary/30 to-accent/30 animate-spin-slow opacity-60" />
                
                {/* Icon with Enhanced Styling */}
                <Shield className="relative w-14 h-14 text-accent drop-shadow-2xl group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-bounce opacity-70" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent/60 rounded-full animate-bounce animation-delay-300 opacity-70" />
              </div>
            </div>
            
            {/* Enhanced Title with Better Typography */}
            <div className="relative">
              {/* Title Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 blur-xl rounded-2xl" />
              
              <h2 className="relative font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-foreground via-accent via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:300%_300%] hover:animate-pulse transition-all duration-300">
                  Enterprise Seals
                </span>
              </h2>
            </div>
            
            {/* Refined Decorative Elements */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-accent/40 transition-all duration-500 hover:w-8" />
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" />
                <div className="h-[2px] w-16 bg-gradient-to-r from-accent via-primary to-accent rounded-full shadow-lg shadow-accent/20" />
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse animation-delay-300" />
              </div>
              <div className="h-[1px] w-6 bg-gradient-to-r from-accent/40 to-transparent transition-all duration-500 hover:w-8" />
            </div>
          </div>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Compliance-forward verification that protects privacy while enabling trusted enterprise engagement.
          </p>
          
          {/* Seal Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-azure">{seals.filter(s => s.rarity === 'common').length}</div>
              <div className="text-xs text-muted-foreground">Common</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{seals.filter(s => s.rarity === 'rare').length}</div>
              <div className="text-xs text-muted-foreground">Rare</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-crimson">{seals.filter(s => s.rarity === 'legendary').length}</div>
              <div className="text-xs text-muted-foreground">Legendary</div>
            </div>
          </div>
        </div>

        {/* Seals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {seals.map((seal) => {
            const Icon = seal.icon;
            const rarityColor = getRarityColor(seal.rarity);
            const rarityGlow = getRarityGlow(seal.rarity);
            
            return (
              <Card
                key={seal.id}
                className={`
                  group relative p-6 cursor-pointer transition-all duration-300 bg-card/60 backdrop-blur-sm border-border
                  hover:scale-105 hover:bg-card/80 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40
                  rounded-xl overflow-hidden
                `}
              >
                {/* Rarity Indicator */}
                <div className={`
                  absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                  ${rarityColor} transition-all duration-300 group-hover:scale-110
                `}>
                  {seal.rarity}
                </div>

                {/* Seal Content */}
                <div className="relative z-10">
                  <div className={`
                    p-3 rounded-lg border mb-4 transition-all duration-300 
                    group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg
                    ${rarityColor}
                  `}>
                    <Icon className="w-6 h-6 transition-all duration-300" />
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="font-heading font-bold text-sm text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {seal.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {seal.description}
                    </p>
                    <div className="font-mono text-xs text-accent bg-accent/10 rounded px-2 py-1 inline-block">
                      {seal.code}
                    </div>
                  </div>

                  {/* Value */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">Enterprise Value</span>
                    <span className="font-bold text-sm text-foreground">{seal.value} Points</span>
                  </div>

                  {/* Enterprises */}
                  <div className="flex flex-wrap gap-1">
                    {seal.enterprises.slice(0, 2).map((enterprise) => (
                      <span
                        key={enterprise}
                        className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground rounded border border-muted/30"
                      >
                        {enterprise}
                      </span>
                    ))}
                    {seal.enterprises.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-muted/10 text-muted-foreground/70 rounded border border-muted/20">
                        +{seal.enterprises.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="absolute bottom-3 left-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <Verified className="w-4 h-4 text-accent" />
                </div>

                {/* Clean Highlight Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card/40 backdrop-blur-sm border border-azure/30 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-azure/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-4 h-4 text-azure" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Common Seals</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Foundational endorsements from established enterprises</p>
          </div>
          
          <div className="bg-card/40 backdrop-blur-sm border border-gold/30 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-4 h-4 text-gold" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Rare Seals</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Premium certifications from industry leaders</p>
          </div>
          
          <div className="bg-card/40 backdrop-blur-sm border border-crimson/30 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-crimson/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-4 h-4 text-crimson" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Legendary Seals</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Elite endorsements from top-tier global enterprises</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-accent/8 via-primary/8 to-accent/8 rounded-xl p-6 border border-accent/15">
          <h3 className="font-display font-bold text-xl text-foreground mb-3">
            Earn Enterprise Seals
          </h3>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm leading-relaxed">
            Demonstrate your capabilities to earn valuable enterprise seals that unlock exclusive opportunities and increase your badge value.
          </p>
          <Button 
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Earning Seals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Seals;