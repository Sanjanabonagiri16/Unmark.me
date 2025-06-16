
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Brain, Heart, ArrowRight, Star } from "lucide-react";

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "emotional", name: "Emotional Health", icon: Heart },
    { id: "relationships", name: "Relationships", icon: Users },
    { id: "confidence", name: "Building Confidence", icon: Star },
    { id: "mindset", name: "Mindset", icon: Brain }
  ];

  const resources = [
    {
      id: 1,
      title: "Breaking the 'Man Up' Myth",
      description: "Why emotional expression isn't weakness - it's strength",
      category: "emotional",
      readTime: "5 min read",
      featured: true,
      content: "Traditional masculinity often tells us to suppress emotions, but research shows that emotional intelligence is one of the strongest predictors of success..."
    },
    {
      id: 2,
      title: "Healthy Communication in Relationships",
      description: "How to express your needs without being 'needy'",
      category: "relationships",
      readTime: "7 min read",
      featured: false,
      content: "Many men struggle with the balance between being vulnerable and maintaining boundaries..."
    },
    {
      id: 3,
      title: "Building Authentic Confidence",
      description: "Confidence that doesn't rely on putting others down",
      category: "confidence",
      readTime: "6 min read",
      featured: true,
      content: "True confidence comes from self-acceptance and genuine accomplishment, not from dominance or aggression..."
    },
    {
      id: 4,
      title: "Dealing with Peer Pressure",
      description: "Standing up for your values when others don't get it",
      category: "mindset",
      readTime: "4 min read",
      featured: false,
      content: "It's tough when your friend group doesn't support your growth. Here's how to navigate those challenging situations..."
    },
    {
      id: 5,
      title: "Understanding Your Anger",
      description: "What anger is really telling you and how to channel it",
      category: "emotional",
      readTime: "8 min read",
      featured: true,
      content: "Anger often masks other emotions like hurt, disappointment, or fear. Learning to identify these underlying feelings..."
    },
    {
      id: 6,
      title: "Building Real Friendships",
      description: "Moving beyond surface-level 'bro' relationships",
      category: "relationships",
      readTime: "6 min read",
      featured: false,
      content: "Deep friendships require vulnerability and mutual support, which can feel scary when you're used to keeping things light..."
    }
  ];

  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Growth</h2>
        <p className="text-lg text-gray-600">
          Practical guides to help you break free from toxic stereotypes and build authentic strength.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? "bg-gradient-to-r from-green-600 to-blue-600" 
                  : "border-green-200 hover:border-green-400"
              }`}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          );
        })}
      </div>

      {/* Featured Resources */}
      {selectedCategory === "all" && (
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Featured This Week
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.filter(r => r.featured).map((resource) => (
              <ResourceCard key={resource.id} resource={resource} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Resources */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {selectedCategory === "all" ? "All Resources" : `${categories.find(c => c.id === selectedCategory)?.name} Resources`}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Support?</h3>
        <p className="text-gray-600 mb-6">
          Sometimes reading isn't enough. Connect with others who understand your journey.
        </p>
        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
          Join Community Discussions
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource, featured = false }: { 
  resource: any; 
  featured?: boolean; 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      emotional: "bg-red-100 text-red-800",
      relationships: "bg-blue-100 text-blue-800",
      confidence: "bg-green-100 text-green-800",
      mindset: "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
      featured ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50" : "border-green-100"
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge className={getCategoryColor(resource.category)}>
            {resource.category}
          </Badge>
          {featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
        </div>
        <CardTitle className="text-lg leading-snug">{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-500">{resource.readTime}</div>
          
          {isExpanded && (
            <div className="text-sm text-gray-700 leading-relaxed">
              {resource.content}
            </div>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full border-green-200 hover:border-green-400"
          >
            {isExpanded ? "Show Less" : "Read More"}
            <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
