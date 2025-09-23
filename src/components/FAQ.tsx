import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is soulbinding?",
    answer: "Soulbinding creates a non-transferable identity for your Activator. Once soulbound, your Activator becomes permanently linked to you, building reputation and capabilities that cannot be sold or transferred to others. This creates authentic identity and trust."
  },
  {
    id: 2,
    question: "What's the difference between Infused vs Sealed badges?",
    answer: "Infused badges are capabilities you've activated as the owner—they show you have that human dimension and are ready to engage. Sealed badges are ones that enterprises have cryptographically verified and endorsed, adding their seal codes to validate your capability."
  },
  {
    id: 3,
    question: "Can multiple enterprises seal the same badge?",
    answer: "Yes, seals are additive! Multiple enterprises can seal the same badge, with each adding their unique cryptographic code. This creates a richer verification profile and more opportunities for engagement across different organizations."
  },
  {
    id: 4,
    question: "Do I lose my Sigil NFT?",
    answer: "Your original Sigil NFT is locked/burned during the redemption process to instantiate your Activator. However, your new soulbound token (SBT) persists permanently and grows in value through badge infusions and enterprise seals."
  },
  {
    id: 5,
    question: "How does privacy work?",
    answer: "Enterprises never see your raw data. They only see cryptographic receipts proving you have certain capabilities. All verification happens through tamper-evident codes and mathematical proofs, protecting your privacy while enabling trust."
  },
  {
    id: 6,
    question: "Can I resell my Activator?",
    answer: "No, Activators are soulbound and non-transferable by design. This ensures authentic identity and prevents gaming of the reputation system. The value is in your unique capabilities and verified seals, not speculation on the token itself."
  },
  {
    id: 7,
    question: "What chains are supported?",
    answer: "The Intellex Protocol works across multiple blockchains, enabling your Activator to function in different ecosystems while maintaining consistent identity and reputation. Specific chain support will be announced as we approach launch."
  },
  {
    id: 8,
    question: "How do enterprises verify badges?",
    answer: "Enterprises use cryptographic verification to confirm badge authenticity without accessing personal data. They see proof of capability through mathematical verification, then can choose to add their own seal as endorsement."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers to address trust friction and technical questions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItem === faq.id;
            
            return (
              <Card
                key={faq.id}
                className={`
                  bg-gradient-card border border-border transition-all duration-300 overflow-hidden
                  ${isOpen ? 'border-azure shadow-glow-azure' : 'hover:border-muted'}
                `}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3 className="font-heading font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`
                    flex-shrink-0 transition-transform duration-300
                    ${isOpen ? 'rotate-180' : ''}
                  `}>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-azure" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                <div className={`
                  transition-all duration-300 ease-in-out
                  ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="px-6 pb-6">
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <a
              href="https://x.com/intellex_activators"
              className="font-body text-azure hover:text-azure/80 transition-colors duration-300"
            >
              Follow on X
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a
              href="mailto:hello@sigil.xyz"
              className="font-body text-azure hover:text-azure/80 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;