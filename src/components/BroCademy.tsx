
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, Clock, Trophy, User, LogOut, Play, Lock } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const BroCademy = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2]);

  const courses = [
    {
      id: 1,
      title: "Emotional Intelligence Fundamentals",
      description: "Learn to understand, manage, and express emotions in healthy ways",
      lessons: 8,
      duration: "2 hours",
      difficulty: "Beginner",
      category: "Core Skills",
      progress: 25,
      featured: true
    },
    {
      id: 2,
      title: "Communication & Relationships",
      description: "Build stronger connections through authentic communication",
      lessons: 6,
      duration: "90 min",
      difficulty: "Beginner",
      category: "Relationships",
      progress: 0,
      featured: true
    },
    {
      id: 3,
      title: "Stress & Anxiety Management",
      description: "Practical tools for managing stress and anxiety without shame",
      lessons: 10,
      duration: "3 hours",
      difficulty: "Intermediate",
      category: "Mental Health",
      progress: 0,
      featured: false
    },
    {
      id: 4,
      title: "Building Authentic Confidence",
      description: "Develop real confidence that comes from self-awareness, not bravado",
      lessons: 7,
      duration: "2.5 hours",
      difficulty: "Intermediate",
      category: "Personal Growth",
      progress: 0,
      featured: false
    }
  ];

  const lessons = [
    {
      id: 1,
      courseId: 1,
      title: "What is Emotional Intelligence?",
      duration: "15 min",
      type: "video",
      completed: true,
      locked: false
    },
    {
      id: 2,
      courseId: 1,
      title: "Identifying Your Emotions",
      duration: "18 min",
      type: "interactive",
      completed: true,
      locked: false
    },
    {
      id: 3,
      courseId: 1,
      title: "Understanding Emotional Triggers",
      duration: "20 min",
      type: "video",
      completed: false,
      locked: false
    },
    {
      id: 4,
      courseId: 1,
      title: "Healthy Emotional Expression",
      duration: "22 min",
      type: "exercise",
      completed: false,
      locked: true
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "Take care, see you soon!",
      });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleStartLesson = (lessonId: number, lessonTitle: string) => {
    if (lessons.find(l => l.id === lessonId)?.locked) {
      toast({
        title: "Complete previous lessons first",
        description: "Unlock this lesson by completing the previous ones.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Starting lesson...",
      description: `Now learning: ${lessonTitle}`,
    });
  };

  const handleCompleteLesson = (lessonId: number) => {
    setCompletedLessons(prev => [...prev, lessonId]);
    toast({
      title: "Lesson completed! 🎉",
      description: "Great progress! Keep going.",
    });
  };

  if (authLoading) {
    return <div className="max-w-6xl mx-auto px-6 py-12 text-center">Loading...</div>;
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <h2 className="text-3xl font-bold text-gray-900">BroCademy</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-1" />
              {profile?.username || 'User'}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="text-gray-600 hover:text-gray-800"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-lg text-gray-600">
          Learn essential life skills for emotional wellbeing and authentic living
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Featured Courses */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Courses</h3>
            <div className="space-y-6">
              {courses.filter(c => c.featured).map((course) => (
                <Card key={course.id} className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription className="mt-2">{course.description}</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {course.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {course.lessons} lessons
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Lessons */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Lessons</h3>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          lesson.completed ? 'bg-green-100' : lesson.locked ? 'bg-gray-100' : 'bg-blue-100'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : lesson.locked ? (
                            <Lock className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Play className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <h4 className={`font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                            {lesson.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{lesson.duration}</span>
                            <Badge variant="outline" className="text-xs">
                              {lesson.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {lesson.completed ? (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Completed
                          </Badge>
                        ) : (
                          <Button
                            variant={lesson.locked ? "outline" : "default"}
                            size="sm"
                            disabled={lesson.locked}
                            onClick={() => handleStartLesson(lesson.id, lesson.title)}
                          >
                            {lesson.locked ? 'Locked' : 'Start'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-purple-500" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {completedLessons.length}
                  </div>
                  <p className="text-sm text-gray-600">Lessons completed</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Courses started</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Learning streak</span>
                    <span className="font-semibold">3 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Certificates earned</span>
                    <span className="font-semibold">0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle>All Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courses.map((course) => (
                  <div key={course.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{course.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {course.progress}%
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Courses
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Follow our recommended learning path for the best experience.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-3 h-3 mr-2" />
                  Emotional Intelligence
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Communication Skills
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Stress Management
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Building Confidence
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BroCademy;
