
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Headphones, MessageCircle, Phone, Heart, Home, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Crisis Support",
      icon: <Phone className="w-8 h-8 text-red-500" />,
      description: "Immediate help when you need it most",
      resources: [
        { name: "National Suicide Prevention Lifeline", contact: "988", available: "24/7" },
        { name: "Crisis Text Line", contact: "Text HOME to 741741", available: "24/7" },
        { name: "SAMHSA Helpline", contact: "1-800-662-4357", available: "24/7" }
      ],
      link: "/crisis-support",
      urgent: true
    },
    {
      title: "Mental Health Resources",
      icon: <Heart className="w-8 h-8 text-green-500" />,
      description: "Professional support and self-care tools",
      resources: [
        { name: "Find a Therapist", contact: "Psychology Today", available: "Online" },
        { name: "BetterHelp", contact: "Online Therapy", available: "24/7" },
        { name: "Headspace", contact: "Meditation App", available: "Always" }
      ],
      link: "/mental-health-resources",
      urgent: false
    },
    {
      title: "Educational Content",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      description: "Learn about mental health and emotional wellbeing",
      resources: [
        { name: "Men's Mental Health Guide", contact: "Free PDF", available: "Download" },
        { name: "Emotional Intelligence Course", contact: "BroCademy", available: "Free" },
        { name: "Relationship Building", contact: "Video Series", available: "Online" }
      ],
      link: "/?section=brocademy",
      urgent: false
    },
    {
      title: "Community Support",
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      description: "Connect with others on similar journeys",
      resources: [
        { name: "Support Groups", contact: "Community Circles", available: "Daily" },
        { name: "Peer Mentorship", contact: "Brotherhood Program", available: "Weekly" },
        { name: "Discussion Forums", contact: "Safe Spaces", available: "24/7" }
      ],
      link: "/?section=circles",
      urgent: false
    }
  ];

  const featuredResources = [
    {
      title: "The Complete Guide to Men's Mental Health",
      type: "E-book",
      description: "A comprehensive guide covering depression, anxiety, relationships, and self-care",
      rating: 4.8,
      downloads: "15K+",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Mindfulness for Young Men",
      type: "Audio Course",
      description: "10-part audio series on meditation and stress management",
      rating: 4.9,
      downloads: "8.7K+",
      icon: <Headphones className="w-6 h-6 text-green-500" />
    },
    {
      title: "Breaking the Silence",
      type: "Documentary",
      description: "Stories of young men overcoming mental health challenges",
      rating: 4.7,
      downloads: "22K+",
      icon: <Video className="w-6 h-6 text-purple-500" />
    }
  ];

  const professionalHelp = [
    {
      service: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists",
      when: "Persistent mental health concerns, trauma, or major life changes",
      howToFind: "Psychology Today, insurance provider directories, local mental health centers"
    },
    {
      service: "Group Therapy",
      description: "Therapeutic sessions with others facing similar challenges",
      when: "Social anxiety, addiction recovery, grief, or relationship issues",
      howToFind: "Mental health clinics, community centers, specialized treatment programs"
    },
    {
      service: "Psychiatric Care",
      description: "Medical evaluation and medication management",
      when: "Severe depression, anxiety, bipolar disorder, or other diagnosed conditions",
      howToFind: "Referrals from primary care doctors, mental health professionals"
    },
    {
      service: "Crisis Intervention",
      description: "Immediate support during mental health emergencies",
      when: "Thoughts of self-harm, severe panic attacks, or acute mental health crises",
      howToFind: "Crisis hotlines (988), emergency rooms, mobile crisis teams"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-xl text-gray-600">
            Comprehensive support tools, professional help, and community resources for your wellbeing journey
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Crisis Alert */}
      <Card className="mb-8 border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">In Crisis? Get Help Now</h3>
                <p className="text-red-700">Call 988 - National Suicide Prevention Lifeline (24/7)</p>
              </div>
            </div>
            <Link to="/crisis-support">
              <Button className="bg-red-600 hover:bg-red-700 hover-scale">
                Crisis Resources
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Resource Categories */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {resourceCategories.map((category, index) => (
          <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${
            category.urgent ? "border-red-200" : "border-gray-200"
          }`}>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                {category.icon}
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{resource.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{resource.contact}</span>
                      <Badge variant="outline" className="text-xs">
                        {resource.available}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={category.link}>
                <Button className={`w-full hover-scale ${
                  category.urgent
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Resources
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-600" />
            Featured Resources
          </CardTitle>
          <CardDescription>
            Popular and highly-rated resources from our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  {resource.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                </div>
                <Button size="sm" variant="outline" className="w-full hover-scale">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Resource
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Help Guide */}
      <Card>
        <CardHeader>
          <CardTitle>When to Seek Professional Help</CardTitle>
          <CardDescription>
            Understanding different types of mental health support and when to access them
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {professionalHelp.map((help, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{help.service}</h3>
                <p className="text-gray-600 mb-3">{help.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-1">When to consider:</h4>
                    <p className="text-sm text-gray-600">{help.when}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-1">How to find:</h4>
                    <p className="text-sm text-gray-600">{help.howToFind}</p>
                  </div>
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
          <h3 className="text-xl font-semibold mb-2">You're Not Alone</h3>
          <p className="text-gray-600 mb-4">
            Remember that seeking help is a sign of strength, not weakness. Every step toward mental wellness matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/?section=checkin">
              <Button className="bg-green-600 hover:bg-green-700 hover-scale">
                Start Daily Check-in
              </Button>
            </Link>
            <Link to="/?section=circles">
              <Button variant="outline" className="hover-scale">
                Join Community
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesSection;
