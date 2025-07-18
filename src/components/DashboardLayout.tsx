import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  Brain,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Archive,
  ChevronRight,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationSections = [
    {
      title: "Training",
      items: [
        {
          name: "My Twin",
          href: "/train-your-twin-app",
          icon: Brain,
          current: location.pathname === "/train-your-twin-app",
          description: "Chat & interact with your Twin",
        },
        {
          name: "Daily Tasks",
          href: "/train-your-twin-app/tasks",
          icon: Calendar,
          current: location.pathname === "/train-your-twin-app/tasks",
          description: "AI-generated training tasks",
        },
        {
          name: "Volumes",
          href: "/train-your-twin-app/volumes",
          icon: Archive,
          current: location.pathname === "/train-your-twin-app/volumes",
          description: "Your training history",
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          name: "Twin Courses",
          href: "/train-your-twin-app/courses",
          icon: GraduationCap,
          current: location.pathname === "/train-your-twin-app/courses",
          locked: !user?.completedAutobiography,
          description: "Skill development programs",
        },
        {
          name: "Analytics",
          href: "/train-your-twin-app/analytics",
          icon: BarChart3,
          current: location.pathname === "/train-your-twin-app/analytics",
          description: "Training progress & insights",
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          name: "Settings",
          href: "/train-your-twin-app/settings",
          icon: Settings,
          current: location.pathname === "/train-your-twin-app/settings",
          description: "Preferences & account",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                  alt="AnansiAI"
                  className="h-8 w-8"
                />
                <div>
                  <div className="text-sm font-bold">AnansiAI</div>
                  <div className="text-xs text-muted-foreground">
                    Train Your Twin
                  </div>
                </div>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* User info */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.twinName}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-6">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                          ${
                            item.current
                              ? "bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 text-logo-teal border border-logo-teal/20 shadow-sm"
                              : item.locked
                                ? "text-muted-foreground cursor-not-allowed"
                                : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                          }
                        `}
                        onClick={(e) => {
                          if (item.locked) {
                            e.preventDefault();
                          } else {
                            setSidebarOpen(false);
                          }
                        }}
                      >
                        <Icon
                          className={`mr-3 h-5 w-5 ${item.locked ? "opacity-50" : ""}`}
                        />
                        <div className="flex-1">
                          <span
                            className={`${item.locked ? "opacity-50" : ""}`}
                          >
                            {item.name}
                          </span>
                          {item.description && (
                            <p
                              className={`text-xs mt-0.5 ${
                                item.current
                                  ? "text-logo-teal/70"
                                  : "text-muted-foreground"
                              } ${item.locked ? "opacity-50" : ""}`}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.locked && (
                          <div className="ml-2">
                            <div className="w-4 h-4 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                            </div>
                          </div>
                        )}
                        {item.current && (
                          <ChevronRight className="ml-2 h-4 w-4" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Marketing content link */}
          <div className="px-4 py-4 border-t">
            <Link
              to="/"
              className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Back to AnansiAI
            </Link>
          </div>

          {/* Logout */}
          <div className="px-4 py-4">
            <Button
              variant="ghost"
              onClick={logout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top bar */}
        <header className="bg-gradient-to-r from-background to-muted/30 border-b flex items-center px-4 lg:px-6 py-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden mr-3"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex-1">
            {(() => {
              const currentSection = navigationSections.find((section) =>
                section.items.some((item) => item.current),
              );
              const currentItem = currentSection?.items.find(
                (item) => item.current,
              );

              return (
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    {currentItem?.name || "Train Your Twin"}
                  </h1>
                  {currentItem?.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentItem.description}
                    </p>
                  )}
                </div>
              );
            })()}
          </div>

          <div className="flex items-center space-x-4">
            {/* Twin Progress Indicator */}
            <div className="hidden sm:flex items-center space-x-3 bg-gradient-to-r from-logo-teal/5 to-logo-blue/5 px-4 py-2 rounded-lg border border-logo-teal/20">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">
                  {user?.twinName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.completedAutobiography
                    ? "Ready for courses"
                    : "Learning about you"}
                </p>
              </div>
            </div>

            <span className="text-sm text-muted-foreground hidden md:block">
              {user?.name}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
