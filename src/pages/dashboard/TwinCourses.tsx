import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import {
  ChevronLeft,
  Palette,
  Lock,
  Monitor,
  Shield,
  Headphones,
  Smile,
  Music,
  Camera,
  Brain,
  Settings,
  Bell,
  Sparkles,
  BarChart3,
  X,
} from "lucide-react";

const TwinCourses = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<"explore" | "coming-soon">(
    "explore",
  );
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(
    null,
  );

  // Discipline definitions
  const disciplineDefinitions: Record<string, string> = {
    "Programming Logic":
      "Fundamental concepts of how to structure and organize code to solve problems systematically.",
    "Data Structures":
      "Ways to organize and store data efficiently, including arrays, lists, trees, and graphs.",
    Algorithms:
      "Step-by-step procedures for solving computational problems and analyzing their efficiency.",
    "Software Design":
      "Principles and patterns for creating maintainable, scalable, and robust software applications.",
    HTML5:
      "The latest version of HyperText Markup Language for structuring web content and applications.",
    CSS3: "Advanced styling language for designing responsive and visually appealing web interfaces.",
    "JavaScript ES6+":
      "Modern JavaScript features including arrow functions, modules, async/await, and more.",
    "Responsive Design":
      "Techniques for creating websites that work seamlessly across all device sizes.",
    "DOM Manipulation":
      "Programming techniques for dynamically modifying web page content and structure.",
    "Android Studio":
      "Official IDE for developing Android applications using Java and Kotlin.",
    "iOS Swift":
      "Apple's programming language for building native iOS and macOS applications.",
    "React Native":
      "Framework for building cross-platform mobile apps using JavaScript and React.",
    Flutter:
      "Google's UI toolkit for building natively compiled applications across platforms.",
    "App Store Deployment":
      "Process of publishing and distributing mobile applications through official stores.",
    "Agile Methodology":
      "Iterative development approach emphasizing collaboration, flexibility, and customer feedback.",
    "Version Control":
      "Systems like Git for tracking code changes and enabling team collaboration.",
    Testing:
      "Practices for ensuring software quality through unit, integration, and end-to-end testing.",
    "Code Review":
      "Collaborative process of examining code for quality, bugs, and best practices.",
    "Project Management":
      "Planning, organizing, and controlling software development projects effectively.",
    "Prompt Engineering":
      "Art of crafting effective instructions for AI systems to get desired outputs.",
    "AI Ethics":
      "Principles and considerations for responsible development and deployment of AI systems.",
    "ChatGPT Integration":
      "Techniques for incorporating AI chat capabilities into applications and workflows.",
    "AI Safety":
      "Ensuring AI systems behave safely and aligned with human values and intentions.",
    "Responsible AI":
      "Development practices that consider societal impact, fairness, and transparency.",
    "Python for Data Science":
      "Using Python libraries like pandas, NumPy, and scikit-learn for data analysis.",
    Statistics:
      "Mathematical foundation for understanding and interpreting data patterns and relationships.",
    "Machine Learning":
      "Algorithms and techniques for building systems that learn from data automatically.",
    "Data Visualization":
      "Creating charts, graphs, and interactive displays to communicate data insights.",
    "Neural Networks":
      "Artificial intelligence models inspired by biological neural networks for pattern recognition.",
    "Arduino Programming":
      "Coding microcontrollers for hardware projects and IoT applications.",
    "Sensor Integration":
      "Connecting and programming various sensors for data collection and automation.",
    "Motor Control":
      "Programming and controlling motors for robotics and automation systems.",
    "Automation Systems":
      "Designing systems that operate automatically with minimal human intervention.",
    ROS: "Robot Operating System - framework for building robot software applications.",
    "IoT Architecture":
      "Designing connected device ecosystems and communication protocols.",
    "Sensor Networks":
      "Networks of interconnected sensors for monitoring and data collection.",
    "MQTT Protocol":
      "Lightweight messaging protocol ideal for IoT device communication.",
    "Edge Computing":
      "Processing data closer to its source rather than in centralized cloud systems.",
    "Smart Home Systems":
      "Integrated home automation technologies for convenience and efficiency.",
    "Network Security":
      "Protecting computer networks from threats, attacks, and unauthorized access.",
    "Ethical Hacking":
      "Legal penetration testing to identify and fix security vulnerabilities.",
    Encryption:
      "Techniques for securing data by converting it into unreadable code.",
    "Security Auditing":
      "Systematic evaluation of systems to identify potential security weaknesses.",
    "Incident Response":
      "Procedures for detecting, analyzing, and responding to security breaches.",
    "AWS Fundamentals":
      "Core concepts and services of Amazon Web Services cloud platform.",
    Docker:
      "Containerization technology for packaging applications and their dependencies.",
    Kubernetes:
      "Container orchestration platform for managing distributed applications.",
    "CI/CD":
      "Continuous Integration and Deployment practices for automated software delivery.",
    "Infrastructure as Code":
      "Managing and provisioning infrastructure through machine-readable definition files.",
  };

  // Faculty of Technology & Engineering Courses
  const technologyCourses = [
    {
      id: 1,
      title: "Computer Science Fundamentals",
      provider: "Faculty of Technology & Engineering",
      description: "Core programming and computational thinking",
      icon: Monitor,
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      locked: false,
      status: "available",
      disciplines: [
        "Programming Logic",
        "Data Structures",
        "Algorithms",
        "Software Design",
      ],
    },
    {
      id: 2,
      title: "Web Development",
      provider: "Faculty of Technology & Engineering",
      description: "HTML, CSS, JavaScript fundamentals",
      icon: Monitor,
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      locked: false,
      status: "available",
      disciplines: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "Responsive Design",
        "DOM Manipulation",
      ],
    },
    {
      id: 3,
      title: "App Development",
      provider: "Faculty of Technology & Engineering",
      description: "Android/iOS mobile development",
      icon: Headphones,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      locked: true,
      status: "locked",
      disciplines: [
        "Android Studio",
        "iOS Swift",
        "React Native",
        "Flutter",
        "App Store Deployment",
      ],
    },
    {
      id: 4,
      title: "Software Engineering Principles",
      provider: "Faculty of Technology & Engineering",
      description: "Best practices and methodologies",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      locked: true,
      status: "locked",
      disciplines: [
        "Agile Methodology",
        "Version Control",
        "Testing",
        "Code Review",
        "Project Management",
      ],
    },
    {
      id: 5,
      title: "AI Prompting & Responsible Use",
      provider: "Faculty of Technology & Engineering",
      description: "AI tools and ethical implementation",
      icon: Brain,
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      locked: false,
      status: "available",
      disciplines: [
        "Prompt Engineering",
        "AI Ethics",
        "ChatGPT Integration",
        "AI Safety",
        "Responsible AI",
      ],
    },
    {
      id: 6,
      title: "Data Science & Machine Learning",
      provider: "Faculty of Technology & Engineering",
      description: "Data analysis and ML fundamentals",
      icon: BarChart3,
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      locked: true,
      status: "locked",
      disciplines: [
        "Python for Data Science",
        "Statistics",
        "Machine Learning",
        "Data Visualization",
        "Neural Networks",
      ],
    },
    {
      id: 7,
      title: "Robotics & Automation",
      provider: "Faculty of Technology & Engineering",
      description: "Robotics programming and automation",
      icon: Settings,
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      locked: true,
      status: "locked",
      disciplines: [
        "Arduino Programming",
        "Sensor Integration",
        "Motor Control",
        "Automation Systems",
        "ROS",
      ],
    },
    {
      id: 8,
      title: "Internet of Things (IoT)",
      provider: "Faculty of Technology & Engineering",
      description: "Connected devices and smart systems",
      icon: Smile,
      bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      locked: true,
      status: "locked",
      disciplines: [
        "IoT Architecture",
        "Sensor Networks",
        "MQTT Protocol",
        "Edge Computing",
        "Smart Home Systems",
      ],
    },
    {
      id: 9,
      title: "Cybersecurity Essentials",
      provider: "Faculty of Technology & Engineering",
      description: "Security fundamentals and best practices",
      icon: Lock,
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      locked: false,
      status: "available",
      disciplines: [
        "Network Security",
        "Ethical Hacking",
        "Encryption",
        "Security Auditing",
        "Incident Response",
      ],
    },
    {
      id: 10,
      title: "Cloud Infrastructure",
      provider: "Faculty of Technology & Engineering",
      description: "Cloud computing and deployment",
      icon: Camera,
      bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
      locked: true,
      status: "locked",
      disciplines: [
        "AWS Fundamentals",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Infrastructure as Code",
      ],
    },
  ];

  const comingSoonCourses = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Thine Hreer tine topssuns",
      icon: Palette,
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      iconColor: "text-orange-500",
      status: "locked",
    },
    {
      id: 2,
      title: "Oratnice",
      description: "Thime Hreer tine topssurs",
      icon: Monitor,
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-600",
      status: "locked",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Thine Hreer tine topssurs",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500",
      status: "coming-soon",
    },
    {
      id: 4,
      title: "Music Production",
      description: "Thine Hreer tine topssuns",
      icon: Headphones,
      bgColor: "bg-gradient-to-br from-teal-100 to-emerald-200",
      iconColor: "text-teal-600",
      status: "unlock",
    },
    {
      id: 5,
      title: "Blems",
      description: "Thine Hreer tine topssuns",
      icon: Camera,
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500",
      status: "locked",
    },
    {
      id: 6,
      title: "Music Production",
      description: "Thin:s Hreer tine foorss",
      icon: Music,
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-200",
      iconColor: "text-green-600",
      status: "notify",
    },
    {
      id: 7,
      title: "Music",
      description: "Thine Hreer tine topssurs",
      icon: Music,
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500",
      status: "unlock",
    },
  ];

  if (viewMode === "coming-soon") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-6 relative overflow-hidden">
        {/* Background decoration with subtle glow */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-teal-400/10 rounded-full blur-xl"></div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <h1 className="text-white text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                <Settings className="h-6 w-6" />
                Twin-Ready Courses
              </h1>
              <p className="text-gray-300 text-lg">(Coming Soon)</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {comingSoonCourses.map((course) => {
            const Icon = course.icon;
            return (
              <Card
                key={course.id}
                className={`${course.bgColor} border-0 overflow-hidden hover:scale-105 transition-transform duration-200`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Course Icon */}
                  <div className="mb-6">
                    <div
                      className={`${course.iconColor} w-12 h-12 flex items-center justify-center`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex-1 mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Status Button */}
                  <div className="mt-auto">
                    {course.status === "locked" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        disabled
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </Button>
                    )}
                    {course.status === "coming-soon" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-orange-400 text-orange-600"
                        disabled
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Coming Soon
                      </Button>
                    )}
                    {course.status === "notify" && (
                      <Button
                        size="sm"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Notify Me
                      </Button>
                    )}
                    {course.status === "unlock" && (
                      <Button
                        size="sm"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Unlock with Twin
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Floating Twin Avatar */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-white/20 text-white text-2xl">
                😊
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <Button variant="ghost" size="sm">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">
          Explore Twin-Ready Courses
        </h1>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-2">
          Faculty of Technology & Engineering
        </h2>
        <p className="text-muted-foreground">
          Comprehensive technology education for the digital age
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
        {technologyCourses.map((course) => {
          const Icon = course.icon;
          return (
            <Card
              key={course.id}
              className={`${course.bgColor} border-0 text-white relative overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer group`}
              title={`Disciplines: ${course.disciplines.join(", ")}`}
            >
              <CardContent className="p-4 h-full flex flex-col">
                {/* Course Icon */}
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Course Info */}
                <div className="flex-1 mb-3">
                  <h3 className="font-semibold text-white mb-2 text-sm leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-xs">{course.description}</p>
                </div>

                {/* Status */}
                <div className="mt-auto">
                  {course.status === "locked" && (
                    <Badge className="bg-black/30 text-white border-0 text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      Locked
                    </Badge>
                  )}
                  {course.status === "available" && (
                    <Badge className="bg-emerald-500 text-white border-0 text-xs">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Available
                    </Badge>
                  )}
                </div>

                {/* Hover Tooltip */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-center">
                  <h4 className="font-semibold text-white mb-2 text-sm">
                    Disciplines:
                  </h4>
                  <ul className="text-xs text-white/90 space-y-1 max-h-32 overflow-y-auto">
                    {course.disciplines.map((discipline, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-white/60 rounded-full mr-2"></span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDiscipline(discipline);
                          }}
                          className="text-left hover:underline hover:text-white transition-colors"
                        >
                          {discipline}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {course.status === "available" ? (
                      <Button
                        size="sm"
                        className="w-full bg-white text-black hover:bg-white/90"
                      >
                        Enroll Now
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="w-full border-white/30 text-white/60"
                      >
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Floating Twin Avatar */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-white/20 text-white text-2xl">
              🤖
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Additional Options */}
      <div className="text-center mb-8">
        <Button
          onClick={() => setViewMode("coming-soon")}
          variant="link"
          className="text-indigo-600 hover:text-indigo-800"
        >
          Options: GPT
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between text-sm text-gray-600 bg-white rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-indigo-500" />
            <span className="text-indigo-600 font-medium">Home</span>
          </div>
          <span className="hover:text-gray-800 cursor-pointer">Biography</span>
          <span className="font-medium text-gray-900">Twin Courses</span>
          <span className="hover:text-gray-800 cursor-pointer">Tasks</span>
        </div>
      </div>

      {/* Discipline Definition Modal */}
      <Dialog
        open={!!selectedDiscipline}
        onOpenChange={() => setSelectedDiscipline(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedDiscipline}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDiscipline(null)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {selectedDiscipline
                ? disciplineDefinitions[selectedDiscipline] ||
                  "Definition not available."
                : ""}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TwinCourses;
