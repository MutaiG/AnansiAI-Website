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
  Lightbulb,
  Settings,
  Bell,
  Sparkles,
  BarChart3,
  X,
  Share2,
} from "lucide-react";

const TwinCourses = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<"explore" | "coming-soon">(
    "explore",
  );
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(
    null,
  );
  const [selectedFaculty, setSelectedFaculty] = useState<string>("Faculty of Technology & Engineering");

  // Pricing data for each discipline
  const disciplinePricing: Record<string, string> = {
    "Programming Logic": "$129",
    "Data Structures": "$149",
    Algorithms: "$159",
    "Software Design": "$139",
    HTML5: "$79",
    CSS3: "$89",
    "JavaScript ES6+": "$119",
    "Responsive Design": "$99",
    "API Integration": "$109",
    "Machine Learning": "$199",
    "Deep Learning": "$249",
    TensorFlow: "$179",
    PyTorch: "$179",
    "Computer Vision": "$219",
    "Natural Language Processing": "$229",
    "Statistical Analysis": "$139",
    "Data Visualization": "$109",
    "Big Data": "$189",
    "Predictive Modeling": "$169",
    "Sensor Integration": "$129",
    "Motor Control": "$119",
    "Automation Systems": "$159",
    ROS: "$199",
    "IoT Architecture": "$149",
    "Sensor Networks": "$139",
    "MQTT Protocol": "$89",
    "Edge Computing": "$169",
    "Smart Home Systems": "$129",
    "Network Security": "$179",
    "Ethical Hacking": "$219",
    Encryption: "$149",
    "Security Auditing": "$189",
    "Incident Response": "$199",
    "AWS Fundamentals": "$149",
    Docker: "$119",
    Kubernetes: "$159",
    "CI/CD": "$139",
    "Infrastructure as Code": "$149",
  };

  // Discipline definitions
  const disciplineDefinitions: Record<string, string> = {
    "Programming Logic":
      "🧠 Master the art of logical thinking! Learn to break down complex problems into simple, elegant solutions that computers can understand and execute.",
    "Data Structures":
      "🏗️ Build the foundation of all software! Discover how to organize and store data efficiently using powerful structures like arrays, trees, and graphs.",
    Algorithms:
      "⚡ Unlock the power of efficient problem-solving! Learn time-tested procedures and cutting-edge techniques that make software blazingly fast.",
    "Software Design":
      "🎨 Craft beautiful, maintainable code! Master the principles and patterns that transform chaotic code into elegant, scalable masterpieces.",
    HTML5:
      "🌐 Build the skeleton of the web! Master the latest HTML5 features to create semantic, accessible, and interactive web experiences.",
    CSS3: "🎨 Paint the web beautiful! Learn advanced styling techniques to create stunning, responsive designs that captivate users.",
    "JavaScript ES6+":
      "⚡ Supercharge your web development! Harness modern JavaScript features like arrow functions, modules, and async/await for powerful applications.",
    "Responsive Design":
      "📱 Design for every screen! Create websites that look amazing and work perfectly on phones, tablets, laptops, and everything in between.",
    "DOM Manipulation":
      "🔧 Control the web page! Learn to dynamically modify content, create interactive experiences, and bring static pages to life.",
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
      icon: Lightbulb,
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

  // Faculty definitions
  const faculties = [
    "Faculty of Technology & Engineering",
    "Faculty of Business & Management",
    "Faculty of Arts & Humanities",
    "Faculty of Health & Medicine",
    "Faculty of Natural Sciences",
    "Faculty of Social Sciences",
    "Faculty of Education & Psychology",
    "Faculty of Environmental Studies",
    "Faculty of Media & Communications",
    "Faculty of Law & Governance"
  ];

  // Additional faculty courses
  const businessCourses = [
    {
      id: 11,
      title: "Business Strategy & Planning",
      provider: "Faculty of Business & Management",
      description: "Strategic thinking and business planning",
      icon: BarChart3,
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      locked: false,
      status: "available",
      disciplines: ["Strategic Planning", "Market Analysis", "Business Models", "SWOT Analysis", "Financial Planning"],
    },
    {
      id: 12,
      title: "Digital Marketing",
      provider: "Faculty of Business & Management",
      description: "Modern marketing strategies and tools",
      icon: Share2,
      bgColor: "bg-gradient-to-br from-violet-500 to-violet-600",
      locked: false,
      status: "available",
      disciplines: ["Social Media Marketing", "SEO/SEM", "Content Marketing", "Analytics", "Email Marketing"],
    },
    {
      id: 13,
      title: "Entrepreneurship",
      provider: "Faculty of Business & Management",
      description: "Starting and scaling businesses",
      icon: Sparkles,
      bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
      locked: true,
      status: "locked",
      disciplines: ["Business Formation", "Venture Capital", "Product Development", "Market Entry", "Growth Strategies"],
    },
  ];

  const artsCourses = [
    {
      id: 14,
      title: "Creative Writing",
      provider: "Faculty of Arts & Humanities",
      description: "Fiction, poetry, and creative expression",
      icon: Music,
      bgColor: "bg-gradient-to-br from-rose-500 to-rose-600",
      locked: false,
      status: "available",
      disciplines: ["Fiction Writing", "Poetry", "Screenwriting", "Creative Non-fiction", "Literary Analysis"],
    },
    {
      id: 15,
      title: "Digital Art & Design",
      provider: "Faculty of Arts & Humanities",
      description: "Modern digital creative tools",
      icon: Palette,
      bgColor: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
      locked: false,
      status: "available",
      disciplines: ["Photoshop", "Illustrator", "UI/UX Design", "Digital Painting", "3D Modeling"],
    },
  ];

  const healthCourses = [
    {
      id: 16,
      title: "Public Health Fundamentals",
      provider: "Faculty of Health & Medicine",
      description: "Community health and wellness",
      icon: Headphones,
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      locked: false,
      status: "available",
      disciplines: ["Epidemiology", "Health Policy", "Community Health", "Disease Prevention", "Health Education"],
    },
    {
      id: 17,
      title: "Mental Health Awareness",
      provider: "Faculty of Health & Medicine",
      description: "Psychology and mental wellness",
      icon: Lightbulb,
      bgColor: "bg-gradient-to-br from-sky-500 to-sky-600",
      locked: true,
      status: "locked",
      disciplines: ["Psychology Basics", "Stress Management", "Mental Health Support", "Therapy Techniques", "Wellness Programs"],
    },
  ];

  const scienceCourses = [
    {
      id: 18,
      title: "Environmental Science",
      provider: "Faculty of Natural Sciences",
      description: "Climate and sustainability studies",
      icon: Settings,
      bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
      locked: false,
      status: "available",
      disciplines: ["Climate Science", "Conservation", "Renewable Energy", "Ecosystem Analysis", "Environmental Policy"],
    },
    {
      id: 19,
      title: "Applied Mathematics",
      provider: "Faculty of Natural Sciences",
      description: "Mathematical modeling and analysis",
      icon: BarChart3,
      bgColor: "bg-gradient-to-br from-slate-500 to-slate-600",
      locked: true,
      status: "locked",
      disciplines: ["Calculus", "Statistics", "Linear Algebra", "Differential Equations", "Mathematical Modeling"],
    },
  ];

  const socialCourses = [
    {
      id: 20,
      title: "Psychology & Human Behavior",
      provider: "Faculty of Social Sciences",
      description: "Understanding human psychology",
      icon: Lightbulb,
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      locked: false,
      status: "available",
      disciplines: ["Cognitive Psychology", "Social Psychology", "Behavioral Analysis", "Research Methods", "Human Development"],
    },
  ];

  const educationCourses = [
    {
      id: 21,
      title: "Educational Technology",
      provider: "Faculty of Education & Psychology",
      description: "Technology in learning environments",
      icon: Monitor,
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      locked: false,
      status: "available",
      disciplines: ["Learning Management Systems", "Educational Apps", "Online Teaching", "Assessment Tools", "Digital Literacy"],
    },
  ];

  const environmentalCourses = [
    {
      id: 22,
      title: "Sustainable Development",
      provider: "Faculty of Environmental Studies",
      description: "Sustainability and environmental policy",
      icon: Settings,
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      locked: false,
      status: "available",
      disciplines: ["Sustainability Planning", "Environmental Impact", "Green Technology", "Policy Development", "Resource Management"],
    },
  ];

  const mediaCourses = [
    {
      id: 23,
      title: "Digital Media Production",
      provider: "Faculty of Media & Communications",
      description: "Video, audio, and multimedia content",
      icon: Camera,
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      locked: false,
      status: "available",
      disciplines: ["Video Production", "Audio Engineering", "Photography", "Journalism", "Broadcasting"],
    },
  ];

  const lawCourses = [
    {
      id: 24,
      title: "Legal Studies Foundation",
      provider: "Faculty of Law & Governance",
      description: "Legal principles and systems",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
      locked: true,
      status: "locked",
      disciplines: ["Constitutional Law", "Contract Law", "Legal Research", "Ethics", "Civic Responsibility"],
    },
  ];

  // Combine all courses by faculty
  const allFacultyCourses: Record<string, typeof technologyCourses> = {
    "Faculty of Technology & Engineering": technologyCourses,
    "Faculty of Business & Management": businessCourses,
    "Faculty of Arts & Humanities": artsCourses,
    "Faculty of Health & Medicine": healthCourses,
    "Faculty of Natural Sciences": scienceCourses,
    "Faculty of Social Sciences": socialCourses,
    "Faculty of Education & Psychology": educationCourses,
    "Faculty of Environmental Studies": environmentalCourses,
    "Faculty of Media & Communications": mediaCourses,
    "Faculty of Law & Governance": lawCourses,
  };

  // Get current faculty's courses
  const currentCourses = allFacultyCourses[selectedFaculty] || technologyCourses;

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
              <h1 className="text-white text-lg font-bold flex items-center justify-center gap-2 mb-2">
                <Settings className="h-6 w-6" />
                Twin-Ready Courses
              </h1>
              <p className="text-gray-300 text-lg">(Coming Soon)</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8 sm:mb-12 px-4">
          {comingSoonCourses.map((course) => {
            const Icon = course.icon;
            return (
              <Card
                key={course.id}
                className={`${course.bgColor} border-0 overflow-hidden hover:scale-105 transition-transform duration-200`}
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col min-h-[160px] sm:min-h-[200px]">
                  {/* Course Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div
                      className={`${course.iconColor} w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex-1 mb-3 sm:mb-4">
                    <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-20">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
            <Avatar className="w-10 h-10 sm:w-16 sm:h-16">
              <AvatarFallback className="bg-white/20 text-white text-sm sm:text-base">
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
      <div className="flex items-center gap-2 sm:gap-4 mb-4 px-2 sm:px-0">
        <Button variant="ghost" size="sm" className="shrink-0">
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <h1 className="text-base sm:text-lg font-bold text-gray-900 flex-1 text-center px-2">
          Explore Twin-Ready Courses
        </h1>
      </div>

      {/* Faculty Filter */}
      <div className="text-center mb-6 sm:mb-8 px-2 sm:px-4">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Choose Your Faculty</h2>
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 max-w-6xl mx-auto">
          {faculties.map((faculty) => (
            <Button
              key={faculty}
              variant={selectedFaculty === faculty ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFaculty(faculty)}
              className={`${
                selectedFaculty === faculty
                  ? "bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                  : "border-logo-teal/30 text-logo-teal hover:bg-logo-teal/10"
              } transition-all duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2`}
            >
              {faculty.replace("Faculty of ", "")}
            </Button>
          ))}
        </div>
        <div className="text-center px-2">
          <h3 className="text-base sm:text-lg font-semibold mb-2">{selectedFaculty}</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {selectedFaculty === "Faculty of Technology & Engineering" && "Comprehensive technology education for the digital age"}
            {selectedFaculty === "Faculty of Business & Management" && "Strategic business skills for modern entrepreneurs"}
            {selectedFaculty === "Faculty of Arts & Humanities" && "Creative expression and cultural understanding"}
            {selectedFaculty === "Faculty of Health & Medicine" && "Health sciences and medical knowledge"}
            {selectedFaculty === "Faculty of Natural Sciences" && "Scientific inquiry and research methods"}
            {selectedFaculty === "Faculty of Social Sciences" && "Understanding society and human behavior"}
            {selectedFaculty === "Faculty of Education & Psychology" && "Teaching methods and learning psychology"}
            {selectedFaculty === "Faculty of Environmental Studies" && "Sustainability and environmental stewardship"}
            {selectedFaculty === "Faculty of Media & Communications" && "Digital media and effective communication"}
            {selectedFaculty === "Faculty of Law & Governance" && "Legal principles and governance systems"}
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4">
        {currentCourses.map((course) => {
          const Icon = course.icon;
          return (
            <Card
              key={course.id}
              className={`${course.bgColor} border-0 text-white relative overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer group`}
              title={`Disciplines: ${course.disciplines.join(", ")}`}
            >
              <CardContent className="p-3 sm:p-4 h-full flex flex-col min-h-[180px] sm:min-h-[200px]">
                {/* Course Icon */}
                <div className="mb-3 sm:mb-4">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>

                {/* Course Info */}
                <div className="flex-1 mb-2 sm:mb-3">
                  <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-xs sm:text-sm leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">{course.description}</p>
                </div>

                {/* Status */}
                <div className="mt-auto">
                  {course.status === "locked" && (
                    <Badge className="bg-black/30 text-white border-0 text-xs px-2 py-1">
                      <Lock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                      Locked
                    </Badge>
                  )}
                  {course.status === "available" && (
                    <Badge className="bg-emerald-500 text-white border-0 text-xs px-2 py-1">
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                      Available
                    </Badge>
                  )}
                </div>

                {/* Hover Tooltip - Optimized for mobile */}
                <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/95 to-logo-blue/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 sm:p-4 flex flex-col justify-center backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-1.5 sm:mb-2 text-xs sm:text-sm">
                    Disciplines:
                  </h4>
                  <ul className="text-xs text-white/95 space-y-1 sm:space-y-2 max-h-24 sm:max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
                    {course.disciplines.slice(0, 4).map((discipline, index) => (
                      <li
                        key={index}
                        className="flex items-center group/discipline"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-white to-white/60 rounded-full mr-2 sm:mr-3 flex-shrink-0 group-hover/discipline:scale-125 transition-transform"></div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDiscipline(discipline);
                          }}
                          className="text-left hover:underline transition-all duration-200 hover:text-white hover:translate-x-1 text-white/90 font-medium text-xs leading-tight"
                        >
                          {discipline}
                        </button>
                      </li>
                    ))}
                    {course.disciplines.length > 4 && (
                      <li className="text-white/70 text-xs">+{course.disciplines.length - 4} more...</li>
                    )}
                  </ul>
                  <div className="mt-2 sm:mt-3">
                    {course.status === "available" ? (
                      <Button
                        size="sm"
                        className="w-full bg-white text-logo-teal hover:bg-white/90 font-semibold text-xs sm:text-sm py-1.5 sm:py-2"
                      >
                        Enroll Now
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="w-full border-white/50 text-white/80 bg-white/10 text-xs sm:text-sm py-1.5 sm:py-2"
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

      {/* Floating Twin Avatar - Mobile Responsive */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-20">
        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          <Avatar className="w-10 h-10 sm:w-16 sm:h-16">
            <AvatarFallback className="bg-white/20 text-white text-sm sm:text-base">
              🤖
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Additional Options */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <Button
          onClick={() => setViewMode("coming-soon")}
          variant="link"
          className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base"
        >
          Options: GPT
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-lg mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 bg-white rounded-full px-3 sm:px-6 py-2.5 sm:py-3 shadow-lg">
          <div className="flex items-center gap-1 sm:gap-2">
            <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
            <span className="text-indigo-600 font-medium hidden sm:inline">Home</span>
            <span className="text-indigo-600 font-medium sm:hidden">🏠</span>
          </div>
          <span className="hover:text-gray-800 cursor-pointer hidden sm:inline">Biography</span>
          <span className="hover:text-gray-800 cursor-pointer sm:hidden">📝</span>
          <span className="font-medium text-gray-900 hidden sm:inline">Twin Courses</span>
          <span className="font-medium text-gray-900 sm:hidden">📚</span>
          <span className="hover:text-gray-800 cursor-pointer hidden sm:inline">Tasks</span>
          <span className="hover:text-gray-800 cursor-pointer sm:hidden">✅</span>
        </div>
      </div>

      {/* Discipline Definition Modal - Mobile Responsive */}
      <Dialog
        open={!!selectedDiscipline}
        onOpenChange={() => setSelectedDiscipline(null)}
      >
        <DialogContent className="sm:max-w-md max-w-[95vw] mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between text-sm sm:text-base pr-8">
              <span className="truncate">{selectedDiscipline}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDiscipline(null)}
                className="h-6 w-6 sm:h-8 sm:w-8 p-0 absolute right-2 top-2"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {selectedDiscipline
                ? disciplineDefinitions[selectedDiscipline] ||
                  "Definition not available."
                : ""}
            </p>

            {/* Pricing Section */}
            {selectedDiscipline && (
              <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="font-semibold text-logo-teal text-sm sm:text-base">Course Pricing</h4>
                  <span className="text-base sm:text-lg font-bold text-logo-blue">
                    {disciplinePricing[selectedDiscipline] || "$99"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-3">
                  One-time payment • Lifetime access • Twin integration included
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-logo-teal to-logo-blue text-white text-xs sm:text-sm"
                  >
                    Enroll Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-logo-teal text-logo-teal hover:bg-logo-teal/10 text-xs sm:text-sm"
                  >
                    Preview
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TwinCourses;
