
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings, Shield, BarChart, Target } from "lucide-react";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      category: "Essential Cookies",
      purpose: "Required for basic platform functionality",
      examples: ["User authentication", "Security features", "Form submissions", "Session management"],
      canDisable: false,
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      category: "Analytics Cookies",
      purpose: "Help us understand how users interact with our platform",
      examples: ["Page views", "User journey tracking", "Feature usage", "Performance metrics"],
      canDisable: true,
      icon: <BarChart className="w-5 h-5 text-blue-500" />
    },
    {
      category: "Preference Cookies",
      purpose: "Remember your settings and preferences",
      examples: ["Language settings", "Theme preferences", "Notification settings", "Display options"],
      canDisable: true,
      icon: <Settings className="w-5 h-5 text-purple-500" />
    },
    {
      category: "Functional Cookies",
      purpose: "Enable enhanced functionality and personalization",
      examples: ["Mood tracking history", "Progress data", "Community preferences", "Content recommendations"],
      canDisable: true,
      icon: <Target className="w-5 h-5 text-orange-500" />
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website traffic analysis and user behavior insights",
      dataShared: "Anonymized usage data, page views, session duration",
      optOut: "Google Analytics Opt-out Browser Add-on"
    },
    {
      service: "Supabase",
      purpose: "Database and authentication services",
      dataShared: "User account data, encrypted session information",
      optOut: "Not applicable (essential service)"
    }
  ];

  const retentionPeriods = [
    { type: "Session Cookies", duration: "Browser session only", description: "Deleted when browser closes" },
    { type: "Authentication", duration: "30 days", description: "Keep you logged in across visits" },
    { type: "Preferences", duration: "1 year", description: "Remember your settings" },
    { type: "Analytics", duration: "2 years", description: "Track long-term usage trends" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding how we use cookies to improve your experience on Unmark.me
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: December 18, 2024</p>
      </div>

      {/* What Are Cookies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Cookie className="w-6 h-6 mr-2 text-orange-600" />
            What Are Cookies?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Cookies are small text files stored on your device when you visit websites. They help websites remember 
            information about your visit, making your experience more personalized and efficient.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Cookie className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-orange-800">Small Files</h3>
              <p className="text-sm text-orange-600">Tiny text files on your device</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Remember Settings</h3>
              <p className="text-sm text-blue-600">Keep your preferences across visits</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Secure & Private</h3>
              <p className="text-sm text-green-600">Cannot access personal files</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Cookies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Types of Cookies We Use</CardTitle>
          <CardDescription>
            Different categories of cookies serve different purposes on our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {type.icon}
                      <h3 className="font-semibold text-lg ml-2">{type.category}</h3>
                    </div>
                    <Badge variant={type.canDisable ? "outline" : "default"} className={type.canDisable ? "border-blue-300 text-blue-700" : "bg-green-100 text-green-800"}>
                      {type.canDisable ? "Optional" : "Required"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{type.purpose}</p>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Third-Party Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Third-Party Services</CardTitle>
          <CardDescription>
            External services that may place cookies when you use our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="font-semibold text-blue-800">{service.service}</h3>
                      <p className="text-sm text-blue-600">{service.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Data Shared:</h4>
                      <p className="text-sm text-gray-600">{service.dataShared}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Opt-out:</h4>
                      <p className="text-sm text-gray-600">{service.optOut}</p>
                    </div>
                    <div className="flex items-center">
                      {service.service === "Supabase" ? (
                        <Badge className="bg-red-100 text-red-800">Essential</Badge>
                      ) : (
                        <Badge variant="outline" className="border-blue-300 text-blue-700">Optional</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cookie Management */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="w-6 h-6 mr-2 text-purple-600" />
            Managing Your Cookie Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Platform Settings</h3>
              <p className="text-gray-600 text-sm mb-3">
                Control which optional cookies you allow through your account settings:
              </p>
              <Button className="mb-4 bg-purple-600 hover:bg-purple-700">
                <Settings className="w-4 h-4 mr-2" />
                Cookie Preferences
              </Button>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Enable/disable analytics cookies</li>
                <li>• Control functional enhancements</li>
                <li>• Manage preference storage</li>
                <li>• View cookie usage history</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Browser Settings</h3>
              <p className="text-gray-600 text-sm mb-3">
                You can also control cookies through your browser settings:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Block all cookies (may break functionality)</li>
                <li>• Block third-party cookies only</li>
                <li>• Clear existing cookies</li>
                <li>• Set cookie expiration preferences</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Disabling essential cookies will prevent core platform features from working properly.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retention Periods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cookie Retention Periods</CardTitle>
          <CardDescription>
            How long different types of cookies are stored on your device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {retentionPeriods.map((period, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">{period.type}</h3>
                  <Badge className="mb-2 bg-blue-100 text-blue-800">{period.duration}</Badge>
                  <p className="text-sm text-gray-600">{period.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Questions About Cookies?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Get Help</h3>
              <p className="text-gray-600 text-sm mb-3">
                If you have questions about our cookie usage or need help managing your preferences:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Email: privacy@unmark.me</li>
                <li>• Help Center: Available 24/7</li>
                <li>• Live Chat: During business hours</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Additional Resources</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <span className="font-medium">Privacy Policy:</span> Complete data handling information</li>
                <li>• <span className="font-medium">Terms of Service:</span> Platform usage guidelines</li>
                <li>• <span className="font-medium">Security Center:</span> Technical security measures</li>
                <li>• <span className="font-medium">User Guide:</span> Managing account preferences</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePolicy;
