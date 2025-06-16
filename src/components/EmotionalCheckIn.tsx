
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmotionalCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [reflection, setReflection] = useState<string>("");
  const { toast } = useToast();

  const moods = [
    { name: "Confident", emoji: "💪", color: "bg-green-100 text-green-800" },
    { name: "Anxious", emoji: "😰", color: "bg-yellow-100 text-yellow-800" },
    { name: "Frustrated", emoji: "😤", color: "bg-red-100 text-red-800" },
    { name: "Peaceful", emoji: "😌", color: "bg-blue-100 text-blue-800" },
    { name: "Overwhelmed", emoji: "🤯", color: "bg-orange-100 text-orange-800" },
    { name: "Hopeful", emoji: "🌟", color: "bg-purple-100 text-purple-800" },
    { name: "Lonely", emoji: "😔", color: "bg-gray-100 text-gray-800" },
    { name: "Excited", emoji: "🔥", color: "bg-pink-100 text-pink-800" }
  ];

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select how you're feeling",
        description: "Your emotions matter - let us know what's going on.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Check-in saved! 💙",
      description: "Thank you for being brave and honest about your feelings.",
    });

    // Reset form
    setSelectedMood("");
    setReflection("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How are you feeling today?</h2>
        <p className="text-lg text-gray-600">
          It takes courage to check in with yourself. You're already taking a big step.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Check-in Form */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              Daily Check-in
            </CardTitle>
            <CardDescription>
              Select what resonates with you right now. There's no wrong answer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                What's your emotional state?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {moods.map((mood) => (
                  <Badge
                    key={mood.name}
                    variant="outline"
                    className={`p-3 cursor-pointer transition-all text-center justify-center ${
                      selectedMood === mood.name 
                        ? mood.color + " border-current" 
                        : "border-gray-200 hover:border-green-300"
                    }`}
                    onClick={() => setSelectedMood(mood.name)}
                  >
                    <span className="text-lg mr-2">{mood.emoji}</span>
                    {mood.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Want to share what's on your mind? (Optional)
              </label>
              <Textarea
                placeholder="This is a safe space to express yourself... No judgment here."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="min-h-[100px] border-green-200 focus:border-green-500"
              />
            </div>

            <Button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Save Check-in
            </Button>
          </CardContent>
        </Card>

        {/* Insights & Encouragement */}
        <div className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">7 days</div>
                <p className="text-gray-600">Check-in streak! Keep it up! 🔥</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
                Today's Reminder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic">
                "Your feelings are valid. Your struggles don't make you weak. 
                Asking for help is actually one of the strongest things you can do."
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-500" />
                Recent Check-ins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Yesterday: Confident 💪</span>
                  <span className="text-sm text-gray-500">Strong day!</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                  <span>2 days ago: Anxious 😰</span>
                  <span className="text-sm text-gray-500">You got through it</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span>3 days ago: Peaceful 😌</span>
                  <span className="text-sm text-gray-500">Nice balance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmotionalCheckIn;
