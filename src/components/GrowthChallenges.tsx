
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy, Calendar, User, LogOut, CheckCircle, Clock, Star } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const GrowthChallenges = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  
  const [activeChallenges, setActiveChallenges] = useState([
    {
      id: 1,
      title: "Daily Gratitude Practice",
      description: "Write down 3 things you're grateful for each day",
      category: "Mindfulness",
      duration: 30,
      progress: 12,
      difficulty: "Beginner",
      started: true
    },
    {
      id: 2,
      title: "Emotional Check-in Challenge",
      description: "Take 5 minutes daily to identify and name your emotions",
      category: "Emotional Intelligence",
      duration: 21,
      progress: 8,
      difficulty: "Beginner",
      started: true
    }
  ]);

  const availableChallenges = [
    {
      id: 3,
      title: "30-Day Vulnerability Practice",
      description: "Share one authentic feeling or experience with someone you trust each day",
      category: "Personal Growth",
      duration: 30,
      difficulty: "Intermediate",
      participants: 234,
      rating: 4.8
    },
    {
      id: 4,
      title: "Stress-Free Communication",
      description: "Practice active listening and non-violent communication for 3 weeks",
      category: "Communication",
      duration: 21,
      difficulty: "Intermediate",
      participants: 189,
      rating: 4.6
    },
    {
      id: 5,
      title: "Digital Detox & Mindfulness",
      description: "Limit social media and practice 10 minutes of daily meditation",
      category: "Mental Health",
      duration: 14,
      difficulty: "Beginner",
      participants: 312,
      rating: 4.7
    },
    {
      id: 6,
      title: "Build Meaningful Connections",
      description: "Reach out to one person daily - check in, offer support, or share something real",
      category: "Relationships",
      duration: 30,
      difficulty: "Intermediate",
      participants: 156,
      rating: 4.9
    },
    {
      id: 7,
      title: "Anger Management Toolkit",
      description: "Learn and practice healthy anger expression techniques daily",
      category: "Emotional Intelligence",
      duration: 28,
      difficulty: "Advanced",
      participants: 98,
      rating: 4.5
    },
    {
      id: 8,
      title: "Self-Compassion Journey",
      description: "Replace self-criticism with self-kindness through daily exercises",
      category: "Personal Growth",
      duration: 21,
      difficulty: "Beginner",
      participants: 267,
      rating: 4.8
    }
  ];

  const completedChallenges = [
    {
      title: "Morning Affirmations",
      completedDate: "2024-01-10",
      category: "Self-Confidence",
      duration: 14
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

  const handleStartChallenge = (challengeTitle: string) => {
    toast({
      title: "Challenge started! 🎯",
      description: `You've joined "${challengeTitle}". Good luck!`,
    });
  };

  const handleCompleteDay = (challengeId: number, challengeTitle: string) => {
    setActiveChallenges(prev => 
      prev.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, progress: challenge.progress + 1 }
          : challenge
      )
    );
    
    toast({
      title: "Day completed! 🌟",
      description: `Great job on "${challengeTitle}"!`,
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
          <h2 className="text-3xl font-bold text-gray-900">Growth Challenges</h2>
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
          30-day challenges to build positive habits and emotional resilience
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Active Challenges</h3>
            {activeChallenges.length > 0 ? (
              <div className="space-y-4">
                {activeChallenges.map((challenge) => (
                  <Card key={challenge.id} className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                          <p className="text-gray-600 mb-3">{challenge.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <Badge variant="outline">{challenge.category}</Badge>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {challenge.duration} days
                            </div>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              {challenge.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleCompleteDay(challenge.id, challenge.title)}
                          disabled={challenge.progress >= challenge.duration}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          {challenge.progress >= challenge.duration ? 'Completed!' : 'Mark Today Done'}
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress: Day {challenge.progress} of {challenge.duration}</span>
                          <span>{Math.round((challenge.progress / challenge.duration) * 100)}%</span>
                        </div>
                        <Progress value={(challenge.progress / challenge.duration) * 100} className="h-3" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-gray-200">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No active challenges</h4>
                  <p className="text-gray-600">Start a challenge below to begin your growth journey.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Available Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {availableChallenges.map((challenge) => (
                <Card key={challenge.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 mb-3">{challenge.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{challenge.category}</Badge>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="text-sm font-medium">{challenge.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {challenge.duration} days
                        </div>
                        <div className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {challenge.participants} participants
                        </div>
                      </div>
                      <Badge 
                        className={`${
                          challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        } hover:bg-opacity-80`}
                      >
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <Button 
                      onClick={() => handleStartChallenge(challenge.title)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Start Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Challenge Stats */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-purple-500" />
                Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {activeChallenges.length}
                  </div>
                  <p className="text-sm text-gray-600">Active challenges</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Challenges completed</span>
                    <span className="font-semibold">{completedChallenges.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total days practiced</span>
                    <span className="font-semibold">
                      {activeChallenges.reduce((sum, challenge) => sum + challenge.progress, 0) + 14}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current streak</span>
                    <span className="font-semibold">5 days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Challenges */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              {completedChallenges.length > 0 ? (
                <div className="space-y-3">
                  {completedChallenges.map((challenge, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-1">{challenge.title}</h4>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>{challenge.category}</span>
                        <span>{challenge.completedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">Complete your first challenge to see it here!</p>
              )}
            </CardContent>
          </Card>

          {/* Challenge Tips */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Challenge Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Start with easier challenges to build momentum</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Set daily reminders to complete your practice</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Share your progress with friends for accountability</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Don't worry about perfect - consistency matters most</span>
              </div>
            </CardContent>
          </Card>

          {/* Motivation */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Daily Motivation</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-sm italic text-gray-700 mb-2">
                "The journey of a thousand miles begins with one step. Every small action towards growth matters."
              </blockquote>
              <p className="text-xs text-gray-500">- Ancient Wisdom</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrowthChallenges;
