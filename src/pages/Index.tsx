
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";
import EmotionalCheckIn from "@/components/EmotionalCheckIn";
import ResourcesSection from "@/components/ResourcesSection";
import CommunitySpace from "@/components/CommunitySpace";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "checkin":
        return <EmotionalCheckIn />;
      case "resources":
        return <ResourcesSection />;
      case "community":
        return <CommunitySpace />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setActiveSection("home")}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Unmark<span className="text-green-600">.me</span></span>
            </div>
            <div className="flex space-x-6">
              <button 
                onClick={() => setActiveSection("checkin")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "checkin" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Check-In
              </button>
              <button 
                onClick={() => setActiveSection("resources")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "resources" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Resources
              </button>
              <button 
                onClick={() => setActiveSection("community")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "community" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderActiveSection()}
    </div>
  );
};

const HeroSection = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
          Digital Wellness & Emotional Empowerment
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Break Free from <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Toxic Stereotypes</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A safe space for boys and young men to share feelings, develop essential life skills, 
          and build authentic connections — all in one supportive digital community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
            onClick={() => setActiveSection("checkin")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-3"
            onClick={() => setActiveSection("community")}
          >
            Join Community
            <Users className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          icon={<Heart className="w-8 h-8 text-red-500" />}
          title="Emotional Check-ins"
          description="Track your feelings and emotional growth in a judgment-free space"
          onClick={() => setActiveSection("checkin")}
        />
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-green-500" />}
          title="Safe Environment"
          description="Anonymous sharing options and strict community guidelines"
          onClick={() => setActiveSection("community")}
        />
        <FeatureCard
          icon={<TrendingUp className="w-8 h-8 text-blue-500" />}
          title="Life Skills"
          description="Practical resources for building confidence and authentic relationships"
          onClick={() => setActiveSection("resources")}
        />
        <FeatureCard
          icon={<MessageCircle className="w-8 h-8 text-purple-500" />}
          title="Peer Support"
          description="Connect with others on similar journeys without toxic masculinity"
          onClick={() => setActiveSection("community")}
        />
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Young men supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Safe space available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Judgment-free zone</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-green-100" onClick={onClick}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full group-hover:bg-green-50 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
