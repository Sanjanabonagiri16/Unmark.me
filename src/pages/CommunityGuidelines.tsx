
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Heart, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const CommunityGuidelines = () => {
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Respect & Empathy",
      description: "Treat every member with kindness and understanding. We're all here to grow and support each other."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Safe Space",
      description: "Maintain a judgment-free environment where everyone feels secure to share their experiences."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Inclusive Community",
      description: "Welcome all identities, backgrounds, and experiences. Diversity makes us stronger."
    }
  ];

  const doList = [
    "Be respectful and kind in all interactions",
    "Listen actively and respond thoughtfully",
    "Share your experiences to help others",
    "Use content warnings for sensitive topics",
    "Report inappropriate behavior to moderators",
    "Respect privacy - don't share personal info without permission",
    "Support others' growth and celebrate their wins",
    "Ask for help when you need it"
  ];

  const dontList = [
    "Engage in harassment, bullying, or hate speech",
    "Share explicit content or graphic imagery",
    "Give medical or professional advice",
    "Promote harmful substances or dangerous behaviors",
    "Spam or post irrelevant content",
    "Share personal information of others",
    "Engage in romantic or sexual conversations",
    "Minimize or dismiss others' experiences"
  ];

  const reportingSteps = [
    "Document the incident (screenshots if needed)",
    "Use the report function on the post/message",
    "Contact moderators directly if urgent",
    "Provide detailed information about the violation",
    "Allow time for investigation and response"
  ];

  const consequences = [
    {
      level: "First Warning",
      action: "Private message from moderator",
      description: "Education about community guidelines"
    },
    {
      level: "Second Warning",
      action: "Temporary restriction",
      description: "Limited posting privileges for 24-48 hours"
    },
    {
      level: "Serious Violation",
      action: "Temporary suspension",
      description: "Account suspended for 1-7 days"
    },
    {
      level: "Severe/Repeated",
      action: "Permanent ban",
      description: "Account permanently removed from community"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Guidelines</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating a safe, supportive space for authentic connections and emotional growth
        </p>
      </div>

      {/* Core Values */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-6 h-6 mr-2 text-green-600" />
            Our Core Values
          </CardTitle>
          <CardDescription>
            The principles that guide our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Do's and Don'ts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <CheckCircle className="w-6 h-6 mr-2" />
              Do's - Encouraged Behavior
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {doList.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <XCircle className="w-6 h-6 mr-2" />
              Don'ts - Prohibited Behavior
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dontList.map((item, index) => (
                <div key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reporting Process */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
            Reporting Violations
          </CardTitle>
          <CardDescription>
            How to report inappropriate behavior or content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Reporting Steps:</h3>
              <div className="space-y-3">
                {reportingSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">What to Report:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Harassment or bullying behavior</li>
                <li>• Hate speech or discrimination</li>
                <li>• Inappropriate sexual content</li>
                <li>• Spam or self-promotion</li>
                <li>• Threats or violent language</li>
                <li>• Sharing of personal information</li>
                <li>• Misinformation or harmful advice</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Consequences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Enforcement & Consequences
          </CardTitle>
          <CardDescription>
            Progressive consequences for guideline violations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {consequences.map((consequence, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-blue-100 text-blue-800">{consequence.level}</Badge>
                  <h3 className="font-semibold text-blue-800 mb-2">{consequence.action}</h3>
                  <p className="text-sm text-gray-600">{consequence.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Severe violations (threats, doxxing, illegal content) may result in immediate permanent bans and reporting to appropriate authorities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityGuidelines;
