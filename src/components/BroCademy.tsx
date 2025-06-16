
import { useState } from "react";
import { Brain, CheckCircle, Lock, Play, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const BroCademy = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: "Emotional Intelligence Fundamentals",
      description: "Master the basics of understanding and managing your emotions",
      level: "Beginner",
      lessons: 8,
      duration: "2 hours",
      progress: 75,
      unlocked: true,
      skills: ["Self-awareness", "Emotional regulation", "Empathy"]
    },
    {
      id: 2,
      title: "Communication That Actually Works",
      description: "Learn to express yourself clearly without drama or conflict",
      level: "Beginner",
      lessons: 6,
      duration: "1.5 hours",
      progress: 100,
      unlocked: true,
      skills: ["Active listening", "Assertiveness", "Conflict resolution"]
    },
    {
      id: 3,
      title: "Building Authentic Confidence",
      description: "Develop real confidence that doesn't need to put others down",
      level: "Intermediate",
      lessons: 10,
      duration: "3 hours",
      progress: 30,
      unlocked: true,
      skills: ["Self-worth", "Body language", "Public speaking"]
    },
    {
      id: 4,
      title: "Healthy Relationships & Boundaries",
      description: "Create meaningful connections while protecting your mental health",
      level: "Intermediate",
      lessons: 12,
      duration: "4 hours",
      progress: 0,
      unlocked: true,
      skills: ["Boundary setting", "Trust building", "Vulnerability"]
    },
    {
      id: 5,
      title: "Leadership Without Toxicity",
      description: "Learn to lead through inspiration, not intimidation",
      level: "Advanced",
      lessons: 15,
      duration: "5 hours",
      progress: 0,
      unlocked: false,
      skills: ["Inclusive leadership", "Team building", "Mentoring"]
    },
    {
      id: 6,
      title: "Mental Health & Self-Care",
      description: "Practical strategies for maintaining your mental wellness",
      level: "Beginner",
      lessons: 9,
      duration: "2.5 hours",
      progress: 50,
      unlocked: true,
      skills: ["Stress management", "Self-care", "Help-seeking"]
    }
  ];

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const getLevelColor = (level: string) => {
    const colors = {
      "Beginner": "bg-green-100 text-green-800",
      "Intermediate": "bg-yellow-100 text-yellow-800",
      "Advanced": "bg-red-100 text-red-800"
    };
    return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const sampleLessons = [
    { title: "Understanding Your Emotional Triggers", duration: "12 min", completed: true },
    { title: "The Science Behind Emotional Reactions", duration: "15 min", completed: true },
    { title: "Practical Techniques for Self-Regulation", duration: "18 min", completed: true },
    { title: "Building Emotional Vocabulary", duration: "10 min", completed: false },
    { title: "Dealing with Difficult Emotions", duration: "20 min", completed: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">BroCademy</h2>
        <p className="text-lg text-gray-600">
          Level up your emotional and life skills. Real lessons for real growth.
        </p>
      </div>

      {!selectedCourse ? (
        <>
          {/* Progress Overview */}
          <Card className="mb-8 border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Your Learning Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-gray-600">Courses Started</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                  <div className="text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">12</div>
                  <div className="text-gray-600">Skills Learned</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  !course.unlocked ? "opacity-60" : "border-green-100"
                }`}
                onClick={() => course.unlocked && setSelectedCourse(course.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    {!course.unlocked && <Lock className="w-4 h-4 text-gray-400" />}
                  </div>
                  <CardTitle className="text-lg leading-snug">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      {course.lessons} lessons • {course.duration}
                    </div>
                    
                    {course.unlocked && (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full"
                      disabled={!course.unlocked}
                      variant={course.unlocked ? "default" : "outline"}
                    >
                      {!course.unlocked ? "Unlock" : course.progress > 0 ? "Continue" : "Start Course"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        /* Course Detail View */
        <div>
          <Button 
            variant="outline" 
            onClick={() => setSelectedCourse(null)}
            className="mb-6"
          >
            ← Back to Courses
          </Button>
          
          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{currentCourse?.title}</CardTitle>
                  <CardDescription>{currentCourse?.description}</CardDescription>
                </div>
                <Badge className={getLevelColor(currentCourse?.level || "")}>
                  {currentCourse?.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold mb-4">Lessons</h3>
                  <div className="space-y-3">
                    {sampleLessons.map((lesson, index) => (
                      <div 
                        key={index}
                        className={`p-4 border rounded-lg ${
                          lesson.completed ? "border-green-200 bg-green-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Play className="w-5 h-5 text-gray-400" />
                            )}
                            <div>
                              <div className="font-medium">{lesson.title}</div>
                              <div className="text-sm text-gray-600">{lesson.duration}</div>
                            </div>
                          </div>
                          <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Skills You'll Learn</h3>
                  <div className="space-y-2">
                    {currentCourse?.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BroCademy;
