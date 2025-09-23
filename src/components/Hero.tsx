import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Zap, Shield, Trophy, Users, Target, Star, Brain, ArrowRight, Play, Rocket, Diamond, Globe, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Layered Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/6 to-primary/8 animate-gradient bg-[length:400%_400%]" />
      
      {/* Parallax Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-l from-accent/12 via-primary/8 to-transparent rounded-full blur-3xl animate-float-delayed opacity-50" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-primary/8 to-accent/6 rounded-full blur-2xl animate-pulse opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Advanced Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-50" />
      
      {/* Enhanced Particle System */}
      <div className="absolute inset-0">
        {/* Primary particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full animate-float opacity-30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
        
        {/* Floating Icons */}
        {[Shield, Trophy, Users, Target, Star, Brain, Globe, Eye].map((Icon, i) => (
          <Icon
            key={`icon-${i}`}
            className="absolute text-primary/20 animate-float opacity-40 bg-transparent"
            size={Math.random() * 20 + 16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              backgroundColor: 'transparent',
            }}
          />
        ))}
        
        {/* Sparkle particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-accent animate-glow-pulse opacity-25"
            size={Math.random() * 18 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Dynamic Value Proposition Badge */}
          <div className="animate-fade-in mb-12">
            <div className="flex justify-center mb-8">
              <div className="group relative">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/25 to-primary/30 rounded-full blur-3xl opacity-70 group-hover:opacity-90 animate-pulse transition-opacity duration-700" />
                
                {/* Dynamic Background Particles */}
                <div className="absolute -inset-4 opacity-60">
                  <div className="absolute top-0 left-1/4 w-1 h-1 bg-primary/70 rounded-full animate-float" />
                  <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                  <div className="absolute top-1/2 right-0 w-0.5 h-0.5 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                {/* Main Badge Container */}
                <div className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-2 shadow-lg shadow-primary/10 group-hover:shadow-primary/15 group-hover:scale-102 transition-all duration-500 overflow-hidden">
                  {/* Minimal Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-primary/5 rounded-xl" />
                  
                  {/* Subtle Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer bg-[length:200%_100%] rounded-xl" />
                  
                  {/* Badge Content */}
                  <div className="relative flex items-center gap-2">
                    {/* Leading Icon */}
                    <Brain className="w-4 h-4 text-primary animate-glow-pulse" />
                    
                    {/* Main Text */}
                    <span className="font-display font-black text-lg tracking-wide bg-gradient-to-r from-primary via-accent via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:300%_300%] drop-shadow-[0_2px_8px_rgba(var(--primary),0.3)] [text-shadow:0_0_20px_rgba(var(--primary),0.4)] hover:scale-105 transition-transform duration-300">
                      Turn Memory Into Value
                    </span>
                    
                    {/* Trailing Icon */}
                    <Star className="w-4 h-4 text-primary animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Minimal Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Main Headline with Refined Typography */}
          <div className="animate-fade-in mb-12">
            <div className="relative mb-6">
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight tracking-tight">
                <span className="relative inline-block">
                  Your Memory,
                  <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 blur-2xl opacity-60 animate-pulse" />
                </span>
                <br />
                <span className="relative inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Your Rules
                  <span className="absolute -inset-3 bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 blur-3xl animate-pulse opacity-40" />
                </span>
              </h1>
            </div>
          </div>

          {/* Enhanced Subheadline with Balanced Typography */}
          <div className="animate-fade-in mb-16" style={{ animationDelay: '0.3s' }}>
            <p className="font-body font-medium text-lg md:text-xl lg:text-2xl text-foreground/85 leading-relaxed max-w-4xl mx-auto">
            We believe everyone—people and organizations alike—should own intelligence that remembers them, represents them, and works in their interest. We're tired of having our memories stolen and not being compensated.
            </p>
            
            <div className="mt-6">
              <p className="text-base md:text-lg text-muted-foreground italic font-body max-w-2xl mx-auto">
              Redeem your NFT → Build your Personal Language Model → Soulbind your identity → Activate your agent → Be sealed by an enterprise → Earn revenue.
              </p>
            </div>
          </div>

          {/* Enhanced Process Flow */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 drop-shadow-md">
              The Intellex Ecosystem
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Item 1 */}
              <a href="#" className="group block">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Contribute to collective memory"
                  className="w-full h-auto rounded-2xl shadow-md group-hover:opacity-90 transition"
                />
                <h4 className="mt-4 font-heading font-semibold text-lg text-foreground group-hover:text-azure transition">
                  Contribute to collective memory
                </h4>
              </a>
              {/* Item 2 */}
              <a href="#" className="group block">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Activate your agent"
                  className="w-full h-auto rounded-2xl shadow-md group-hover:opacity-90 transition"
                />
                <h4 className="mt-4 font-heading font-semibold text-lg text-foreground group-hover:text-azure transition">
                  Activate your agent
                </h4>
              </a>
              {/* Item 3 */}
              <a href="#" className="group block">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Enable agent interoperability"
                  className="w-full h-auto rounded-2xl shadow-md group-hover:opacity-90 transition"
                />
                <h4 className="mt-4 font-heading font-semibold text-lg text-foreground group-hover:text-azure transition">
                  Enable agent interoperability
                </h4>
              </a>
            </div>
          </div>

          
          <div className="animate-fade-in mb-20" style={{ animationDelay: '0.7s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
                onClick={() => {
                  // Dispatch custom event to open wallet modal
                  window.dispatchEvent(new CustomEvent('openWalletModal'));
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  Start Your Journey
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="group relative bg-gradient-to-r from-card/80 to-card/60 border-primary/40 text-foreground font-semibold px-8 py-4 text-lg rounded-2xl backdrop-blur-sm hover:from-primary/10 hover:to-accent/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('/litepaper.pdf', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Litepaper
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 group-hover:text-primary transition-all duration-300" />
                </span>
              </Button>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-fade-in flex flex-col items-center" style={{ animationDelay: '0.9s' }}>
            <div className="relative group cursor-pointer">
              <span className="font-body text-base font-medium text-muted-foreground mb-6 block transition-colors duration-300 group-hover:text-primary">
                Scroll to explore the ecosystem
              </span>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ChevronDown className="relative w-10 h-10 text-primary/70 animate-bounce mx-auto transition-all duration-300 group-hover:scale-125 group-hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent" />
      
      {/* Subtle Edge Effects */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;