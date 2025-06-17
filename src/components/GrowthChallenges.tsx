import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Calendar, CheckCircle, User, LogOut, Play, Lock } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const GrowthChallenges = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  const [activeChallenges, setActiveChallenges] = useState<number[]>([]);
  const [completedDays, setCompletedDays] = useState<{[key: number]: number}>({});

  const challenges = [
    {
      id: 1,
      title: "30-Day Emotional Check-in",
      description: "Practice daily emotional awareness by checking in with yourself every day",
      duration: "30 days",
      difficulty: "Beginner",
      category: "Self-Awareness",
      dailyTasks: [
        "Rate your mood on a scale of 1-5",
        "Write 3 sentences about how you're feeling",
        "Identify one thing that influenced your mood today"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Gratitude & Growth",
      description: "Build a habit of recognizing positive moments and personal growth",
      duration: "21 days",
      difficulty: "Beginner",
      category: "Mindfulness",
      dailyTasks: [
        "Write down 3 things you're grateful for",
        "Identify one way you grew today",
        "Share appreciation with someone in your life"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Communication Courage",
      description: "Practice expressing yourself authentically in conversations",
      duration: "14 days",
      difficulty: "Intermediate",
      category: "Communication",
      dailyTasks: [
        "Have one meaningful conversation",
        "Express a genuine feeling to someone",
        "Practice active listening for 10 minutes"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Stress Mastery",
      description: "Learn and practice healthy stress management techniques",
      duration: "28 days",
      difficulty: "Intermediate",
      category: "Wellness",
      dailyTasks: [
        "Practice 5 minutes of deep breathing",
        "Do one stress-relieving activity",
        "Reflect on what triggered stress today"
      ],
      featured: false
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

  const handleStartChallenge = (challengeId: number, challengeTitle: string) => {
    setActiveChallenges(prev => [...prev, challengeId]);
    setCompletedDays(prev => ({ ...prev, [challengeId]: 0 }));
    toast({
      title: "Challenge started! 🚀",
      description: `You've joined "${challengeTitle}". Let's build some positive habits!`,
    });
  };

  const handleCompleteDay = (challengeId: number) => {
    setCompletedDays(prev => ({
      ...prev,
      [challengeId]: (prev[challengeId] || 0) + 1
    }));
    toast({
      title: "Day completed! 🎉",
      description: "Great progress! Keep the momentum going.",
    });
  };

  const getChallengeProgress = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    const completed = completedDays[challengeId] || 0;
    const total = parseInt(challenge?.duration.split(' ')[0] || '30');
    return (completed / total) * 100;
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
          30-day challenges to build character, resilience, and positive habits
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Active Challenges */}
          {activeChallenges.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Active Challenges</h3>
              <div className="space-y-4">
                {challenges.filter(c => activeChallenges.includes(c.id)).map((challenge) => (
                  <Card key={challenge.id} className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                          <p className="text-gray-600 mb-3">{challenge.description}</p>
                          <div className="flex items-center space-x-2 mb-4">
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              {challenge.category}
                            </Badge>
                            <Badge variant="outline">{challenge.difficulty}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>Day {completedDays[challenge.id] || 0} of {challenge.duration.split(' ')[0]}</span>
                        </div>
                        <Progress value={getChallengeProgress(challenge.id)} className="h-2" />
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Today's Tasks:</h5>
                        <ul className="space-y-1">
                          {challenge.dailyTasks.map((task, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        onClick={() => handleCompleteDay(challenge.id)}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Complete Today's Challenge
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Available Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {activeChallenges.length > 0 ? 'More Challenges' : 'Featured Challenges'}
            </h3>
            <div className="space-y-6">
              {challenges.filter(c => c.featured && !activeChallenges.includes(c.id)).map((challenge) => (
                <Card key={challenge.id} className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <CardDescription className="mt-2">{challenge.description}</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                        {challenge.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {challenge.duration}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Daily Activities:</h5>
                      <ul className="space-y-1">
                        {challenge.dailyTasks.map((task, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleStartChallenge(challenge.id, challenge.title)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Other Challenges */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">More Challenges</h4>
              <div className="grid gap-4">
                {challenges.filter(c => !c.featured && !activeChallenges.includes(c.id)).map((challenge) => (
                  <Card key={challenge.id} className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 mb-1">{challenge.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">{challenge.category}</Badge>
                            <Badge variant="outline" className="text-xs">{challenge.duration}</Badge>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStartChallenge(challenge.id, challenge.title)}
                        >
                          Start
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-orange-500" />
                Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active challenges</span>
                  <span className="font-semibold">{activeChallenges.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Days completed</span>
                  <span className="font-semibold">
                    {Object.values(completedDays).reduce((sum, days) => sum + days, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current streak</span>
                  <span className="font-semibold">0 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Challenges completed</span>
                  <span className="font-semibold">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-500" />
                Challenge Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Start with one challenge at a time</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Set a daily reminder to complete tasks</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Track your progress in a journal</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Celebrate small wins along the way</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Custom Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Want to create your own personal growth challenge?
              </p>
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Create Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrowthChallenges;
