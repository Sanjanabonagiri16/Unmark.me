
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Shield, Calendar, MapPin, Clock, User, LogOut, Plus } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const CommunityCircles = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();

  const circles = [
    {
      id: 1,
      name: "College Stress Support",
      description: "A safe space for college students dealing with academic pressure and life transitions",
      members: 24,
      category: "Education",
      meetingTime: "Tuesdays 7PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Tomorrow"
    },
    {
      id: 2,
      name: "New Dads Circle",
      description: "Support group for first-time fathers navigating parenthood challenges",
      members: 18,
      category: "Parenting",
      meetingTime: "Sundays 6PM EST",
      isPrivate: true,
      joined: true,
      nextMeeting: "Sunday"
    },
    {
      id: 3,
      name: "Career Transition Bros",
      description: "Men supporting each other through job changes and career pivots",
      members: 31,
      category: "Career",
      meetingTime: "Thursdays 8PM EST",
      isPrivate: false,
      joined: false,
      nextMeeting: "Thursday"
    },
    {
      id: 4,
      name: "Anxiety & Depression Support",
      description: "Mental health support circle for those dealing with anxiety and depression",
      members: 42,
      category: "Mental Health",
      meetingTime: "Wednesdays 7:30PM EST",
      isPrivate: true,
      joined: true,
      nextMeeting: "Wednesday"
    },
    {
      id: 5,
      name: "Relationship Recovery",
      description: "Support for men going through breakups, divorce, or relationship challenges",
      members: 27,
      category: "Relationships",
      meetingTime: "Mondays 8PM EST",
      isPrivate: true,
      joined: false,
      nextMeeting: "Monday"
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

  const handleJoinCircle = (circleName: string) => {
    toast({
      title: "Join request sent",
      description: `You'll receive an email when your request to join "${circleName}" is approved.`,
    });
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
          Join small, supportive groups focused on specific challenges and experiences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* My Circles */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Circles</h3>
            <div className="space-y-4">
              {circles.filter(c => c.joined).map((circle) => (
                <Card key={circle.id} className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{circle.name}</h4>
                          {circle.isPrivate && (
                            <Shield className="w-4 h-4 text-gray-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{circle.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handleLeaveCircle(circle.name)}
                        className="text-red-600 border-red-600 hover:bg-red-50"
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
            <div className="space-y-4">
              {circles.filter(c => !c.joined).map((circle) => (
                <Card key={circle.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{circle.name}</h4>
                          {circle.isPrivate && (
                            <Shield className="w-4 h-4 text-gray-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{circle.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
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
                        <div className="text-sm text-gray-600">
                          Next meeting: {circle.nextMeeting}
                        </div>
                      </div>
                      <Button
                        onClick={() => handleJoinCircle(circle.name)}
                        className="ml-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      >
                        {circle.isPrivate ? 'Request to Join' : 'Join Circle'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                Circle Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>What's shared in circles stays in circles</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Listen without judgment</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Share authentically when comfortable</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Support others' journeys</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-500" />
                Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active circles</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total members</span>
                  <span className="font-semibold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Weekly meetings</span>
                  <span className="font-semibold">28</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-green-500" />
                Start a Circle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Don't see a circle that fits your needs? Start your own and build a supportive community.
              </p>
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Create Circle
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle>Featured Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-orange-100 text-orange-600">JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">Jake M.</div>
                    <div className="text-xs text-gray-500">Circle Facilitator</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600">DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">David R.</div>
                    <div className="text-xs text-gray-500">Peer Mentor</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityCircles;
