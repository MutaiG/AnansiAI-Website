import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Circle,
  MessageCircle,
  Target,
  TrendingUp,
  Calendar,
  Plus,
  Filter,
  Star,
} from "lucide-react";
import { Task, defaultTasks, weekProgress, categoryIcons, categoryColors } from "./components/TaskData";
import { taskTemplates, feedbackTemplates } from "./components/TaskTemplates";

const DailyTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [taskResponse, setTaskResponse] = useState("");
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [showTaskCreation, setShowTaskCreation] = useState(false);

  const filteredTasks = tasks.filter(task => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.completed;
    if (activeFilter === "pending") return !task.completed;
    return task.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const completedToday = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedToday / totalTasks) * 100 : 0;

  const handleTaskComplete = (taskId: number) => {
    if (activeTask?.id === taskId && taskResponse.trim()) {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          const category = task.category as keyof typeof feedbackTemplates;
          const templates = feedbackTemplates[category] || feedbackTemplates.Growth;
          const feedback = templates[Math.floor(Math.random() * templates.length)];
          
          return {
            ...task,
            completed: true,
            response: taskResponse,
            twinFeedback: feedback,
            completedAt: new Date().toISOString()
          };
        }
        return task;
      }));
      setTaskResponse("");
      setActiveTask(null);
    }
  };

  const createSpecificTask = (type: string) => {
    const templates = taskTemplates[type as keyof typeof taskTemplates] || [];
    if (templates.length === 0) return;

    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    const newTask = {
      id: Date.now(),
      ...randomTemplate,
      category: type.charAt(0).toUpperCase() + type.slice(1),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setShowTaskCreation(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-lg font-bold">Daily Tasks</h1>
          <p className="text-muted-foreground">
            Complete tasks to help your Twin learn about you
          </p>
        </div>
        <Button
          onClick={() => setShowTaskCreation(!showTaskCreation)}
          className="flex items-center gap-2 w-full sm:w-auto"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-5 w-5 text-logo-teal" />
            Today's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {completedToday} of {totalTasks} tasks completed
              </span>
              <span className="text-sm font-medium">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Task Creation */}
      {showTaskCreation && (
        <Card className="border-logo-teal/20 bg-logo-teal/5">
          <CardHeader>
            <CardTitle className="text-base">Create New Task</CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {["memory", "planning", "growth", "reflection"].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  onClick={() => createSpecificTask(type)}
                  className="h-auto p-2 sm:p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-base">
                    {categoryIcons[type.charAt(0).toUpperCase() + type.slice(1) as keyof typeof categoryIcons]}
                  </span>
                  <span className="text-sm font-medium">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("all")}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          All Tasks
        </Button>
        {["completed", "pending", "memory", "planning", "growth", "reflection"].map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className="flex items-center gap-1"
          >
            {filter === "completed" && <CheckCircle className="h-4 w-4" />}
            {filter === "pending" && <Circle className="h-4 w-4" />}
            {filter === "memory" && <span>📝</span>}
            {filter === "planning" && <Target className="h-4 w-4" />}
            {filter === "growth" && <TrendingUp className="h-4 w-4" />}
            {filter === "reflection" && <span>🔍</span>}
            <span className="capitalize">{filter}</span>
          </Button>
        ))}
      </div>

      {/* Tasks */}
      <div className="space-y-3 sm:space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className={`transition-all duration-200 ${
            task.completed 
              ? "bg-green-50/50 border-green-200/50" 
              : "hover:shadow-md"
          }`}>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-start gap-2 sm:gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (task.completed) return;
                    setActiveTask(activeTask?.id === task.id ? null : task);
                  }}
                  className="p-0 h-auto"
                >
                  {task.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground hover:text-logo-teal" />
                  )}
                </Button>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                    <div>
                      <h3 className={`text-sm font-normal ${
                        task.completed ? "text-green-700 line-through" : ""
                      }`}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${
                        categoryColors[task.category as keyof typeof categoryColors]
                      } text-white text-xs sm:text-sm whitespace-nowrap self-start sm:self-auto`}
                    >
                      {categoryIcons[task.category as keyof typeof categoryIcons]} {task.category}
                    </Badge>
                  </div>

                  {task.completed && task.twinFeedback && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center">
                          <MessageCircle className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-logo-teal mb-1">Your Twin</p>
                          <p className="text-sm text-muted-foreground">{task.twinFeedback}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTask?.id === task.id && !task.completed && (
                    <div className="space-y-4 pt-4 border-t">
                      <Textarea
                        placeholder="Share your thoughts with your Twin..."
                        value={taskResponse}
                        onChange={(e) => setTaskResponse(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleTaskComplete(task.id)}
                          disabled={!taskResponse.trim()}
                          size="sm"
                        >
                          Complete Task
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setActiveTask(null)}
                          size="sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Calendar className="h-5 w-5 text-logo-teal" />
            This Week's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-end gap-2">
            {weekProgress.map((day, index) => {
              const percentage = (day.completed / day.total) * 100;
              const isToday = index === 4; // Friday is "today" for demo
              
              return (
                <div key={day.day} className="flex flex-col items-center gap-2">
                  <div className={`text-xs font-medium ${
                    isToday ? "text-logo-teal font-medium" : "text-muted-foreground"
                  }`}>
                    {day.day}
                  </div>
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-xs font-medium ${
                    percentage === 100
                      ? "bg-green-100 text-green-700 border-2 border-green-200"
                      : percentage > 50
                        ? "bg-logo-teal/20 text-logo-teal border-2 border-logo-teal/30"
                        : "bg-muted text-muted-foreground"
                  }`}>
                    {day.completed}/{day.total}
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        percentage === 100 ? "bg-green-500" : "bg-logo-teal"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  {percentage === 100 && (
                    <Star className="h-3 w-3 text-yellow-500 mx-auto mt-1" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Weekly completion: <span className="font-medium text-logo-teal">58%</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyTasks;
