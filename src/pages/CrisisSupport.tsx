
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, AlertTriangle, Heart, Clock, ExternalLink } from "lucide-react";

const CrisisSupport = () => {
  const immediateHelp = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Free and confidential emotional support for people in suicidal crisis or emotional distress",
      website: "suicidepreventionlifeline.org"
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, 24/7 support for those in crisis via text message",
      website: "crisistextline.org"
    },
    {
      name: "Trevor Lifeline (LGBTQ+)",
      number: "1-866-488-7386",
      description: "Crisis support services for LGBTQ+ young people",
      website: "thetrevorproject.org"
    }
  ];

  const warningsigns = [
    "Talking about wanting to die or hurt oneself",
    "Looking for ways to kill oneself",
    "Talking about feeling hopeless or having no purpose",
    "Talking about feeling trapped or in unbearable pain",
    "Talking about being a burden to others",
    "Increasing use of alcohol or drugs",
    "Acting anxious, agitated, or reckless",
    "Sleeping too little or too much",
    "Withdrawing or feeling isolated",
    "Showing rage or talking about seeking revenge",
    "Displaying extreme mood swings"
  ];

  const howToHelp = [
    "Take all talk of suicide seriously",
    "Listen without judgment",
    "Ask directly about suicidal thoughts",
    "Don't promise to keep it a secret",
    "Stay with the person if possible",
    "Remove any means of self-harm",
    "Get professional help immediately",
    "Follow up and stay connected"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Crisis Support</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Immediate help and resources for mental health emergencies
        </p>
      </div>

      {/* Immediate Crisis Alert */}
      <Card className="mb-8 border-red-500 bg-red-50">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-red-800 text-2xl">
            <AlertTriangle className="w-8 h-8 mr-3" />
            If You're in Immediate Danger
          </CardTitle>
          <CardDescription className="text-red-700 text-lg">
            If you or someone you know is in immediate danger, call 911 or go to your nearest emergency room
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white mr-4">
            <Phone className="w-5 h-5 mr-2" />
            Call 911
          </Button>
          <Button size="lg" variant="outline" className="border-red-500 text-red-700 hover:bg-red-100">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Find Emergency Room
          </Button>
        </CardContent>
      </Card>

      {/* Crisis Hotlines */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="w-6 h-6 mr-2 text-blue-600" />
            24/7 Crisis Support Lines
          </CardTitle>
          <CardDescription>
            Free, confidential support available around the clock
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {immediateHelp.map((resource, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">{resource.name}</h3>
                  <div className="mb-3">
                    {resource.number && (
                      <div className="flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-bold text-blue-700">{resource.number}</span>
                      </div>
                    )}
                    {resource.contact && (
                      <div className="flex items-center mb-2">
                        <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-bold text-blue-700">{resource.contact}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Badge className="bg-green-100 text-green-800">
                    <Clock className="w-3 h-3 mr-1" />
                    24/7 Available
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Warning Signs */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-orange-700">
              <AlertTriangle className="w-6 h-6 mr-2" />
              Warning Signs to Watch For
            </CardTitle>
            <CardDescription>
              Signs that someone may be contemplating suicide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {warningsigns.map((sign, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Heart className="w-6 h-6 mr-2" />
              How to Help Someone in Crisis
            </CardTitle>
            <CardDescription>
              Steps you can take to support someone in need
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {howToHelp.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Safety Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Create a Safety Plan</CardTitle>
          <CardDescription>
            Having a plan in place can help during difficult moments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Personal Safety Plan Should Include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Warning signs that crisis may be developing</li>
                <li>• Coping strategies that have helped before</li>
                <li>• People and social settings for distraction</li>
                <li>• Family members or friends to contact for help</li>
                <li>• Professionals to contact during crisis</li>
                <li>• Ways to make your environment safe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Coping Strategies to Try:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep breathing exercises</li>
                <li>• Physical exercise or movement</li>
                <li>• Listening to music</li>
                <li>• Calling a supportive friend</li>
                <li>• Taking a warm bath or shower</li>
                <li>• Writing in a journal</li>
                <li>• Engaging in a hobby</li>
                <li>• Watching a favorite movie</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrisisSupport;
