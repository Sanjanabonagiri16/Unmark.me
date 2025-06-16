
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { MessageCircle, Heart, Share2, Shield, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommunitySpace = () => {
  const [newPost, setNewPost] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!newPost.trim()) {
      toast({
        title: "Please write something to share",
        description: "Your voice matters - don't be afraid to express yourself.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Post shared successfully! 🙌",
      description: "Thank you for contributing to our supportive community.",
    });

    setNewPost("");
  };

  const communityPosts = [
    {
      id: 1,
      author: "Anonymous",
      avatar: "A",
      timeAgo: "2 hours ago",
      content: "Just wanted to say that this community has helped me realize it's okay to not be okay sometimes. I used to think I had to have everything figured out by now (I'm 19), but talking to you all has shown me that growth is a process, not a destination.",
      likes: 23,
      replies: 7,
      tags: ["growth", "self-acceptance"]
    },
    {
      id: 2,
      author: "Mike_22",
      avatar: "M",
      timeAgo: "5 hours ago",
      content: "Had my first therapy session today. Scared as hell but I did it. For anyone on the fence about it - it's not as scary as you think. My therapist didn't judge me at all when I talked about feeling lost after high school.",
      likes: 45,
      replies: 12,
      tags: ["therapy", "courage", "mental-health"]
    },
    {
      id: 3,
      author: "Anonymous",
      avatar: "?",
      timeAgo: "1 day ago",
      content: "My dad still tells me to 'man up' when I try to talk about my feelings. It hurts, but I'm learning that his reaction is about his own struggles, not about me being weak. Thanks to everyone here who reminded me of that.",
      likes: 67,
      replies: 15,
      tags: ["family", "toxic-masculinity", "healing"]
    },
    {
      id: 4,
      author: "Jay_Student",
      avatar: "J",
      timeAgo: "2 days ago",
      content: "Update: I finally told my best friend that some of the jokes he makes actually hurt my feelings. He apologized and said he didn't realize. Sometimes people surprise you when you give them the chance. Real friends will respect your boundaries.",
      likes: 34,
      replies: 9,
      tags: ["friendship", "boundaries", "communication"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Space</h2>
        <p className="text-lg text-gray-600">
          Share your journey, support others, and connect with people who get it.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="text-center border-green-100">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-green-600">892</div>
            <div className="text-sm text-gray-600">Active members</div>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-100">
          <CardContent className="pt-6">
            <MessageCircle className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-600">2.3k</div>
            <div className="text-sm text-gray-600">Supportive messages</div>
          </CardContent>
        </Card>
        <Card className="text-center border-purple-100">
          <CardContent className="pt-6">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-600">94%</div>
            <div className="text-sm text-gray-600">Feel more supported</div>
          </CardContent>
        </Card>
      </div>

      {/* Share Your Thoughts */}
      <Card className="mb-8 border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Share2 className="w-5 h-5 mr-2 text-green-600" />
            Share Your Thoughts
          </CardTitle>
          <CardDescription>
            This is a safe space. Your experiences can help others feel less alone.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What's on your mind? Share a win, a struggle, or just how you're feeling..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[120px] border-green-200 focus:border-green-500"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
                id="anonymous"
              />
              <label htmlFor="anonymous" className="text-sm text-gray-600 flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Post anonymously
              </label>
            </div>
            
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Share Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Community Guidelines */}
      <Card className="mb-8 border-yellow-100 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-800">
            <Shield className="w-5 h-5 mr-2" />
            Community Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• Be respectful and supportive - we're all figuring it out together</li>
            <li>• No toxic masculinity, homophobia, or putting others down</li>
            <li>• Share your real experiences - authenticity helps everyone</li>
            <li>• Report anything that makes you uncomfortable</li>
          </ul>
        </CardContent>
      </Card>

      {/* Community Posts */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Posts</h3>
        
        {communityPosts.map((post) => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const CommunityPost = ({ post }: { post: any }) => {
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <Card className="border-green-100 hover:border-green-200 transition-colors">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
              {post.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">{post.author}</span>
              <span className="text-sm text-gray-500">{post.timeAgo}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs border-green-200 text-green-700">
              #{tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLiked(!liked)}
              className={`${liked ? "text-red-600" : "text-gray-500"} hover:text-red-600`}
            >
              <Heart className={`w-4 h-4 mr-1 ${liked ? "fill-current" : ""}`} />
              {post.likes + (liked ? 1 : 0)}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReplies(!showReplies)}
              className="text-gray-500 hover:text-blue-600"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.replies} replies
            </Button>
          </div>
        </div>
        
        {showReplies && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500 italic">
              Replies coming soon! We're working on building this feature.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommunitySpace;
