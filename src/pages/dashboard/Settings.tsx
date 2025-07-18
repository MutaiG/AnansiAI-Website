import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  Brain,
  Bell,
  Shield,
  Download,
  Trash2,
  Palette,
  Save,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

const Settings = () => {
  const { user, logout } = useAuth();
  const [isSaving, setIsSaving] = useState(false);

  // Profile settings state
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "I'm exploring AI and personal development through my Twin journey.",
  });

  // Twin settings state
  const [twinSettings, setTwinSettings] = useState({
    name: user?.twinName || "",
    personality: "curious",
    responseStyle: "detailed",
    learningMode: "active",
  });

  // Notification settings state
  const [notifications, setNotifications] = useState({
    dailyTasks: true,
    weeklyProgress: true,
    coursesUpdates: false,
    newFeatures: true,
    marketing: false,
  });

  // Privacy settings state
  const [privacy, setPrivacy] = useState({
    dataCollection: true,
    analytics: true,
    publicProfile: false,
    shareProgress: false,
  });

  // Theme settings state
  const [theme, setTheme] = useState("system");

  const handleSaveProfile = async () => {
    setIsSaving(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const handleExportData = () => {
    // Simulate data export
    const data = {
      profile: profileData,
      twin: twinSettings,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-twin-data.json";
    a.click();
  };

  const handleRestartTraining = () => {
    // Show confirmation dialog in real implementation
    if (
      confirm(
        "Are you sure you want to restart your Twin training? This will reset all progress.",
      )
    ) {
      console.log("Restarting training...");
    }
  };

  const handleDeleteAccount = () => {
    // Show confirmation dialog in real implementation
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      console.log("Deleting account...");
      logout();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, Twin preferences, and privacy settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="twin">Twin</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-logo-teal" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                  placeholder="Tell us a bit about yourself..."
                />
              </div>

              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex space-x-2">
                  {["light", "dark", "system"].map((themeOption) => (
                    <Button
                      key={themeOption}
                      variant={theme === themeOption ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTheme(themeOption)}
                      className={
                        theme === themeOption ? "bg-logo-teal text-white" : ""
                      }
                    >
                      {themeOption.charAt(0).toUpperCase() +
                        themeOption.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Twin Settings */}
        <TabsContent value="twin">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-logo-blue" />
                Twin Behavior Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="twinName">Twin Name</Label>
                <Input
                  id="twinName"
                  value={twinSettings.name}
                  onChange={(e) =>
                    setTwinSettings({ ...twinSettings, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Personality Style</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["curious", "analytical", "creative", "supportive"].map(
                    (personality) => (
                      <Button
                        key={personality}
                        variant={
                          twinSettings.personality === personality
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          setTwinSettings({
                            ...twinSettings,
                            personality,
                          })
                        }
                        className={
                          twinSettings.personality === personality
                            ? "bg-logo-blue text-white"
                            : ""
                        }
                      >
                        {personality.charAt(0).toUpperCase() +
                          personality.slice(1)}
                      </Button>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Response Style</Label>
                <div className="grid grid-cols-3 gap-2">
                  {["brief", "detailed", "conversational"].map((style) => (
                    <Button
                      key={style}
                      variant={
                        twinSettings.responseStyle === style
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        setTwinSettings({
                          ...twinSettings,
                          responseStyle: style,
                        })
                      }
                      className={
                        twinSettings.responseStyle === style
                          ? "bg-cyber-blue text-white"
                          : ""
                      }
                    >
                      {style.charAt(0).toUpperCase() + style.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Learning Mode</Label>
                <div className="grid grid-cols-3 gap-2">
                  {["passive", "active", "intensive"].map((mode) => (
                    <Button
                      key={mode}
                      variant={
                        twinSettings.learningMode === mode
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        setTwinSettings({
                          ...twinSettings,
                          learningMode: mode,
                        })
                      }
                      className={
                        twinSettings.learningMode === mode
                          ? "bg-ai-accent text-white"
                          : ""
                      }
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-logo-blue to-cyber-blue text-white">
                <Save className="h-4 w-4 mr-2" />
                Update Twin Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-cyber-blue" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {key === "dailyTasks" &&
                        "Reminders for your daily Twin training tasks"}
                      {key === "weeklyProgress" &&
                        "Weekly summaries of your progress"}
                      {key === "coursesUpdates" &&
                        "Updates about your enrolled courses"}
                      {key === "newFeatures" &&
                        "Notifications about new features and improvements"}
                      {key === "marketing" && "Promotional content and tips"}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, [key]: checked })
                    }
                  />
                </div>
              ))}

              <Button className="bg-gradient-to-r from-cyber-blue to-ai-accent text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-ai-accent" />
                Privacy & Data Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(privacy).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {key === "dataCollection" &&
                        "Allow collection of usage data to improve your experience"}
                      {key === "analytics" &&
                        "Enable analytics to track your learning progress"}
                      {key === "publicProfile" &&
                        "Make your profile visible to other users"}
                      {key === "shareProgress" &&
                        "Allow sharing of anonymized progress data for research"}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) =>
                      setPrivacy({ ...privacy, [key]: checked })
                    }
                  />
                </div>
              ))}

              <div className="pt-4 border-t">
                <Button
                  onClick={handleExportData}
                  variant="outline"
                  className="mr-4"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export My Data
                </Button>
                <Button className="bg-gradient-to-r from-ai-accent to-logo-teal text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Management */}
        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-logo-teal" />
                  Training Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">
                        Restart Training
                      </h4>
                      <p className="text-sm text-yellow-700 mb-3">
                        This will reset all your Twin's learning progress and
                        start fresh. This action cannot be undone.
                      </p>
                      <Button
                        onClick={handleRestartTraining}
                        variant="outline"
                        size="sm"
                        className="border-yellow-600 text-yellow-700 hover:bg-yellow-100"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Restart Training
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Trash2 className="h-5 w-5 mr-2" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">
                        Delete Account
                      </h4>
                      <p className="text-sm text-red-700 mb-3">
                        Permanently delete your account and all associated data.
                        This action cannot be undone.
                      </p>
                      <Button
                        onClick={handleDeleteAccount}
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-700 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
