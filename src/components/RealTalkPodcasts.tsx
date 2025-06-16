
import { useState } from "react";
import { Play, Pause, Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RealTalkPodcasts = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const podcasts = [
    {
      id: 1,
      title: "Breaking the 'Strong Silent Type' Myth",
      host: "Dr. Marcus Williams",
      description: "Why emotional expression isn't weakness - it's actually the strongest thing you can do.",
      duration: "28 min",
      category: "Emotional Health",
      featured: true,
      listens: "12.4K"
    },
    {
      id: 2,
      title: "Dealing with Peer Pressure & Standing Your Ground",
      host: "Coach Ryan Torres",
      description: "Real strategies for staying true to yourself when your friends don't get it.",
      duration: "22 min",
      category: "Social Skills",
      featured: false,
      listens: "8.9K"
    },
    {
      id: 3,
      title: "Understanding Your Anger (And What It's Really Telling You)",
      host: "Dr. Sarah Chen",
      description: "Anger often masks deeper emotions. Learn to decode what you're really feeling.",
      duration: "35 min",
      category: "Emotional Health",
      featured: true,
      listens: "15.2K"
    },
    {
      id: 4,
      title: "Building Real Confidence (Not Fake Bravado)",
      host: "Mike Rodriguez",
      description: "The difference between true confidence and putting on a show.",
      duration: "31 min",
      category: "Self-Confidence",
      featured: false,
      listens: "11.7K"
    },
    {
      id: 5,
      title: "Healthy Relationships: Communication Without the Drama",
      host: "Dr. Alex Thompson",
      description: "How to express your needs without being labeled as 'needy' or 'emotional'.",
      duration: "26 min",
      category: "Relationships",
      featured: true,
      listens: "9.8K"
    },
    {
      id: 6,
      title: "Mental Health Isn't 'Unmanly' - Let's Talk",
      host: "Jordan Blake",
      description: "Breaking down stigma and getting real about mental health support.",
      duration: "29 min",
      category: "Mental Health",
      featured: false,
      listens: "13.1K"
    }
  ];

  const categories = ["All", "Emotional Health", "Relationships", "Self-Confidence", "Social Skills", "Mental Health"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPodcasts = selectedCategory === "All" 
    ? podcasts 
    : podcasts.filter(p => p.category === selectedCategory);

  const handlePlayPause = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Emotional Health": "bg-red-100 text-red-800",
      "Relationships": "bg-pink-100 text-pink-800",
      "Self-Confidence": "bg-green-100 text-green-800",
      "Social Skills": "bg-blue-100 text-blue-800",
      "Mental Health": "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Talk Podcasts</h2>
        <p className="text-lg text-gray-600">
          Honest conversations with experts who get it. No BS, just real advice for real situations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            size="sm"
            className={selectedCategory === category 
              ? "bg-gradient-to-r from-green-600 to-blue-600" 
              : "border-green-200 hover:border-green-400"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Section */}
      {selectedCategory === "All" && (
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Featured This Week
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.filter(p => p.featured).map((podcast) => (
              <PodcastCard 
                key={podcast.id} 
                podcast={podcast} 
                isPlaying={playingId === podcast.id}
                onPlayPause={() => handlePlayPause(podcast.id)}
                getCategoryColor={getCategoryColor}
                featured
              />
            ))}
          </div>
        </div>
      )}

      {/* All Episodes */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {selectedCategory === "All" ? "All Episodes" : `${selectedCategory} Episodes`}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map((podcast) => (
            <PodcastCard 
              key={podcast.id} 
              podcast={podcast} 
              isPlaying={playingId === podcast.id}
              onPlayPause={() => handlePlayPause(podcast.id)}
              getCategoryColor={getCategoryColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PodcastCard = ({ podcast, isPlaying, onPlayPause, getCategoryColor, featured = false }: {
  podcast: any;
  isPlaying: boolean;
  onPlayPause: () => void;
  getCategoryColor: (category: string) => string;
  featured?: boolean;
}) => {
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${
      featured ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50" : "border-green-100"
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge className={getCategoryColor(podcast.category)}>
            {podcast.category}
          </Badge>
          {featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
        </div>
        <CardTitle className="text-lg leading-snug">{podcast.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">by {podcast.host}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">{podcast.description}</p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {podcast.duration}
            </div>
            <div>{podcast.listens} listens</div>
          </div>
          
          <Button 
            onClick={onPlayPause}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? "Pause" : "Listen Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTalkPodcasts;
