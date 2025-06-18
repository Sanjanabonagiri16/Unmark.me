
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Clock, Star, Heart, Home, Mic, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const RealTalkPodcasts = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const featuredPodcasts = [
    {
      id: "1",
      title: "Breaking the Mask: Men's Mental Health in 2025",
      host: "Dr. Marcus Johnson",
      duration: "45 min",
      description: "A deep dive into the pressures young men face and how to build authentic emotional connections.",
      category: "Mental Health",
      rating: 4.9,
      plays: "12.5K",
      featured: true
    },
    {
      id: "2",
      title: "The Vulnerability Advantage",
      host: "Alex Rivera & Jake Thompson",
      duration: "38 min",
      description: "Two guys share their journey from emotional isolation to building meaningful relationships.",
      category: "Personal Growth",
      rating: 4.8,
      plays: "8.7K",
      featured: true
    },
    {
      id: "3",
      title: "Redefining Strength: Beyond Physical Power",
      host: "Coach Michael Chen",
      duration: "52 min",
      description: "Exploring emotional strength, resilience, and what it really means to be strong in today's world.",
      category: "Self-Development",
      rating: 4.9,
      plays: "15.2K",
      featured: true
    }
  ];

  const recentEpisodes = [
    {
      id: "4",
      title: "Dating Without the Games: Authentic Connection",
      host: "Sarah & Tim",
      duration: "41 min",
      category: "Relationships",
      rating: 4.7,
      plays: "6.3K"
    },
    {
      id: "5",
      title: "Career Pressure and Male Identity",
      host: "Professional Development Panel",
      duration: "35 min",
      category: "Career",
      rating: 4.6,
      plays: "4.8K"
    },
    {
      id: "6",
      title: "Friendship After 25: Making Real Connections",
      host: "Brotherhood Collective",
      duration: "47 min",
      category: "Friendship",
      rating: 4.8,
      plays: "9.1K"
    },
    {
      id: "7",
      title: "Dealing with Family Expectations",
      host: "Dr. Elena Rodriguez",
      duration: "39 min",
      category: "Family",
      rating: 4.7,
      plays: "7.2K"
    }
  ];

  const categories = [
    { name: "All", count: 47, active: true },
    { name: "Mental Health", count: 12, active: false },
    { name: "Relationships", count: 8, active: false },
    { name: "Personal Growth", count: 15, active: false },
    { name: "Career", count: 7, active: false },
    { name: "Family", count: 5, active: false }
  ];

  const togglePlay = (podcastId: string) => {
    if (currentlyPlaying === podcastId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(podcastId);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real Talk Podcasts</h1>
          <p className="text-xl text-gray-600">
            Authentic conversations about the real challenges young men face
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
            <Mic className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">47</div>
            <div className="text-gray-600">Total Episodes</div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">25K+</div>
            <div className="text-gray-600">Active Listeners</div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">Weekly</div>
            <div className="text-gray-600">New Episodes</div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Browse by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`cursor-pointer hover-scale ${
                  category.active ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"
                }`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Podcasts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Episodes</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {featuredPodcasts.map((podcast) => (
            <Card key={podcast.id} className="hover:shadow-lg transition-all duration-300 border-green-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-green-100 text-green-800 mb-2">Featured</Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{podcast.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{podcast.title}</CardTitle>
                <CardDescription>by {podcast.host}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{podcast.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{podcast.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Play className="w-4 h-4 mr-1" />
                    <span className="text-sm">{podcast.plays} plays</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{podcast.category}</Badge>
                  <Button
                    onClick={() => togglePlay(podcast.id)}
                    className="bg-green-600 hover:bg-green-700 hover-scale"
                  >
                    {currentlyPlaying === podcast.id ? (
                      <Pause className="w-4 h-4 mr-2" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {currentlyPlaying === podcast.id ? "Pause" : "Play"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Episodes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-6 h-6 mr-2 text-blue-600" />
            Recent Episodes
          </CardTitle>
          <CardDescription>
            Latest conversations from our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{episode.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {episode.host}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{episode.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Play className="w-4 h-4 mr-1" />
                      <span className="text-sm">{episode.plays} plays</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{episode.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{episode.category}</Badge>
                  <Button
                    onClick={() => togglePlay(episode.id)}
                    variant="outline"
                    size="sm"
                    className="hover-scale"
                  >
                    {currentlyPlaying === episode.id ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="mt-8 border-green-100 bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6 text-center">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Want to share your story?</h3>
          <p className="text-gray-600 mb-4">
            We're always looking for authentic voices to join our podcast community
          </p>
          <Link to="/contact-us">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover-scale">
              Get in Touch
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTalkPodcasts;
