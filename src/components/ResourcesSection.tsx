
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Globe, Heart, Shield, Users } from "lucide-react";

const ResourcesSection = () => {
  const emergencyResources = [
    {
      title: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support",
      icon: <Phone className="w-5 h-5 text-red-500" />
    },
    {
      title: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 text-based crisis support",
      icon: <MessageCircle className="w-5 h-5 text-blue-500" />
    },
    {
      title: "SAMHSA Helpline",
      phone: "1-800-662-4357",
      description: "Mental health and substance abuse help",
      icon: <Phone className="w-5 h-5 text-green-500" />
    }
  ];

  const mentalHealthResources = [
    {
      title: "HeadsUpGuys",
      url: "https://headsupguys.org",
      description: "Mental health resource specifically for men",
      category: "Men's Mental Health"
    },
    {
      title: "Man Therapy",
      url: "https://mantherapy.org",
      description: "Mental health resources with a masculine approach",
      category: "Therapy"
    },
    {
      title: "BetterHelp",
      url: "https://betterhelp.com",
      description: "Online counseling and therapy services",
      category: "Professional Help"
    },
    {
      title: "Psychology Today",
      url: "https://psychologytoday.com",
      description: "Find therapists and mental health professionals",
      category: "Professional Help"
    }
  ];

  const selfCareResources = [
    {
      title: "Mindfulness and Meditation",
      items: ["Headspace", "Calm", "Insight Timer", "Ten Percent Happier"]
    },
    {
      title: "Physical Wellness",
      items: ["Regular exercise routine", "Adequate sleep (7-9 hours)", "Balanced nutrition", "Time in nature"]
    },
    {
      title: "Social Connection",
      items: ["Call a friend", "Join hobby groups", "Volunteer", "Family time"]
    },
    {
      title: "Creative Outlets",
      items: ["Music", "Art", "Writing", "Cooking", "Building/Making"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mental Health Resources</h2>
        <p className="text-lg text-gray-600">
          Professional support, crisis resources, and self-care tools for your journey
        </p>
      </div>

      {/* Emergency Resources */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-red-500 mr-2" />
          <h3 className="text-2xl font-bold text-red-600">Crisis & Emergency Support</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {emergencyResources.map((resource, index) => (
            <Card key={index} className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {resource.icon}
                  <span className="ml-2">{resource.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 mb-2">{resource.phone}</div>
                <p className="text-gray-700">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Professional Resources */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Heart className="w-6 h-6 text-green-500 mr-2" />
          <h3 className="text-2xl font-bold text-green-600">Professional Mental Health Resources</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {mentalHealthResources.map((resource, index) => (
            <Card key={index} className="border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {resource.category}
                  </Badge>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => window.open(resource.url, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Self-Care Resources */}
      <div>
        <div className="flex items-center mb-6">
          <Users className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-2xl font-bold text-blue-600">Self-Care & Wellness Tools</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {selfCareResources.map((category, index) => (
            <Card key={index} className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <Shield className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
            <p className="text-yellow-700">
              If you're experiencing thoughts of self-harm or suicide, please reach out for immediate help. 
              These resources are not a substitute for professional medical care. Always consult with healthcare 
              professionals for serious mental health concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
