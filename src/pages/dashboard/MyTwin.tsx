import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import {
  Brain,
  BookOpen,
  Clock,
  Trophy,
  ArrowRight,
  MessageCircle,
  Upload,
  Mic,
  Send,
  Sparkles,
  Camera,
  FileText,
  Plus,
  Star,
  Target,
  Zap,
  Lightbulb,
} from "lucide-react";

const MyTwin = () => {
  const { user } = useAuth();
  const [inputText, setInputText] = useState("");
  const [showFloatingChat, setShowFloatingChat] = useState(false);

  const completedTasks = 12;
  const totalTasks = 20;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const dailyTasks = [
    "Describe your happiest childhood memory",
    "Write a note to your younger self",
    "Share a recent challenge you overcame",
    "What's your biggest dream for the future?",
  ];

  const recentActivities = [
    {
      type: "task",
      title: "Described childhood memory",
      time: "2 hours ago",
      points: 50,
    },
    {
      type: "reflection",
      title: "Reflected on career goals",
      time: "1 day ago",
      points: 75,
    },
    {
      type: "interaction",
      title: "Chat with Twin Assistant",
      time: "2 days ago",
      points: 25,
    },
  ];

  const handleSubmitEntry = () => {
    if (inputText.trim()) {
      // Handle submission logic here
      setInputText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-logo-teal/5 relative">
      <div className="container mx-auto p-6 space-y-6 pb-24">
        {/* Simple Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {user?.name}
          </h1>
          <div className="text-right">
            <div className="text-lg font-semibold text-logo-teal">
              {completedTasks}/{totalTasks}
            </div>
            <div className="text-xs text-muted-foreground">completed</div>
          </div>
        </div>

        {/* Today's Tasks */}
        <Card className="bg-gradient-to-r from-logo-teal/5 to-logo-blue/5">
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">Today's Tasks</h2>
            <div className="space-y-3">
              {dailyTasks.slice(0, 2).map((task, index) => (
                <div
                  key={index}
                  className="p-3 bg-background rounded-lg hover:shadow-sm transition-shadow cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm flex-1">{task}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-logo-teal"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-logo-teal">5</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-logo-blue">78</div>
              <div className="text-xs text-muted-foreground">Entries</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Entry */}
        <Card>
          <CardContent className="p-4">
            <Textarea
              placeholder="Share something with your Twin..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[80px] resize-none border-0 bg-muted/30"
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Camera className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={handleSubmitEntry}
                disabled={!inputText.trim()}
                size="sm"
              >
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3">
          <Card className="hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-3 text-center">
              <Target className="h-5 w-5 text-logo-teal mx-auto mb-2" />
              <div className="text-xs font-medium">Goals</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-3 text-center">
              <Clock className="h-5 w-5 text-logo-blue mx-auto mb-2" />
              <div className="text-xs font-medium">Check-in</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-3 text-center">
              <Star className="h-5 w-5 text-cyber-blue mx-auto mb-2" />
              <div className="text-xs font-medium">Reflect</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-3 text-center">
              <Zap className="h-5 w-5 text-neural-blue mx-auto mb-2" />
              <div className="text-xs font-medium">Quick</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Recent</h3>
            <div className="space-y-2">
              {recentActivities.slice(0, 3).map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded hover:bg-muted/50"
                >
                  <div className="flex-1">
                    <p className="text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <span className="text-xs text-logo-teal">
                    +{activity.points}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Twin Avatar */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setShowFloatingChat(!showFloatingChat)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-transparent text-white text-lg font-bold">
                🤖
              </AvatarFallback>
            </Avatar>
          </Button>

          {showFloatingChat && (
            <div className="absolute bottom-20 right-0 w-80 bg-background border border-border rounded-lg shadow-2xl p-4 animate-in slide-in-from-bottom-5">
              <div className="flex items-center gap-2 mb-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-logo-teal to-logo-blue text-white text-sm">
                    🤖
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">Your Twin</p>
                  <p className="text-xs text-muted-foreground">
                    Always here to help
                  </p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 mb-3">
                <p className="text-sm">Ready for today's tasks? 🌟</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Maybe Later
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-logo-teal to-logo-blue"
                >
                  Let's Go!
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Task Progress Bar at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Today's Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default MyTwin;
