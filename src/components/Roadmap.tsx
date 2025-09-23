import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, Mail, Zap, Trophy, Shield, Users, Target, Rocket, Calendar, ArrowRight } from "lucide-react";

const roadmapSteps = [
  {
    id: 1,
    title: "TGE",
    description: "Token Generation Event - Foundation launch",
    status: "completed",
    date: "Q4 2024",
    icon: CheckCircle,
    features: ["Token distribution", "Initial ecosystem launch", "Community formation"],
    progress: 100
  },
  {
    id: 2,
    title: "Redemption Live",
    description: "Sigil to Activator conversion platform goes live",
    status: "upcoming",
    date: "Q1 2025",
    icon: Rocket,
    countdown: true,
    features: ["Conversion portal", "Badge activation", "Energy infusion"],
    progress: 85
  },
  {
    id: 3,
    title: "Badge Infusions",
    description: "Human dimension activation and capability discovery",
    status: "pending",
    date: "Q2 2025",
    icon: Zap,
    features: ["20 badge types", "Personal energy connection", "Capability verification"],
    progress: 0
  },
  {
    id: 4,
    title: "First Seals",
    description: "Enterprise verification and endorsement system",
    status: "pending",
    date: "Q2 2025",
    icon: Shield,
    features: ["Enterprise partnerships", "Seal verification", "Value attribution"],
    progress: 0
  },
  {
    id: 5,
    title: "Cross-sector Quests",
    description: "Multi-badge challenges and enterprise rewards",
    status: "pending",
    date: "Q3 2025",
    icon: Target,
    features: ["Quest system", "Reward distribution", "Cross-sector validation"],
    progress: 0
  },
];

const Roadmap = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to Q1 2025 (estimated: March 1, 2025)
  const targetDate = new Date('2025-01-15T00:00:00Z').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // If target date has passed, set to 0
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Initial call
    updateCountdown();

    // Set up interval
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);


  const getStatusIcon = (status: string, IconComponent: any) => {
    switch (status) {
      case 'completed':
        return <IconComponent className="w-6 h-6 text-azure" />;
      case 'upcoming':
        return <IconComponent className="w-6 h-6 text-gold animate-glow-pulse" />;
      default:
        return <IconComponent className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-azure shadow-glow-azure';
      case 'upcoming':
        return 'border-gold shadow-glow-gold';
      default:
        return 'border-muted';
    }
  };

  return (
    <section id="roadmap" className="py-16 bg-gradient-to-br from-background via-background/98 to-accent/3 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:40px_40px]" />
      <div className="absolute top-16 left-8 w-48 h-48 bg-primary/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-16 right-8 w-64 h-64 bg-accent/15 rounded-full blur-[100px] animate-float-delayed" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/60 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-azure/50 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-crimson/40 rounded-full animate-float" />
        
        {/* Section Header - Enhanced Visual Harmony */}
        <div className="text-center mb-16">
          {/* Icon and Title Group - Perfect Visual Balance */}
          <div className="relative inline-flex flex-col items-center mb-8">
            {/* Dynamic Icon Container - Larger and More Prominent */}
            <div className="relative mb-8 group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/25 via-azure/20 to-primary/25 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Main Icon Container */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-card via-background to-card border border-primary/20 rounded-3xl shadow-2xl shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-500 group-hover:scale-110">
                {/* Inner Gradient Overlay */}
                <div className="absolute inset-2 bg-gradient-to-br from-primary/5 via-azure/5 to-primary/5 rounded-2xl opacity-80" />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary/30 via-azure/30 to-primary/30 animate-spin-slow opacity-60" />
                
                {/* Icon with Enhanced Styling */}
                <Calendar className="relative w-14 h-14 text-primary drop-shadow-2xl group-hover:text-azure transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-azure/60 rounded-full animate-bounce opacity-70" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-bounce animation-delay-300 opacity-70" />
              </div>
            </div>
            
            {/* Enhanced Title with Better Typography */}
            <div className="relative">
              {/* Title Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-azure/10 to-primary/10 blur-xl rounded-2xl" />
              
              <h2 className="relative font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-foreground via-primary via-azure to-foreground bg-clip-text text-transparent animate-gradient bg-[length:300%_300%] hover:animate-pulse transition-all duration-300">
                  Roadmap
                </span>
              </h2>
            </div>
            
            {/* Refined Decorative Elements */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-primary/40 transition-all duration-500 hover:w-8" />
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                <div className="h-[2px] w-16 bg-gradient-to-r from-primary via-azure to-primary rounded-full shadow-lg shadow-primary/20" />
                <div className="w-2 h-2 bg-azure/60 rounded-full animate-pulse animation-delay-300" />
              </div>
              <div className="h-[1px] w-6 bg-gradient-to-r from-primary/40 to-transparent transition-all duration-500 hover:w-8" />
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-90">
            The evolutionary journey from NFT to verified capability ecosystem
          </p>
        </div>

        {/* Progress Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {roadmapSteps.map((step) => (
              <div key={step.id} className="text-center">
                <div className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center mx-auto mb-2 transition-all duration-300
                  ${step.status === 'completed' ? 'bg-azure/20 border-azure text-azure' :
                    step.status === 'upcoming' ? 'bg-gold/20 border-gold text-gold animate-glow-pulse' :
                    'bg-muted/20 border-muted text-muted-foreground'}
                `}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-medium text-foreground">{step.title}</div>
                <div className="text-xs text-muted-foreground">{step.date}</div>
              </div>
            ))}
          </div>
          
          {/* Overall Progress Bar */}
          <div className="bg-card/40 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-azure via-gold to-primary h-full transition-all duration-1000 animate-pulse"
                 style={{ width: '40%' }}></div>
          </div>
        </div>

        {/* Enhanced Countdown Widget */}
        <div className="max-w-3xl mx-auto mb-12 relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-azure/20 to-primary/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
          
          <Card className="relative p-8 bg-card/90 backdrop-blur-lg border-2 border-primary/30 rounded-3xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-8 h-8 border border-primary/40 rounded-full animate-spin"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 border border-primary/40 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative text-center">
              {/* Enhanced Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    Redemption Window Opens In
                  </h3>
                  <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-300"></div>
                </div>
                <p className="font-body text-muted-foreground text-base md:text-lg">
                  Get ready to activate your Sigil and unlock your potential
                </p>
              </div>
              
              {/* Enhanced Countdown Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Days', value: timeRemaining.days, color: 'gold', delay: '0s' },
                  { label: 'Hours', value: timeRemaining.hours, color: 'azure', delay: '0.1s' },
                  { label: 'Minutes', value: timeRemaining.minutes, color: 'primary', delay: '0.2s' },
                  { label: 'Seconds', value: timeRemaining.seconds, color: 'crimson', delay: '0.3s' },
                ].map((item) => (
                  <div key={item.label} className="text-center group" style={{ animationDelay: item.delay }}>
                    <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-4 mb-3 hover:border-primary/50 hover:scale-105 hover:rotate-1 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 animate-fade-in">
                      {/* Glowing Effect */}
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl animate-pulse"></div>
                      
                      {/* Value Display */}
                      <div className="relative font-display font-bold text-3xl md:text-4xl text-primary transition-all duration-300 group-hover:scale-110">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      
                      {/* Progress Ring */}
                      <div className="absolute -top-1 -right-1 w-3 h-3">
                        <div className="w-full h-full bg-primary/60 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    <div className={`font-body text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progress Bar */}
              <div className="relative bg-muted/20 rounded-full h-2 overflow-hidden mb-4">
                <div className="absolute inset-0 bg-primary/60 animate-pulse" 
                     style={{ width: '65%' }}></div>
              </div>
              
              {/* Call to Action */}
              <p className="font-body text-sm text-muted-foreground/80 italic">
                Join the waitlist to be notified when redemption begins
              </p>
            </div>
          </Card>
        </div>

        {/* Enhanced Roadmap Timeline */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Dynamic Timeline Line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-azure via-gold to-muted rounded-full opacity-60" />
          
          <div className="space-y-6">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Enhanced Timeline Node */}
                  <div className={`
                    relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 bg-card/80 backdrop-blur-sm flex items-center justify-center
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    ${getStatusColor(step.status)}
                  `}>
                    {getStatusIcon(step.status, step.icon)}
                  </div>

                  {/* Enhanced Content Card */}
                  <Card className={`
                    flex-1 p-6 bg-card/40 backdrop-blur-sm border transition-all duration-300
                    group-hover:bg-card/60 group-hover:shadow-xl group-hover:-translate-y-1
                    ${getStatusColor(step.status)} rounded-xl overflow-hidden
                  `}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          {step.status === 'upcoming' && (
                            <span className="px-2 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full animate-pulse">
                              NEXT
                            </span>
                          )}
                        </div>
                        <p className="font-body text-muted-foreground mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {step.features.map((feature, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-muted/20 text-muted-foreground rounded border border-muted/30">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-body text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {step.date}
                          </span>
                          
                          {/* Progress Bar */}
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-muted/30 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  step.status === 'completed' ? 'bg-azure' :
                                  step.status === 'upcoming' ? 'bg-gold' : 'bg-muted'
                                }`}
                                style={{ width: `${step.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{step.progress}%</span>
                          </div>
                        </div>
                      </div>
                      
                      {step.countdown && (
                        <div className="text-right mt-4 lg:mt-0">
                          <div className="font-mono text-lg text-gold font-bold">
                            {timeRemaining.days}d {timeRemaining.hours}h
                          </div>
                          <div className="font-body text-xs text-muted-foreground">
                            remaining
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      {step.status === 'completed' && (
                        <CheckCircle className="w-5 h-5 text-azure" />
                      )}
                      {step.status === 'upcoming' && (
                        <Clock className="w-5 h-5 text-gold animate-glow-pulse" />
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;