import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, ArrowLeft, BookOpen, Video, FileText, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MemoryAI = () => {
  const navigate = useNavigate();

  const learningModules = [
    {
      title: "Memory Architecture Fundamentals",
      description: "Understanding the core principles of decentralized memory systems",
      duration: "15 min",
      type: "Article",
      icon: FileText
    },
    {
      title: "Data Sovereignty in Practice",
      description: "How users maintain control over their personal data",
      duration: "20 min", 
      type: "Video",
      icon: Video
    },
    {
      title: "Privacy Protection Mechanisms",
      description: "Cryptographic methods for securing memory data",
      duration: "25 min",
      type: "Interactive",
      icon: BookOpen
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
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-modern font-bold text-xl text-foreground">Understanding Memory AI</h1>
                <p className="text-sm text-muted-foreground">Beginner Level • 10 min read</p>
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
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                <Brain className="w-4 h-4" />
                Memory AI Fundamentals
              </span>
              <h2 className="font-modern font-black text-3xl md:text-4xl text-foreground mb-4">
                Learn How Decentralized Memory Systems Work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the revolutionary approach to AI memory that puts users in control of their data 
                while enabling powerful, personalized experiences.
              </p>
            </div>

            {/* Key Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">Decentralization</h3>
                <p className="text-muted-foreground text-sm">
                  No single entity controls your memory data - it's distributed across a secure network.
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground text-sm">
                  Your memories are encrypted and only accessible with your explicit permission.
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border border-foreground/10">
                <h3 className="font-bold text-lg text-foreground mb-2">User Ownership</h3>
                <p className="text-muted-foreground text-sm">
                  You own your data and can monetize it on your own terms through our protocol.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        {/* <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-modern font-bold text-2xl text-foreground mb-8">Learning Modules</h3>
            
            <div className="space-y-4">
              {learningModules.map((module, index) => (
                <Card key={index} className="p-6 bg-card/50 border border-foreground/10 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {module.title}
                        </h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {module.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Next Steps */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-tech-cyan/5 border border-primary/20">
              <div className="text-center">
                <h3 className="font-modern font-bold text-2xl text-foreground mb-4">Ready for the Next Level?</h3>
                <p className="text-muted-foreground mb-6">
                  Continue your learning journey with NFT Security & Ownership fundamentals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate("/learn/nft-security")}
                    className="bg-primary hover:bg-primary/80"
                  >
                    NFT Security & Ownership
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

export default MemoryAI;