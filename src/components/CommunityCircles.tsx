
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageCircle, Calendar, Heart, Home, Shield, Star, Clock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityCircles = () => {
  const [joinedCircles, setJoinedCircles] = useState<string[]>(["young-professionals", "college-life"]);

  const circles = [
    {
      id: "young-professionals",
      name: "Young Professionals Support",
      description: "Navigate career pressures and work-life balance with fellow professionals",
      members: 1247,
      category: "Career & Work",
      privacy: "Private",
      activity: "Very Active",
      lastPost: "2 hours ago",
      moderators: ["Alex R.", "Marcus J."],
      topics: ["Career stress", "Work relationships", "Professional growth", "Networking"],
      joined: true
    },
    {
      id: "college-life",
      name: "College Life & Transitions",
      description: "Support for students dealing with academic pressure and life changes",
      members: 892,
      category: "Education",
      privacy: "Public",
      activity: "Active",
      lastPost: "4 hours ago",
      moderators: ["Jake T.", "Sarah M."],
      topics: ["Academic stress", "Social anxiety", "Future planning", "Friendships"],
      joined: true
    },
    {
      id: "relationship-advice",
      name: "Healthy Relationships Circle",
      description: "Discuss dating, friendships, and family relationships in a supportive environment",
      members: 2156,
      category: "Relationships",
      privacy: "Private",
      activity: "Very Active",
      lastPost: "1 hour ago",
      moderators: ["Dr. Elena R.", "Mike C."],
      topics: ["Dating advice", "Communication", "Boundaries", "Family dynamics"],
      joined: false
    },
    {
      id: "mental-health",
      name: "Mental Health Warriors",
      description: "A safe space to discuss mental health challenges and recovery journeys",
      members: 3421,
      category: "Mental Health",
      privacy: "Private",
      activity: "Very Active",
      lastPost: "30 min ago",
      moderators: ["Dr. Marcus J.", "Chris L."],
      topics: ["Depression", "Anxiety", "Self-care", "Therapy experiences"],
      joined: false
    },
    {
      id: "fitness-wellness",
      name: "Fitness & Wellness Brotherhood",
      description: "Physical and mental wellness support for a holistic approach to health",
      members: 1638,
      category: "Health & Fitness",
      privacy: "Public",
      activity: "Active",
      lastPost: "6 hours ago",
      moderators: ["Coach Ryan", "Tony M."],
      topics: ["Workout motivation", "Nutrition", "Body image", "Mental wellness"],
      joined: false
    },
    {
      id: "creative-minds",
      name: "Creative Minds Collective",
      description: "For artists, writers, musicians, and creative individuals seeking support",
      members: 756,
      category: "Creative Arts",
      privacy: "Public",
      activity: "Moderate",
      lastPost: "1 day ago",
      moderators: ["Alex P.", "Jordan K."],
      topics: ["Creative blocks", "Art therapy", "Self-expression", "Collaboration"],
      joined: false
    }
  ];

  const recentActivity = [
    {
      circle: "Young Professionals Support",
      user: "Mike_R",
      action: "shared an experience",
      content: "Finally had that difficult conversation with my boss about workload...",
      time: "2 hours ago",
      responses: 8
    },
    {
      circle: "College Life & Transitions",
      user: "StudyBuddy23",
      action: "asked for advice",
      content: "How do you handle friend groups changing after graduation?",
      time: "4 hours ago",
      responses: 12
    },
    {
      circle: "Mental Health Warriors",
      user: "Journey_Forward",
      action: "posted an update",
      content: "Week 3 of therapy and I'm starting to see small changes...",
      time: "6 hours ago",
      responses: 15
    }
  ];

  const guidelines = [
    "Respect confidentiality - what's shared here stays here",
    "No judgment - everyone's journey is valid",
    "Be supportive and constructive in your responses",
    "Avoid giving medical or professional advice",
    "Report any inappropriate behavior to moderators"
  ];

  const toggleJoin = (circleId: string) => {
    if (joinedCircles.includes(circleId)) {
      setJoinedCircles(joinedCircles.filter(id => id !== circleId));
    } else {
      setJoinedCircles([...joinedCircles, circleId]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Circles</h1>
          <p className="text-xl text-gray-600">
            Join safe, supportive groups where you can share experiences and find understanding
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-gray-600">Active Circles</div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">10K+</div>
            <div className="text-gray-600">Total Members</div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">2</div>
            <div className="text-gray-600">Your Circles</div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Shield className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-gray-600">Safe Space</div>
          </CardContent>
        </Card>
      </div>

      {/* My Circles */}
      {joinedCircles.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Circles</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {circles.filter(circle => joinedCircles.includes(circle.id)).map((circle) => (
              <Card key={circle.id} className="border-green-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{circle.name}</CardTitle>
                      <CardDescription>{circle.description}</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Joined</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {circle.members.toLocaleString()} members
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {circle.lastPost}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{circle.category}</Badge>
                      <Badge variant={circle.activity === "Very Active" ? "default" : "secondary"}>
                        {circle.activity}
                      </Badge>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 hover-scale">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Open Circle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
            Recent Activity
          </CardTitle>
          <CardDescription>
            Latest conversations from your circles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <Avatar>
                  <AvatarFallback>{activity.user.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{activity.circle}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{activity.action}: "{activity.content}"</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {activity.responses} responses
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Circles */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Discover Circles</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {circles.filter(circle => !joinedCircles.includes(circle.id)).map((circle) => (
            <Card key={circle.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{circle.name}</CardTitle>
                    <CardDescription>{circle.description}</CardDescription>
                  </div>
                  <Badge variant={circle.privacy === "Private" ? "default" : "outline"}>
                    {circle.privacy}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {circle.members.toLocaleString()} members
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {circle.lastPost}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Common topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {circle.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {circle.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{circle.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{circle.category}</Badge>
                    <Badge variant={circle.activity === "Very Active" ? "default" : "secondary"}>
                      {circle.activity}
                    </Badge>
                  </div>

                  <Button
                    onClick={() => toggleJoin(circle.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 hover-scale"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    {circle.privacy === "Private" ? "Request to Join" : "Join Circle"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-green-600" />
            Community Guidelines
          </CardTitle>
          <CardDescription>
            Creating a safe space for everyone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700">{guideline}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>Remember:</strong> These circles are moderated by trained professionals and experienced community members. 
              If you're in crisis, please reach out to our <Link to="/crisis-support" className="underline">crisis support resources</Link>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityCircles;
