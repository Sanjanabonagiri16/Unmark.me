
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Clock, User, LogOut, Heart, Download, Share } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const RealTalkPodcasts = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);

  const podcasts = [
    {
      id: 1,
      title: "Breaking the Silence: Men and Mental Health",
      host: "Dr. Marcus Johnson",
      duration: "45 min",
      description: "A deep dive into why men struggle to seek help and how to break the stigma",
      category: "Mental Health",
      listens: "12.5K",
      featured: true,
      topics: ["Depression", "Anxiety", "Stigma", "Help-seeking"]
    },
    {
      id: 2,
      title: "From Anger to Understanding: Managing Emotions",
      host: "James Mitchell",
      duration: "38 min",
      description: "Learning healthy ways to process and express anger without harming relationships",
      category: "Emotional Intelligence",
      listens: "9.8K",
      featured: true,
      topics: ["Anger", "Relationships", "Communication"]
    },
    {
      id: 3,
      title: "The Father I Never Had: Growing Up Without a Role Model",
      host: "Carlos Rivera",
      duration: "52 min",
      description: "Personal stories and insights on navigating manhood without a father figure",
      category: "Family & Relationships",
      listens: "15.2K",
      featured: false,
      topics: ["Fatherhood", "Identity", "Growth"]
    },
    {
      id: 4,
      title: "Vulnerability is Strength: Redefining Masculinity",
      host: "Dr. Sarah Williams & Mike Thompson",
      duration: "41 min",
      description: "Challenging toxic masculinity and embracing emotional authenticity",
      category: "Personal Growth",
      listens: "11.3K",
      featured: false,
      topics: ["Masculinity", "Vulnerability", "Authenticity"]
    },
    {
      id: 5,
      title: "Suicide Prevention: Warning Signs and How to Help",
      host: "Dr. Lisa Chen",
      duration: "35 min",
      description: "Critical information about recognizing signs and supporting someone in crisis",
      category: "Crisis Support",
      listens: "8.7K",
      featured: false,
      topics: ["Suicide Prevention", "Crisis", "Support"]
    },
    {
      id: 6,
      title: "Building Healthy Relationships: Communication and Trust",
      host: "Relationship Expert Tom Bradley",
      duration: "44 min",
      description: "Essential skills for creating meaningful connections with partners and friends",
      category: "Relationships",
      listens: "13.1K",
      featured: false,
      topics: ["Communication", "Trust", "Intimacy"]
    }
  ];

  const categories = [
    "All Episodes",
    "Mental Health",
    "Emotional Intelligence", 
    "Relationships",
    "Personal Growth",
    "Crisis Support"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Episodes");

  const filteredPodcasts = selectedCategory === "All Episodes" 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === selectedCategory);

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

  const handlePlayPause = (episodeId: number, title: string) => {
    if (playingEpisode === episodeId) {
      setPlayingEpisode(null);
      toast({
        title: "Paused",
        description: `"${title}" has been paused`,
      });
    } else {
      setPlayingEpisode(episodeId);
      toast({
        title: "Now playing",
        description: `"${title}" is now playing`,
      });
    }
  };

  const handleDownload = (title: string) => {
    toast({
      title: "Download started",
      description: `"${title}" is being downloaded for offline listening`,
    });
  };

  const handleShare = (title: string) => {
    toast({
      title: "Link copied!",
      description: `Share "${title}" with friends`,
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
          Honest conversations about mental health, emotions, and authentic masculinity
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-green-500" />
                Popular This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {podcasts.slice(0, 3).map((podcast, index) => (
                  <div key={podcast.id} className="text-sm">
                    <div className="font-medium text-gray-900 mb-1">
                      {index + 1}. {podcast.title}
                    </div>
                    <div className="text-gray-500">{podcast.listens} listens</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Episodes */}
          {selectedCategory === "All Episodes" && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Episodes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {podcasts.filter(p => p.featured).map((podcast) => (
                  <Card key={podcast.id} className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                          {podcast.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {podcast.duration}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{podcast.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">by {podcast.host}</p>
                      <p className="text-gray-700 mb-4">{podcast.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {podcast.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Button
                          onClick={() => handlePlayPause(podcast.id, podcast.title)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          {playingEpisode === podcast.id ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Play
                            </>
                          )}
                        </Button>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(podcast.title)}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare(podcast.title)}
                          >
                            <Share className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Episodes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedCategory === "All Episodes" ? "All Episodes" : selectedCategory}
            </h3>
            <div className="space-y-4">
              {filteredPodcasts.map((podcast) => (
                <Card key={podcast.id} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{podcast.title}</h4>
                          <Badge variant="outline">{podcast.category}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">by {podcast.host}</p>
                        <p className="text-gray-700 mb-3">{podcast.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {podcast.duration}
                          </div>
                          <div>{podcast.listens} listens</div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {podcast.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button
                          onClick={() => handlePlayPause(podcast.id, podcast.title)}
                          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                        >
                          {playingEpisode === podcast.id ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Play
                            </>
                          )}
                        </Button>
                        <div className="flex space-x-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(podcast.title)}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare(podcast.title)}
                          >
                            <Share className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTalkPodcasts;
