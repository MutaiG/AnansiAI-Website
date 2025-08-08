import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  GraduationCap,
  BookOpen,
  Users,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  School,
  University,
  Award,
  Clock,
  Lightbulb,
  UserCheck,
  Cpu,
  Heart,
} from "lucide-react";

const EducationSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <BookOpen className="mr-2 h-5 w-5 text-logo-teal" />
              Education System
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Building AI Twins
              </span>
              <br />
              <span className="text-foreground">the Human Way.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-sm text-muted-foreground mb-8 leading-relaxed">
              Our revolutionary education approach creates AI Twins through
              natural human learning processes. Structured, scalable, and
              affordable, transforming how students and educators approach
              personal AI development.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link
                to="/education/student-program"
                className="flex items-center"
              >
                Explore Student Program
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Revolutionary Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
              Why Human-Centric AI Training Matters
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Unlike generic AI trained on scraped internet data, our system
              creates AI Twins through authentic human learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8">
                  <Heart className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Human-Supervised Learning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Every AI Twin is trained under direct human supervision,
                  ensuring authentic personality development and ethical
                  reasoning patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Lightbulb className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Natural Learning Flow
                </h3>
                <p className="text-muted-foreground text-sm">
                  Students learn naturally while their AI Twin develops in
                  parallel with no additional burden on classroom activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <Award className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Lifetime Value Creation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Each Twin becomes a permanent personal asset, growing more
                  valuable with every year of education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works in Schools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
              Integration with Traditional Education
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Our system seamlessly integrates with existing educational
              frameworks without disrupting proven teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">For Teachers</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-teal/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No Extra Workload</h4>
                    <p className="text-muted-foreground text-sm">
                      Continue teaching as usual. Our system captures learning
                      data through natural classroom activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enhanced Insights</h4>
                    <p className="text-muted-foreground text-sm">
                      Gain deeper understanding of each student's learning
                      patterns and personality development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyber-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Professional Development
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Participate in cutting-edge AI education methodology
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">For Students</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-teal/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Learn Naturally</h4>
                    <p className="text-muted-foreground text-sm">
                      Focus on education while your AI Twin develops
                      automatically from your assignments and reflections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-logo-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Future-Ready Skills</h4>
                    <p className="text-muted-foreground text-sm">
                      Graduate with both traditional education and a personal AI
                      assistant trained in your style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyber-blue/20 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ownership & Privacy</h4>
                    <p className="text-muted-foreground text-sm">
                      Your AI Twin belongs to you completely with no external
                      access or data mining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
              Structured Learning Progression
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Each educational level builds upon the previous, creating
              increasingly sophisticated AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <School className="h-12 w-12 text-logo-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Primary Education</h3>
                <div className="text-left space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    • Basic personality formation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Learning habit development
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Communication style foundation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Core value establishment
                  </p>
                </div>
                <div className="text-sm text-logo-teal font-semibold">
                  Ages 6-11 • Foundation Building
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-12 w-12 text-logo-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Secondary Education</h3>
                <div className="text-left space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    • Advanced reasoning development
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Subject-specific expertise
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Critical thinking patterns
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Social interaction modeling
                  </p>
                </div>
                <div className="text-sm text-logo-blue font-semibold">
                  Ages 12-18 • Skill Specialization
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <University className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Higher Education</h3>
                <div className="text-left space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    • Professional competency modeling
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Research methodology mastery
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Leadership style development
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Career-ready AI assistant
                  </p>
                </div>
                <div className="text-sm text-cyber-blue font-semibold">
                  Ages 18+ • Professional Preparation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Educational Institutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
              Institutional Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Target className="h-8 w-8 text-logo-teal mb-4" />
              <h3 className="font-bold mb-2">Differentiation</h3>
              <p className="text-sm text-muted-foreground">
                Become a pioneer in AI-integrated education, attracting
                forward-thinking families.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Users className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="font-bold mb-2">Student Outcomes</h3>
              <p className="text-sm text-muted-foreground">
                Improved learning insights and personalized educational
                pathways.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Clock className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="font-bold mb-2">Future Readiness</h3>
              <p className="text-sm text-muted-foreground">
                Prepare students for an AI-integrated professional world.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Award className="h-8 w-8 text-ai-accent mb-4" />
              <h3 className="font-bold mb-2">Educational Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Lead in educational technology and methodology development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation for Schools */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
              Getting Started with Your Institution
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Simple implementation process designed to integrate seamlessly
              with your existing educational framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-sm font-bold mb-3">Pilot Program</h3>
              <p className="text-muted-foreground">
                Start with a small cohort to demonstrate value and refine
                integration processes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-sm font-bold mb-3">Teacher Training</h3>
              <p className="text-muted-foreground">
                Comprehensive support for educators to understand and optimize
                the AI Twin development process.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-sm font-bold mb-3">Full Implementation</h3>
              <p className="text-muted-foreground">
                Scale across grades and subjects with ongoing support and
                continuous improvement.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-10 py-6 text-sm font-bold hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationSystem;
