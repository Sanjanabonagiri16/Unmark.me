
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Cookie, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  const dataTypes = [
    {
      category: "Account Information",
      items: ["Email address", "Username", "Age (optional)", "Profile preferences"],
      icon: <Database className="w-5 h-5 text-blue-500" />
    },
    {
      category: "Mood & Wellness Data",
      items: ["Daily mood check-ins", "Journal entries", "Progress tracking", "Challenge participation"],
      icon: <Eye className="w-5 h-5 text-green-500" />
    },
    {
      category: "Community Interactions",
      items: ["Circle participation", "Messages and posts", "Support interactions", "Community preferences"],
      icon: <Mail className="w-5 h-5 text-purple-500" />
    },
    {
      category: "Technical Data",
      items: ["Device information", "Browser type", "IP address", "Usage analytics"],
      icon: <Cookie className="w-5 h-5 text-orange-500" />
    }
  ];

  const rights = [
    "Access your personal data we hold",
    "Correct inaccurate or incomplete data",
    "Delete your account and associated data",
    "Export your data in a portable format",
    "Restrict processing of your data",
    "Object to certain data processing",
    "Withdraw consent at any time"
  ];

  const securityMeasures = [
    "End-to-end encryption for sensitive data",
    "Regular security audits and monitoring",
    "Multi-factor authentication options",
    "Secure data centers with 24/7 monitoring",
    "Regular staff security training",
    "Incident response procedures"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your privacy and data security are fundamental to our mission of creating a safe space for emotional growth
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: December 18, 2024</p>
      </div>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-green-600" />
            Our Commitment to Your Privacy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            At Unmark.me, we understand that sharing personal and emotional information requires trust. This privacy policy 
            explains how we collect, use, protect, and respect your personal information when you use our platform.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Privacy First</h3>
              <p className="text-sm text-green-600">Your data is protected with industry-leading security</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Full Transparency</h3>
              <p className="text-sm text-blue-600">Clear information about what we collect and why</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">Your Control</h3>
              <p className="text-sm text-purple-600">You decide what to share and can delete data anytime</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
          <CardDescription>
            We only collect information that helps us provide better support and improve our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    {type.icon}
                    <h3 className="font-semibold ml-2">{type.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How We Use Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-700">Essential Platform Functions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide mood tracking and wellness tools</li>
                <li>• Enable community circle participation</li>
                <li>• Deliver personalized content and recommendations</li>
                <li>• Send important notifications and reminders</li>
                <li>• Provide customer support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Platform Improvement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Analyze usage patterns to improve features</li>
                <li>• Conduct research on mental health trends (anonymized)</li>
                <li>• Enhance security and prevent abuse</li>
                <li>• Develop new wellness tools and resources</li>
                <li>• Optimize platform performance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Sharing */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Data Sharing and Disclosure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-red-800 mb-2">We DO NOT sell your personal data</h3>
            <p className="text-red-700 text-sm">
              Your personal information, especially sensitive mental health data, is never sold to third parties for marketing or profit.
            </p>
          </div>
          
          <h3 className="font-semibold mb-3">Limited Sharing Occurs Only For:</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-green-800">Emergency Situations</h4>
              <p className="text-sm text-gray-600">If we believe there's immediate risk of harm to you or others, we may contact emergency services</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-blue-800">Legal Requirements</h4>
              <p className="text-sm text-gray-600">When required by law, court order, or to protect our legal rights</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-purple-800">Service Providers</h4>
              <p className="text-sm text-gray-600">Trusted partners who help operate our platform (with strict data protection agreements)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Privacy Rights</CardTitle>
          <CardDescription>
            You have full control over your personal information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Your Rights Include:</h3>
              <div className="space-y-2">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{right}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">How to Exercise Your Rights:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Account Settings</h4>
                  <p className="text-sm text-gray-600">Access and modify most data through your profile</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Contact Support</h4>
                  <p className="text-sm text-gray-600">Email privacy@unmark.me for data requests</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Account Deletion</h4>
                  <p className="text-sm text-gray-600">Delete your account and all data from settings</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Data Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            We implement comprehensive security measures to protect your sensitive information:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-blue-800">{measure}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="w-6 h-6 mr-2 text-green-600" />
            Questions About Privacy?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Privacy Officer</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>privacy@unmark.me</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>1-800-UNMARK-1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-gray-600 text-sm">
                We respond to privacy inquiries within 30 days. For urgent matters related to data security or 
                unauthorized access, we aim to respond within 72 hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
