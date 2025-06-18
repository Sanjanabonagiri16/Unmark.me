
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Heart, ExternalLink, AlertTriangle, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";

const MentalHealthResources = () => {
  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support for people in distress",
      available: "24/7"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 support for those in crisis",
      available: "24/7"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      available: "24/7"
    }
  ];

  const mentalHealthApps = [
    {
      name: "Headspace",
      description: "Meditation and mindfulness for mental wellness",
      category: "Meditation"
    },
    {
      name: "BetterHelp",
      description: "Professional counseling and therapy online",
      category: "Therapy"
    },
    {
      name: "Calm",
      description: "Sleep stories, meditation, and relaxation",
      category: "Relaxation"
    },
    {
      name: "Sanvello",
      description: "Mood and anxiety tracker with coping tools",
      category: "Mood Tracking"
    }
  ];

  const selfCareStrategies = [
    "Practice deep breathing exercises daily",
    "Maintain a regular sleep schedule",
    "Stay physically active with regular exercise",
    "Connect with supportive friends and family",
    "Limit alcohol and avoid drugs",
    "Practice mindfulness and meditation",
    "Keep a daily gratitude journal",
    "Set realistic goals and expectations"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex items-center justify-between mb-12">
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support and resources for your wellbeing journey
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Crisis Support */}
      <Card className="mb-8 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Crisis Support - Get Help Now
          </CardTitle>
          <CardDescription className="text-red-700">
            If you're having thoughts of suicide or self-harm, reach out immediately. You're not alone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="border-red-300">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-800 mb-2">{resource.name}</h3>
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-red-600" />
                    <span className="font-bold text-red-700">{resource.number}</span>
                  </div>
                  <p className="text-sm text-red-600 mb-2">{resource.description}</p>
                  <Badge variant="outline" className="text-red-700 border-red-300">
                    <Clock className="w-3 h-3 mr-1" />
                    {resource.available}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mental Health Apps */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
            Recommended Mental Health Apps
          </CardTitle>
          <CardDescription>
            Digital tools to support your mental health journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentalHealthApps.map((app, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">{app.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                  <Badge className="bg-blue-100 text-blue-800">{app.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Self-Care Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-6 h-6 mr-2 text-green-600" />
            Daily Self-Care Strategies
          </CardTitle>
          <CardDescription>
            Simple practices to maintain your mental wellbeing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {selfCareStrategies.map((strategy, index) => (
              <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{strategy}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Help */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Finding Professional Help</CardTitle>
          <CardDescription>
            When to seek professional support and how to find the right therapist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Consider therapy if you experience:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Persistent feelings of sadness or anxiety</li>
                <li>• Difficulty managing daily activities</li>
                <li>• Relationship or social problems</li>
                <li>• Substance use concerns</li>
                <li>• Trauma or loss</li>
                <li>• Thoughts of self-harm</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">How to find a therapist:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ask your doctor for referrals</li>
                <li>• Check with your insurance provider</li>
                <li>• Use online directories (Psychology Today)</li>
                <li>• Contact local mental health centers</li>
                <li>• Ask trusted friends or family</li>
                <li>• Consider online therapy platforms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentalHealthResources;
