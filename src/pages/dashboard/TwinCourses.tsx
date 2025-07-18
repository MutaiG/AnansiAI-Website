import { useState } from "react";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

const TwinCourses = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<"explore" | "coming-soon">(
    "explore",
  );

  // Course data matching the reference design
  const exploreCourses = [
    {
      id: 1,
      title: "Graphic Design",
      provider: "by Creative Hub",
      description: "Design your first portfolio",
      icon: Palette,
      bgColor: "bg-blue-500",
      locked: !user?.completedAutobiography,
      status: "locked",
    },
    {
      id: 2,
      title: "Cybersecurity",
      provider: "by Creative Hub",
      description: "Design your first portfolio",
      icon: Lock,
      bgColor: "bg-blue-500",
      locked: !user?.completedAutobiography,
      status: "locked",
    },
    {
      id: 3,
      title: "Cybersecurity",
      provider: "Cominy",
      description: "Locked",
      icon: Shield,
      bgColor: "bg-blue-500",
      locked: true,
      status: "locked",
    },
    {
      id: 4,
      title: "Music Production",
      provider: "Cominy",
      description: "Notify Me",
      icon: Headphones,
      bgColor: "bg-blue-500",
      locked: false,
      status: "notify",
    },
    {
      id: 5,
      title: "Offered by Nairobio",
      provider: "Nairobi Design School",
      description: "Locked",
      icon: Smile,
      bgColor: "bg-blue-500",
      locked: true,
      status: "locked",
    },
    {
      id: 6,
      title: "Music Production",
      provider: "",
      description: "Notify Me",
      icon: Music,
      bgColor: "bg-blue-500",
      locked: false,
      status: "notify",
    },
  ];

  const comingSoonCourses = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Thine Hreer tine topssuns",
      icon: Palette,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      status: "locked",
    },
    {
      id: 2,
      title: "Oratnice",
      description: "Thime Hreer tine topssurs",
      icon: Monitor,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-700",
      status: "locked",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Thine Hreer tine topssurs",
      icon: Shield,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      status: "coming-soon",
    },
    {
      id: 4,
      title: "Music Production",
      description: "Thine Hreer tine topssuns",
      icon: Headphones,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      status: "unlock",
    },
    {
      id: 5,
      title: "Blems",
      description: "Thine Hreer tine topssuns",
      icon: Camera,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      status: "locked",
    },
    {
      id: 6,
      title: "Music Production",
      description: "Thin:s Hreer tine foorss",
      icon: Music,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      status: "notify",
    },
    {
      id: 7,
      title: "Music",
      description: "Thine Hreer tine topssurs",
      icon: Music,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      status: "unlock",
    },
  ];

  if (viewMode === "coming-soon") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-400/20 rounded-full"></div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setViewMode("explore")}
            className="text-white hover:text-gray-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-white text-center flex-1">
            🔧 Twin-Ready Courses
            <br />
            <span className="text-lg font-normal">(Coming Soon)</span>
          </h1>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {comingSoonCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className={`${course.bgColor} rounded-2xl p-6 relative`}
              >
                {/* Course Icon */}
                <div className="mb-8">
                  <div className={`${course.iconColor}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Course Info */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600">{course.description}</p>
                </div>

                {/* Status Button */}
                <div className="mt-auto">
                  {course.status === "locked" && (
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Lock className="h-3 w-3" />
                      <span>🔒 Locked</span>
                    </div>
                  )}
                  {course.status === "coming-soon" && (
                    <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                      🔒 Coming Soon
                    </div>
                  )}
                  {course.status === "notify" && (
                    <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600">
                      Notify Me
                    </button>
                  )}
                  {course.status === "unlock" && (
                    <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full hover:bg-teal-600">
                      Unlock with Twin
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Twin Avatar */}
        <div className="fixed bottom-8 right-8 z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="mt-1 w-6 h-1 bg-white/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <button className="text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">
          Explore Twin-Ready Courses
        </h1>
      </div>

      <p className="text-center text-gray-600 mb-8">
        ~ Not enrolled in any course yet — Start by choosing a path below.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
        {exploreCourses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              className={`${course.bgColor} rounded-2xl p-6 text-white relative aspect-square flex flex-col`}
            >
              {/* Provider badge */}
              {course.provider.includes("Cominy") && (
                <div className="absolute top-4 right-4 bg-white/20 text-white text-xs px-2 py-1 rounded">
                  Cominy
                </div>
              )}

              {/* Course Icon */}
              <div className="mb-4">
                <Icon className="h-8 w-8 text-white" />
              </div>

              {/* Course Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">
                  {course.title}
                </h3>
                <p className="text-white/80 text-sm mb-1">{course.provider}</p>
                <p className="text-white/60 text-xs">{course.description}</p>
              </div>

              {/* Status Icon */}
              <div className="mt-auto flex items-center gap-2">
                {course.status === "locked" && (
                  <div className="flex items-center gap-1 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                    <Lock className="h-3 w-3" />
                    <span>Locked</span>
                  </div>
                )}
                {course.status === "notify" && (
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Notify Me
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Options */}
      <div className="text-center mb-8">
        <button
          onClick={() => setViewMode("coming-soon")}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Options: GPT
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-medium">Home</span>
          </div>
          <span>Biography</span>
          <span className="font-medium">Twin Courses</span>
          <span>Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default TwinCourses;
