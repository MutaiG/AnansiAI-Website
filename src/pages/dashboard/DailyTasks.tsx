import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CheckCircle,
  Circle,
  Clock,
  Target,
  Plus,
  ArrowRight,
  Camera,
  Lightbulb,
  FileText,
  Star,
  Zap,
  Send,
  MessageCircle,
  Brain,
  X,
  Bell,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DailyTasks = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [taskResponse, setTaskResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showReminders, setShowReminders] = useState(false);
  const [reminderSettings, setReminderSettings] = useState({
    enabled: true,
    time: "09:00",
    frequency: "daily",
  });
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Describe your happiest childhood memory",
      category: "Memory",
      completed: false,
      timeEstimate: "5 min",
      points: 50,
      description:
        "Help your Twin understand what brings you joy by sharing a vivid childhood memory that still makes you smile.",
      prompts: [
        "What was happening in this memory?",
        "Who was with you?",
        "What made this moment so special?",
        "How did it make you feel?",
      ],
      response: "",
      twinFeedback: "",
      skipped: false,
    },
    {
      id: 2,
      title: "Write a note to your younger self",
      category: "Reflection",
      completed: true,
      timeEstimate: "10 min",
      points: 75,
      description:
        "Share wisdom and encouragement you would give to your past self. This helps your Twin understand your growth and values.",
      prompts: [
        "What age would you write to?",
        "What advice would you give?",
        "What would you want them to know?",
        "How have you grown since then?",
      ],
      response:
        "Dear 16-year-old me, trust yourself more. Those doubts you have are normal, but don't let them stop you from trying new things. The failures will teach you more than the successes.",
      twinFeedback:
        "I can see you value growth through experience and self-trust. This reflects a resilient mindset that I'm learning to incorporate into my understanding of you.",
      skipped: false,
    },
    {
      id: 3,
      title: "Share a recent challenge you overcame",
      category: "Growth",
      completed: false,
      timeEstimate: "8 min",
      points: 60,
      description:
        "Tell your Twin about a difficulty you faced and how you handled it. This teaches me about your problem-solving approach.",
      prompts: [
        "What was the challenge?",
        "How did you feel initially?",
        "What steps did you take?",
        "What did you learn?",
      ],
      response: "",
      twinFeedback: "",
      skipped: false,
    },
    {
      id: 4,
      title: "What's your biggest dream for the future?",
      category: "Goals",
      completed: false,
      timeEstimate: "7 min",
      points: 65,
      description:
        "Share your aspirations and dreams so your Twin can understand what motivates and drives you forward.",
      prompts: [
        "What do you dream of achieving?",
        "Why is this important to you?",
        "What steps are you taking?",
        "How will you know when you've achieved it?",
      ],
      response: "",
      twinFeedback: "",
      skipped: false,
    },
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const skipTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: true,
              skipped: true,
              response: "Skipped",
              twinFeedback:
                "No problem! Your Twin understands that some tasks might not feel relevant right now. Feel free to explore other activities that interest you more.",
            }
          : task,
      ),
    );
  };

  const undoSkipTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: false,
              skipped: false,
              response: "",
              twinFeedback: "",
            }
          : task,
      ),
    );
  };

  const addNewTask = () => {
    // Multiple sets of question collections
    const questionSets = [
      // Set 1: Personal Values & Philosophy
      [
        {
          title: "What are your core life principles?",
          category: "Values",
          timeEstimate: "8 min",
          points: 65,
          description: "Help your Twin understand the fundamental beliefs that guide your decisions.",
          prompts: [
            "What principles do you never compromise on?",
            "How did you develop these values?",
            "How do they influence your daily choices?",
          ],
        },
        {
          title: "Describe your biggest fear and how you face it",
          category: "Growth",
          timeEstimate: "10 min",
          points: 75,
          description: "Share your vulnerabilities so your Twin can understand your courage and resilience.",
          prompts: [
            "What scares you the most?",
            "How do you manage this fear?",
            "What have you learned from facing it?",
          ],
        },
        {
          title: "What legacy do you want to leave behind?",
          category: "Purpose",
          timeEstimate: "12 min",
          points: 85,
          description: "Express your vision for long-term impact so your Twin understands your purpose.",
          prompts: [
            "How do you want to be remembered?",
            "What impact do you want to make?",
            "What would make your life meaningful?",
          ],
        },
        {
          title: "Share a time when you changed your mind about something important",
          category: "Reflection",
          timeEstimate: "9 min",
          points: 70,
          description: "Show your Twin how you evolve your thinking and adapt your beliefs.",
          prompts: [
            "What belief did you change?",
            "What caused this shift?",
            "How has this change affected you?",
          ],
        },
      ],
      // Set 2: Relationships & Social Dynamics
      [
        {
          title: "How do you show love and appreciation?",
          category: "Relationships",
          timeEstimate: "7 min",
          points: 60,
          description: "Help your Twin understand your emotional expression and relationship patterns.",
          prompts: [
            "How do you express care for others?",
            "What gestures mean the most to you?",
            "How do you like to receive appreciation?",
          ],
        },
        {
          title: "Describe a mentor or role model who influenced you",
          category: "Inspiration",
          timeEstimate: "11 min",
          points: 80,
          description: "Share the people who shaped you so your Twin understands your aspirations.",
          prompts: [
            "Who has been most influential in your life?",
            "What did they teach you?",
            "How do you apply their lessons?",
          ],
        },
        {
          title: "How do you handle conflict and disagreements?",
          category: "Communication",
          timeEstimate: "8 min",
          points: 65,
          description: "Show your Twin your conflict resolution style and communication approach.",
          prompts: [
            "How do you approach difficult conversations?",
            "What's your strategy for resolving conflicts?",
            "How do you maintain relationships through disagreements?",
          ],
        },
        {
          title: "What qualities do you value most in friendships?",
          category: "Relationships",
          timeEstimate: "6 min",
          points: 55,
          description: "Help your Twin understand what you seek and offer in close relationships.",
          prompts: [
            "What makes a great friend?",
            "What do you bring to friendships?",
            "How do you maintain long-term relationships?",
          ],
        },
      ],
      // Set 3: Creativity & Problem-Solving
      [
        {
          title: "Describe your creative process and inspiration sources",
          category: "Creativity",
          timeEstimate: "10 min",
          points: 75,
          description: "Share how your mind works creatively so your Twin can mirror your innovative thinking.",
          prompts: [
            "Where do you find inspiration?",
            "How do you develop ideas?",
            "What environments spark your creativity?",
          ],
        },
        {
          title: "How do you approach complex problems?",
          category: "Problem-Solving",
          timeEstimate: "9 min",
          points: 70,
          description: "Reveal your analytical thinking patterns so your Twin can assist with future challenges.",
          prompts: [
            "What's your process for tackling difficult problems?",
            "How do you break down complex issues?",
            "What tools or methods do you use?",
          ],
        },
        {
          title: "Share a project you're most proud of",
          category: "Achievement",
          timeEstimate: "12 min",
          points: 85,
          description: "Demonstrate your capabilities and passion so your Twin understands your potential.",
          prompts: [
            "What project means the most to you?",
            "What challenges did you overcome?",
            "What would you do differently?",
          ],
        },
        {
          title: "How do you stay motivated during difficult times?",
          category: "Resilience",
          timeEstimate: "8 min",
          points: 65,
          description: "Show your Twin your coping mechanisms and sources of strength.",
          prompts: [
            "What keeps you going when things get tough?",
            "What practices help you stay resilient?",
            "Who or what do you turn to for support?",
          ],
        },
      ],
      // Set 4: Future & Ambitions
      [
        {
          title: "Describe your vision for your life in 10 years",
          category: "Future",
          timeEstimate: "11 min",
          points: 80,
          description: "Paint a picture of your future so your Twin can help you work toward your goals.",
          prompts: [
            "Where do you see yourself in 10 years?",
            "What will you have accomplished?",
            "How will you have grown as a person?",
          ],
        },
        {
          title: "What would you do if you had unlimited resources?",
          category: "Dreams",
          timeEstimate: "9 min",
          points: 70,
          description: "Explore your deepest aspirations so your Twin understands your true desires.",
          prompts: [
            "What problems would you solve?",
            "What experiences would you pursue?",
            "How would you use your influence?",
          ],
        },
        {
          title: "How do you define success for yourself?",
          category: "Values",
          timeEstimate: "8 min",
          points: 65,
          description: "Share your personal definition of achievement so your Twin can support your goals.",
          prompts: [
            "What does success look like to you?",
            "How do you measure your progress?",
            "What would make you feel truly fulfilled?",
          ],
        },
        {
          title: "What habits are you trying to build or break?",
          category: "Self-Improvement",
          timeEstimate: "7 min",
          points: 60,
          description: "Show your Twin your growth areas so it can help you develop positive patterns.",
          prompts: [
            "What habits do you want to develop?",
            "What patterns do you want to change?",
            "What strategies are you using?",
          ],
        },
      ],
    ];

    // Select a random question set
    const selectedSet = questionSets[Math.floor(Math.random() * questionSets.length)];

    // Generate new tasks with unique IDs
    const newTasks = selectedSet.map((template, index) => ({
      id: Date.now() + index, // Ensure unique IDs
      ...template,
      completed: false,
      response: "",
      twinFeedback: "",
      skipped: false,
    }));

    // Replace current tasks with the new set
    setTasks(newTasks);

    // Scroll to the tasks section
    setTimeout(() => {
      document
        .getElementById("todays-tasks")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const createSpecificTask = (type: string) => {
    const taskTemplates = {
      memory: [
        {
          title: "Describe a childhood tradition that was special to you",
          category: "Memory",
          timeEstimate: "7 min",
          points: 60,
          description:
            "Share a meaningful tradition from your childhood that helps your Twin understand your family background and values.",
          prompts: [
            "What was this tradition?",
            "Who participated with you?",
            "Why was it meaningful?",
            "How did it make you feel?",
          ],
        },
        {
          title: "Tell me about your favorite place from childhood",
          category: "Memory",
          timeEstimate: "8 min",
          points: 65,
          description:
            "Describe a place that holds special memories to help your Twin understand what environments make you feel comfortable and happy.",
          prompts: [
            "Where was this place?",
            "What did you do there?",
            "Why was it special?",
            "How did it shape you?",
          ],
        },
      ],
      planning: [
        {
          title: "Plan your ideal weekly schedule",
          category: "Goals",
          timeEstimate: "10 min",
          points: 75,
          description:
            "Design your perfect week to help your Twin understand your priorities, energy patterns, and life balance preferences.",
          prompts: [
            "How would you structure your days?",
            "What would you prioritize?",
            "When are you most productive?",
            "What would you include for balance?",
          ],
        },
        {
          title: "Create a plan to achieve one of your goals",
          category: "Goals",
          timeEstimate: "12 min",
          points: 80,
          description:
            "Break down one of your aspirations into actionable steps so your Twin can learn about your planning and goal-setting approach.",
          prompts: [
            "What goal would you like to achieve?",
            "What are the key steps?",
            "What challenges might you face?",
            "How will you stay motivated?",
          ],
        },
      ],
      summary: [
        {
          title: "Summarize your core values and beliefs",
          category: "Reflection",
          timeEstimate: "9 min",
          points: 70,
          description:
            "Help your Twin understand what principles guide your decisions by summarizing your most important values and beliefs.",
          prompts: [
            "What values are most important to you?",
            "Where do these values come from?",
            "How do they influence your decisions?",
            "Can you give examples?",
          ],
        },
        {
          title: "Summarize your learning style and preferences",
          category: "Growth",
          timeEstimate: "6 min",
          points: 55,
          description:
            "Describe how you best learn and process information so your Twin can adapt its communication style to match your preferences.",
          prompts: [
            "How do you prefer to learn?",
            "What methods work best for you?",
            "What environments help you focus?",
            "How do you retain information?",
          ],
        },
      ],
    };

    const templates = taskTemplates[type as keyof typeof taskTemplates] || [];
    if (templates.length === 0) return;

    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];
    const newTask = {
      id: tasks.length + 1,
      ...randomTemplate,
      completed: false,
      response: "",
      twinFeedback: "",
      skipped: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Scroll to the tasks section after creating
    setTimeout(() => {
      document
        .getElementById("todays-tasks")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const filterTasks = (category: string | null) => {
    setActiveFilter(category);
  };

  const filteredTasks = activeFilter
    ? tasks.filter((task) => {
        switch (activeFilter) {
          case "memory":
            return task.category === "Memory";
          case "planning":
            return task.category === "Goals";
          case "summary":
            return task.category === "Reflection" || task.category === "Growth";
          default:
            return true;
        }
      })
    : tasks;

  const submitTaskResponse = async () => {
    if (!selectedTask || !taskResponse.trim()) return;

    setIsSubmitting(true);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate mock twin feedback based on the response
    const generateTwinFeedback = (response: string, category: string) => {
      const feedbackTemplates = {
        Memory: [
          "This memory reveals important emotional patterns that help me understand what brings you joy.",
          "I can see how this experience shaped your perspective. Thank you for sharing this with me.",
          "The vivid details you've shared help me understand what moments matter most to you.",
        ],
        Reflection: [
          "Your self-awareness shines through in this reflection. This helps me understand your growth mindset.",
          "I appreciate the honesty in your reflection. This gives me insight into your values and wisdom.",
          "This reflection shows me how you process experiences and learn from them.",
        ],
        Growth: [
          "Your approach to challenges shows resilience. I'm learning about your problem-solving style.",
          "This experience demonstrates your ability to adapt and grow. Very insightful.",
          "I can see how you turn difficulties into learning opportunities. This is valuable for me to understand.",
        ],
        Goals: [
          "Your aspirations reveal what drives you. This helps me understand your motivation and purpose.",
          "Thank you for sharing your dreams with me. This gives me insight into what matters most to you.",
          "Your goals show me the direction you want to grow in. I'll remember this about you.",
        ],
        Motivation: [
          "Understanding what motivates you helps me learn about your energy sources and daily rhythms.",
          "This insight into your motivation patterns is valuable for me to understand who you are.",
        ],
      };

      const templates =
        feedbackTemplates[category as keyof typeof feedbackTemplates] ||
        feedbackTemplates.Growth;
      return templates[Math.floor(Math.random() * templates.length)];
    };

    const feedback = generateTwinFeedback(taskResponse, selectedTask.category);

    // Update the task with the response and feedback
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              response: taskResponse,
              twinFeedback: feedback,
              completed: true,
            }
          : task,
      ),
    );

    setIsSubmitting(false);
    setTaskResponse("");
    setSelectedTask(null);
  };

  const weekProgress = [
    { day: "Mon", completed: 3, total: 4 },
    { day: "Tue", completed: 4, total: 4 },
    { day: "Wed", completed: 2, total: 4 },
    { day: "Thu", completed: 4, total: 4 },
    { day: "Fri", completed: 1, total: 4 },
    { day: "Sat", completed: 0, total: 4 },
    { day: "Sun", completed: 0, total: 4 },
  ];

  const completedCount = tasks.filter((task) => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;
  const totalPoints = tasks
    .filter((task) => task.completed)
    .reduce((sum, task) => sum + task.points, 0);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Memory":
        return "bg-blue-100 text-blue-800";
      case "Reflection":
        return "bg-purple-100 text-purple-800";
      case "Growth":
        return "bg-green-100 text-green-800";
      case "Goals":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Daily Tasks</h1>
        <p className="text-muted-foreground">
          Biography-building tasks to help your Twin learn about you
        </p>
      </div>

      {/* What can I help with? - Interactive Task Center */}
      <Card className="bg-gradient-to-br from-logo-teal/5 via-logo-blue/5 to-background border-logo-teal/20 mb-6">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-foreground">
            What can I help with?
          </h2>
          <p className="text-muted-foreground mb-8">
            Choose a task to build your Twin's knowledge
          </p>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <Button
              className={`h-16 flex items-center justify-center gap-3 rounded-xl group transition-all duration-200 ${
                activeFilter === "memory"
                  ? "bg-logo-teal text-white border-logo-teal shadow-lg"
                  : "bg-logo-teal/10 hover:bg-logo-teal/20 border border-logo-teal/30 text-logo-teal"
              }`}
              variant="outline"
              onClick={() => {
                if (activeFilter === "memory") {
                  filterTasks(null); // Clear filter
                } else {
                  filterTasks("memory");
                  createSpecificTask("memory");
                }
              }}
            >
              <Camera className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Create memory</span>
            </Button>

            <Button
              className={`h-16 flex items-center justify-center gap-3 rounded-xl group transition-all duration-200 ${
                activeFilter === "planning"
                  ? "bg-logo-blue text-white border-logo-blue shadow-lg"
                  : "bg-logo-blue/10 hover:bg-logo-blue/20 border border-logo-blue/30 text-logo-blue"
              }`}
              variant="outline"
              onClick={() => {
                if (activeFilter === "planning") {
                  filterTasks(null);
                } else {
                  filterTasks("planning");
                  createSpecificTask("planning");
                }
              }}
            >
              <Lightbulb className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Make a plan</span>
            </Button>

            <Button
              className={`h-16 flex items-center justify-center gap-3 rounded-xl group transition-all duration-200 ${
                activeFilter === "summary"
                  ? "bg-cyber-blue text-white border-cyber-blue shadow-lg"
                  : "bg-cyber-blue/10 hover:bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue"
              }`}
              variant="outline"
              onClick={() => {
                if (activeFilter === "summary") {
                  filterTasks(null);
                } else {
                  filterTasks("summary");
                  createSpecificTask("summary");
                }
              }}
            >
              <FileText className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Summarize text</span>
            </Button>

            <Button
              className="bg-ai-accent/10 hover:bg-ai-accent/20 border border-ai-accent/30 text-ai-accent h-16 flex items-center justify-center gap-3 rounded-xl group transition-all duration-200"
              variant="outline"
              onClick={addNewTask}
            >
              <Plus className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">More tasks</span>
            </Button>
          </div>

          {/* Active Filter Indicator */}
          {activeFilter && (
            <div className="mt-4 text-center">
              <Badge
                variant="secondary"
                className="bg-muted text-muted-foreground"
              >
                Showing {activeFilter} tasks •
                <button
                  onClick={() => filterTasks(null)}
                  className="ml-1 underline hover:no-underline"
                >
                  Clear filter
                </button>
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Today's Tasks */}
      <div id="todays-tasks" className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {activeFilter ? (
              <span className="flex items-center gap-2">
                {activeFilter === "memory" && (
                  <Camera className="h-5 w-5 text-logo-teal" />
                )}
                {activeFilter === "planning" && (
                  <Lightbulb className="h-5 w-5 text-logo-blue" />
                )}
                {activeFilter === "summary" && (
                  <FileText className="h-5 w-5 text-cyber-blue" />
                )}
                {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}{" "}
                Tasks
              </span>
            ) : (
              "Today's Tasks"
            )}
          </h2>
          <Button
            size="sm"
            variant="outline"
            className="border-logo-teal text-logo-teal hover:bg-logo-teal/10"
            onClick={addNewTask}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Question Set
          </Button>
        </div>

        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <Card className="border-dashed border-2 border-muted">
              <CardContent className="p-8 text-center">
                <div className="text-muted-foreground mb-4">
                  {activeFilter ? (
                    <div>
                      <p className="mb-2">No {activeFilter} tasks available.</p>
                      <p className="text-sm">
                        Click the "
                        {activeFilter === "memory"
                          ? "Create memory"
                          : activeFilter === "planning"
                            ? "Make a plan"
                            : "Summarize text"}
                        " button above to create one!
                      </p>
                    </div>
                  ) : (
                    <p>
                      No tasks available. Click "Request More" to add some
                      tasks!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                className={`hover:shadow-md transition-all duration-200 ${
                  task.completed
                    ? "bg-green-50 border-green-200"
                    : "hover:border-logo-teal/30"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTaskCompletion(task.id)}
                      className="mt-1 hover:scale-110 transition-transform"
                    >
                      {task.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground hover:text-logo-teal" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3
                            className={`font-medium mb-2 text-base ${
                              task.completed
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {task.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge
                              className={`text-xs ${getCategoryColor(
                                task.category,
                              )}`}
                            >
                              {task.category}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {task.timeEstimate}
                            </div>
                            <span className="text-logo-teal font-medium">
                              +{task.points} pts
                            </span>
                          </div>
                        </div>
                        {!task.completed && !task.skipped && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-orange-300 text-orange-600 hover:bg-orange-50"
                              onClick={() => skipTask(task.id)}
                            >
                              Skip
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:shadow-md"
                                  onClick={() => setSelectedTask(task)}
                                >
                                  Start
                                  <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center">
                                      <Brain className="h-4 w-4 text-white" />
                                    </div>
                                    {task.title}
                                  </DialogTitle>
                                </DialogHeader>

                                <div className="space-y-6">
                                  {/* Task Description */}
                                  <div className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 p-4 rounded-lg border border-logo-teal/20">
                                    <p className="text-sm text-muted-foreground mb-2">
                                      Your Twin is asking:
                                    </p>
                                    <p className="font-medium">
                                      {task.description}
                                    </p>
                                  </div>

                                  {/* Guiding Prompts */}
                                  <div>
                                    <h4 className="font-medium mb-3 flex items-center gap-2">
                                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                                      Consider these questions:
                                    </h4>
                                    <ul className="space-y-2">
                                      {task.prompts?.map(
                                        (prompt: string, index: number) => (
                                          <li
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-logo-teal mt-2 flex-shrink-0" />
                                            {prompt}
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>

                                  {/* Response Area */}
                                  <div>
                                    <label className="block text-sm font-medium mb-2">
                                      Your Response:
                                    </label>
                                    <Textarea
                                      placeholder="Share your thoughts with your Twin..."
                                      value={taskResponse}
                                      onChange={(e) =>
                                        setTaskResponse(e.target.value)
                                      }
                                      className="min-h-[120px] resize-none"
                                    />
                                    <p className="text-xs text-muted-foreground mt-2">
                                      Be as detailed as you'd like. Your Twin
                                      learns from every word.
                                    </p>
                                  </div>

                                  {/* Submit Button */}
                                  <div className="flex gap-3">
                                    <Button
                                      onClick={submitTaskResponse}
                                      disabled={
                                        !taskResponse.trim() || isSubmitting
                                      }
                                      className="bg-gradient-to-r from-logo-teal to-logo-blue text-white flex-1"
                                    >
                                      {isSubmitting ? (
                                        <>
                                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                          Processing...
                                        </>
                                      ) : (
                                        <>
                                          <Send className="h-4 w-4 mr-2" />
                                          Submit to Twin
                                        </>
                                      )}
                                    </Button>
                                  </div>

                                  {/* Previous Response (if completed) */}
                                  {task.response && (
                                    <div className="border-t pt-6">
                                      <h4 className="font-medium mb-3 flex items-center gap-2">
                                        <MessageCircle className="h-4 w-4 text-logo-teal" />
                                        Your Previous Response:
                                      </h4>
                                      <div className="bg-muted p-4 rounded-lg mb-4">
                                        <p className="text-sm">
                                          {task.response}
                                        </p>
                                      </div>

                                      {task.twinFeedback && (
                                        <div>
                                          <h4 className="font-medium mb-3 flex items-center gap-2">
                                            <Avatar className="w-5 h-5">
                                              <AvatarFallback className="bg-gradient-to-br from-logo-teal to-logo-blue text-white text-xs">
                                                AI
                                              </AvatarFallback>
                                            </Avatar>
                                            Your Twin's Response:
                                          </h4>
                                          <div className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 p-4 rounded-lg border border-logo-teal/20">
                                            <p className="text-sm text-foreground">
                                              {task.twinFeedback}
                                            </p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}
                        {task.completed && task.skipped && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                              onClick={() => undoSkipTask(task.id)}
                            >
                              Undo
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
          <DialogTrigger asChild>
            <Card className="hover:shadow-md transition-all duration-200 cursor-pointer hover:border-logo-teal/30 group">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-logo-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-1">View Calendar</h3>
                <p className="text-xs text-muted-foreground">
                  See all your tasks and progress
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-logo-teal" />
                Task Calendar
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Mini Calendar */}
              <div className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 p-6 rounded-lg border border-logo-teal/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">December 2024</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-xs font-medium text-muted-foreground p-2"
                      >
                        {day}
                      </div>
                    ),
                  )}

                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1;
                    const hasTask = [5, 12, 19, 23, 26].includes(day);
                    const isToday = day === 15;

                    return (
                      <div
                        key={day}
                        className={`p-2 text-sm cursor-pointer rounded transition-colors ${
                          isToday
                            ? "bg-logo-teal text-white"
                            : hasTask
                              ? "bg-logo-teal/20 text-logo-teal hover:bg-logo-teal/30"
                              : "hover:bg-muted"
                        }`}
                      >
                        {day}
                        {hasTask && !isToday && (
                          <div className="w-1.5 h-1.5 bg-logo-teal rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Task History */}
              <div>
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Recent Completions
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      date: "Dec 14",
                      task: "Write a note to your younger self",
                      points: 75,
                      completed: true,
                    },
                    {
                      date: "Dec 13",
                      task: "Describe your morning routine",
                      points: 50,
                      completed: true,
                    },
                    {
                      date: "Dec 12",
                      task: "Share a childhood memory",
                      points: 60,
                      completed: true,
                    },
                    {
                      date: "Dec 11",
                      task: "Plan your ideal weekend",
                      points: 65,
                      completed: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-sm font-medium">{item.task}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        +{item.points} pts
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Tasks Preview */}
              <div>
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-logo-blue" />
                  Upcoming Tasks
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      date: "Tomorrow",
                      task: "Describe your biggest achievement",
                      category: "Growth",
                    },
                    {
                      date: "Dec 17",
                      task: "Share your learning goals",
                      category: "Goals",
                    },
                    {
                      date: "Dec 18",
                      task: "Tell me about your favorite book",
                      category: "Memory",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-muted rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{item.task}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showReminders} onOpenChange={setShowReminders}>
          <DialogTrigger asChild>
            <Card className="hover:shadow-md transition-all duration-200 cursor-pointer hover:border-logo-blue/30 group">
              <CardContent className="p-4 text-center">
                <Bell className="h-8 w-8 text-logo-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-1">Set Reminders</h3>
                <p className="text-xs text-muted-foreground">
                  Get notified for daily tasks
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-logo-blue" />
                Task Reminders
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Enable/Disable Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reminder-enabled" className="font-medium">
                    Enable Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about daily tasks
                  </p>
                </div>
                <Switch
                  id="reminder-enabled"
                  checked={reminderSettings.enabled}
                  onCheckedChange={(checked) =>
                    setReminderSettings((prev) => ({
                      ...prev,
                      enabled: checked,
                    }))
                  }
                />
              </div>

              {reminderSettings.enabled && (
                <>
                  {/* Time Selection */}
                  <div className="space-y-2">
                    <Label>Reminder Time</Label>
                    <Select
                      value={reminderSettings.time}
                      onValueChange={(time) =>
                        setReminderSettings((prev) => ({ ...prev, time }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Frequency Selection */}
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select
                      value={reminderSettings.frequency}
                      onValueChange={(frequency) =>
                        setReminderSettings((prev) => ({ ...prev, frequency }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekdays">Weekdays Only</SelectItem>
                        <SelectItem value="custom">Custom Schedule</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Current Settings Display */}
                  <div className="bg-logo-blue/5 p-4 rounded-lg border border-logo-blue/20">
                    <h4 className="font-medium text-sm mb-2">
                      Current Settings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive {reminderSettings.frequency} reminders at{" "}
                      {reminderSettings.time === "07:00"
                        ? "7:00 AM"
                        : reminderSettings.time === "08:00"
                          ? "8:00 AM"
                          : reminderSettings.time === "09:00"
                            ? "9:00 AM"
                            : reminderSettings.time === "10:00"
                              ? "10:00 AM"
                              : reminderSettings.time === "11:00"
                                ? "11:00 AM"
                                : reminderSettings.time === "18:00"
                                  ? "6:00 PM"
                                  : reminderSettings.time === "19:00"
                                    ? "7:00 PM"
                                    : "8:00 PM"}
                    </p>
                  </div>
                </>
              )}

              {/* Save Button */}
              <Button
                onClick={() => {
                  setShowReminders(false);
                  window.alert(
                    `Reminder settings saved!\n\nReminders: ${reminderSettings.enabled ? "Enabled" : "Disabled"}\nTime: ${reminderSettings.time}\nFrequency: ${reminderSettings.frequency}`,
                  );
                }}
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                Save Settings
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview - Moved to bottom */}
      <div className="grid md:grid-cols-3 gap-4 mb-6 mt-8">
        <Card className="border-logo-teal/20 bg-gradient-to-br from-logo-teal/5 to-transparent">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Star className="h-4 w-4 text-logo-teal" />
                Today's Progress
              </span>
              <span className="text-sm font-medium">
                {completedCount}/{tasks.length}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-2" />
            <div className="text-xs text-muted-foreground">
              {totalPoints} points earned today
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-transparent">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Zap className="h-5 w-5 text-orange-500" />
              <div className="text-2xl font-bold text-orange-600">7</div>
            </div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
            <div className="text-xs text-orange-600 mt-1">Keep it up!</div>
          </CardContent>
        </Card>

        <Card className="border-logo-blue/20 bg-gradient-to-br from-logo-blue/5 to-transparent">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="h-5 w-5 text-logo-blue" />
              <div className="text-2xl font-bold text-logo-blue">24</div>
            </div>
            <div className="text-xs text-muted-foreground">This Week</div>
            <div className="text-xs text-logo-blue mt-1">Tasks completed</div>
          </CardContent>
        </Card>
      </div>

      {/* Week Overview - Enhanced */}
      <Card className="border-muted/50">
        <CardContent className="p-6">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-logo-teal" />
            This Week's Performance
          </h3>
          <div className="grid grid-cols-7 gap-3">
            {weekProgress.map((day, index) => {
              const isToday = index === 4; // Friday is "today" for demo
              const percentage = (day.completed / day.total) * 100;
              return (
                <div
                  key={index}
                  className={`text-center p-2 rounded-lg transition-colors ${
                    isToday
                      ? "bg-logo-teal/10 border border-logo-teal/30"
                      : "hover:bg-muted/30"
                  }`}
                >
                  <div
                    className={`text-xs mb-2 ${
                      isToday
                        ? "text-logo-teal font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {day.day}
                  </div>
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-xs font-medium ${
                      percentage === 100
                        ? "bg-green-100 text-green-700 border-2 border-green-200"
                        : percentage > 50
                          ? "bg-logo-teal/20 text-logo-teal border-2 border-logo-teal/30"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
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
              Weekly completion:{" "}
              <span className="font-medium text-logo-teal">58%</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyTasks;
