import { MessageSquare, GitBranch, Router, DollarSign } from "lucide-react";

const IntellexStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-l from-violet/10 to-transparent rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Router className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Intellex Stack</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Collective memory: the intelligence that{" "}
              <span className="relative inline-block text-primary">
                enterprises pay for
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              One rail for creating, proving, permitting, using, updating, moving, monetizing, and revoking memory, reputation and expertise.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              You can monetize intelligence about you; Enterprises can negotiate with you to buy access to what matters to you.
            </p>
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
                  Contribute to your Personal Language Model
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

          {/* Body */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                The Intellex Protocl delivers cross-blockchain agent interoperability and coordination management for enterprise customers through managing collective memory.  Agents share portable, permissioned memory--remembering state, reputation and expertise. 
                The Intellex interoperability layer tracka policies, enforces permissions, routes to the right model, and emits verifiable attestations. 
                Infrastructure agents handle registry, licensing, metering/royalties, federation, 
                and cross-chain bridging—so memory remains portable and governed across enterprises, and between enterprises and consumers.
              </p>
            </div>
          </div>

          {/* Stack Diagram */}
          <div className="relative bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-50" />
            
            <div className="relative">
              {/* Agents → Interoperability → Proprietary Models */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Left: Agents */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-tech-cyan/20 to-tech-cyan/10 border border-tech-cyan/40 rounded-2xl p-6 mb-4 hover:border-tech-cyan/60 hover:shadow-lg hover:shadow-tech-cyan/20 transition-all duration-300 hover:scale-105">
                    <h3 className="font-display font-bold text-xl text-tech-cyan mb-4">Agents</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="p-2 bg-background/50 rounded-lg border border-tech-cyan/20">Enterprise Agents</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-tech-cyan/20">Interoperability Layer</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-tech-cyan/20">Consumer Agents</div>
                    </div>
                  </div>
                </div>

                {/* Center: Interoperability Agentic Layer */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-azure/20 to-azure/10 border border-azure/40 rounded-2xl p-6 mb-4 hover:border-azure/60 hover:shadow-lg hover:shadow-azure/20 transition-all duration-300 hover:scale-105">
                    <Router className="w-10 h-10 text-azure mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-display font-bold text-xl text-azure mb-4">Ask Gateway</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="p-2 bg-background/50 rounded-lg border border-azure/20">Policy Enforcement</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-azure/20">Model Routing</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-azure/20">Proof Generation</div>
                    </div>
                  </div>
                </div>

                {/* Right: Models */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-violet/20 to-violet/10 border border-violet/40 rounded-2xl p-6 mb-4 hover:border-violet/60 hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 hover:scale-105">
                    <h3 className="font-display font-bold text-xl text-violet mb-4">PLMs & LLMs</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="p-2 bg-background/50 rounded-lg border border-violet/20">Industry Intelligence</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-violet/20">Enterprise Institutional Memory</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-violet/20">Consumer Collective Memory</div>
                      <div className="p-2 bg-background/50 rounded-lg border border-violet/20">Consumer Personal Language Models</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Infrastructure */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Agentic Peer-2-Peer Messaging */}
                <div className="group bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/40 rounded-2xl p-6 text-center hover:border-gold/60 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105">
                  <MessageSquare className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-display font-bold text-lg text-gold mb-2">Message Bus</h4>
                  <p className="text-sm text-muted-foreground">Memory Events, Reputation, Expertise</p>
                </div>

                {/* DAG */}
                <div className="group bg-gradient-to-br from-crimson/20 to-crimson/10 border border-crimson/40 rounded-2xl p-6 text-center hover:border-crimson/60 hover:shadow-lg hover:shadow-crimson/20 transition-all duration-300 hover:scale-105">
                  <GitBranch className="w-8 h-8 text-crimson mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-display font-bold text-lg text-crimson mb-2">DAG</h4>
                  <p className="text-sm text-muted-foreground">Ownership & Licenses</p>
                </div>

                {/* Settlement */}
                <div className="group bg-gradient-to-br from-tech-cyan/20 to-tech-cyan/10 border border-tech-cyan/40 rounded-2xl p-6 text-center hover:border-tech-cyan/60 hover:shadow-lg hover:shadow-tech-cyan/20 transition-all duration-300 hover:scale-105">
                  <DollarSign className="w-8 h-8 text-tech-cyan mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-display font-bold text-lg text-tech-cyan mb-2">$ITLX Settlement</h4>
                  <p className="text-sm text-muted-foreground">Micro-royalties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Microcopy Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Shared memory, protected intelligence',
              'Portable permissions',
              'Metered use → micro-royalties'
            ].map((text) => (
              <div key={text} className="group px-6 py-3 bg-gradient-to-r from-violet/10 to-primary/10 border border-violet/20 rounded-2xl backdrop-blur-sm hover:border-violet/40 hover:bg-violet/20 transition-all duration-300 hover:scale-105">
                <span className="font-body text-sm text-violet group-hover:text-violet/80 transition-colors duration-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default IntellexStack;
