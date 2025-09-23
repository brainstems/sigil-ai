import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Zap, Car, Coffee, ShoppingBag, Compass, Camera, Gamepad2, Music, Book, Shield, Trophy, Users, Palette, Plane, Home, Heart, Brain, Target, Briefcase, Wrench } from "lucide-react";
import badgeExamples from "@/assets/badge-examples.png";

type BadgeState = 'slot' | 'infused' | 'sealed';

interface Badge {
  id: string;
  name: string;
  icon: any;
  description: string;
  state: BadgeState;
  sectors: string[];
  seals: string[];
}

const badges: Badge[] = [
  {
    id: 'driver',
    name: 'Driver',
    icon: Car,
    description: 'Vehicle operation and transportation capabilities',
    state: 'sealed',
    sectors: ['Auto OEMs', 'Rideshare', 'Insurance', 'Parts', 'Charging'],
    seals: ['AUTO-43F9', 'RIDE-8B2A', 'INSR-7E41']
  },
  {
    id: 'drinker',
    name: 'Drinker',
    icon: Coffee,
    description: 'Beverage consumption preferences and expertise',
    state: 'infused',
    sectors: ['Soda', 'Coffee', 'Alcohol', 'Energy', 'Water/Functional'],
    seals: []
  },
  {
    id: 'shopper',
    name: 'Shopper',
    icon: ShoppingBag,
    description: 'Retail and marketplace engagement patterns',
    state: 'sealed',
    sectors: ['Retailers', 'Marketplaces', 'CPG'],
    seals: ['RETL-5B2D', 'MKTPL-9C7F']
  },
  {
    id: 'navigator',
    name: 'Navigator',
    icon: Compass,
    description: 'Travel and location-based expertise (rare)',
    state: 'slot',
    sectors: ['Airlines', 'Hotels', 'Booking', 'Tourism'],
    seals: []
  },
  {
    id: 'creator',
    name: 'Creator',
    icon: Camera,
    description: 'Content creation and digital media skills',
    state: 'infused',
    sectors: ['Social Media', 'Streaming', 'Photography', 'Video'],
    seals: []
  },
  {
    id: 'gamer',
    name: 'Gamer',
    icon: Gamepad2,
    description: 'Gaming expertise and virtual world engagement',
    state: 'sealed',
    sectors: ['Gaming Studios', 'Esports', 'Hardware', 'Streaming'],
    seals: ['GAME-A1B2', 'ESPT-C3D4']
  },
  {
    id: 'audiophile',
    name: 'Audiophile',
    icon: Music,
    description: 'Music and audio technology expertise',
    state: 'slot',
    sectors: ['Music Streaming', 'Audio Hardware', 'Concerts', 'Production'],
    seals: []
  },
  {
    id: 'reader',
    name: 'Reader',
    icon: Book,
    description: 'Literature and knowledge consumption habits',
    state: 'infused',
    sectors: ['Publishing', 'Education', 'Libraries', 'Audiobooks'],
    seals: []
  },
  {
    id: 'guardian',
    name: 'Guardian',
    icon: Shield,
    description: 'Security and protection capabilities (rare)',
    state: 'slot',
    sectors: ['Security', 'Insurance', 'Safety', 'Monitoring'],
    seals: []
  },
  {
    id: 'collector',
    name: 'Collector',
    icon: Trophy,
    description: 'Asset accumulation and curation expertise (rare)',
    state: 'sealed',
    sectors: ['Collectibles', 'Art', 'Antiques', 'NFTs'],
    seals: ['COLL-E5F6', 'ART-G7H8', 'NFT-I9J0']
  },
  {
    id: 'socializer',
    name: 'Socializer',
    icon: Users,
    description: 'Community building and social networking',
    state: 'infused',
    sectors: ['Social Networks', 'Events', 'Communities', 'Dating'],
    seals: []
  },
  {
    id: 'artist',
    name: 'Artist',
    icon: Palette,
    description: 'Creative and artistic expression capabilities',
    state: 'slot',
    sectors: ['Art Galleries', 'Design Studios', 'Fashion', 'NFT Platforms'],
    seals: []
  },
  {
    id: 'traveler',
    name: 'Traveler',
    icon: Plane,
    description: 'Global mobility and cultural exchange',
    state: 'infused',
    sectors: ['Airlines', 'Hotels', 'Tourism', 'Travel Tech'],
    seals: []
  },
  {
    id: 'homeowner',
    name: 'Homeowner',
    icon: Home,
    description: 'Property ownership and home management',
    state: 'sealed',
    sectors: ['Real Estate', 'Home Services', 'Insurance', 'Smart Home'],
    seals: ['PROP-K1L2', 'HOME-M3N4']
  },
  {
    id: 'wellness',
    name: 'Wellness',
    icon: Heart,
    description: 'Health and fitness engagement patterns',
    state: 'infused',
    sectors: ['Fitness', 'Healthcare', 'Nutrition', 'Mental Health'],
    seals: []
  },
  {
    id: 'thinker',
    name: 'Thinker',
    icon: Brain,
    description: 'Analytical and intellectual capabilities',
    state: 'slot',
    sectors: ['Research', 'Consulting', 'Education', 'Think Tanks'],
    seals: []
  },
  {
    id: 'achiever',
    name: 'Achiever',
    icon: Target,
    description: 'Goal-oriented performance and accomplishment',
    state: 'infused',
    sectors: ['Professional Services', 'Coaching', 'Training', 'Certification'],
    seals: []
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Briefcase,
    description: 'Career expertise and workplace skills',
    state: 'sealed',
    sectors: ['Recruitment', 'Professional Networks', 'Training', 'Consulting'],
    seals: ['PROF-O5P6', 'WORK-Q7R8']
  },
  {
    id: 'builder',
    name: 'Builder',
    icon: Wrench,
    description: 'Construction and craftsmanship abilities',
    state: 'slot',
    sectors: ['Construction', 'Tools', 'Hardware', 'DIY'],
    seals: []
  },
  {
    id: 'tech',
    name: 'Tech Savvy',
    icon: Zap,
    description: 'Technology adoption and digital expertise',
    state: 'infused',
    sectors: ['Tech Companies', 'Software', 'Hardware', 'Startups'],
    seals: []
  }
];

const BadgeGallery = () => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const getStateColor = (state: BadgeState) => {
    switch (state) {
      case 'slot': return 'text-muted-foreground border-muted';
      case 'infused': return 'text-azure border-azure shadow-glow-azure';
      case 'sealed': return 'text-gold border-gold shadow-glow-gold';
    }
  };

  const getStateLabel = (state: BadgeState) => {
    switch (state) {
      case 'slot': return 'Available';
      case 'infused': return 'Infused by owner';
      case 'sealed': return 'Enterprise-sealed';
    }
  };

  const getStateDescription = (state: BadgeState) => {
    switch (state) {
      case 'slot': return 'Dormant capability ready for activation';
      case 'infused': return 'Active capability with energy connection';
      case 'sealed': return 'Verified capability with enterprise endorsements';
    }
  };

  return (
    <section id="badges" className="py-16 bg-gradient-to-br from-background via-background/98 to-primary/3 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:40px_40px]" />
      <div className="absolute top-16 left-8 w-48 h-48 bg-primary/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-16 right-8 w-64 h-64 bg-accent/15 rounded-full blur-[100px] animate-float-delayed" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Floating Orbs - Smaller and More Subtle */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-azure/60 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gold/50 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-crimson/40 rounded-full animate-float" />
        
        {/* Section Header - Enhanced Visual Harmony */}
        <div className="text-center mb-16">
          {/* Icon and Title Group - Perfect Visual Balance */}
          <div className="relative inline-flex flex-col items-center mb-8">
            {/* Dynamic Icon Container - Larger and More Prominent */}
            <div className="relative mb-8 group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/25 via-accent/20 to-primary/25 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Main Icon Container */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-card via-background to-card border border-primary/20 rounded-3xl shadow-2xl shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-500 group-hover:scale-110">
                {/* Inner Gradient Overlay */}
                <div className="absolute inset-2 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl opacity-80" />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary/30 via-accent/30 to-primary/30 animate-spin-slow opacity-60" />
                
                {/* Icon with Enhanced Styling */}
                <Trophy className="relative w-14 h-14 text-primary drop-shadow-2xl group-hover:text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/60 rounded-full animate-bounce opacity-70" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-bounce animation-delay-300 opacity-70" />
              </div>
            </div>
            
            {/* Enhanced Title with Better Typography */}
            <div className="relative">
              {/* Title Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl rounded-2xl" />
              
              <h2 className="relative font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-foreground via-primary via-accent to-foreground bg-clip-text text-transparent animate-gradient bg-[length:300%_300%] hover:animate-pulse transition-all duration-300">
                  Badge Gallery
                </span>
              </h2>
            </div>
            
            {/* Refined Decorative Elements */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-primary/40 transition-all duration-500 hover:w-8" />
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                <div className="h-[2px] w-16 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/20" />
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse animation-delay-300" />
              </div>
              <div className="h-[1px] w-6 bg-gradient-to-r from-primary/40 to-transparent transition-all duration-500 hover:w-8" />
            </div>
          </div>

          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          20 dimensions of human intelligence. All valued by business enterprises. Click any badge to explore its three states and enterprise interests.
          </p>
        </div>
          
        {/* Badge Examples - Larger and More Interactive */}
        <div className="flex justify-center mb-12">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -m-2" />
            <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
              <img 
                src={badgeExamples} 
                alt="Badge state examples: Slot, Infused, and Sealed"
                className="rounded-lg max-w-full h-auto max-h-48 md:max-h-56 lg:max-h-64 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="bg-background/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1 text-xs font-medium text-primary">
                  Click badges below to explore states
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Badge Grid - More Compact and Modern */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-12">
          {badges.map((badge) => {
            const Icon = badge.icon;
            const stateColor = getStateColor(badge.state);
            
            return (
              <Card
                key={badge.id}
                className={`
                  group relative p-4 cursor-pointer transition-all duration-300 bg-card/30 backdrop-blur-sm border 
                  hover:scale-105 hover:bg-card/70 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40
                  ${stateColor} rounded-xl overflow-hidden
                `}
                onClick={() => setSelectedBadge(badge)}
              >
                {/* Clear Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300
                  ${badge.state === 'slot' ? 'bg-muted/50 shadow-lg shadow-muted/20' : 
                    badge.state === 'infused' ? 'bg-azure/30 shadow-lg shadow-azure/30' : 
                    'bg-gold/30 shadow-lg shadow-gold/30'}
                `} />

                {/* State Indicator - Enhanced */}
                <div className={`
                  absolute -top-2 -right-2 w-4 h-4 rounded-full border border-background shadow-md
                  transition-all duration-300 group-hover:scale-125
                  ${badge.state === 'slot' ? 'bg-muted' : 
                    badge.state === 'infused' ? 'bg-azure animate-glow-pulse group-hover:shadow-azure/50' : 
                    'bg-gold animate-glow-pulse group-hover:shadow-gold/50'}
                `} />

                {/* Badge Icon - Crystal Clear */}
                <div className="relative flex flex-col items-center text-center z-10">
                  <div className={`
                    p-3 rounded-lg border mb-3 transition-all duration-300 
                    group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg
                    ${badge.state === 'slot' ? 'group-hover:border-muted group-hover:bg-muted/10' :
                      badge.state === 'infused' ? 'group-hover:border-azure group-hover:bg-azure/10 group-hover:shadow-azure/25' :
                      'group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-gold/25'}
                    ${stateColor}
                  `}>
                    <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-body font-medium text-xs text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {badge.name}
                  </h3>
                  <span className={`
                    text-xs px-2 py-1 rounded-md border font-medium transition-all duration-300 leading-none
                    group-hover:scale-105 group-hover:font-semibold
                    ${badge.state === 'slot' ? 'border-muted/60 text-muted-foreground bg-muted/20 group-hover:bg-muted/30' :
                      badge.state === 'infused' ? 'border-azure/60 text-azure bg-azure/20 group-hover:bg-azure/30 group-hover:shadow-md group-hover:shadow-azure/20' :
                      'border-gold/60 text-gold bg-gold/20 group-hover:bg-gold/30 group-hover:shadow-md group-hover:shadow-gold/20'}
                  `}>
                    {getStateLabel(badge.state)}
                  </span>
                </div>

                {/* Clean Highlight Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Information Cards - Compact and Modern */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-3 h-3 bg-muted rounded-full" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Available Slots</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Dormant capabilities ready for activation</p>
          </div>
          
          <div className="bg-card/40 backdrop-blur-sm border border-azure/30 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-azure/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-3 h-3 bg-azure rounded-full animate-glow-pulse" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Infused Energy</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Active capabilities with energy signature</p>
          </div>
          
          <div className="bg-card/40 backdrop-blur-sm border border-gold/30 rounded-lg p-4 text-center hover:bg-card/60 transition-all duration-300">
            <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-3 h-3 bg-gold rounded-full animate-glow-pulse" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Enterprise Sealed</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Verified capabilities with endorsements</p>
          </div>
        </div>

        {/* Call to Action - More Compact */}
        <div className="text-center bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8 rounded-xl p-6 border border-primary/15">
          <h3 className="font-display font-bold text-xl text-foreground mb-3">
            Ready to Mint Your Badge?
          </h3>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm leading-relaxed">
            Multiple enterprises can seal the same badge. Seals are additive and increase your badge's enterprise value.
          </p>
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Badge Minting
          </Button>
        </div>
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg">
          <Card className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card border border-border">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedBadge(null)}
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="p-8">
              {/* Badge Header */}
              <div className="text-center mb-8">
                <div className={`
                  inline-flex items-center justify-center w-20 h-20 rounded-2xl border-2 mb-4
                  ${getStateColor(selectedBadge.state)}
                `}>
                  <selectedBadge.icon className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                  {selectedBadge.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {selectedBadge.description}
                </p>
                <div className={`
                  inline-block px-4 py-2 rounded-full border font-body font-medium
                  ${getStateColor(selectedBadge.state)}
                `}>
                  {getStateLabel(selectedBadge.state)}
                </div>
              </div>

              {/* State Description */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Current State
                </h4>
                <p className="font-body text-muted-foreground">
                  {getStateDescription(selectedBadge.state)}
                </p>
              </div>

              {/* Enterprise Sectors */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Enterprise Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBadge.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-body"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seals */}
              {selectedBadge.seals.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Enterprise Seals
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedBadge.seals.map((seal) => (
                      <div
                        key={seal}
                        className="px-3 py-2 bg-gold/10 text-gold border border-gold/30 rounded-lg text-center font-mono text-sm"
                      >
                        {seal}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </section>
  );
};

export default BadgeGallery;