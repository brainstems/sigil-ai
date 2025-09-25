import { Heart } from "lucide-react";
import newLogo from "@/assets/new-logo.png";

interface FooterLink {
  name: string;
  href: string;
  target?: string;
}

const Footer = () => {
  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Learn", href: "#learn" },
        { name: "Badges", href: "#badges" },
        { name: "Verification", href: "#verification" },
        { name: "Roadmap", href: "#roadmap" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "White Paper", href: "/whitepaper.pdf", target: "_blank" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy.pdf", target: "_blank" },
        { name: "Terms of Service", href: "/terms-of-service.pdf", target: "_blank" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ]
    }
  ];


  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
           <div className="lg:col-span-2 space-y-4">
             <div className="flex items-center space-x-2 bg-transparent">
               <img 
                 src={newLogo} 
                 alt="Sigil Logo" 
                 className="w-auto h-8"
               />
               <span className="font-display font-black text-2xl text-primary" style={{ fontWeight: 900 }}>
                 PLM Activation
               </span>
             </div>
            
            <p className="font-body text-muted-foreground leading-relaxed max-w-sm text-sm">
            Your memory, Your rules.We believe your intelligence—human, enterprise, or agentic—should be owned by you but its greatest value comes when it strengthens our shared memory.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/intellex_activators"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 rounded-lg border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              <a
                href="https://t.me/intellex_activators"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 rounded-lg border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="url(#paint0_linear_235_72)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.3427 9.52076C21.5394 9.43796 21.7547 9.4094 21.9662 9.43806C22.1777 9.46672 22.3777 9.55154 22.5453 9.6837C22.7129 9.81586 22.842 9.99053 22.9192 10.1895C22.9964 10.3885 23.0188 10.6046 22.9842 10.8152L21.1787 21.7667C21.0035 22.8231 19.8445 23.4289 18.8757 22.9027C18.0653 22.4624 16.8616 21.7842 15.779 21.0765C15.2376 20.7222 13.5794 19.5878 13.7832 18.7806C13.9583 18.0904 16.7446 15.4968 18.3367 13.9549C18.9616 13.349 18.6766 12.9996 17.9387 13.5568C16.1061 14.9404 13.1639 17.0444 12.1911 17.6367C11.3329 18.1589 10.8855 18.2481 10.3506 18.1589C9.37458 17.9965 8.46945 17.7449 7.7307 17.4385C6.73243 17.0245 6.78099 15.6521 7.72991 15.2524L21.3427 9.52076Z"
                    fill="white"
                  />
                  <defs></defs>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/intellex-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 rounded-lg border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="url(#paint0_linear_235_69)"
                  />
                  <path
                    d="M11.6601 10.2303C11.6599 10.6298 11.5011 11.0127 11.2185 11.295C10.9359 11.5773 10.5528 11.7358 10.1534 11.7356C9.754 11.7354 9.37103 11.5765 9.08875 11.2939C8.80647 11.0114 8.64799 10.6282 8.64819 10.2288C8.64839 9.82944 8.80725 9.44647 9.08981 9.16419C9.37238 8.8819 9.7555 8.72343 10.1549 8.72363C10.5543 8.72383 10.9373 8.88269 11.2196 9.16525C11.5018 9.44782 11.6603 9.83094 11.6601 10.2303ZM11.7053 12.8507H8.69337V22.278H11.7053V12.8507ZM16.4641 12.8507H13.4673V22.278H16.434V17.331C16.434 14.575 20.0257 14.319 20.0257 17.331V22.278H23V16.3069C23 11.661 17.684 11.8342 16.434 14.1157L16.4641 12.8507Z"
                    fill="white"
                  />
                  <defs></defs>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-heading font-semibold text-foreground text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.target || undefined}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 Collective Memory. All rights reserved.
            </div>

            {/* Built with love */}
            <div className="flex items-center space-x-6 text-sm">
              {/* <div className="flex items-center space-x-1 text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for the future of AI</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-azure rounded-full" />
                <span className="text-azure font-medium">Blockchain Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;