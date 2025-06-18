
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Phone, Mail, Book, Users, Settings, Heart } from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: <Book className="w-4 h-4" /> },
    { id: "account", name: "Account", icon: <Settings className="w-4 h-4" /> },
    { id: "community", name: "Community", icon: <Users className="w-4 h-4" /> },
    { id: "mental-health", name: "Mental Health", icon: <Heart className="w-4 h-4" /> },
    { id: "technical", name: "Technical", icon: <Settings className="w-4 h-4" /> }
  ];

  const faqs = [
    {
      category: "account",
      question: "How do I create an account?",
      answer: "Click 'Sign Up' on any page, enter your email and password, and verify your email address. You'll be guided through setting up your profile."
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your email, and follow the reset link sent to your inbox."
    },
    {
      category: "community",
      question: "How do I join a community circle?",
      answer: "Navigate to the Circles page, browse available groups, and click 'Join' on any circle that interests you. Some circles may require approval."
    },
    {
      category: "community",
      question: "What are the community guidelines?",
      answer: "Our community guidelines ensure a safe, respectful space. Key rules include being kind, respecting privacy, and avoiding harmful content. View full guidelines in the footer."
    },
    {
      category: "mental-health",
      question: "Is this platform a replacement for therapy?",
      answer: "No, we're a supportive community and wellness tool, not professional therapy. For serious mental health concerns, please consult a licensed professional."
    },
    {
      category: "mental-health",
      question: "How do I track my mood effectively?",
      answer: "Use our daily mood check-ins, be honest about your feelings, and review your trends regularly. Consistency helps identify patterns and triggers."
    },
    {
      category: "technical",
      question: "Why isn't the app loading properly?",
      answer: "Try refreshing the page, clearing your browser cache, or checking your internet connection. If issues persist, contact our support team."
    },
    {
      category: "technical",
      question: "How do I update my notification settings?",
      answer: "Go to your profile settings and adjust your notification preferences for check-in reminders, community updates, and other alerts."
    }
  ];

  const contactOptions = [
    {
      method: "Live Chat",
      description: "Get instant help from our support team",
      availability: "9 AM - 5 PM EST",
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />
    },
    {
      method: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      icon: <Mail className="w-6 h-6 text-green-500" />
    },
    {
      method: "Crisis Hotline",
      description: "Immediate help for mental health emergencies",
      availability: "24/7 Available",
      icon: <Phone className="w-6 h-6 text-red-500" />
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions and get support when you need it
        </p>
      </div>

      {/* Search */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Browse by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            {filteredFaqs.length} article{filteredFaqs.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    <Badge variant="outline" className="ml-2">
                      {categories.find(cat => cat.id === faq.category)?.name}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No articles found matching your search. Try different keywords or browse by category.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Can't find what you're looking for? Get in touch with our team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-4 text-center">
                  <div className="mb-3">{option.icon}</div>
                  <h3 className="font-semibold mb-2">{option.method}</h3>
                  <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                  <Badge variant="outline">{option.availability}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-lg">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea 
                placeholder="Describe your issue or question in detail..."
                className="min-h-[120px]"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpCenter;
