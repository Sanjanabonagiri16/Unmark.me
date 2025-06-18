
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, Clock, Trophy, User, LogOut, Play, Lock, Star, Users } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "./AuthForm";

const BroCademy = () => {
  const { user, profile, loading: authLoading, signOut } = useUser();
  const { toast } = useToast();
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 5]);

  const courses = [
    {
      id: 1,
      title: "Emotional Intelligence Fundamentals",
      description: "Master the art of understanding, managing, and expressing emotions in healthy, authentic ways",
      lessons: 12,
      duration: "3.5 hours",
      difficulty: "Beginner",
      category: "Core Skills",
      progress: 25,
      featured: true,
      instructor: "Dr. James Mitchell",
      rating: 4.8,
      enrolled: 1247
    },
    {
      id: 2,
      title: "Authentic Communication & Relationships",
      description: "Build deeper connections through vulnerable, honest communication and active listening",
      lessons: 10,
      duration: "2.8 hours",
      difficulty: "Beginner",
      category: "Relationships",
      progress: 0,
      featured: true,
      instructor: "Sarah Williams, LMFT",
      rating: 4.9,
      enrolled: 892
    },
    {
      id: 3,
      title: "Stress & Anxiety Management Without Shame",
      description: "Practical tools for managing stress and anxiety while maintaining your authentic self",
      lessons: 15,
      duration: "4.2 hours",
      difficulty: "Intermediate",
      category: "Mental Health",
      progress: 0,
      featured: false,
      instructor: "Dr. Marcus Chen",
      rating: 4.7,
      enrolled: 634
    },
    {
      id: 4,
      title: "Building Genuine Confidence",
      description: "Develop real confidence that comes from self-awareness and authenticity, not toxic bravado",
      lessons: 8,
      duration: "2.5 hours",
      difficulty: "Intermediate",
      category: "Personal Growth",
      progress: 0,
      featured: false,
      instructor: "Coach Tony Rodriguez",
      rating: 4.6,
      enrolled: 756
    },
    {
      id: 5,
      title: "Healthy Masculinity & Identity",
      description: "Redefine what it means to be a man in modern society - embracing strength and vulnerability",
      lessons: 11,
      duration: "3.8 hours",
      difficulty: "Advanced",
      category: "Identity",
      progress: 0,
      featured: false,
      instructor: "Dr. Lisa Johnson",
      rating: 4.8,
      enrolled: 423
    },
    {
      id: 6,
      title: "Conflict Resolution & Anger Management",
      description: "Learn to navigate conflicts and express anger in healthy, productive ways",
      lessons: 9,
      duration: "3.1 hours",
      difficulty: "Intermediate",
      category: "Communication",
      progress: 0,
      featured: false,
      instructor: "Michael Torres, LCSW",
      rating: 4.5,
      enrolled: 567
    }
  ];

  const lessons = [
    {
      id: 1,
      courseId: 1,
      title: "What is Emotional Intelligence Really?",
      duration: "18 min",
      type: "video",
      description: "Understanding the four core components of EQ and why they matter for men",
      completed: true,
      locked: false
    },
    {
      id: 2,
      courseId: 1,
      title: "Identifying Your Emotional Patterns",
      duration: "22 min",
      type: "interactive",
      description: "Learn to recognize your unique emotional triggers and responses",
      completed: true,
      locked: false
    },
    {
      id: 3,
      courseId: 1,
      title: "The Masculinity Trap: Why Men Struggle with Emotions",
      duration: "25 min",
      type: "video",
      description: "Breaking down toxic masculinity and its impact on emotional health",
      completed: false,
      locked: false
    },
    {
      id: 4,
      courseId: 1,
      title: "Healthy Emotional Expression Techniques",
      duration: "28 min",
      type: "exercise",
      description: "Practical exercises for expressing emotions without shame or fear",
      completed: false,
      locked: true
    },
    {
      id: 5,
      courseId: 1,
      title: "Building Emotional Vocabulary",
      duration: "15 min",
      type: "interactive",
      description: "Expand beyond 'fine' and 'angry' - learn the full spectrum of emotions",
      completed: true,
      locked: false
    }
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      earned: true,
      icon: "🎯"
    },
    {
      title: "Consistent Learner",
      description: "7-day learning streak",
      earned: true,
      icon: "🔥"
    },
    {
      title: "Emotional Explorer",
      description: "Completed Emotional Intelligence course",
      earned: false,
      icon: "🧠"
    },
    {
      title: "Communication Master",
      description: "Completed 3 communication courses",
      earned: false,
      icon: "💬"
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
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson?.locked) {
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

  const handleEnrollCourse = (courseTitle: string) => {
    toast({
      title: "Course enrolled! 📚",
      description: `You're now enrolled in "${courseTitle}"`,
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
          Learn essential life skills for emotional wellbeing and authentic masculinity
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
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <CardDescription className="mt-2 mb-3">{course.description}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <Badge variant="outline">{course.category}</Badge>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {course.lessons} lessons
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.enrolled} enrolled
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 ml-4">
                        {course.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button 
                      onClick={() => handleEnrollCourse(course.title)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Lessons */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Lessons - Emotional Intelligence</h3>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
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
                        <div className="flex-1">
                          <h4 className={`font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                            {lesson.title}
                          </h4>
                          <p className={`text-sm ${lesson.locked ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                            {lesson.description}
                          </p>
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

          {/* All Courses */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">All Courses</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {courses.filter(c => !c.featured).map((course) => (
                <Card key={course.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900">{course.title}</h4>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{course.lessons} lessons</span>
                      <span>{course.duration}</span>
                      <span>{course.enrolled} enrolled</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {course.difficulty}
                      </Badge>
                      <Button size="sm" onClick={() => handleEnrollCourse(course.title)}>
                        Start Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Stats */}
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
                    <span className="font-semibold">7 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total study time</span>
                    <span className="font-semibold">2.5 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-yellow-100">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg ${
                      achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{achievement.icon}</span>
                      <div>
                        <h4 className={`font-medium text-sm ${
                          achievement.earned ? 'text-yellow-800' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-xs ${
                          achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Recommended Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Follow this path for optimal emotional growth:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-3 h-3 mr-2" />
                  Emotional Intelligence (In Progress)
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Communication & Relationships
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Stress & Anxiety Management
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Building Authentic Confidence
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                  Healthy Masculinity & Identity
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
