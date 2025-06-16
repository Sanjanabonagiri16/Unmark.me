
import { useState } from "react";
import { Users, Shield, MessageSquare, Heart, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CommunityCircles = () => {
  const [selectedCircle, setSelectedCircle] = useState<number | null>(null);
  const [confessionText, setConfessionText] = useState("");
  const { toast } = useToast();

  const circles = [
    {
      id: 1,
      name: "High School Struggles",
      description: "Navigate the chaos of high school social dynamics",
      members: 234,
      activeNow: 12,
      category: "School Life",
      isJoined: true
    },
    {
      id: 2,
      name: "Family Drama Support",
      description: "When home life gets complicated",
      members: 189,
      activeNow: 8,
      category: "Family",
      isJoined: false
    },
    {
      id: 3,
      name: "First Relationships",
      description: "Dating, crushes, and relationship questions",
      members: 312,
      activeNow: 19,
      category: "Relationships",
      isJoined: true
    },
    {
      id: 4,
      name: "Mental Health Check-ins",
      description: "Supporting each other through tough times",
      members: 456,
      activeNow: 24,
      category: "Mental Health",
      isJoined: true
    },
    {
      id: 5,
      name: "Social Anxiety Squad",
      description: "For when social situations feel overwhelming",
      members: 178,
      activeNow: 6,
      category: "Anxiety",
      isJoined: false
    }
  ];

  const recentConfessions = [
    {
      id: 1,
      text: "I've been pretending to be okay for months but I'm really struggling. My friends think I'm the 'strong one' but inside I feel like I'm falling apart.",
      reactions: 23,
      responses: 8,
      timeAgo: "2h ago"
    },
    {
      id: 2,
      text: "Had my first panic attack today. Scared the hell out of me. Is this normal? How do you guys deal with this?",
      reactions: 31,
      responses: 12,
      timeAgo: "4h ago"
    },
    {
      id: 3,
      text: "Finally told my dad I want to go to therapy. He said 'real men don't need therapy.' I'm going anyway but it hurts.",
      reactions: 45,
      responses: 19,
      timeAgo: "6h ago"
    }
  ];

  const handlePostConfession = () => {
    if (!confessionText.trim()) {
      toast({
        title: "Say something",
        description: "Your voice matters - share what's on your mind.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Posted anonymously 💙",
      description: "Your confession is out there. You're not alone.",
    });

    setConfessionText("");
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "School Life": "bg-blue-100 text-blue-800",
      "Family": "bg-green-100 text-green-800",
      "Relationships": "bg-pink-100 text-pink-800",
      "Mental Health": "bg-purple-100 text-purple-800",
      "Anxiety": "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Circles & Confession Wall</h2>
        <p className="text-lg text-gray-600">
          Safe spaces to share, connect, and support each other. What happens here, stays here.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Community Circles */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-500" />
            Safe Circles
          </h3>
          
          <div className="space-y-4">
            {circles.map((circle) => (
              <Card key={circle.id} className="border-green-100 hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{circle.name}</CardTitle>
                      <CardDescription className="mt-1">{circle.description}</CardDescription>
                    </div>
                    <Badge className={getCategoryColor(circle.category)}>
                      {circle.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{circle.members} members</span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        {circle.activeNow} active now
                      </span>
                    </div>
                    <Button 
                      size="sm"
                      variant={circle.isJoined ? "outline" : "default"}
                      className={circle.isJoined ? "" : "bg-gradient-to-r from-green-600 to-blue-600"}
                    >
                      {circle.isJoined ? "Joined" : "Join Circle"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Confession Wall */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-purple-500" />
            Anonymous Confession Wall
          </h3>

          {/* Post Confession */}
          <Card className="mb-6 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Share Anonymously
              </CardTitle>
              <CardDescription>
                Sometimes you just need to get it out. Completely anonymous, completely safe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's weighing on your mind? No names, no judgment, just honest feelings..."
                  value={confessionText}
                  onChange={(e) => setConfessionText(e.target.value)}
                  className="min-h-[100px] border-purple-200 focus:border-purple-500"
                />
                <Button 
                  onClick={handlePostConfession}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Post Anonymously
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Confessions */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Recent Confessions</h4>
            {recentConfessions.map((confession) => (
              <Card key={confession.id} className="border-gray-200">
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-4 leading-relaxed">{confession.text}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{confession.reactions}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span>{confession.responses} responses</span>
                      </button>
                    </div>
                    <span>{confession.timeAgo}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCircles;
