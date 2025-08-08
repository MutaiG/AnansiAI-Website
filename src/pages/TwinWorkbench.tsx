import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import {
  Brain,
  Target,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
  Monitor,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Code,
  PenTool,
  Database,
} from "lucide-react";

const TwinWorkbench = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-accent/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <Monitor className="mr-2 h-5 w-5 text-ai-accent" />
              Twin Workbench
            </div>

            <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-ai-accent to-cyber-blue bg-clip-text text-transparent">
                Your Twin's
              </span>
              <br />
              <span className="text-foreground">Personal Desk.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              The central command center where your AI Twin gets work done.
              Manage, monitor, and maximize your Twin's capabilities through an
              intuitive interface designed for both technical users and everyday
              professionals.
            </p>

            <ComingSoonDialog feature="Twin Workbench">
              <Button
                size="lg"
                className="bg-gradient-to-r from-ai-accent to-cyber-blue hover:from-ai-accent/90 hover:to-cyber-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Access Your Workbench
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </ComingSoonDialog>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              Where Productivity Meets Intelligence
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              The Twin Workbench provides everything you need to collaborate
              effectively with your AI Twin and manage its capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-8">
                  <MessageSquare className="h-10 w-10 text-ai-accent" />
                </div>
                <h3 className="text-sm font-bold mb-4">
                  Intelligent Conversation Hub
                </h3>
                <p className="text-muted-foreground text-sm">
                  Engage with your Twin through natural conversation,
                  project-specific chats, and context-aware dialogues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <FileText className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">
                  Document Collaboration
                </h3>
                <p className="text-muted-foreground text-sm">
                  Co-create documents, reports, and presentations with your Twin
                  understanding your style and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Settings className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">Twin Management</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor your Twin's learning progress, adjust behaviors, and
                  fine-tune its responses to match your evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workbench Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              Intuitive Interface Design
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Built for both power users and casual users, the Workbench adapts
              to your level of technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-bold mb-6">
                For Everyday Professionals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ai-accent/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-ai-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Simple Chat Interface
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Talk to your Twin like you would any colleague with no
                      technical commands required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyber-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Drag & Drop Files</h4>
                    <p className="text-muted-foreground text-sm">
                      Share documents, images, and data with simple drag and
                      drop functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visual Progress</h4>
                    <p className="text-muted-foreground text-sm">
                      See your Twin's capabilities grow through visual
                      dashboards and progress indicators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">For Technical Users</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ai-accent/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-ai-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">API Integration</h4>
                    <p className="text-muted-foreground text-sm">
                      Connect your Twin to existing workflows through robust API
                      endpoints and webhooks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyber-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Analytics</h4>
                    <p className="text-muted-foreground text-sm">
                      Deep dive into your Twin's performance metrics, learning
                      patterns, and optimization opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Workflows</h4>
                    <p className="text-muted-foreground text-sm">
                      Create automated workflows and custom commands tailored to
                      your specific use cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workbench Tools */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              Comprehensive Tool Suite
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Everything you need to maximize your Twin's potential across
              different domains and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <PenTool className="h-8 w-8 text-ai-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">
                  Generate articles, reports, and creative content in your
                  unique voice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-bold mb-2">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze datasets and generate insights using your analytical
                  approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-logo-blue mx-auto mb-4" />
                <h3 className="font-bold mb-2">Code Assistance</h3>
                <p className="text-sm text-muted-foreground">
                  Get coding help that understands your programming style and
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-logo-teal mx-auto mb-4" />
                <h3 className="font-bold mb-2">Project Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Plan and organize projects using your proven methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Database className="h-8 w-8 text-ai-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Knowledge Management</h3>
                <p className="text-sm text-muted-foreground">
                  Organize and retrieve information using your personal
                  knowledge system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-bold mb-2">Decision Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get recommendations that align with your decision-making
                  patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-logo-blue mx-auto mb-4" />
                <h3 className="font-bold mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Draft emails and messages that reflect your communication
                  style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 text-logo-teal mx-auto mb-4" />
                <h3 className="font-bold mb-2">Creative Thinking</h3>
                <p className="text-sm text-muted-foreground">
                  Brainstorm ideas and solutions using your creative process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              Security & Privacy First
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Your Workbench is designed with enterprise-grade security while
              maintaining the simplicity of personal use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ai-accent to-cyber-blue text-white mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-bold mb-3">Private by Design</h3>
              <p className="text-muted-foreground">
                Your data never leaves your control. All processing happens
                within your secure environment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-logo-blue text-white mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-bold mb-3">Encrypted Everything</h3>
              <p className="text-muted-foreground">
                End-to-end encryption ensures your conversations and documents
                remain completely private.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-logo-teal text-white mb-6">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-bold mb-3">Full Control</h3>
              <p className="text-muted-foreground">
                You decide what your Twin learns, remembers, and how it evolves
                over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-8">
              Ready to Work with Your Twin?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              The Twin Workbench becomes available once your AI Twin reaches
              sufficient maturity through the training process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-background border">
                <span className="text-lg font-bold text-logo-teal">1</span>
                <h3 className="font-semibold mb-2 mt-2">Begin Twin Training</h3>
                <p className="text-sm text-muted-foreground">
                  Start the training process through our Student or Adult
                  programs.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <span className="text-lg font-bold text-logo-teal">2</span>
                <h3 className="font-semibold mb-2 mt-2">
                  Reach Maturity Milestone
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your Twin develops enough capability to be productive in the
                  Workbench environment.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <span className="text-lg font-bold text-logo-teal">3</span>
                <h3 className="font-semibold mb-2 mt-2">Access Your Desk</h3>
                <p className="text-sm text-muted-foreground">
                  Begin collaborating with your Twin through the full Workbench
                  interface.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-ai-accent to-cyber-blue text-white px-10 py-7 text-xl font-bold hover:scale-105 transition-all duration-300"
            >
              <Link to="/train-your-twin">Start Training Your Twin</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TwinWorkbench;
