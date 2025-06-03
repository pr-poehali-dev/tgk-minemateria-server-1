import HeroSection from "@/components/HeroSection";
import ServerInfo from "@/components/ServerInfo";
import Features from "@/components/Features";
import ServerStats from "@/components/ServerStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServerInfo />
      <Features />
      <ServerStats />
    </div>
  );
};

export default Index;
