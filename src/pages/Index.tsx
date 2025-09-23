import Navigation from "@/components/Navigation";
import Learn from "@/components/Learn";
import Hero from "@/components/Hero";
import BadgeGallery from "@/components/BadgeGallery";
import Seals from "@/components/Seals";
import EnterpriseBinding from "@/components/EnterpriseBinding";
import MemoryFirst from "@/components/MemoryFirst";
import IntellexStack from "@/components/IntellexStack";
import CollectiveMemory from "@/components/CollectiveMemory";
import TokenUtility from "@/components/TokenUtility";
import EnterpriseValue from "@/components/EnterpriseValue";

import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Learn />
      <BadgeGallery />
      <Seals />
      <EnterpriseBinding />
      <MemoryFirst />
      <IntellexStack />
      <CollectiveMemory />
      <TokenUtility />
      <EnterpriseValue />
      
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
