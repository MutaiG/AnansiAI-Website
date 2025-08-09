import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  Building2,
  Users,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Cpu,
  Network,
  Lock,
  TrendingUp,
  Clock,
  BookOpen,
  UserCheck,
  Zap,
  Mail,
  Copy,
} from "lucide-react";

const EnterpriseTwin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/8 via-logo-blue/5 to-logo-teal/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <Building2 className="mr-2 h-5 w-5 text-cyber-blue" />
              Enterprise Twin
            </div>

            <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight font-poppins mb-8">
              <span className="bg-gradient-to-br from-cyber-blue to-logo-blue bg-clip-text text-transparent">
                Your Organization.
              </span>
              <br />
              <span className="text-foreground">Personified.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              Complete AI representation of your business. The Enterprise Twin
              embodies your company's knowledge, culture, decision-making
              patterns, and communication style, creating a scalable AI that
              truly understands your organization.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyber-blue to-logo-blue hover:from-cyber-blue/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-sm font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/enterprise-waiting-list">
                  Join Waiting List
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* What Makes Enterprise Twin Unique */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins mb-4">
              Beyond Generic Corporate AI
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              While others offer one-size-fits-all solutions, Enterprise Twin
              learns your specific business culture, processes, and
              decision-making patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <Building2 className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-base font-bold mb-4">
                  Organizational Intelligence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Captures your company's institutional knowledge, from project
                  methodologies to client communication patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Network className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-base font-bold mb-4">
                  Collaborative Learning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learns from your team's interactions, documents, and decisions
                  to understand your collaborative culture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8">
                  <Shield className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-base font-bold mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground text-sm">
                  Your data stays within your infrastructure. Complete ownership
                  and control over your AI asset.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins mb-4">
              Core Capabilities
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Transform how your organization operates with AI that understands
              your unique business context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2">
                      Intelligent Document Processing
                    </h3>
                    <p className="text-muted-foreground">
                      Automatically understands and processes documents in your
                      company's style, maintaining consistency across all
                      communications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 flex-shrink-0">
                    <Target className="h-6 w-6 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2">
                      Strategic Decision Support
                    </h3>
                    <p className="text-muted-foreground">
                      Provides recommendations aligned with your company values,
                      past decisions, and strategic objectives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 flex-shrink-0">
                    <Users className="h-6 w-6 text-logo-teal" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2">
                      Team Onboarding & Training
                    </h3>
                    <p className="text-muted-foreground">
                      Helps new employees understand company culture, processes,
                      and expectations through personalized guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-ai-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2">
                      Performance Analytics
                    </h3>
                    <p className="text-muted-foreground">
                      Analyzes organizational patterns to identify optimization
                      opportunities and efficiency improvements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins mb-4">
              Implementation Process
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              A structured approach to building your Enterprise Twin that
              minimizes disruption while maximizing learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-logo-blue text-white mb-6">
                <span className="text-sm font-bold">1</span>
              </div>
              <h3 className="text-base font-bold mb-3">Discovery & Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of your organizational structure,
                processes, and communication patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-logo-teal text-white mb-6">
                <span className="text-sm font-bold">2</span>
              </div>
              <h3 className="text-base font-bold mb-3">Data Integration</h3>
              <p className="text-muted-foreground">
                Secure integration with your existing systems, documents, and
                communication platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-ai-accent text-white mb-6">
                <span className="text-sm font-bold">3</span>
              </div>
              <h3 className="text-base font-bold mb-3">Training & Refinement</h3>
              <p className="text-muted-foreground">
                Iterative training process with your team's feedback to ensure
                accurate representation.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ai-accent to-cyber-blue text-white mb-6">
                <span className="text-sm font-bold">4</span>
              </div>
              <h3 className="text-base font-bold mb-3">Deployment & Support</h3>
              <p className="text-muted-foreground">
                Full deployment with ongoing support and continuous learning
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Organizations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins mb-4">
              Organizational Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Clock className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="text-sm font-bold mb-2">Faster Decision Making</h3>
              <p className="text-sm text-muted-foreground">
                Instant access to organizational knowledge reduces decision
                latency.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <BookOpen className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="text-sm font-bold mb-2">Knowledge Preservation</h3>
              <p className="text-sm text-muted-foreground">
                Captures and preserves institutional knowledge that typically
                leaves with employees.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Zap className="h-8 w-8 text-logo-teal mb-4" />
              <h3 className="text-sm font-bold mb-2">Operational Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Automates routine tasks while maintaining organizational
                standards.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Users className="h-8 w-8 text-ai-accent mb-4" />
              <h3 className="text-sm font-bold mb-2">Scalable Training</h3>
              <p className="text-sm text-muted-foreground">
                Provides consistent onboarding and training experiences for all
                team members.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Lock className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="text-sm font-bold mb-2">Data Sovereignty</h3>
              <p className="text-sm text-muted-foreground">
                Complete control over your data and AI model with no external
                dependencies.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <TrendingUp className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="text-sm font-bold mb-2">Competitive Advantage</h3>
              <p className="text-sm text-muted-foreground">
                Unique AI that competitors cannot replicate or access.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default EnterpriseTwin;
