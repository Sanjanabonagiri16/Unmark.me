
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, BarChart3, Home, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const MoodTracker = () => {
  const [moodData, setMoodData] = useState([
    { date: "Jan 1", mood: 4, energy: 3, stress: 2 },
    { date: "Jan 2", mood: 3, energy: 4, stress: 3 },
    { date: "Jan 3", mood: 5, energy: 5, stress: 1 },
    { date: "Jan 4", mood: 4, energy: 3, stress: 2 },
    { date: "Jan 5", mood: 3, energy: 2, stress: 4 },
    { date: "Jan 6", mood: 4, energy: 4, stress: 2 },
    { date: "Jan 7", mood: 5, energy: 5, stress: 1 },
  ]);

  const [insights, setInsights] = useState({
    averageMood: 4.0,
    moodTrend: "improving",
    streakDays: 7,
    bestDay: "Wednesday"
  });

  const moodCategories = [
    { range: "4.5-5.0", label: "Excellent", color: "text-green-600", count: 2 },
    { range: "3.5-4.4", label: "Good", color: "text-blue-600", count: 3 },
    { range: "2.5-3.4", label: "Okay", color: "text-yellow-600", count: 2 },
    { range: "1.5-2.4", label: "Low", color: "text-orange-600", count: 0 },
    { range: "1.0-1.4", label: "Very Low", color: "text-red-600", count: 0 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mood Tracker & Analytics</h1>
          <p className="text-xl text-gray-600">
            Visualize your emotional journey and discover patterns in your wellbeing
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">{insights.averageMood}</div>
            <div className="text-gray-600">Average Mood</div>
            <Badge className="mt-2 bg-green-100 text-green-800">This Week</Badge>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 capitalize">{insights.moodTrend}</div>
            <div className="text-gray-600">Mood Trend</div>
            <Badge className="mt-2 bg-blue-100 text-blue-800">7 Days</Badge>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">{insights.streakDays}</div>
            <div className="text-gray-600">Day Streak</div>
            <Badge className="mt-2 bg-purple-100 text-purple-800">Active</Badge>
          </CardContent>
        </Card>

        <Card className="border-pink-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">{insights.bestDay}</div>
            <div className="text-gray-600">Best Day</div>
            <Badge className="mt-2 bg-pink-100 text-pink-800">This Week</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Mood Chart */}
      <Card className="mb-8 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
            7-Day Mood Trends
          </CardTitle>
          <CardDescription>
            Track your mood, energy, and stress levels over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#22c55e" strokeWidth={3} name="Mood" />
                <Line type="monotone" dataKey="energy" stroke="#3b82f6" strokeWidth={3} name="Energy" />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={3} name="Stress" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Mood Distribution */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Mood Distribution</CardTitle>
            <CardDescription>
              How often you experience different mood levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {moodCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full bg-current ${category.color}`}></div>
                    <span className="font-medium">{category.label}</span>
                    <span className="text-sm text-gray-500">({category.range})</span>
                  </div>
                  <Badge variant="outline">{category.count} days</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Weekly Summary</CardTitle>
            <CardDescription>
              Key insights from your emotional tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Positive Patterns</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Consistent mood improvement over the week</li>
                  <li>• High energy on weekends</li>
                  <li>• Stress levels generally under control</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Areas to Explore</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Tuesday showed increased stress</li>
                  <li>• Consider morning routine adjustments</li>
                  <li>• Explore relaxation techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Items */}
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>
            Based on your mood patterns, here are some suggestions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/?section=checkin" className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors story-link">
              <h4 className="font-medium mb-2">Daily Check-ins</h4>
              <p className="text-sm text-gray-600">Keep tracking your daily emotional state</p>
            </Link>
            <Link to="/?section=brocademy" className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors story-link">
              <h4 className="font-medium mb-2">Stress Management</h4>
              <p className="text-sm text-gray-600">Learn techniques to handle stress better</p>
            </Link>
            <Link to="/?section=circles" className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors story-link">
              <h4 className="font-medium mb-2">Community Support</h4>
              <p className="text-sm text-gray-600">Connect with others on similar journeys</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodTracker;
