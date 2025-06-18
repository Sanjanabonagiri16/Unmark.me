
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const TermsOfService = () => {
  const userResponsibilities = [
    "Provide accurate information during registration",
    "Maintain the security of your account credentials",
    "Use the platform respectfully and in good faith",
    "Follow community guidelines and safety rules",
    "Respect other users' privacy and boundaries",
    "Report inappropriate behavior or content",
    "Keep your contact information up to date"
  ];

  const prohibitedActivities = [
    "Harassment, bullying, or threatening behavior",
    "Sharing explicit, violent, or harmful content",
    "Impersonating others or creating fake accounts",
    "Sharing personal information of other users",
    "Attempting to hack or disrupt the platform",
    "Commercial solicitation or spam",
    "Providing medical advice without credentials",
    "Promoting illegal activities or substances"
  ];

  const accountTermination = [
    {
      reason: "Voluntary Deletion",
      description: "You can delete your account anytime through settings",
      consequence: "All data permanently removed within 30 days"
    },
    {
      reason: "Community Violations",
      description: "Repeated violations of community guidelines",
      consequence: "Account suspended or permanently banned"
    },
    {
      reason: "Safety Concerns",
      description: "Behavior that threatens user safety",
      consequence: "Immediate account suspension and possible legal action"
    },
    {
      reason: "Platform Discontinuation",
      description: "If we discontinue the service",
      consequence: "30-day notice provided, data export available"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding your rights and responsibilities when using Unmark.me
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Last updated: December 18, 2024 | Effective Date: December 18, 2024
        </p>
      </div>

      {/* Agreement Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-6 h-6 mr-2 text-blue-600" />
            Agreement Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            By using Unmark.me, you agree to these terms of service. This agreement governs your use of our platform, 
            including all features, tools, and community spaces designed to support mental wellness and emotional growth.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Important Notice</h3>
            <p className="text-blue-700 text-sm">
              Unmark.me is a peer support platform and wellness tool. We are not a substitute for professional 
              mental health treatment. If you're experiencing a crisis, please contact emergency services or a 
              mental health professional immediately.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Platform Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Platform Description and Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-700">Our Services Include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily mood tracking and emotional check-ins</li>
                <li>• Peer support community circles</li>
                <li>• Educational content and life skills courses</li>
                <li>• Personal growth challenges and activities</li>
                <li>• Mental health resources and crisis support</li>
                <li>• Safe space for sharing and connection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-orange-700">Service Limitations:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Not a replacement for professional therapy</li>
                <li>• No medical diagnosis or treatment provided</li>
                <li>• 24/7 support limited to crisis resources</li>
                <li>• Community moderation may have delays</li>
                <li>• Technical issues may temporarily limit access</li>
                <li>• Content may be removed for safety reasons</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Responsibilities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
            Your Responsibilities
          </CardTitle>
          <CardDescription>
            To maintain a safe and supportive community for everyone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userResponsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{responsibility}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prohibited Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <XCircle className="w-6 h-6 mr-2 text-red-600" />
            Prohibited Activities
          </CardTitle>
          <CardDescription>
            Activities that violate our terms and may result in account suspension
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {prohibitedActivities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <p className="text-red-800 text-sm">
              <strong>Zero Tolerance:</strong> We have zero tolerance for behavior that threatens user safety, 
              including threats of violence, doxxing, or encouraging self-harm. Such violations result in 
              immediate account termination and may be reported to authorities.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Privacy and Data Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Your Data Rights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Control what information you share</li>
                <li>• Access and download your data</li>
                <li>• Delete your account and data anytime</li>
                <li>• Report data misuse or security concerns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Our Commitments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never sell your personal data</li>
                <li>• Use industry-standard security measures</li>
                <li>• Transparent about data collection and use</li>
                <li>• Regular security audits and updates</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              For detailed information about how we handle your data, please review our 
              <span className="font-semibold"> Privacy Policy</span>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account Termination */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
            Account Termination
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accountTermination.map((item, index) => (
              <Card key={index} className="border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-orange-800">{item.reason}</h3>
                    <Badge variant="outline">{item.reason.includes('Voluntary') ? 'User Choice' : 'Platform Action'}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <p className="text-orange-700 text-sm font-medium">{item.consequence}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Important Disclaimers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-800 mb-2">Medical Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                Content on this platform is for informational and support purposes only. It does not constitute 
                medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for 
                medical concerns.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-2">Community Content</h3>
              <p className="text-blue-700 text-sm">
                User-generated content reflects individual experiences and opinions, not platform endorsements. 
                We moderate content but cannot guarantee accuracy or appropriateness of all user posts.
              </p>
            </div>
            <div className="p-4 bg-red-50 border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 mb-2">Crisis Situations</h3>
              <p className="text-red-700 text-sm">
                In mental health emergencies, contact local emergency services (911) or crisis hotlines immediately. 
                Our platform cannot provide immediate emergency intervention.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Changes and Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Changes to Terms & Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Updates to Terms</h3>
              <p className="text-gray-600 text-sm mb-3">
                We may update these terms to reflect changes in our services or legal requirements. 
                Significant changes will be communicated through:
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Email notification to registered users</li>
                <li>• Platform notification banner</li>
                <li>• Updated "Last Modified" date</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Questions or Concerns?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Contact us about these terms of service:
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Email: legal@unmark.me</li>
                <li>• Support: support@unmark.me</li>
                <li>• Response time: Within 5 business days</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
