import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  Settings2,
  Bell,
  Shield,
  Download,
  Trash2,
  Moon,
  Sun,
  Volume2,
  Mail,
  Smartphone,
} from "lucide-react";

const Settings = () => {
  const { user, logout } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    dailyReminders: true,
    weeklyReport: false,
  });

  const [privacy, setPrivacy] = useState({
    shareProgress: true,
    allowAnalytics: true,
    publicProfile: false,
  });

  const [twinSettings, setTwinSettings] = useState({
    personality: "friendly",
    responseStyle: "detailed",
    learningMode: "active",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-lg font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, Twin behavior, and preferences
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user?.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue={user?.email} disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="twin-name">Twin Name</Label>
              <Input id="twin-name" defaultValue={user?.twinName} />
            </div>
            <Button size="sm">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Twin Behavior */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-logo-teal" />
              Twin Behavior
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Personality Style</Label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={
                      twinSettings.personality === "friendly"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        personality: "friendly",
                      })
                    }
                  >
                    Friendly
                  </Button>
                  <Button
                    size="sm"
                    variant={
                      twinSettings.personality === "professional"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        personality: "professional",
                      })
                    }
                  >
                    Professional
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Response Style</Label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={
                      twinSettings.responseStyle === "brief"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        responseStyle: "brief",
                      })
                    }
                  >
                    Brief
                  </Button>
                  <Button
                    size="sm"
                    variant={
                      twinSettings.responseStyle === "detailed"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        responseStyle: "detailed",
                      })
                    }
                  >
                    Detailed
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Learning Mode</Label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={
                      twinSettings.learningMode === "active"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        learningMode: "active",
                      })
                    }
                  >
                    Active
                  </Button>
                  <Button
                    size="sm"
                    variant={
                      twinSettings.learningMode === "passive"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setTwinSettings({
                        ...twinSettings,
                        learningMode: "passive",
                      })
                    }
                  >
                    Passive
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm text-muted-foreground">
                <p>
                  <strong>Current Status:</strong>{" "}
                  {user?.completedAutobiography
                    ? "Ready for advanced training"
                    : "Learning your basics"}
                </p>
                <p>
                  <strong>Training Progress:</strong> 68% complete
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-xs text-muted-foreground">
                      Browser notifications
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, push: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label>Daily Task Reminders</Label>
                    <p className="text-xs text-muted-foreground">
                      Get reminded to complete daily tasks
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.dailyReminders}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      dailyReminders: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label>Weekly Progress Report</Label>
                    <p className="text-xs text-muted-foreground">
                      Summary of your week
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifications.weeklyReport}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      weeklyReport: checked,
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Share Progress with Community</Label>
                  <p className="text-xs text-muted-foreground">
                    Allow others to see your achievements
                  </p>
                </div>
                <Switch
                  checked={privacy.shareProgress}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, shareProgress: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Analytics & Insights</Label>
                  <p className="text-xs text-muted-foreground">
                    Help improve the platform
                  </p>
                </div>
                <Switch
                  checked={privacy.allowAnalytics}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, allowAnalytics: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-sm font-medium">Data Management</Label>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Export Data
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Program Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Training Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                Pause Training
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-orange-600"
              >
                Restart Program
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>
                <strong>Note:</strong> Pausing training will stop daily task
                generation. Restarting will reset your Twin's learning progress.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <Label className="text-sm font-medium">Account</Label>
                <p className="text-xs text-muted-foreground">
                  Manage your account status
                </p>
              </div>
              <Button
                variant="outline"
                onClick={logout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
