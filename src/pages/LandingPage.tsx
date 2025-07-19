import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Brain, Sparkles, ArrowRight, Users, Target, Zap } from "lucide-react";

const LandingPage = () => {
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(loginData.email, loginData.password);
    if (success) {
      navigate("/train-your-twin-app");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signup(
      signupData.name,
      signupData.email,
      signupData.password,
    );
    if (success) {
      navigate("/train-your-twin-app");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                alt="AnansiAI"
                className="h-12 w-12"
              />
              <span className="text-xl font-bold">AnansiAI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
                <Sparkles className="mr-2 h-4 w-4 text-logo-teal" />
                Build Your Personal AI Twin
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                  Train humanly.
                </span>
                <br />
                <span className="text-foreground">Deliver superhumanly.</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Train your personal AI Twin through daily interactions.
              </p>
            </div>

            {/* Right side - Auth forms */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Get Started
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Begin your AI Twin journey today
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                          disabled={isLoading}
                        >
                          {isLoading ? "Signing in..." : "Sign In"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={signupData.name}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="your@email.com"
                            value={signupData.email}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="••••••••"
                            value={signupData.password}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                password: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                          disabled={isLoading}
                        >
                          {isLoading ? "Creating account..." : "Create Account"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                      Demo mode - use any email/password to sign in
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What makes your Twin special?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike generic AI tools, your Twin learns directly from you
              through daily interactions and tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                <Brain className="h-6 w-6 text-logo-teal" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personal Learning</h3>
              <p className="text-sm text-muted-foreground">
                Daily tasks help your Twin understand your personality, writing
                style, and thinking patterns.
              </p>
            </Card>

            <Card className="border-0 bg-background shadow-lg text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                <Target className="h-6 w-6 text-logo-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Skill Development</h3>
              <p className="text-sm text-muted-foreground">
                Unlock structured courses in writing, design, coding, and more
                as your Twin evolves.
              </p>
            </Card>

            <Card className="border-0 bg-background shadow-lg text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                <Zap className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Always Available</h3>
              <p className="text-sm text-muted-foreground">
                Your floating Twin assistant is always ready to help with tasks,
                questions, and creativity.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
