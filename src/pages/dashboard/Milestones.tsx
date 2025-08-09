import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Users,
  BookOpen,
  MessageSquare,
  Zap,
  Sparkles,
  Award,
  Crown,
  Calendar,
  Target,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";

const Milestones = () => {
  // Admin dummy data - simulating current week 1
  const currentWeek = 1;
  const totalWeeks = 9;

  // All milestones data
  const allMilestones = [
    {
      week: 1,
      title: "Foundational Self-Awareness",
      phase: "autobiography",
      objective:
        "Learner reflects on personal values, history, and motivations.",
      method: "Prompts, short answer journaling, AI-led interviews.",
      outcome:
        "Twin begins to reflect learner's core motivations and tone of voice.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      completed: false,
    },
    {
      week: 2,
      title: "Learning Profile",
      phase: "autobiography",
      objective:
        "AI identifies learner's knowledge gaps, learning style, and goals.",
      method: "Interactive tasks, quizzes, choice-based learning.",
      outcome: "Twin understands how to guide and customize content.",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      completed: false,
    },
    {
      week: 3,
      title: "Independent Thinking & Choice",
      phase: "autobiography",
      objective: "Learner practices decision-making and critical thinking.",
      method: "Simulated challenges, scenario-based tasks.",
      outcome:
        "Twin begins to develop predictive reasoning and judgment modeling.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      completed: false,
    },
    {
      week: 4,
      title: "Expression & Communication",
      phase: "autobiography",
      objective:
        "Learner expresses self through writing, speaking, and visuals.",
      method: "AI-assisted storytelling, debates, video logs.",
      outcome:
        "Twin captures communication style and self-representation skills.",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      completed: false,
    },
    {
      week: 5,
      title: "Digital Performance",
      phase: "autobiography",
      objective:
        "Learner completes at least one task or project using AI tools.",
      method: "Daily tasks, performance logs, AI collaboration.",
      outcome: "Twin becomes executable; can start completing tasks at night.",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      completed: false,
    },
    {
      week: 6,
      title: "Reflection & Revision",
      phase: "biography",
      objective: "Learner reviews decisions and updates their trajectory.",
      method:
        "Timed reflections, AI-generated summaries, compare-and-contrast journals.",
      outcome: "Twin learns from past behavior and grows wiser.",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500",
      completed: false,
    },
    {
      week: 7,
      title: "Collaboration & Feedback",
      phase: "biography",
      objective: "Learner receives, gives, and processes feedback.",
      method: "Peer reviews, AI feedback loops, shared twin views.",
      outcome:
        "Twin integrates external judgment and begins cross-twin reasoning.",
      icon: Users,
      color: "from-green-500 to-teal-500",
      completed: false,
    },
    {
      week: 8,
      title: "Task Mastery",
      phase: "biography",
      objective: "Complete complex multi-day projects.",
      method: "Cumulative tasks, competitions, twin-shadowing professionals.",
      outcome: "Twin becomes independently reliable in task execution.",
      icon: Award,
      color: "from-purple-500 to-indigo-500",
      completed: false,
    },
    {
      week: 9,
      title: "Showcase & Live Biography Export",
      phase: "biography",
      objective:
        "Present a full twin-driven output to public or internal jury.",
      method: "Portfolios, public interviews, twin-led demo.",
      outcome:
        "Learner owns a working Live Biography (usable resume, story, portfolio).",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      completed: false,
    },
  ];

  const currentMilestone = allMilestones[currentWeek - 1];
  const completedWeeks = allMilestones.filter((m) => m.completed).length;
  const progressPercentage = (completedWeeks / totalWeeks) * 100;

  // Dynamic analytics based on current week and milestone
  const getWeeklyAnalytics = (week: number, milestone: any) => {
    // Analytics change based on the week and milestone focus
    const weeklyData = {
      1: { // Foundational Self-Awareness week
        tasksCompleted: 12,
        totalTasks: 18,
        twinAccuracy: 45,
        weeklyProgress: 67,
        streakDays: 4,
        timeSpent: "2.3 hrs",
        focusArea: "Self-Reflection",
        insights: "Building personal value foundation"
      },
      2: { // Learning Profile week
        tasksCompleted: 28,
        totalTasks: 35,
        twinAccuracy: 62,
        weeklyProgress: 80,
        streakDays: 8,
        timeSpent: "3.1 hrs",
        focusArea: "Learning Patterns",
        insights: "Identifying optimal learning styles"
      },
      3: { // Independent Thinking & Choice week
        tasksCompleted: 47,
        totalTasks: 65,
        twinAccuracy: 78,
        weeklyProgress: 72,
        streakDays: 12,
        timeSpent: "4.5 hrs",
        focusArea: "Decision Making",
        insights: "Developing critical thinking patterns"
      }
    };

    return weeklyData[week as keyof typeof weeklyData] || weeklyData[1];
  };

  const analytics = getWeeklyAnalytics(currentWeek, currentMilestone);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-500" />
          Week {currentWeek} Milestone
        </h1>
        <p className="text-muted-foreground">
          {currentMilestone.phase === "autobiography"
            ? "Autobiography Phase"
            : "Biography Phase"}
        </p>
      </div>

      {/* Learning Focus - Dynamic based on current milestone */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-logo-teal" />
            This Week's Learning Focus
          </h3>
          <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <currentMilestone.icon className="h-6 w-6 text-logo-teal" />
              <div>
                <h4 className="font-semibold text-logo-teal">{analytics.focusArea}</h4>
                <p className="text-sm text-muted-foreground">{analytics.insights}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Target className="h-4 w-4 text-blue-500" />
              <div className="text-2xl font-bold text-blue-600">
                {analytics.tasksCompleted}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Tasks Done</div>
            <div className="text-xs text-blue-600">
              of {analytics.totalTasks}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-purple-500" />
              <div className="text-2xl font-bold text-purple-600">
                {analytics.twinAccuracy}%
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Twin Accuracy</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <div className="text-2xl font-bold text-green-600">
                {analytics.weeklyProgress}%
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Week Progress</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-orange-500" />
              <div className="text-2xl font-bold text-orange-600">
                {analytics.timeSpent}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">This Week</div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overall Journey</h3>
            <Badge variant="secondary">
              Week {currentWeek} of {totalWeeks}
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground">
            {completedWeeks} weeks completed • {totalWeeks - completedWeeks}{" "}
            weeks remaining
          </p>
        </CardContent>
      </Card>

      {/* Current Week Milestone */}
      <Card
        className={`border-2 ${currentMilestone.phase === "autobiography" ? "border-blue-200 bg-blue-50" : "border-green-200 bg-green-50"}`}
      >
        <CardHeader>
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentMilestone.color} flex items-center justify-center flex-shrink-0`}
            >
              <currentMilestone.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">
                {currentMilestone.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline">Week {currentMilestone.week}</Badge>
                <Badge
                  className={
                    currentMilestone.phase === "autobiography"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }
                >
                  {currentMilestone.phase === "autobiography"
                    ? "Autobiography"
                    : "Biography"}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">🎯 Objective</h4>
            <p className="text-sm text-muted-foreground">
              {currentMilestone.objective}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">⚙️ Method</h4>
            <p className="text-sm text-muted-foreground">
              {currentMilestone.method}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">✨ Outcome</h4>
            <p className="text-sm text-muted-foreground">
              {currentMilestone.outcome}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Week Progress */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">This Week's Activity</h3>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => {
                const isCompleted = index < 5; // Mock: first 5 days completed
                const isToday = index === 4; // Mock: today is Friday

                return (
                  <div key={day} className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">
                      {day}
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mx-auto ${
                        isCompleted
                          ? "bg-green-100 text-green-700"
                          : isToday
                            ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                  </div>
                );
              },
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {analytics.streakDays} day streak • Keep going!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Milestones;
