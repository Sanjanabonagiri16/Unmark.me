
import { useState, useEffect } from "react";
import { Calendar, TrendingUp, Heart, Plus, User, LogOut } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/contexts/UserContext";
import { supabase } from "@/lib/supabase";
import AuthForm from "./AuthForm";

interface MoodEntry {
  id: string;
  user_id: string;
  mood: string;
  mood_level: number;
  journal_entry?: string;
  created_at: string;
}

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState<string>("");
  const [recentEntries, setRecentEntries] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user, profile, loading: authLoading, signOut, updateMoodStreak } = useUser();

  const moods = [
    { name: "Amazing", emoji: "🔥", color: "bg-green-500", level: 5 },
    { name: "Good", emoji: "😊", color: "bg-blue-500", level: 4 },
    { name: "Okay", emoji: "😐", color: "bg-yellow-500", level: 3 },
    { name: "Tough", emoji: "😔", color: "bg-orange-500", level: 2 },
    { name: "Rough", emoji: "😞", color: "bg-red-500", level: 1 },
  ];

  useEffect(() => {
    if (user) {
      fetchRecentEntries();
    }
  }, [user]);

  const fetchRecentEntries = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('mood_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setRecentEntries(data || []);
    } catch (error) {
      console.error('Error fetching mood entries:', error);
    }
  };

  const handleSave = async () => {
    if (!selectedMood) {
      toast({
        title: "Pick your mood first",
        description: "How are you really feeling today?",
        variant: "destructive"
      });
      return;
    }

    if (!user) {
      toast({
        title: "Please sign in",
        description: "Create an account to save your mood entries",
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
            journal_entry: journalEntry || null,
          },
        ]);

      if (error) throw error;

      await updateMoodStreak();
      await fetchRecentEntries();

      toast({
        title: "Entry saved! 💪",
        description: "Your emotional journey is being tracked. Keep it up!",
      });

      setSelectedMood("");
      setJournalEntry("");
    } catch (error) {
      console.error('Error saving mood entry:', error);
      toast({
        title: "Failed to save entry",
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      const daysAgo = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
      return `${daysAgo} days ago`;
    }
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
          <h2 className="text-3xl font-bold text-gray-900">Mood Tracker & Journal</h2>
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
          Track your emotional journey. Real feelings, real growth, no judgment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Entry */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2 text-green-500" />
              Today's Check-in
            </CardTitle>
            <CardDescription>
              How are you feeling right now? Be honest with yourself.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Rate your day so far
              </label>
              <div className="grid grid-cols-5 gap-2">
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
                    <div className="text-2xl mb-1">{mood.emoji}</div>
                    <div className="text-xs font-medium">{mood.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                What's on your mind? (Optional but encouraged)
              </label>
              <Textarea
                placeholder="Write about your day, your feelings, wins, challenges... This is your space."
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                className="min-h-[120px] border-green-200 focus:border-green-500"
              />
            </div>

            <Button 
              onClick={handleSave}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              {loading ? "Saving..." : "Save Today's Entry"}
            </Button>
          </CardContent>
        </Card>

        {/* Progress & Insights */}
        <div className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{profile?.mood_streak || 0} days</div>
                  <p className="text-gray-600">tracking streak 🔥</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-green-600">{recentEntries.length}</div>
                    <div className="text-sm text-gray-600">Total entries</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-600">
                      {recentEntries.length > 0 
                        ? (recentEntries.reduce((sum, entry) => sum + entry.mood_level, 0) / recentEntries.length).toFixed(1)
                        : "0"
                      }
                    </div>
                    <div className="text-sm text-gray-600">Avg mood</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                Recent Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentEntries.length > 0 ? (
                  recentEntries.map((entry) => (
                    <div key={entry.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="text-xs">
                          {formatDate(entry.created_at)}
                        </Badge>
                        <span className="text-sm font-medium text-gray-600">
                          {entry.mood}
                        </span>
                      </div>
                      {entry.journal_entry && (
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {entry.journal_entry}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No entries yet. Start tracking your mood today!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
