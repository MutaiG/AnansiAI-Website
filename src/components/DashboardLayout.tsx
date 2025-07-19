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
  MoreHorizontal,
  User,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: "My Twin",
      href: "/train-your-twin-app",
      icon: Brain,
      current: location.pathname === "/train-your-twin-app",
    },
    {
      name: "Daily Tasks",
      href: "/train-your-twin-app/tasks",
      icon: Calendar,
      current: location.pathname === "/train-your-twin-app/tasks",
    },
    {
      name: "Twin Courses",
      href: "/train-your-twin-app/courses",
      icon: GraduationCap,
      current: location.pathname === "/train-your-twin-app/courses",
      locked: false,
    },
    {
      name: "Volumes",
      href: "/train-your-twin-app/volumes",
      icon: Archive,
      current: location.pathname === "/train-your-twin-app/volumes",
    },
    {
      name: "Settings",
      href: "/train-your-twin-app/settings",
      icon: Settings,
      current: location.pathname === "/train-your-twin-app/settings",
    },
    {
      name: "Analytics",
      href: "/train-your-twin-app/analytics",
      icon: BarChart3,
      current: location.pathname === "/train-your-twin-app/analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                  alt="Twin Dashboard"
                  className="h-8 w-8"
                />
                <div className="hidden sm:block">
                  <div className="text-lg font-bold">Twin Dashboard</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${
                          item.current
                            ? "bg-logo-teal text-white shadow-sm"
                            : item.locked
                              ? "text-muted-foreground cursor-not-allowed hover:bg-muted/30"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                        }
                      `}
                      onClick={(e) => {
                        if (item.locked) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <Icon
                        className={`h-4 w-4 ${item.locked ? "opacity-50" : ""}`}
                      />
                      <span className={`${item.locked ? "opacity-50" : ""}`}>
                        {item.name}
                      </span>
                      {item.locked && (
                        <div className="w-3 h-3 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                        </div>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Twin Status */}
              <div className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-logo-teal/5 to-logo-blue/5 px-3 py-2 rounded-lg border border-logo-teal/20">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center">
                  <Brain className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {user?.twinName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user?.completedAutobiography ? "Ready" : "Learning"}
                  </p>
                </div>
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                <div className="hidden sm:block text-sm text-foreground">
                  {user?.name}
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold text-sm">
                  {user?.name?.charAt(0) || "U"}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        item.current
                          ? "bg-logo-teal text-white"
                          : item.locked
                            ? "text-muted-foreground cursor-not-allowed"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                    onClick={(e) => {
                      if (item.locked) {
                        e.preventDefault();
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    <Icon
                      className={`h-5 w-5 ${item.locked ? "opacity-50" : ""}`}
                    />
                    <span className={`${item.locked ? "opacity-50" : ""}`}>
                      {item.name}
                    </span>
                    {item.locked && (
                      <div className="w-3 h-3 rounded-full border border-muted-foreground/30 flex items-center justify-center ml-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                      </div>
                    )}
                  </Link>
                );
              })}

              {/* Mobile user actions */}
              <div className="pt-3 border-t border-border mt-3">
                <Link
                  to="/"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Back to AnansiAI</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
