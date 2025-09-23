import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, ArrowLeft, BookOpen, Video, FileText, ExternalLink, TrendingUp, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RevenueGeneration = () => {
  const navigate = useNavigate();

  const learningModules = [
    {
      title: "Activator Building Fundamentals",
      description: "Create valuable activators that generate consistent revenue streams",
      duration: "30 min",
      type: "Workshop",
      icon: FileText
    },
    {
      title: "Revenue Stream Optimization",
      description: "Maximize earnings through strategic activator deployment and management",
      duration: "25 min", 
      type: "Video",
      icon: Video
    },
    {
      title: "Market Analysis & Pricing",
      description: "Understand market dynamics and price your activators competitively",
      duration: "20 min",
      type: "Interactive",
      icon: BookOpen
    }
  ];

  const revenueStreams = [
    {
      title: "Memory Licensing",
      description: "License your memory data for AI training and applications",
      potential: "High",
      icon: TrendingUp
    },
    {
      title: "Activator Marketplace",
      description: "Sell custom activators to other users and enterprises",
      potential: "Medium",
      icon: DollarSign
    },
    {
      title: "Community Building",
      description: "Build communities around your expertise and monetize access",
      potential: "High",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-crimson/10 rounded-lg">
                <Zap className="w-6 h-6 text-crimson" />
              </div>
              <div>
                <h1 className="font-modern font-bold text-xl text-foreground">Revenue Generation</h1>
                <p className="text-sm text-muted-foreground">Advanced Level • 20 min read</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/20 rounded-full px-4 py-2 text-sm font-medium text-crimson mb-4">
                <Zap className="w-4 h-4" />
                Revenue Generation
              </span>
              <h2 className="font-modern font-black text-3xl md:text-4xl text-foreground mb-4">
                Turn Your Memories Into Sustainable Revenue
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how to monetize your unique knowledge and experiences through our innovative 
                protocol while maintaining complete ownership and control.
              </p>
            </div>

            {/* Revenue Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {revenueStreams.map((stream, index) => (
                <Card key={index} className="p-6 bg-card/50 border border-foreground/10 hover:border-crimson/30 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-crimson/10 rounded-lg group-hover:bg-crimson/20 transition-colors">
                      <stream.icon className="w-6 h-6 text-crimson" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-foreground">{stream.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          stream.potential === 'High' 
                            ? 'bg-crimson/10 text-crimson' 
                            : 'bg-azure/10 text-azure'
                        }`}>
                          {stream.potential}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{stream.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        {/* <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-modern font-bold text-2xl text-foreground mb-8">Learning Modules</h3>
            
            <div className="space-y-4">
              {learningModules.map((module, index) => (
                <Card key={index} className="p-6 bg-card/50 border border-foreground/10 hover:border-crimson/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-crimson/10 rounded-lg group-hover:bg-crimson/20 transition-colors">
                      <module.icon className="w-6 h-6 text-crimson" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-crimson transition-colors">
                          {module.title}
                        </h4>
                        <span className="text-xs bg-crimson/10 text-crimson px-2 py-1 rounded-full">
                          {module.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-crimson transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Revenue Strategy */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-modern font-bold text-2xl text-foreground mb-8">Revenue Strategy Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h4 className="font-bold text-lg text-foreground mb-4">Quick Wins (0-30 days)</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-crimson rounded-full mt-2 flex-shrink-0" />
                    Set up your first memory activators
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-crimson rounded-full mt-2 flex-shrink-0" />
                    Join the activator marketplace
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-crimson rounded-full mt-2 flex-shrink-0" />
                    Complete your first licensed memory transaction
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h4 className="font-bold text-lg text-foreground mb-4">Long-term Growth (30+ days)</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0" />
                    Build a community around your expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0" />
                    Develop premium activator packages
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0" />
                    Partner with enterprises for enterprise seals
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-crimson/5 to-azure/5 border border-crimson/20">
              <h3 className="font-modern font-bold text-2xl text-foreground mb-6 text-center">Success Metrics to Track</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-crimson mb-2">$0-500</div>
                  <div className="text-sm text-muted-foreground">First Month Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-azure mb-2">5-20</div>
                  <div className="text-sm text-muted-foreground">Active Activators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">10-100</div>
                  <div className="text-sm text-muted-foreground">Community Members</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-crimson/5 to-azure/5 border border-crimson/20">
              <div className="text-center">
                <h3 className="font-modern font-bold text-2xl text-foreground mb-4">Ready to Start Earning?</h3>
                <p className="text-muted-foreground mb-6">
                  Put your knowledge into action and begin generating revenue from your memories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate("/")}
                    className="bg-crimson hover:bg-crimson/80"
                  >
                    Start Redemption Process
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RevenueGeneration;