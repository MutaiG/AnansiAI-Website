import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Calendar,
  Target,
  Award,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
} from "lucide-react";

const Analytics = () => {
  const stats = {
    totalEntries: 78,
    weeklyStreak: 7,
    totalPoints: 1240,
    averageDaily: 3.2,
    completionRate: 85,
    twinProgress: 68,
  };

  const weeklyData = [
    { day: "Mon", entries: 4, points: 150 },
    { day: "Tue", entries: 3, points: 120 },
    { day: "Wed", entries: 5, points: 200 },
    { day: "Thu", entries: 2, points: 80 },
    { day: "Fri", entries: 4, points: 160 },
    { day: "Sat", entries: 3, points: 100 },
    { day: "Sun", entries: 2, points: 90 },
  ];

  const categories = [
    { name: "Memory", entries: 25, percentage: 32 },
    { name: "Reflection", entries: 20, percentage: 26 },
    { name: "Goals", entries: 18, percentage: 23 },
    { name: "Growth", entries: 15, percentage: 19 },
  ];

  const achievements = [
    {
      title: "First Week",
      description: "Completed your first 7 days",
      earned: true,
      date: "Jan 8, 2024",
    },
    {
      title: "Memory Master",
      description: "Shared 25 childhood memories",
      earned: true,
      date: "Jan 12, 2024",
    },
    {
      title: "Reflection Guru",
      description: "Complete 50 reflection tasks",
      earned: false,
      progress: 40,
    },
    {
      title: "Twin Builder",
      description: "Reach 100 total entries",
      earned: false,
      progress: 78,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-lg font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Track your Twin training progress and insights
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-logo-teal">
              {stats.totalEntries}
            </div>
            <div className="text-xs text-muted-foreground">Total Entries</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-logo-blue">
              {stats.weeklyStreak}
            </div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-green-600">
              {stats.totalPoints}
            </div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-purple-600">
              {stats.averageDaily}
            </div>
            <div className="text-xs text-muted-foreground">Daily Average</div>
          </CardContent>
        </Card>
      </div>

      {/* Twin Progress */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-logo-teal" />
            Twin Training Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Overall Progress
              </span>
              <span className="text-sm font-medium">{stats.twinProgress}%</span>
            </div>
            <Progress value={stats.twinProgress} className="h-3" />
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-base font-semibold text-green-600">
                  {stats.completionRate}%
                </div>
                <div className="text-xs text-muted-foreground">
                  Completion Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-blue-600">
                  Active
                </div>
                <div className="text-xs text-muted-foreground">Twin Status</div>
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-purple-600">
                  Learning
                </div>
                <div className="text-xs text-muted-foreground">Phase</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Activity */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-logo-blue" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium w-8">{day.day}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded">
                        <div
                          className="h-full bg-logo-teal rounded"
                          style={{ width: `${(day.entries / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {day.entries} entries
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-logo-teal">+{day.points}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {category.entries} entries
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded">
                    <div
                      className="h-full bg-gradient-to-r from-logo-teal to-logo-blue rounded"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  achievement.earned
                    ? "bg-green-50 border-green-200"
                    : "bg-muted/30 border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  <div>
                    {achievement.earned ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                </div>
                {achievement.earned ? (
                  <Badge variant="outline" className="text-xs">
                    Earned {achievement.date}
                  </Badge>
                ) : (
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">
                      Progress: {achievement.progress}/
                      {achievement.title === "Reflection Guru" ? "50" : "100"}
                    </div>
                    <div className="w-full h-1 bg-muted rounded">
                      <div
                        className="h-full bg-logo-teal rounded"
                        style={{
                          width: `${
                            achievement.title === "Reflection Guru"
                              ? (achievement.progress! / 50) * 100
                              : (achievement.progress! / 100) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
