
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Mic, Headphones, User, LogOut } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const RealTalkPodcasts = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();

  const podcasts = [
    {
      id: 1,
      title: "Breaking Down Emotional Walls",
      description: "Learn how to identify and overcome emotional barriers that prevent authentic connection",
      duration: "32 min",
      category: "Emotional Intelligence",
      featured: true,
      topics: ["vulnerability", "communication", "relationships"]
    },
    {
      id: 2,
      title: "Dealing with Anger in Healthy Ways",
      description: "Practical strategies for managing anger without losing control or hurting others",
      duration: "28 min",
      category: "Anger Management",
      featured: false,
      topics: ["anger", "self-control", "coping"]
    },
    {
      id: 3,
      title: "The Myth of 'Man Up'",
      description: "Exploring toxic masculinity and finding authentic ways to be strong",
      duration: "45 min",
      category: "Identity",
      featured: true,
      topics: ["masculinity", "identity", "strength"]
    },
    {
      id: 4,
      title: "Building Real Friendships",
      description: "How to create meaningful male friendships beyond surface-level connections",
      duration: "38 min",
      category: "Relationships",
      featured: false,
      topics: ["friendship", "connection", "support"]
    },
    {
      id: 5,
      title: "Anxiety: The Silent Struggle",
      description: "Understanding and managing anxiety without shame or stigma",
      duration: "41 min",
      category: "Mental Health",
      featured: false,
      topics: ["anxiety", "mental health", "coping"]
    },
    {
      id: 6,
      title: "Finding Purpose Beyond Success",
      description: "Discovering meaning and purpose that goes deeper than career achievements",
      duration: "52 min",
      category: "Purpose",
      featured: true,
      topics: ["purpose", "meaning", "fulfillment"]
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

  const handlePlayPodcast = (podcastTitle: string) => {
    toast({
      title: "Starting podcast...",
      description: `Now playing: ${podcastTitle}`,
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
          <h2 className="text-3xl font-bold text-gray-900">Real Talk Podcasts</h2>
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
          Deep conversations about real issues affecting young men today
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Episodes</h3>
            <div className="space-y-4">
              {podcasts.filter(p => p.featured).map((podcast) => (
                <Card key={podcast.id} className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                            {podcast.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {podcast.duration}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{podcast.title}</h4>
                        <p className="text-gray-600 mb-3">{podcast.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {podcast.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              #{topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        onClick={() => handlePlayPodcast(podcast.title)}
                        className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">All Episodes</h3>
            <div className="space-y-4">
              {podcasts.filter(p => !p.featured).map((podcast) => (
                <Card key={podcast.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">
                            {podcast.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {podcast.duration}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{podcast.title}</h4>
                        <p className="text-gray-600 mb-3">{podcast.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {podcast.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              #{topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handlePlayPodcast(podcast.title)}
                        className="ml-4"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Play
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
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="w-5 h-5 mr-2 text-green-500" />
                About Real Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <p>
                Real Talk features honest conversations with experts, peers, and real men sharing their experiences.
              </p>
              <p>
                No judgment, no fake positivity - just authentic discussions about the challenges we all face.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="w-5 h-5 mr-2 text-blue-500" />
                Listening Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Episodes listened</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total time</span>
                  <span className="font-semibold">0 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Favorite topic</span>
                  <span className="font-semibold">-</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Suggest a Topic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Have a topic you'd like us to cover? We want to hear from you.
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Submit Idea
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RealTalkPodcasts;
