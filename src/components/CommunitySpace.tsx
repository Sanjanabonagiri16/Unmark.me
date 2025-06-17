
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Heart, Users, Clock, Shield, User, LogOut } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const CommunitySpace = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();

  // Mock community posts for demonstration
  const [posts] = useState([
    {
      id: 1,
      author: "Alex_M",
      timeAgo: "2 hours ago",
      content: "Had a tough week but finally opened up to my dad about my anxiety. It went better than expected. Sometimes the conversations we're most afraid of are the ones we need most.",
      likes: 12,
      replies: 3,
      tags: ["breakthrough", "family"]
    },
    {
      id: 2,
      author: "Jordan_K",
      timeAgo: "5 hours ago",
      content: "Started therapy last month and it's been game-changing. To anyone on the fence about it - it's okay to ask for help. It's actually brave.",
      likes: 18,
      replies: 7,
      tags: ["therapy", "support"]
    },
    {
      id: 3,
      author: "Sam_R",
      timeAgo: "1 day ago",
      content: "Been working on expressing emotions instead of bottling them up. It's hard but I'm learning that vulnerability is actually strength, not weakness.",
      likes: 25,
      replies: 12,
      tags: ["growth", "emotions"]
    }
  ]);

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
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <h2 className="text-3xl font-bold text-gray-900">Community Space</h2>
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
          Connect with others on similar journeys. Share, support, and grow together.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                Community Feed
              </CardTitle>
              <CardDescription>
                Real stories, experiences, and support from the brotherhood
              </CardDescription>
            </CardHeader>
          </Card>

          {posts.map((post) => (
            <Card key={post.id} className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-green-100 text-green-600">
                      {post.author.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900">{post.author}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.timeAgo}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </button>
                        <button className="flex items-center hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.replies}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Be respectful and supportive</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>No judgment or toxic masculinity</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Share authentic experiences</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Maintain anonymity if needed</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-500" />
                Active Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">1,247</div>
                <p className="text-sm text-gray-600">Members supporting each other</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Share Your Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Ready to share your experience or ask for support?
              </p>
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Create Post
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySpace;
