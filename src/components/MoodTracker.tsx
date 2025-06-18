
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, TrendingUp, Smile, Frown, Meh, User, LogOut, Plus } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const MoodTracker = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  
  // Mock mood data - in real app this would come from Supabase
  const [moodEntries] = useState([
    { date: "2024-01-15", mood: "good", energy: 7, notes: "Had a great conversation with my therapist today" },
    { date: "2024-01-14", mood: "okay", energy: 5, notes: "Feeling a bit anxious about work presentation" },
    { date: "2024-01-13", mood: "excellent", energy: 9, notes: "Spent quality time with friends, felt really connected" },
    { date: "2024-01-12", mood: "bad", energy: 3, notes: "Struggling with motivation, had a difficult day" },
    { date: "2024-01-11", mood: "good", energy: 6, notes: "Morning workout helped boost my mood" },
  ]);

  const [selectedMood, setSelectedMood] = useState("");
  const [energyLevel, setEnergyLevel] = useState(5);
  const [notes, setNotes] = useState("");

  const moodOptions = [
    { value: "excellent", label: "Excellent", icon: "😄", color: "text-green-600" },
    { value: "good", label: "Good", icon: "😊", color: "text-blue-600" },
    { value: "okay", label: "Okay", icon: "😐", color: "text-yellow-600" },
    { value: "bad", label: "Bad", icon: "😔", color: "text-orange-600" },
    { value: "terrible", label: "Terrible", icon: "😢", color: "text-red-600" },
  ];

  const insights = [
    {
      title: "Weekly Pattern",
      description: "You tend to feel better on weekends and Wednesday afternoons",
      trend: "positive"
    },
    {
      title: "Sleep Connection",
      description: "Your mood improves significantly with 7+ hours of sleep",
      trend: "positive"
    },
    {
      title: "Social Impact",
      description: "Days with social activities show 40% better mood ratings",
      trend: "positive"
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

  const handleSubmitMood = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mood logged successfully! 📊",
      description: "Your daily mood has been recorded",
    });

    setSelectedMood("");
    setEnergyLevel(5);
    setNotes("");
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
          <h2 className="text-3xl font-bold text-gray-900">Mood Tracker</h2>
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
          Track your emotional journey and discover patterns in your mental health
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Check-in */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-blue-500" />
                How are you feeling today?
              </CardTitle>
              <CardDescription>
                Take a moment to reflect on your current emotional state
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Select your mood:</h4>
                <div className="grid grid-cols-5 gap-3">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        selectedMood === mood.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-2xl mb-2">{mood.icon}</div>
                      <div className={`text-sm font-medium ${mood.color}`}>
                        {mood.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Energy Level: {energyLevel}/10</h4>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={energyLevel}
                  onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low Energy</span>
                  <span>High Energy</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Notes (optional):</h4>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What's on your mind? Any specific thoughts or events affecting your mood?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>

              <Button 
                onClick={handleSubmitMood}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Log Today's Mood
              </Button>
            </CardContent>
          </Card>

          {/* Recent Entries */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-500" />
                Recent Mood Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moodEntries.map((entry, index) => {
                  const moodOption = moodOptions.find(m => m.value === entry.mood);
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{moodOption?.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{entry.date}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={moodOption?.color}>
                              {moodOption?.label}
                            </Badge>
                            <span className="text-sm text-gray-500">Energy: {entry.energy}/10</span>
                          </div>
                        </div>
                        {entry.notes && (
                          <p className="text-gray-600 text-sm">{entry.notes}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Mood Insights */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
                Your Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">{insight.title}</h4>
                  <p className="text-sm text-purple-600">{insight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Summary */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>This Week's Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Average Mood</span>
                    <span className="font-semibold">Good</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Average Energy</span>
                    <span className="font-semibold">6.2/10</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Check-in Streak</span>
                    <span className="font-semibold">5 days</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mood Tips */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Mood Boosting Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Take 5 deep breaths when feeling overwhelmed</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Get 10 minutes of sunlight daily</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Practice gratitude - write down 3 things you're grateful for</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Connect with a friend or family member</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
