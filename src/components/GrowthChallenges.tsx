
import { useState } from "react";
import { Trophy, Calendar, Target, Users, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const GrowthChallenges = () => {
  const [joinedChallenges, setJoinedChallenges] = useState<number[]>([1, 3]);
  const { toast } = useToast();

  const challenges = [
    {
      id: 1,
      title: "30 Days of Kindness",
      description: "One act of kindness every day. Track your impact on others and yourself.",
      duration: "30 days",
      participants: 423,
      difficulty: "Easy",
      category: "Character Building",
      progress: 65,
      daysLeft: 11,
      dailyTasks: [
        "Compliment someone genuinely",
        "Help a classmate with homework",
        "Listen without giving advice",
        "Thank someone who helps you",
        "Stand up for someone being picked on"
      ]
    },
    {
      id: 2,
      title: "Emotional Check-In Streak",
      description: "Check in with your emotions daily for 21 days. Build self-awareness.",
      duration: "21 days",
      participants: 312,
      difficulty: "Medium",
      category: "Self-Awareness",
      progress: 0,
      daysLeft: 21,
      dailyTasks: [
        "Rate your mood 1-10",
        "Identify one emotion you felt",
        "Journal for 5 minutes",
        "Practice deep breathing",
        "Notice what triggered your emotions"
      ]
    },
    {
      id: 3,
      title: "Communication Confidence",
      description: "Practice expressing yourself clearly in different situations.",
      duration: "14 days",
      participants: 189,
      difficulty: "Medium",
      category: "Social Skills",
      progress: 85,
      daysLeft: 2,
      dailyTasks: [
        "Ask a thoughtful question",
        "Express an opinion respectfully",
        "Practice active listening",
        "Give constructive feedback",
        "Share something personal (appropriately)"
      ]
    },
    {
      id: 4,
      title: "Digital Detox Weekend",
      description: "Disconnect from social media and reconnect with yourself.",
      duration: "2 days",
      participants: 156,
      difficulty: "Hard",
      category: "Digital Wellness",
      progress: 0,
      daysLeft: 2,
      dailyTasks: [
        "No social media scrolling",
        "Read a physical book",
        "Have a face-to-face conversation",
        "Go for a walk without phone",
        "Write in a journal by hand"
      ]
    },
    {
      id: 5,
      title: "Gratitude Revolution",
      description: "Find three things to be grateful for every day.",
      duration: "7 days",
      participants: 278,
      difficulty: "Easy",
      category: "Mindset",
      progress: 0,
      daysLeft: 7,
      dailyTasks: [
        "Write down 3 things you're grateful for",
        "Thank someone who made your day better",
        "Appreciate something in nature",
        "Be grateful for a challenge you overcame",
        "Share your gratitude with family"
      ]
    }
  ];

  const joinChallenge = (challengeId: number) => {
    setJoinedChallenges([...joinedChallenges, challengeId]);
    toast({
      title: "Challenge accepted! 💪",
      description: "You've got this! Check back daily to track your progress.",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Easy": "bg-green-100 text-green-800",
      "Medium": "bg-yellow-100 text-yellow-800",
      "Hard": "bg-red-100 text-red-800"
    };
    return colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Character Building": "bg-blue-100 text-blue-800",
      "Self-Awareness": "bg-purple-100 text-purple-800",
      "Social Skills": "bg-pink-100 text-pink-800",
      "Digital Wellness": "bg-teal-100 text-teal-800",
      "Mindset": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const activeChallenge = challenges.find(c => joinedChallenges.includes(c.id) && c.progress > 0 && c.progress < 100);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Growth Challenges</h2>
        <p className="text-lg text-gray-600">
          Level up your character with daily challenges. Small actions, big transformations.
        </p>
      </div>

      {/* Current Challenge Progress */}
      {activeChallenge && (
        <Card className="mb-8 border-green-100 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-600" />
              Your Active Challenge: {activeChallenge.title}
            </CardTitle>
            <CardDescription>
              {activeChallenge.daysLeft} days left • {activeChallenge.progress}% complete
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={activeChallenge.progress} className="h-3" />
              
              <div>
                <h4 className="font-medium mb-3">Today's Task Options:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeChallenge.dailyTasks.slice(0, 4).map((task, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg border">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Mark Today Complete
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Challenge Stats */}
      <Card className="mb-8 border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            Your Challenge Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Active Challenges</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-gray-600">Day Streak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">127</div>
              <div className="text-gray-600">Impact Points</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Challenges */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Challenges</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => {
            const isJoined = joinedChallenges.includes(challenge.id);
            const isCompleted = isJoined && challenge.progress === 100;
            const isActive = isJoined && challenge.progress > 0 && challenge.progress < 100;
            
            return (
              <Card 
                key={challenge.id} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  isActive ? "border-green-300 bg-green-50" : 
                  isCompleted ? "border-blue-300 bg-blue-50" : 
                  "border-gray-200"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge className={getCategoryColor(challenge.category)}>
                        {challenge.category}
                      </Badge>
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    {isCompleted && <Trophy className="w-5 h-5 text-yellow-500" />}
                  </div>
                  <CardTitle className="text-lg leading-snug">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {challenge.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participants}
                      </div>
                    </div>
                    
                    {isJoined && (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                        {challenge.daysLeft > 0 && (
                          <div className="flex items-center text-sm text-gray-600 mt-2">
                            <Clock className="w-4 h-4 mr-1" />
                            {challenge.daysLeft} days left
                          </div>
                        )}
                      </div>
                    )}
                    
                    <Button 
                      onClick={() => !isJoined && joinChallenge(challenge.id)}
                      disabled={isJoined}
                      className={`w-full ${
                        isCompleted ? "bg-blue-600 hover:bg-blue-700" :
                        isActive ? "bg-green-600 hover:bg-green-700" :
                        "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      }`}
                    >
                      {isCompleted ? "Completed! 🏆" : 
                       isActive ? "Continue Challenge" : 
                       "Join Challenge"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowthChallenges;
