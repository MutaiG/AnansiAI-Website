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
  ArrowRight,
  Trophy,
  ChevronDown,
  UserCircle,
  CreditCard,
  Bell,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      name: "Milestones",
      href: "/train-your-twin-app/milestones",
      icon: Trophy,
      current: location.pathname === "/train-your-twin-app/milestones",
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
        <div className="mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center hover:opacity-80 transition-opacity gap-2"
              >
                <Brain className="h-8 w-8 text-logo-teal" />
                <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent">
                  Anansi AI
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                        ${
                          item.current
                            ? "bg-logo-teal text-white shadow-sm"
                            : item.locked
                              ? "text-muted-foreground cursor-not-allowed hover:bg-muted/30"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted/50 hover:shadow-sm"
                        }
                      `}
                      onClick={(e) => {
                        if (item.locked) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <Icon
                        className={`h-4 w-4 ${item.locked ? "opacity-50" : ""} ${!item.current && !item.locked ? "group-hover:scale-110" : ""} transition-transform`}
                      />
                      <span
                        className={`${item.locked ? "opacity-50" : ""} whitespace-nowrap`}
                      >
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

              {/* Tablet Navigation - Horizontal Scroll */}
              <nav
                className="hidden md:flex lg:hidden overflow-x-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex space-x-1 min-w-max px-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-[4rem]
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
                          className={`h-4 w-4 ${item.locked ? "opacity-50" : ""} mb-1`}
                        />
                        <span
                          className={`${item.locked ? "opacity-50" : ""} text-center leading-none`}
                        >
                          {item.name === "Twin Courses"
                            ? "Courses"
                            : item.name === "Daily Tasks"
                              ? "Daily Tasks"
                              : item.name}
                        </span>
                        {item.locked && (
                          <div className="w-2 h-2 rounded-full border border-muted-foreground/30 flex items-center justify-center mt-1">
                            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
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
                    My Twin
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user?.completedAutobiography ? "Ready" : "Learning"}
                  </p>
                </div>
              </div>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded-lg">
                    <div className="hidden sm:block text-sm text-foreground font-medium">
                      {user?.name}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold text-sm">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold text-xs">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/train-your-twin-app/settings" className="flex items-center space-x-2 cursor-pointer">
                      <UserCircle className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/train-your-twin-app/settings" className="flex items-center space-x-2 cursor-pointer">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="flex items-center space-x-2 cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden relative p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="px-3 py-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 touch-manipulation min-h-[48px]
                      ${
                        item.current
                          ? "bg-gradient-to-r from-logo-teal to-logo-blue text-white shadow-lg"
                          : item.locked
                            ? "text-muted-foreground cursor-not-allowed bg-muted/20"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted/60 active:bg-muted/80"
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
                    <div
                      className={`p-2 rounded-lg ${
                        item.current
                          ? "bg-white/20"
                          : item.locked
                            ? "bg-muted/30"
                            : "bg-logo-teal/10"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${item.locked ? "opacity-50" : item.current ? "text-white" : "text-logo-teal"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`${item.locked ? "opacity-50" : ""} font-semibold`}
                      >
                        {item.name}
                      </span>
                      {item.name === "My Twin" && (
                        <p className="text-xs opacity-70 mt-0.5">
                          Your AI assistant
                        </p>
                      )}
                      {item.name === "Daily Tasks" && (
                        <p className="text-xs opacity-70 mt-0.5">
                          Training activities
                        </p>
                      )}
                      {item.name === "Twin Courses" && (
                        <p className="text-xs opacity-70 mt-0.5">
                          Skill development
                        </p>
                      )}
                    </div>
                    {item.locked && (
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      </div>
                    )}
                    {!item.locked && !item.current && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile user actions */}
              <div className="pt-3 border-t border-border/50 mt-3">
                <Link
                  to="/"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/60 active:bg-muted/80 transition-all duration-200 touch-manipulation min-h-[48px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="p-2 rounded-lg bg-muted/30">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">Back to AnansiAI</span>
                    <p className="text-xs opacity-70 mt-0.5">Marketing site</p>
                  </div>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
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
