
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy, Calendar, CheckCircle, Clock, User, LogOut, Play } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const GrowthChallenges = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  const [activeChallenges, setActiveChallenges] = useState([1, 3]);
  const [completedTasks, setCompletedTasks] = useState([1, 2, 5]);

  const challenges = [
    {
      id: 1,
      title: "30-Day Gratitude Practice",
      description: "Build a daily habit of acknowledging three things you're grateful for",
      duration: "30 days",
      difficulty: "Beginner",
      category: "Mindfulness",
      participants: 156,
      progress: 23,
      isActive: true,
      featured: true
    },
    {
      id: 2,
      title: "Emotional Check-in Challenge",
      description: "Practice identifying and naming your emotions twice daily",
      duration: "21 days",
      difficulty: "Beginner",
      category: "Emotional Intelligence",
      participants: 89,
      progress: 0,
      isActive: false,
      featured: true
    },
    {
      id: 3,
      title: "Vulnerability Practice",
      description: "Share one authentic feeling or experience with someone you trust each day",
      duration: "14 days",
      difficulty: "Intermediate",
      category: "Relationships",
      participants: 67,
      progress: 57,
      isActive: true,
      featured: false
    },
    {
      id: 4,
      title: "Digital Detox Weekend",
      description: "Disconnect from social media and focus on real-world connections",
      duration: "3 days",
      difficulty: "Intermediate",
      category: "Digital Wellness",
      participants: 234,
      progress: 0,
      isActive: false,
      featured: false
    },
    {
      id: 5,
      title: "Random Acts of Kindness",
      description: "Perform one act of kindness daily and reflect on the experience",
      duration: "7 days",
      difficulty: "Beginner",
      category: "Community",
      participants: 178,
      progress: 0,
      isActive: false,
      featured: false
    }
  ];

  const dailyTasks = [
    {
      id: 1,
      challengeId: 1,
      title: "Morning Gratitude Reflection",
      description: "Write down 3 things you're grateful for this morning",
      completed: true,
      date: "Today"
    },
    {
      id: 2,
      challengeId: 1,
      title: "Evening Gratitude Review",
      description: "Reflect on positive moments from your day",
      completed: true,
      date: "Today"
    },
    {
      id: 3,
      challengeId: 3,
      title: "Share an Authentic Moment",
      description: "Tell someone how you're really feeling today",
      completed: false,
      date: "Today"
    },
    {
      id: 4,
      challengeId: 3,
      title: "Practice Active Listening",
      description: "Have a conversation where you focus entirely on the other person",
      completed: false,
      date: "Today"
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

  const handleJoinChallenge = (challengeTitle: string) => {
    toast({
      title: "Challenge joined! 🎯",
      description: `You've joined "${challengeTitle}". Let's build some positive habits!`,
    });
  };

  const handleCompleteTask = (taskId: number) => {
    setCompletedTasks(prev => [...prev, taskId]);
    toast({
      title: "Task completed! ✅",
      description: "Great job staying consistent with your growth.",
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
          Build positive habits and challenge yourself to grow through structured activities
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Active Challenges */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Active Challenges</h3>
            <div className="space-y-4">
              {challenges.filter(c => c.isActive).map((challenge) => (
                <Card key={challenge.id} className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{challenge.title}</h4>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            {challenge.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{challenge.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {challenge.duration}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      View Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {challenges.filter(c => c.isActive).length === 0 && (
                <Card className="border-gray-200">
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No active challenges</h4>
                    <p className="text-gray-600">Join a challenge below to start building positive habits.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Today's Tasks</h3>
            <div className="space-y-3">
              {dailyTasks.map((task) => (
                <Card key={task.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          completedTasks.includes(task.id) ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {completedTasks.includes(task.id) ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h4 className={`font-medium ${completedTasks.includes(task.id) ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                            {task.title}
                          </h4>
                          <p className="text-sm text-gray-600">{task.description}</p>
                        </div>
                      </div>
                      {!completedTasks.includes(task.id) && (
                        <Button
                          size="sm"
                          onClick={() => handleCompleteTask(task.id)}
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Available Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Challenges</h3>
            <div className="space-y-4">
              {challenges.filter(c => !c.isActive).map((challenge) => (
                <Card key={challenge.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{challenge.title}</h4>
                          <Badge variant="outline">
                            {challenge.category}
                          </Badge>
                          {challenge.featured && (
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{challenge.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {challenge.duration}
                          </div>
                          <div className="flex items-center">
                            <Target className="w-4 h-4 mr-1" />
                            {challenge.participants} participants
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleJoinChallenge(challenge.title)}
                        className="ml-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Challenge
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
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-purple-500" />
                Your Progress
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
                    <span className="text-gray-600">Tasks completed</span>
                    <span className="font-semibold">{completedTasks.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current streak</span>
                    <span className="font-semibold">7 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Challenges completed</span>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Gratitude Practice</span>
                  <Badge variant="outline" className="text-xs">7 days left</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Vulnerability Practice</span>
                  <Badge variant="outline" className="text-xs">6 days left</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Challenge Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Start small and build consistency</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Set daily reminders</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Share progress with others</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Celebrate small wins</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle>Community Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">1. Alex M.</span>
                  <span className="font-semibold">15 challenges</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2. Jordan K.</span>
                  <span className="font-semibold">12 challenges</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">3. Sam R.</span>
                  <span className="font-semibold">11 challenges</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span className="font-medium">You</span>
                  <span className="font-semibold">2 challenges</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrowthChallenges;
