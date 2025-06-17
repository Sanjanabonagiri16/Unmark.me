import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, TrendingUp, ArrowRight, MessageCircle, Calendar, Mic, Brain, Target, Trophy } from "lucide-react";
import EmotionalCheckIn from "@/components/EmotionalCheckIn";
import ResourcesSection from "@/components/ResourcesSection";
import CommunitySpace from "@/components/CommunitySpace";
import MoodTracker from "@/components/MoodTracker";
import RealTalkPodcasts from "@/components/RealTalkPodcasts";
import BroCademy from "@/components/BroCademy";
import CommunityCircles from "@/components/CommunityCircles";
import GrowthChallenges from "@/components/GrowthChallenges";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "checkin":
        return <EmotionalCheckIn />;
      case "tracker":
        return <MoodTracker />;
      case "podcasts":
        return <RealTalkPodcasts />;
      case "brocademy":
        return <BroCademy />;
      case "circles":
        return <CommunityCircles />;
      case "challenges":
        return <GrowthChallenges />;
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
            <div className="flex space-x-4 overflow-x-auto">
              <button 
                onClick={() => setActiveSection("checkin")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "checkin" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Check-In
              </button>
              <button 
                onClick={() => setActiveSection("tracker")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "tracker" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Mood Tracker
              </button>
              <button 
                onClick={() => setActiveSection("podcasts")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "podcasts" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Podcasts
              </button>
              <button 
                onClick={() => setActiveSection("brocademy")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "brocademy" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                BroCademy
              </button>
              <button 
                onClick={() => setActiveSection("circles")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "circles" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Circles
              </button>
              <button 
                onClick={() => setActiveSection("challenges")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "challenges" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Challenges
              </button>
              <button 
                onClick={() => setActiveSection("resources")}
                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${activeSection === "resources" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"}`}
              >
                Resources
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderActiveSection()}
      
      {/* Add Footer to all pages */}
      <Footer />
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
            onClick={() => setActiveSection("circles")}
          >
            Join Community
            <Users className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <FeatureCard
          icon={<Calendar className="w-8 h-8 text-blue-500" />}
          title="Mood Tracker & Journaling"
          description="Track your emotional journey with daily check-ins and personal reflection"
          onClick={() => setActiveSection("tracker")}
        />
        <FeatureCard
          icon={<Mic className="w-8 h-8 text-purple-500" />}
          title="Real Talk Podcasts"
          description="Expert conversations about real issues young men face"
          onClick={() => setActiveSection("podcasts")}
        />
        <FeatureCard
          icon={<Brain className="w-8 h-8 text-green-500" />}
          title="BroCademy Life Skills"
          description="Learn emotional intelligence and authentic confidence building"
          onClick={() => setActiveSection("brocademy")}
        />
        <FeatureCard
          icon={<Users className="w-8 h-8 text-red-500" />}
          title="Safe Community Circles"
          description="Connect with others in judgment-free support groups"
          onClick={() => setActiveSection("circles")}
        />
        <FeatureCard
          icon={<Target className="w-8 h-8 text-orange-500" />}
          title="Growth Challenges"
          description="30-day challenges to build character and positive habits"
          onClick={() => setActiveSection("challenges")}
        />
        <FeatureCard
          icon={<Heart className="w-8 h-8 text-pink-500" />}
          title="Emotional Check-ins"
          description="Quick daily mood tracking in a judgment-free space"
          onClick={() => setActiveSection("checkin")}
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
