
import { useState } from "react";
import { Calendar, TrendingUp, Heart, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState<string>("");
  const { toast } = useToast();

  const moods = [
    { name: "Amazing", emoji: "🔥", color: "bg-green-500", level: 5 },
    { name: "Good", emoji: "😊", color: "bg-blue-500", level: 4 },
    { name: "Okay", emoji: "😐", color: "bg-yellow-500", level: 3 },
    { name: "Tough", emoji: "😔", color: "bg-orange-500", level: 2 },
    { name: "Rough", emoji: "😞", color: "bg-red-500", level: 1 },
  ];

  const recentEntries = [
    { date: "Today", mood: "Good", entry: "Had a solid day at school. Felt confident in my presentation." },
    { date: "Yesterday", mood: "Tough", entry: "Dealing with some friendship drama. It's hard but I'm trying to stay positive." },
    { date: "2 days ago", mood: "Amazing", entry: "Finally told my crush how I feel. Regardless of outcome, proud of myself for being brave." },
  ];

  const handleSave = () => {
    if (!selectedMood) {
      toast({
        title: "Pick your mood first",
        description: "How are you really feeling today?",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Entry saved! 💪",
      description: "Your emotional journey is being tracked. Keep it up!",
    });

    setSelectedMood("");
    setJournalEntry("");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mood Tracker & Journal</h2>
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
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Save Today's Entry
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">12 days</div>
                  <p className="text-gray-600">tracking streak 🔥</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-green-600">73%</div>
                    <div className="text-sm text-gray-600">Good+ days</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-600">4.2</div>
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
                {recentEntries.map((entry, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline" className="text-xs">
                        {entry.date}
                      </Badge>
                      <span className="text-sm font-medium text-gray-600">
                        {entry.mood}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {entry.entry}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
