
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, Trophy, Users, Home, Star, CheckCircle, Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthChallenges = () => {
  const [activeTab, setActiveTab] = useState("available");
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>(["gratitude-30", "confidence-building"]);

  const challenges = [
    {
      id: "gratitude-30",
      title: "30-Day Gratitude Practice",
      description: "Build a daily habit of recognizing and appreciating the good in your life",
      category: "Mindfulness",
      duration: "30 days",
      difficulty: "Beginner",
      participants: 2847,
      completionRate: 73,
      startDate: "2025-01-01",
      progress: 12,
      dailyTask: "Write down 3 things you're grateful for",
      benefits: ["Improved mood", "Better sleep", "Increased optimism", "Stronger relationships"],
      joined: true,
      featured: true
    },
    {
      id: "confidence-building",
      title: "Authentic Confidence Challenge",
      description: "Daily exercises to build genuine self-confidence through small, achievable actions",
      category: "Self-Development",
      duration: "21 days",
      difficulty: "Intermediate",
      participants: 1923,
      completionRate: 68,
      startDate: "2025-01-15",
      progress: 5,
      dailyTask: "One small act of courage daily",
      benefits: ["Increased self-esteem", "Better social skills", "Reduced anxiety", "Leadership skills"],
      joined: true,
      featured: true
    },
    {
      id: "emotional-awareness",
      title: "Emotional Intelligence Bootcamp",
      description: "Develop deeper awareness of your emotions and learn healthy expression techniques",
      category: "Emotional Health",
      duration: "28 days",
      difficulty: "Intermediate",
      participants: 1567,
      completionRate: 71,
      startDate: "2025-02-01",
      progress: 0,
      dailyTask: "Emotion check-in and reflection",
      benefits: ["Better relationships", "Stress management", "Self-awareness", "Communication skills"],
      joined: false,
      featured: true
    },
    {
      id: "fitness-mental-health",
      title: "Move Your Mind Challenge",
      description: "Connect physical movement with mental wellbeing through daily exercise",
      category: "Physical & Mental Health",
      duration: "30 days",
      difficulty: "Beginner",
      participants: 3421,
      completionRate: 65,
      startDate: "2025-01-20",
      progress: 0,
      dailyTask: "20 minutes of mindful movement",
      benefits: ["Better mood", "Increased energy", "Stress relief", "Body confidence"],
      joined: false,
      featured: false
    },
    {
      id: "communication-skills",
      title: "Real Talk Communication",
      description: "Practice honest, vulnerable communication in your daily interactions",
      category: "Relationships",
      duration: "21 days",
      difficulty: "Advanced",
      participants: 987,
      completionRate: 58,
      startDate: "2025-02-10",
      progress: 0,
      dailyTask: "One authentic conversation daily",
      benefits: ["Deeper connections", "Conflict resolution", "Assertiveness", "Empathy"],
      joined: false,
      featured: false
    },
    {
      id: "stress-management",
      title: "Calm in the Storm",
      description: "Learn and practice stress management techniques for daily life",
      category: "Mental Health",
      duration: "14 days",
      difficulty: "Beginner",
      participants: 2156,
      completionRate: 79,
      startDate: "2025-01-25",
      progress: 0,
      dailyTask: "Practice stress-relief technique",
      benefits: ["Lower anxiety", "Better decision making", "Improved focus", "Better sleep"],
      joined: false,
      featured: false
    }
  ];

  const upcomingChallenges = [
    {
      title: "Digital Detox Weekend",
      description: "Mindful technology use and real-world connection",
      startDate: "2025-02-15",
      category: "Mindfulness"
    },
    {
      title: "Random Acts of Kindness",
      description: "Spread positivity and build community connections",
      startDate: "2025-02-20",
      category: "Community"
    },
    {
      title: "Financial Wellness Basics",
      description: "Build healthy money habits and reduce financial stress",
      startDate: "2025-03-01",
      category: "Life Skills"
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Joined your first challenge", earned: true },
    { name: "Consistency King", description: "7-day streak in any challenge", earned: true },
    { name: "Challenge Completed", description: "Finished a 30-day challenge", earned: false },
    { name: "Community Helper", description: "Supported 10 other participants", earned: true },
    { name: "Habit Master", description: "Completed 3 different challenges", earned: false },
    { name: "Inspiration Leader", description: "Your story inspired others", earned: false }
  ];

  const toggleChallenge = (challengeId: string) => {
    if (joinedChallenges.includes(challengeId)) {
      setJoinedChallenges(joinedChallenges.filter(id => id !== challengeId));
    } else {
      setJoinedChallenges([...joinedChallenges, challengeId]);
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    if (activeTab === "active") return joinedChallenges.includes(challenge.id);
    if (activeTab === "available") return !joinedChallenges.includes(challenge.id);
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Growth Challenges</h1>
          <p className="text-xl text-gray-600">
            Transform your life through structured 30-day challenges and build lasting positive habits
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
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-gray-600">Available Challenges</div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Flame className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">{joinedChallenges.length}</div>
            <div className="text-gray-600">Active Challenges</div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Achievements</div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">12K+</div>
            <div className="text-gray-600">Total Participants</div>
          </CardContent>
        </Card>
      </div>

      {/* Challenge Tabs */}
      <div className="flex space-x-4 mb-8">
        <Button
          variant={activeTab === "active" ? "default" : "outline"}
          onClick={() => setActiveTab("active")}
          className="hover-scale"
        >
          My Challenges ({joinedChallenges.length})
        </Button>
        <Button
          variant={activeTab === "available" ? "default" : "outline"}
          onClick={() => setActiveTab("available")}
          className="hover-scale"
        >
          Available Challenges
        </Button>
        <Button
          variant={activeTab === "featured" ? "default" : "outline"}
          onClick={() => setActiveTab("featured")}
          className="hover-scale"
        >
          Featured
        </Button>
      </div>

      {/* Challenge Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {filteredChallenges.map((challenge) => (
          <Card key={challenge.id} className={`hover:shadow-lg transition-all duration-300 ${
            challenge.featured ? "border-green-100" : "border-gray-200"
          }`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    {challenge.featured && (
                      <Badge className="bg-green-100 text-green-800">Featured</Badge>
                    )}
                  </div>
                  <CardDescription>{challenge.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {challenge.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {challenge.participants.toLocaleString()} joined
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="w-4 h-4 mr-1" />
                    {challenge.difficulty}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-1" />
                    {challenge.completionRate}% complete it
                  </div>
                </div>

                {challenge.joined && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Your Progress</span>
                      <span className="text-sm text-gray-600">{challenge.progress}/30 days</span>
                    </div>
                    <Progress value={(challenge.progress / 30) * 100} className="h-2" />
                  </div>
                )}

                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium mb-1">Daily Task:</h4>
                  <p className="text-sm text-gray-600">{challenge.dailyTask}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {challenge.benefits.slice(0, 3).map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    {challenge.benefits.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{challenge.benefits.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline">{challenge.category}</Badge>
                  <Button
                    onClick={() => toggleChallenge(challenge.id)}
                    className={`hover-scale ${
                      challenge.joined
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {challenge.joined ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Continue Challenge
                      </>
                    ) : (
                      <>
                        <Target className="w-4 h-4 mr-2" />
                        Join Challenge
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Challenges */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-blue-600" />
            Upcoming Challenges
          </CardTitle>
          <CardDescription>
            New challenges launching soon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingChallenges.map((challenge, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{challenge.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {challenge.startDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
            Your Achievements
          </CardTitle>
          <CardDescription>
            Track your progress and unlock new badges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${
                  achievement.earned
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    achievement.earned ? "bg-green-500" : "bg-gray-400"
                  }`}>
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrowthChallenges;
