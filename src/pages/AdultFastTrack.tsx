import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaitlistCTA from "@/components/WaitlistCTA";
import {
  Clock,
  Target,
  Users,
  Brain,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Briefcase,
  Calendar,
  UserCheck,
  Cpu,
  Star,
  Lightbulb,
  BookOpen,
} from "lucide-react";

const AdultFastTrack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/8 via-cyber-blue/5 to-ai-accent/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <Clock className="mr-2 h-5 w-5 text-logo-blue" />
              Adult Fast-Track Program
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-blue to-cyber-blue bg-clip-text text-transparent">
                It's Never Too Late
              </span>
              <br />
              <span className="text-foreground">
                to Build Your Own AI Twin.
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-xl text-muted-foreground mb-8 leading-relaxed">
              The Adult Fast-Track Program compresses years of traditional AI
              Twin development into an intensive, accelerated journey. Designed
              for professionals ready to compete in an AI-driven world without
              waiting decades.
            </p>

            <WaitlistCTA productType="adult">
              <Button
                size="lg"
                className="bg-gradient-to-r from-logo-blue to-cyber-blue hover:from-logo-blue/90 hover:to-cyber-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Start Fast-Track Program
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </WaitlistCTA>
          </div>
        </div>
      </section>

      {/* Why Fast-Track */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Why Choose the Fast-Track Approach?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional AI Twin development takes years through educational
              progression. Our fast-track program delivers the same results in
              months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Zap className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accelerated Learning</h3>
                <p className="text-muted-foreground text-lg">
                  Skip years of gradual development with our intensive
                  curriculum designed specifically for adult learners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <TrendingUp className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Career-Focused</h3>
                <p className="text-muted-foreground text-lg">
                  Training directly aligned with professional needs and current
                  workplace challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-8">
                  <Target className="h-10 w-10 text-ai-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Immediate Results</h3>
                <p className="text-muted-foreground text-lg">
                  Begin seeing productive AI Twin capabilities within weeks, not
                  years.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Fast-Track Program Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A carefully designed progression that builds your AI Twin's
              capabilities rapidly while maintaining quality and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Intensive Foundation</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Weeks 1-2:</strong> Personality mapping, communication
                style analysis, and core trait establishment through focused
                exercises.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Professional Integration
              </h3>
              <p className="text-muted-foreground text-sm">
                <strong>Weeks 3-6:</strong> Work-focused training using real
                projects, emails, and professional communications to build
                capability.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ai-accent to-logo-teal text-white mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Specialized Skills</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Weeks 7-10:</strong> Domain-specific training tailored
                to your field, from creative work to technical analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Advanced Deployment</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Weeks 11-12:</strong> Fine-tuning, optimization, and
                full Twin Workbench integration for maximum productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Achieve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              What You'll Achieve in 12 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 flex-shrink-0">
                    <Brain className="h-6 w-6 text-logo-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Sophisticated AI Thinking
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Your Twin will understand your reasoning patterns,
                      decision-making processes, and creative approaches,
                      equivalent to years of natural development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Professional Productivity
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Immediate workplace application with AI that can handle
                      emails, reports, analysis, and creative projects in your
                      style.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-ai-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Authentic Representation
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Despite the accelerated timeline, your Twin maintains the
                      authentic personality and approach that makes it uniquely
                      yours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 flex-shrink-0">
                    <Award className="h-6 w-6 text-logo-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Competitive Advantage
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Enter the AI-enhanced workplace with your own
                      sophisticated AI assistant while others are still using
                      generic tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Program Components
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Lightbulb className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="font-bold mb-2">Intensive Workshops</h3>
              <p className="text-sm text-muted-foreground">
                Weekly guided sessions focused on specific skill development and
                personality refinement.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <BookOpen className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="font-bold mb-2">Project-Based Learning</h3>
              <p className="text-sm text-muted-foreground">
                Real-world projects that simultaneously serve your professional
                needs and train your Twin.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Users className="h-8 w-8 text-ai-accent mb-4" />
              <h3 className="font-bold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Direct access to AI training specialists and personalized
                coaching throughout the program.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Cpu className="h-8 w-8 text-logo-teal mb-4" />
              <h3 className="font-bold mb-2">Advanced Tools</h3>
              <p className="text-sm text-muted-foreground">
                Access to professional-grade training tools and accelerated
                development platforms.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Star className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="font-bold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous testing and validation to ensure your Twin meets
                professional standards.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <TrendingUp className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="font-bold mb-2">Ongoing Evolution</h3>
              <p className="text-sm text-muted-foreground">
                Continued learning framework to keep your Twin current and
                improving post-graduation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Program Investment
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional-grade AI Twin development in a fraction of the time
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-logo-blue shadow-2xl">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-8">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Adult Fast-Track Program
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-logo-teal mb-4">
                  $2,500
                </div>
                <p className="text-muted-foreground mb-6">
                  Complete 12-week intensive program with expert guidance and
                  accelerated AI Twin development.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      12-week intensive training program
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      Expert AI training specialists
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      Professional-grade development tools
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      Full Twin Workbench access upon completion
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">
                      Lifetime AI Twin ownership and evolution
                    </span>
                  </div>
                </div>

                <WaitlistCTA productType="adult">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-logo-blue to-cyber-blue text-white w-full py-4 text-lg font-bold hover:scale-105 transition-all duration-300"
                  >
                    Enroll in Fast-Track Program
                  </Button>
                </WaitlistCTA>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-8">
              Don't Wait Another Decade for AI Advantage
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              While others spend years building AI capabilities through
              traditional education, you can have a sophisticated AI Twin in
              just 12 weeks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-background border">
                <Calendar className="h-8 w-8 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Next Cohort Starts</h3>
                <p className="text-sm text-muted-foreground">
                  Limited enrollment ensures personalized attention and optimal
                  results.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Users className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Small Cohorts</h3>
                <p className="text-sm text-muted-foreground">
                  Maximum 20 participants per cohort for individualized
                  guidance.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Award className="h-8 w-8 text-ai-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">
                  Join professionals who've already transformed their careers
                  with AI Twins.
                </p>
              </div>
            </div>

            <WaitlistCTA productType="adult">
              <Button
                size="lg"
                className="bg-gradient-to-r from-logo-blue to-cyber-blue text-white px-10 py-7 text-xl font-bold hover:scale-105 transition-all duration-300"
              >
                Start Your Fast-Track Journey
              </Button>
            </WaitlistCTA>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdultFastTrack;
