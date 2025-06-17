
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import AuthForm from "./AuthForm";
import { Heart, User, LogOut } from "lucide-react";

const EmotionalCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [feelings, setFeelings] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { user, profile, loading: authLoading, signOut, updateMoodStreak } = useUser();
  const { toast } = useToast();

  const moods = [
    { name: "Excited", emoji: "🔥", color: "bg-orange-500", level: 5 },
    { name: "Happy", emoji: "😊", color: "bg-green-500", level: 4 },
    { name: "Neutral", emoji: "😐", color: "bg-yellow-500", level: 3 },
    { name: "Sad", emoji: "😔", color: "bg-blue-500", level: 2 },
    { name: "Angry", emoji: "😠", color: "bg-red-500", level: 1 },
  ];

  const handleCheckIn = async () => {
    if (!selectedMood) {
      toast({
        title: "Select a mood",
        description: "Please choose how you're feeling right now.",
        variant: "destructive"
      });
      return;
    }

    if (!user) {
      toast({
        title: "Please sign in",
        description: "Create an account to save your check-ins",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const selectedMoodData = moods.find(m => m.name === selectedMood);
      
      const { error } = await supabase
        .from('mood_entries')
        .insert([
          {
            user_id: user.id,
            mood: selectedMood,
            mood_level: selectedMoodData?.level || 3,
            journal_entry: feelings || null,
          },
        ]);

      if (error) throw error;

      await updateMoodStreak();

      toast({
        title: "Check-in complete! 💪",
        description: "Your feelings are valid and heard.",
      });

      setSelectedMood("");
      setFeelings("");
    } catch (error) {
      console.error('Error saving check-in:', error);
      toast({
        title: "Failed to save check-in",
        description: "Please try again",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

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

  if (authLoading) {
    return <div className="max-w-6xl mx-auto px-6 py-12 text-center">Loading...</div>;
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <h2 className="text-3xl font-bold text-gray-900">Emotional Check-In</h2>
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
          How are you feeling right now? This is a safe space.
        </p>
      </div>

      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            Quick Emotional Check-In
          </CardTitle>
          <CardDescription>
            Take a moment to acknowledge your feelings. No judgment, just awareness.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              How are you feeling right now?
            </label>
            <div className="grid grid-cols-5 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => setSelectedMood(mood.name)}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    selectedMood === mood.name 
                      ? `${mood.color} text-white border-current` 
                      : "border-gray-200 hover:border-green-300 hover:bg-green-50"
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <div className="text-sm font-medium">{mood.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Want to share more about what's going on? (Optional)
            </label>
            <Textarea
              placeholder="What's happening in your life right now? Any wins, challenges, or thoughts you want to share..."
              value={feelings}
              onChange={(e) => setFeelings(e.target.value)}
              className="min-h-[100px] border-green-200 focus:border-green-500"
            />
          </div>

          <Button 
            onClick={handleCheckIn}
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            {loading ? "Saving..." : "Complete Check-In"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmotionalCheckIn;
