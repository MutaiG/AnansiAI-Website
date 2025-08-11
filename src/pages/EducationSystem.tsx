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
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <BookOpen className="mr-2 h-5 w-5 text-logo-teal" />
              Education System
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Building AI Twins
              </span>
              <br />
              <span className="text-foreground">the Human Way.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xs text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Our revolutionary education approach creates AI Twins through
              natural human learning processes. Structured, scalable, and
              affordable, transforming how students and educators approach
              personal AI development.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-6 sm:px-8 py-3 text-sm sm:text-sm font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Link
                to="/education/student-program"
                className="flex items-center justify-center"
              >
                Explore Student Program
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Marquee Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-foreground mb-8 sm:mb-12">
              AI Twins in Action
            </h2>

            {/* Desktop: Horizontal marquee animation */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden">
                <div className="animate-marquee whitespace-nowrap inline-block">
                  <div className="inline-flex gap-16 items-center">
                    {/* Create duplicate content for seamless loop */}
                    {[1, 2].map((iteration) => (
                      <div
                        key={iteration}
                        className="inline-flex gap-12 items-center"
                      >
                        {/* Image 1 */}
                        <div className="text-center flex-shrink-0 w-48">
                          <div className="w-32 h-24 mx-auto mb-3">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2Fba921df48a58404b97e9a424273ea648?format=webp&width=400"
                              alt="Easy Installation"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 text-xs">
                            Easy Installation
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Quick setup on any device
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center flex-shrink-0">
                          <ArrowRight className="h-6 w-6 text-logo-teal" />
                        </div>

                        {/* Image 2 */}
                        <div className="text-center flex-shrink-0 w-48">
                          <div className="w-32 h-24 mx-auto mb-3">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2F67b30a7ed3fc4701a8cb6cc1b6429178?format=webp&width=400"
                              alt="AI Features"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 text-xs">
                            AI Features
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Advanced capabilities
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center flex-shrink-0">
                          <ArrowRight className="h-6 w-6 text-logo-blue" />
                        </div>

                        {/* Image 3 */}
                        <div className="text-center flex-shrink-0 w-48">
                          <div className="w-32 h-24 mx-auto mb-3">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2F29f1742953c548d58b63d1e4141881b0?format=webp&width=400"
                              alt="Email Excellence"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 text-xs">
                            Email Excellence
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Smart replies and inbox management
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet: Static grid layout */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Image 1 */}
                <div className="text-center">
                  <div className="w-full max-w-32 h-20 sm:h-24 mx-auto mb-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2Fba921df48a58404b97e9a424273ea648?format=webp&width=400"
                      alt="Easy Installation"
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">
                    Easy Installation
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Quick setup on any device
                  </p>
                </div>

                {/* Image 2 */}
                <div className="text-center">
                  <div className="w-full max-w-32 h-20 sm:h-24 mx-auto mb-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2F67b30a7ed3fc4701a8cb6cc1b6429178?format=webp&width=400"
                      alt="AI Features"
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">
                    AI Features
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Advanced capabilities
                  </p>
                </div>

                {/* Image 3 */}
                <div className="text-center">
                  <div className="w-full max-w-32 h-20 sm:h-24 mx-auto mb-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7f3d43e5786f474e9054e8ce71d3e773%2F29f1742953c548d58b63d1e4141881b0?format=webp&width=400"
                      alt="Email Excellence"
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">
                    Email Excellence
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Smart replies and inbox management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
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
                <h3 className="text-base font-bold mb-4">
                  Human-Supervised Learning
                </h3>
                <p className="text-muted-foreground text-xs">
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
                <h3 className="text-base font-bold mb-4">
                  Natural Learning Flow
                </h3>
                <p className="text-muted-foreground text-xs">
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
                <h3 className="text-base font-bold mb-4">
                  Lifetime Value Creation
                </h3>
                <p className="text-muted-foreground text-xs">
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
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Integration with Traditional Education
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Our system seamlessly integrates with existing educational
              frameworks without disrupting proven teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-6 text-center text-logo-teal">For Teachers</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-logo-teal/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-logo-teal" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">No Extra Workload</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Continue teaching as usual. Our system captures learning data through natural classroom activities.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-logo-blue/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-logo-blue" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Enhanced Insights</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Gain deeper understanding of each student's learning patterns and personality development.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyber-blue/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-cyber-blue" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Professional Development</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Participate in cutting-edge AI education methodology development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-6 text-center text-logo-blue">For Students</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-logo-teal/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-logo-teal" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Learn Naturally</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Focus on education while your AI Twin develops automatically from your assignments and reflections.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-logo-blue/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-logo-blue" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Future-Ready Skills</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Graduate with both traditional education and a personal AI assistant trained in your style.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyber-blue/20 mb-3">
                      <CheckCircle className="h-5 w-5 text-cyber-blue" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Ownership & Privacy</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Your AI Twin belongs to you completely with no external access or data mining.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Structured Learning Progression
            </h2>
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
              Each educational level builds upon the previous, creating
              increasingly sophisticated AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <School className="h-8 w-8 text-logo-teal mx-auto mb-3" />
                <h3 className="text-base font-bold mb-3">Primary Education</h3>
                <div className="text-left space-y-1 mb-4">
                  <p className="text-xs text-muted-foreground">
                    • Basic personality formation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Learning habit development
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Communication style foundation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Core value establishment
                  </p>
                </div>
                <div className="text-xs text-logo-teal font-semibold">
                  Ages 6-11 • Foundation Building
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-logo-blue mx-auto mb-3" />
                <h3 className="text-base font-bold mb-3">Secondary Education</h3>
                <div className="text-left space-y-1 mb-4">
                  <p className="text-xs text-muted-foreground">
                    • Advanced reasoning development
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Subject-specific expertise
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Critical thinking patterns
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Social interaction modeling
                  </p>
                </div>
                <div className="text-xs text-logo-blue font-semibold">
                  Ages 12-18 • Skill Specialization
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <University className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                <h3 className="text-base font-bold mb-3">Higher Education</h3>
                <div className="text-left space-y-1 mb-4">
                  <p className="text-xs text-muted-foreground">
                    • Professional competency modeling
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Research methodology mastery
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Leadership style development
                  </p>
                  <p className="text-xs text-muted-foreground">
                    • Career-ready AI assistant
                  </p>
                </div>
                <div className="text-xs text-cyber-blue font-semibold">
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
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Institutional Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-4 rounded-lg bg-background border shadow-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="h-5 w-5 text-logo-teal" />
                <h3 className="font-bold text-xs">Differentiation</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Become a pioneer in AI-integrated education, attracting
                forward-thinking families.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background border shadow-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-logo-blue" />
                <h3 className="font-bold text-xs">Student Outcomes</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Improved learning insights and personalized educational
                pathways.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background border shadow-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-cyber-blue" />
                <h3 className="font-bold text-xs">Future Readiness</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Prepare students for an AI-integrated professional world.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background border shadow-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-5 w-5 text-ai-accent" />
                <h3 className="font-bold text-xs">Educational Innovation</h3>
              </div>
              <p className="text-xs text-muted-foreground">
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
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Getting Started with Your Institution
            </h2>
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
              Simple implementation process designed to integrate seamlessly
              with your existing educational framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-4">
                <span className="text-sm font-bold">1</span>
              </div>
              <h3 className="text-xs font-bold mb-2">Pilot Program</h3>
              <p className="text-muted-foreground text-xs">
                Start with a small cohort to demonstrate value and refine
                integration processes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-4">
                <span className="text-sm font-bold">2</span>
              </div>
              <h3 className="text-xs font-bold mb-2">Teacher Training</h3>
              <p className="text-muted-foreground text-xs">
                Comprehensive support for educators to understand and optimize
                the AI Twin development process.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-4">
                <span className="text-sm font-bold">3</span>
              </div>
              <h3 className="text-xs font-bold mb-2">Full Implementation</h3>
              <p className="text-muted-foreground text-xs">
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
