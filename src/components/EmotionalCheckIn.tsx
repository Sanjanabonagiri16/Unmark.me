
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Smile, Frown, Meh, Angry, Zap, Home, Calendar, Star } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const EmotionalCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [reflection, setReflection] = useState("");
  const [gratitude, setGratitude] = useState("");
  const { updateMoodStreak, profile } = useUser();
  const { toast } = useToast();

  const moods = [
    { id: "amazing", icon: <Star className="w-8 h-8" />, label: "Amazing", color: "text-yellow-500", bg: "bg-yellow-50" },
    { id: "happy", icon: <Smile className="w-8 h-8" />, label: "Happy", color: "text-green-500", bg: "bg-green-50" },
    { id: "okay", icon: <Meh className="w-8 h-8" />, label: "Okay", color: "text-blue-500", bg: "bg-blue-50" },
    { id: "sad", icon: <Frown className="w-8 h-8" />, label: "Sad", color: "text-orange-500", bg: "bg-orange-50" },
    { id: "angry", icon: <Angry className="w-8 h-8" />, label: "Angry", color: "text-red-500", bg: "bg-red-50" },
  ];

  const handleSubmit = async () => {
    if (!selectedMood) {
      toast({
        title: "Select your mood",
        description: "Please choose how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    await updateMoodStreak();
    toast({
      title: "Check-in complete! 🎉",
      description: "Your emotional journey matters. Keep it up!",
    });

    // Reset form
    setSelectedMood("");
    setReflection("");
    setGratitude("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Daily Emotional Check-In</h1>
          <p className="text-xl text-gray-600">
            Take a moment to connect with your feelings in a judgment-free space
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Streak Display */}
      {profile && (
        <Card className="mb-8 border-green-100 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{profile.mood_streak} Day Streak</h3>
                  <p className="text-gray-600">Keep the momentum going!</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                <Calendar className="w-4 h-4 mr-1" />
                Daily Check-in
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mood Selection */}
      <Card className="mb-8 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-6 h-6 mr-2 text-red-500" />
            How are you feeling today?
          </CardTitle>
          <CardDescription>
            Choose the mood that best represents your current emotional state
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {moods.map((mood) => (
              <div
                key={mood.id}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedMood === mood.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                } ${mood.bg}`}
                onClick={() => setSelectedMood(mood.id)}
              >
                <div className="text-center">
                  <div className={`mb-2 ${mood.color} flex justify-center`}>
                    {mood.icon}
                  </div>
                  <span className="font-medium text-gray-700">{mood.label}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reflection Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>What's on your mind?</CardTitle>
            <CardDescription>
              Share what's happening in your life right now
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Today I'm feeling... because..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="min-h-32 border-green-200 focus:border-green-500"
            />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Gratitude moment</CardTitle>
            <CardDescription>
              What's one thing you're grateful for today?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="I'm grateful for..."
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              className="min-h-32 border-green-200 focus:border-green-500"
            />
          </CardContent>
        </Card>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 hover-scale"
        >
          Complete Check-In
          <Heart className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Support Resources */}
      <Card className="mt-8 border-blue-100">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">Need extra support today?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/crisis-support" className="text-blue-600 hover:text-blue-800 story-link">
              Crisis Support Resources →
            </Link>
            <Link to="/mental-health-resources" className="text-blue-600 hover:text-blue-800 story-link">
              Mental Health Help →
            </Link>
            <Link to="/?section=circles" className="text-blue-600 hover:text-blue-800 story-link">
              Join Community Circles →
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmotionalCheckIn;
