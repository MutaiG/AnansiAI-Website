import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  MoreHorizontal,
  FileText,
  Mic,
  Camera,
  Upload,
  CheckCircle,
  User,
} from "lucide-react";

const DailyTasks = () => {
  // Mock tasks data matching the reference design exactly
  const todaysTasks = [
    {
      id: 1,
      title: "Describe your childhood home",
      type: "Written",
      typeIcon: FileText,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face",
      bgColor: "bg-blue-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      status: "Not Started",
      progress: [false, false, false, false, false, false, false],
      completed: false,
    },
    {
      id: 2,
      title: "Record a memory you cherish",
      type: "Audio",
      typeIcon: Mic,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bgColor: "bg-gray-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      status: "Not Started",
      progress: [false, false, false, false, false, false, false],
      completed: false,
    },
    {
      id: 3,
      title: "Pick your favorite color and explain why",
      type: "Written",
      typeIcon: FileText,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
      status: "Completed",
      progress: [true, true, true, true, true, false, false],
      completed: true,
    },
  ];

  const completedTasks = todaysTasks.filter((task) => task.completed).length;
  const totalTasks = 5; // Total daily tasks
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const handleTaskStart = (taskId: number) => {
    console.log(`Starting task ${taskId}`);
  };

  const requestMoreTasks = () => {
    console.log("Requesting more tasks");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Tasks</h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Complete today's tasks to grow your twin and build your story.
        </p>
      </div>

      {/* Task Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {todaysTasks.map((task, index) => {
          const Icon = task.typeIcon;
          return (
            <div
              key={task.id}
              className="bg-white rounded-2xl p-6 shadow-lg relative"
            >
              {/* Menu dots */}
              <button className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </button>

              {/* Profile Image */}
              <div
                className={`relative mb-6 ${task.bgColor} rounded-2xl p-4 aspect-square flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={task.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </div>

              {/* Task Type Badges */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">
                  <Icon className="h-3 w-3" />
                  <span>{task.type}</span>
                </div>
                {task.type === "Audio" && (
                  <div className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                    <Camera className="h-3 w-3" />
                    <span>Image</span>
                  </div>
                )}
                {task.completed && (
                  <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-sm">
                    <Upload className="h-3 w-3" />
                    <span>Upload</span>
                  </div>
                )}
              </div>

              {/* Task Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {task.title}
              </h3>

              {/* Status */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {task.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-sm" />
                  )}
                  <span>{task.status}</span>
                </div>
                <span className="text-xs text-gray-400">In Progress</span>
              </div>

              {/* Progress Dots */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Complete</span>
                </div>
                <div className="flex gap-1">
                  {task.progress.map((completed, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        completed ? "bg-green-400" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {index === 1 ? (
                // Middle card gets "Request New Tasks" button
                <Button
                  onClick={requestMoreTasks}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium"
                >
                  Request New Tasks
                </Button>
              ) : (
                <Button
                  onClick={() => handleTaskStart(task.id)}
                  className={`w-full ${task.buttonColor} text-white py-3 rounded-xl font-medium`}
                >
                  Start Task
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Section */}
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Today's Twin Growth
        </h3>

        {/* Progress Bar */}
        <div className="mb-4">
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <p className="text-gray-600">
          {completedTasks} of {totalTasks} tasks Completed
        </p>
      </div>

      {/* Floating Twin Avatar */}
      <div className="fixed bottom-8 right-8 z-10">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
