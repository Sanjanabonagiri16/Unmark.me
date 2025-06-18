
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Shield, Calendar, MapPin, Clock, User, LogOut, Plus, Star, MessageCircle } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const CommunityCircles = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();

  const circles = [
    {
      id: 1,
      name: "College Stress & Anxiety Support",
      description: "A safe space for college students dealing with academic pressure, social anxiety, and life transitions. Share experiences and coping strategies.",
      members: 28,
      category: "Education & Career",
      meetingTime: "Tuesdays 7:00 PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Tomorrow",
      facilitator: "Jake M., Psychology Graduate Student",
      topics: ["Academic Stress", "Social Anxiety", "Future Planning", "Peer Pressure"],
      rating: 4.8
    },
    {
      id: 2,
      name: "New Dads Brotherhood",
      description: "Support group for first-time fathers navigating parenthood challenges, work-life balance, and maintaining identity while being a dad.",
      members: 22,
      category: "Parenting & Family",
      meetingTime: "Sundays 6:00 PM EST",
      isPrivate: true,
      joined: true,
      nextMeeting: "Sunday",
      facilitator: "David R., Father of 2, Family Therapist",
      topics: ["Parenting Anxiety", "Work-Life Balance", "Partner Relationships", "Self-Care"],
      rating: 4.9
    },
    {
      id: 3,
      name: "Career Transition & Purpose",
      description: "Men supporting each other through job changes, career pivots, and finding meaningful work. Dealing with uncertainty and imposter syndrome.",
      members: 35,
      category: "Career & Purpose",
      meetingTime: "Thursdays 8:00 PM EST",
      isPrivate: false,
      joined: false,
      nextMeeting: "Thursday",
      facilitator: "Carlos S., Career Coach & Former Corporate Executive",
      topics: ["Career Change", "Purpose", "Networking", "Confidence"],
      rating: 4.7
    },
    {
      id: 4,
      name: "Mental Health Warriors",
      description: "A judgment-free space for men dealing with depression, anxiety, and other mental health challenges. Focus on breaking stigma and sharing resources.",
      members: 31,
      category: "Mental Health",
      meetingTime: "Wednesdays 7:30 PM EST",
      isPrivate: true,
      joined: true,
      nextMeeting: "Wednesday",
      facilitator: "Dr. Michael T., Licensed Clinical Social Worker",
      topics: ["Depression", "Anxiety", "Therapy", "Medication", "Self-Care"],
      rating: 4.8
    },
    {
      id: 5,
      name: "Relationship Recovery & Growth",
      description: "Support for men going through breakups, divorce, or relationship challenges. Focus on healing, personal growth, and healthy relationship patterns.",
      members: 24,
      category: "Relationships",
      meetingTime: "Mondays 8:00 PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Monday",
      facilitator: "Tony L., Relationship Therapist",
      topics: ["Breakup Recovery", "Communication", "Emotional Processing", "Dating"],
      rating: 4.6
    },
    {
      id: 6,
      name: "LGBTQ+ Men's Circle",
      description: "A supportive community for LGBTQ+ men to discuss identity, coming out, relationships, and navigating society while being authentic.",
      members: 19,
      category: "Identity & Belonging",
      meetingTime: "Saturdays 5:00 PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Saturday",
      facilitator: "Alex P., LGBTQ+ Counselor",
      topics: ["Identity", "Coming Out", "Family Acceptance", "Dating"],
      rating: 4.9
    },
    {
      id: 7,
      name: "Men of Color Wellness",
      description: "Addressing unique challenges faced by men of color including systemic racism, cultural expectations, and mental health stigma in communities of color.",
      members: 26,
      category: "Cultural & Identity",
      meetingTime: "Fridays 7:00 PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Friday",
      facilitator: "Dr. James W., Psychologist specializing in multicultural therapy",
      topics: ["Racism", "Cultural Identity", "Family Expectations", "Code-Switching"],
      rating: 4.8
    },
    {
      id: 8,
      name: "Addiction Recovery Brotherhood",
      description: "Men supporting each other in recovery from substance abuse, gambling, or other addictions. Focus on accountability and long-term sobriety.",
      members: 17,
      category: "Recovery & Healing",
      meetingTime: "Daily 9:00 PM EST (Drop-in)",
      isPrivate: true,
      joined: false,
      nextMeeting: "Tonight",
      facilitator: "Mark K., 5 years sober, Certified Addiction Counselor",
      topics: ["Sobriety", "Triggers", "Accountability", "Rebuilding Life"],
      rating: 4.7
    }
  ];

  const upcomingEvents = [
    {
      title: "Men's Mental Health Workshop",
      date: "Jan 20, 2024",
      time: "2:00 PM EST",
      type: "Workshop",
      description: "Interactive session on recognizing and managing mental health symptoms"
    },
    {
      title: "Virtual Game Night",
      date: "Jan 22, 2024", 
      time: "8:00 PM EST",
      type: "Social",
      description: "Casual gaming session to build community connections"
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "Take care, see you soon!",
      });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleJoinCircle = (circleName: string, isPrivate: boolean) => {
    if (isPrivate) {
      toast({
        title: "Join request sent",
        description: `Your request to join "${circleName}" will be reviewed within 24 hours.`,
      });
    } else {
      toast({
        title: "Successfully joined!",
        description: `Welcome to "${circleName}"! You'll receive meeting details soon.`,
      });
    }
  };

  const handleLeaveCircle = (circleName: string) => {
    toast({
      title: "Left circle",
      description: `You've left "${circleName}". You can rejoin anytime.`,
    });
  };

  if (authLoading) {
    return <div className="max-w-6xl mx-auto px-6 py-12 text-center">Loading...</div>;
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <h2 className="text-3xl font-bold text-gray-900">Community Circles</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-1" />
              {profile?.username || 'User'}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="text-gray-600 hover:text-gray-800"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-lg text-gray-600">
          Join small, supportive groups focused on specific challenges and life experiences
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Stats */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                Your Circles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Joined</span>
                  <span className="font-semibold">{circles.filter(c => c.joined).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Available</span>
                  <span className="font-semibold">{circles.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next meeting</span>
                  <span className="font-semibold">Tomorrow</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Circle Guidelines */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-500" />
                Circle Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>What's shared here, stays here</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Listen without judgment</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Share authentically when comfortable</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Support others' journeys without fixing</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Respect different perspectives and experiences</span>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 text-sm mb-1">{event.title}</h4>
                    <div className="text-xs text-purple-600 mb-1">
                      {event.date} at {event.time}
                    </div>
                    <p className="text-xs text-purple-600">{event.description}</p>
                    <Badge className="mt-2" variant="outline">
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* My Circles */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Circles</h3>
            <div className="space-y-4">
              {circles.filter(c => c.joined).map((circle) => (
                <Card key={circle.id} className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{circle.name}</h4>
                          {circle.isPrivate && (
                            <Shield className="w-4 h-4 text-gray-500" />
                          )}
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="text-sm">{circle.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{circle.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {circle.members} members
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {circle.meetingTime}
                          </div>
                          <Badge variant="outline">
                            {circle.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Facilitated by: {circle.facilitator}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {circle.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handleLeaveCircle(circle.name)}
                        className="text-red-600 border-red-600 hover:bg-red-50 ml-4"
                      >
                        Leave
                      </Button>
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Next meeting: {circle.nextMeeting}
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Join Meeting
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {circles.filter(c => c.joined).length === 0 && (
                <Card className="border-gray-200">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No circles joined yet</h4>
                    <p className="text-gray-600">Browse available circles below to find your community.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Available Circles */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Circles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {circles.filter(c => !c.joined).map((circle) => (
                <Card key={circle.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-semibold text-gray-900">{circle.name}</h4>
                        {circle.isPrivate && (
                          <Shield className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm">{circle.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{circle.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {circle.members} members
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {circle.meetingTime}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {circle.category}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-3">Facilitated by: {circle.facilitator}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {circle.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {circle.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{circle.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Next meeting: {circle.nextMeeting}
                    </div>
                    <Button
                      onClick={() => handleJoinCircle(circle.name, circle.isPrivate)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      {circle.isPrivate ? 'Request to Join' : 'Join Circle'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Create Your Own */}
          <Card className="mt-8 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-blue-500" />
                Start Your Own Circle
              </CardTitle>
              <CardDescription>
                Don't see a circle that fits your specific needs? Create one and build your own supportive community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-900">Popular Circle Topics:</h5>
                  <div className="flex flex-wrap gap-1">
                    {["Grief & Loss", "Social Anxiety", "Body Image", "ADHD Support", "Entrepreneurship"].map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-900">What We Provide:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Facilitation training and support</li>
                    <li>• Meeting platform and tools</li>
                    <li>• Community guidelines template</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Create New Circle
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityCircles;
