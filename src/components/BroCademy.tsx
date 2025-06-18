
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, BookOpen, Users, Trophy, Home, Target, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BroCademy = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: "emotional-intelligence",
      title: "Emotional Intelligence Mastery",
      description: "Learn to understand, manage, and express emotions in healthy ways",
      level: "Beginner",
      duration: "4 weeks",
      modules: 12,
      progress: 0,
      rating: 4.9,
      students: 2847,
      featured: true,
      skills: ["Self-awareness", "Empathy", "Social skills", "Emotional regulation"]
    },
    {
      id: "authentic-confidence",
      title: "Building Authentic Confidence",
      description: "Develop genuine self-confidence without toxic masculinity",
      level: "Intermediate",
      duration: "3 weeks",
      modules: 9,
      progress: 25,
      rating: 4.8,
      students: 1923,
      featured: true,
      skills: ["Self-esteem", "Assertiveness", "Body language", "Public speaking"]
    },
    {
      id: "healthy-relationships",
      title: "Healthy Relationship Foundations",
      description: "Build meaningful connections with friends, family, and partners",
      level: "Beginner",
      duration: "5 weeks",
      modules: 15,
      progress: 60,
      rating: 4.9,
      students: 3156,
      featured: true,
      skills: ["Communication", "Boundaries", "Conflict resolution", "Trust building"]
    },
    {
      id: "stress-management",
      title: "Stress & Anxiety Management",
      description: "Practical techniques for managing stress and anxiety in daily life",
      level: "Beginner",
      duration: "3 weeks",
      modules: 8,
      progress: 0,
      rating: 4.7,
      students: 1654,
      featured: false,
      skills: ["Mindfulness", "Breathing techniques", "Time management", "Relaxation"]
    },
    {
      id: "communication-skills",
      title: "Advanced Communication Skills",
      description: "Master the art of clear, honest, and effective communication",
      level: "Intermediate",
      duration: "4 weeks",
      modules: 11,
      progress: 0,
      rating: 4.8,
      students: 2234,
      featured: false,
      skills: ["Active listening", "Nonverbal communication", "Difficult conversations", "Feedback"]
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Completed your first module", icon: "🎯", unlocked: true },
    { name: "Emotional Awareness", description: "Finished Emotional Intelligence course", icon: "🧠", unlocked: false },
    { name: "Confident Speaker", description: "Practiced public speaking 10 times", icon: "🎤", unlocked: true },
    { name: "Relationship Builder", description: "Completed relationship course", icon: "💪", unlocked: false },
    { name: "Stress Master", description: "7-day stress management streak", icon: "🧘", unlocked: true },
    { name: "Community Helper", description: "Helped 5 other students", icon: "🤝", unlocked: false }
  ];

  const learningPaths = [
    {
      name: "The Complete Emotional Journey",
      courses: ["emotional-intelligence", "stress-management", "healthy-relationships"],
      duration: "12 weeks",
      level: "Beginner to Advanced"
    },
    {
      name: "Confidence & Communication",
      courses: ["authentic-confidence", "communication-skills"],
      duration: "7 weeks",
      level: "Intermediate"
    },
    {
      name: "Relationship Mastery",
      courses: ["healthy-relationships", "communication-skills", "emotional-intelligence"],
      duration: "13 weeks",
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BroCademy Life Skills</h1>
          <p className="text-xl text-gray-600">
            Master essential life skills for authentic confidence and emotional growth
          </p>
        </div>
        <Link to="/" className="hover-scale">
          <Button variant="outline" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">5</div>
            <div className="text-gray-600">Courses Available</div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">2</div>
            <div className="text-gray-600">In Progress</div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Achievements</div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">12K+</div>
            <div className="text-gray-600">Students</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Courses */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {courses.filter(course => course.featured).map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-all duration-300 border-green-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-green-100 text-green-800 mb-2">Featured</Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.modules} modules
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills you'll learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 hover-scale"
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-6 h-6 mr-2 text-blue-600" />
            Recommended Learning Paths
          </CardTitle>
          <CardDescription>
            Structured journeys to master specific skill sets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{path.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{path.level}</Badge>
                  <span className="text-sm text-gray-600">{path.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {path.courses.length} courses in this learning path
                </p>
                <Button variant="outline" size="sm" className="w-full hover-scale">
                  View Path
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Courses */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
          <CardDescription>
            Explore our complete library of life skills courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{course.title}</h3>
                    {course.featured && (
                      <Badge className="bg-green-100 text-green-800">Featured</Badge>
                    )}
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                    <span>{course.modules} modules</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  {course.progress > 0 && (
                    <div className="mt-2">
                      <Progress value={course.progress} className="h-2 w-32" />
                    </div>
                  )}
                </div>
                <Button
                  className="bg-green-600 hover:bg-green-700 hover-scale"
                  onClick={() => setSelectedCourse(course.id)}
                >
                  {course.progress > 0 ? "Continue" : "Start"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
            Your Achievements
          </CardTitle>
          <CardDescription>
            Track your progress and unlock new badges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${
                  achievement.unlocked
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BroCademy;
