import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Brain,
  Calendar,
  Award,
  Activity,
  Zap,
  Users,
} from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const stats = {
    totalInteractions: 1247,
    hoursSpent: 89,
    tasksCompleted: 156,
    coursesStarted: 3,
    twinMaturity: 73,
    learningStreak: 12,
  };

  const skillProgress = [
    { skill: "Communication", progress: 85, color: "bg-blue-500" },
    { skill: "Creativity", progress: 72, color: "bg-purple-500" },
    { skill: "Analysis", progress: 68, color: "bg-green-500" },
    { skill: "Problem Solving", progress: 61, color: "bg-orange-500" },
    { skill: "Emotional Intelligence", progress: 78, color: "bg-pink-500" },
  ];

  const activityData = [
    { month: "Jan", interactions: 85, hours: 12 },
    { month: "Feb", interactions: 120, hours: 18 },
    { month: "Mar", interactions: 165, hours: 24 },
    { month: "Apr", interactions: 145, hours: 21 },
    { month: "May", interactions: 180, hours: 28 },
    { month: "Jun", interactions: 210, hours: 32 },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Completed your first week of training",
      icon: "🏆",
      earned: true,
      date: "2024-01-07",
    },
    {
      id: 2,
      title: "Consistent Learner",
      description: "Maintained a 7-day learning streak",
      icon: "🔥",
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 3,
      title: "Course Pioneer",
      description: "Started your first Twin Course",
      icon: "🎓",
      earned: true,
      date: "2024-01-22",
    },
    {
      id: 4,
      title: "Reflection Master",
      description: "Completed 50 reflection tasks",
      icon: "💭",
      earned: false,
      progress: 34,
    },
    {
      id: 5,
      title: "Creative Spark",
      description: "Shared 25 creative ideas",
      icon: "💡",
      earned: false,
      progress: 18,
    },
  ];

  const personalityInsights = [
    {
      trait: "Openness to Experience",
      score: 82,
      description: "You show high curiosity and creativity",
    },
    {
      trait: "Conscientiousness",
      score: 75,
      description: "You're organized and goal-oriented",
    },
    {
      trait: "Extraversion",
      score: 63,
      description: "You balance social energy well",
    },
    {
      trait: "Agreeableness",
      score: 78,
      description: "You're cooperative and trusting",
    },
    {
      trait: "Emotional Stability",
      score: 71,
      description: "You handle stress reasonably well",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Track your AI Twin's learning progress and development
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 flex items-center justify-center">
                <Brain className="h-6 w-6 text-logo-teal" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.twinMaturity}%</div>
                <div className="text-sm text-muted-foreground">
                  Twin Maturity
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 flex items-center justify-center">
                <Activity className="h-6 w-6 text-logo-blue" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {stats.totalInteractions.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Interactions
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 flex items-center justify-center">
                <Zap className="h-6 w-6 text-cyber-blue" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.learningStreak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 flex items-center justify-center">
                <Clock className="h-6 w-6 text-ai-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.hoursSpent}</div>
                <div className="text-sm text-muted-foreground">Hours Spent</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/40 flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
                <div className="text-sm text-muted-foreground">
                  Tasks Completed
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/40 flex items-center justify-center">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.coursesStarted}</div>
                <div className="text-sm text-muted-foreground">
                  Courses Started
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-logo-teal" />
              Skill Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillProgress.map((skill) => (
              <div key={skill.skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.skill}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.progress}%
                  </span>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-logo-blue" />
              Monthly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((month) => (
                <div key={month.month} className="flex items-center space-x-4">
                  <div className="w-8 text-sm font-medium">{month.month}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs">Interactions</span>
                      <span className="text-xs">{month.interactions}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-logo-teal h-2 rounded-full"
                        style={{
                          width: `${(month.interactions / 250) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Personality Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-cyber-blue" />
            Personality Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {personalityInsights.map((insight) => (
              <div key={insight.trait} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 relative">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={175.92}
                      strokeDashoffset={175.92 - (175.92 * insight.score) / 100}
                      className="text-logo-teal"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{insight.score}</span>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">{insight.trait}</h4>
                <p className="text-xs text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-ai-accent" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 ${
                  achievement.earned
                    ? "border-green-200 bg-green-50"
                    : "border-muted"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    {achievement.earned ? (
                      <Badge variant="secondary" className="text-xs">
                        Earned {achievement.date}
                      </Badge>
                    ) : (
                      <div className="space-y-2">
                        <Progress
                          value={achievement.progress || 0}
                          className="h-2"
                        />
                        <span className="text-xs text-muted-foreground">
                          {achievement.progress}% complete
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
