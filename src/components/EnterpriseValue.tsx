import { useState } from "react";
import { Receipt, Shield, Handshake, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const EnterpriseValue = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: Receipt,
      title: "Durable provenance",
      description: "Every model/shard points to source, owner, license—auditable.",
      color: "crimson"
    },
    {
      icon: Shield, 
      title: "Policy that travels",
      description: "Permissions stay attached to memory—survive vendor churn.",
      color: "azure"
    },
    {
      icon: Handshake,
      title: "Partner-safe collaboration", 
      description: "License access or run federated learning—no raw data leaves.",
      color: "gold"
    },
    {
      icon: TrendingUp,
      title: "Continuity despite turnover",
      description: "The DAG becomes institutional memory, not a folder graveyard.",
      color: "violet"
    }
  ];

  const mockEvents = [
    { event: "memory.license.issued", timestamp: "2024-01-15 14:32:01", entity: "BEV-721A" },
    { event: "memory.use.started", timestamp: "2024-01-15 14:32:15", entity: "Driver-Cohort-Alpha" },
    { event: "memory.update.completed", timestamp: "2024-01-15 14:45:22", entity: "Model-v2.1.3" },
    { event: "memory.revoke.requested", timestamp: "2024-01-15 15:01:07", entity: "Violation-Report-77" }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      crimson: "text-crimson border-crimson bg-crimson/10",
      azure: "text-azure border-azure bg-azure/10", 
      gold: "text-gold border-gold bg-gold/10",
      violet: "text-violet border-violet bg-violet/10"
    };
    return colorMap[color as keyof typeof colorMap] || "";
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise Value</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Provenance, policy, and{" "}
              <span className="relative inline-block text-primary">
                portability—by design
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`
                    group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden
                    ${getColorClass(benefit.color)}
                  `}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start gap-6">
                    <div className={`p-4 rounded-2xl border-2 ${getColorClass(benefit.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Events Modal Trigger */}
          <div className="text-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Events
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-gradient-to-br from-card/60 via-background/80 to-card/60 border-primary/20 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="font-display font-bold text-2xl text-foreground">
                    Memory Bus Events
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {mockEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-background/50 to-card/30 border border-primary/20 rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <code className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-lg">
                          {event.event}
                        </code>
                        <p className="text-sm text-muted-foreground mt-2 font-medium">
                          Entity: <span className="text-foreground">{event.entity}</span>
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-lg">
                        {event.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseValue;