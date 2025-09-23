import { RefreshCw, DollarSign } from "lucide-react";

const MemoryFirst = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-l from-violet/10 to-transparent rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Memory First</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your memories are your own;{" "}
              <span className="relative inline-block text-primary">
                don't let anyone take them
                <div className="absolute -inset-1 bg-primary/10 blur-xl animate-pulse opacity-50" />
              </span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Intelligence without memory is guesswork. Memory without intelligence is a library with no librarian. Intelligence without ownership is theft.
            </p>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We bind your memory to you—safely, provably, and on your terms. We enable you to monetize the memories that matter.
            </p>
          </div>
          
          {/* Body */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Activators don't just look cool—they anchor <span className="text-azure font-semibold bg-azure/10 px-2 py-1 rounded-lg">Memory Assets</span> (Personal Language Models, memory shards, and their permissions) you own and can selectively share and sell.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When memory is <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded-lg">created, licensed, used, improved, or revoked</span>, that movement is recorded and settled on-chain, making value flow legible. <span className="text-crimson italic font-semibold">(Proof, not promises.)</span>
              </p>
            </div>
          </div>

          {/* Animated Memory Lifecycle */}
          <div className="relative bg-gradient-to-br from-card/60 via-background/80 to-card/60 border border-primary/20 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-50" />
            
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 to-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <RefreshCw className="relative w-24 h-24 text-azure animate-[spin_20s_linear_infinite] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-gold animate-pulse group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Create', 'Prove', 'Permit', 'Use', 'Update', 'Revoke'].map((step, index) => (
                  <div 
                    key={step}
                    className="group flex flex-col items-center p-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/50 to-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gold to-azure mb-3 animate-pulse group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Microcopy Bullets */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Own the memory, license the intelligence',
              'Sell access, prevent theft', 
              'Revoke and audit—anytime'
            ].map((text) => (
              <div key={text} className="group px-6 py-3 bg-gradient-to-r from-azure/10 to-primary/10 border border-azure/20 rounded-2xl backdrop-blur-sm hover:border-azure/40 hover:bg-azure/20 transition-all duration-300 hover:scale-105">
                <span className="font-body text-sm text-azure group-hover:text-azure/80 transition-colors duration-300">{text}</span>
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

export default MemoryFirst;