import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Users,
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
  Star,
  Calendar,
  TrendingUp,
} from "lucide-react";

const StudentProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <GraduationCap className="mr-2 h-5 w-5 text-logo-teal" />
              Student Program
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Train Your Twin
              </span>
              <br />
              <span className="text-foreground">as You Learn.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              Future-proof your education with the Student Program. Build your
              personal AI Twin through natural learning processes, creating a
              lifelong intelligent companion that grows with your knowledge and
              personality.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/train-your-twin" className="flex items-center">
                Join Student Program
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Learn Naturally, Build Intelligently
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Our program integrates seamlessly with traditional education,
              requiring no extra work while creating extraordinary value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8">
                  <Heart className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-4">Human-Centered AI</h3>
                <p className="text-muted-foreground text-sm">
                  Your Twin learns from your actual work, thoughts, and
                  experiences, not from internet data or generic examples.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <BookOpen className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zero Academic Burden</h3>
                <p className="text-muted-foreground text-sm">
                  Continue your regular studies while your Twin develops
                  automatically from your assignments and classroom activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <Award className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">Lifetime Asset</h3>
                <p className="text-muted-foreground text-sm">
                  Graduate with both a degree and a sophisticated AI companion
                  that understands your unique way of thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works for Students */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              The Student Journey
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              From elementary school through university, your Twin evolves
              alongside your educational development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-base font-bold mb-3">Natural Learning</h3>
              <p className="text-muted-foreground">
                Attend classes, complete assignments, and engage in school
                activities as you normally would.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-base font-bold mb-3">Silent Development</h3>
              <p className="text-muted-foreground">
                Your Twin learns from your work patterns, writing style, and
                problem-solving approaches automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-base font-bold mb-3">Gradual Capability</h3>
              <p className="text-muted-foreground">
                As you advance through grades, your Twin becomes more
                sophisticated and capable.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ai-accent to-logo-teal text-white mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-base font-bold mb-3">Active Partnership</h3>
              <p className="text-muted-foreground">
                Begin collaborating with your mature Twin for projects,
                research, and professional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Stages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Twin Development by Educational Stage
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Each stage builds upon the previous, creating increasingly
              sophisticated AI capabilities aligned with your growth.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 flex-shrink-0">
                    <School className="h-8 w-8 text-logo-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold mb-3">
                      Elementary School (Ages 6-11)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-teal">
                          Twin Capabilities
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Basic personality trait recognition</li>
                          <li>• Simple communication patterns</li>
                          <li>• Learning preference identification</li>
                          <li>• Interest area mapping</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-blue">
                          Learning Sources
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Creative writing assignments</li>
                          <li>• Show-and-tell presentations</li>
                          <li>• Art projects and explanations</li>
                          <li>• Reading comprehension responses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-logo-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold mb-3">
                      Middle & High School (Ages 12-18)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-teal">
                          Twin Capabilities
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Advanced reasoning patterns</li>
                          <li>• Subject-specific expertise</li>
                          <li>• Critical thinking approaches</li>
                          <li>• Research methodology preferences</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-blue">
                          Learning Sources
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Research papers and reports</li>
                          <li>• Lab reports and analyses</li>
                          <li>• Creative projects and portfolios</li>
                          <li>• Debate participation and arguments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 flex-shrink-0">
                    <University className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold mb-3">
                      University & Beyond (Ages 18+)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-teal">
                          Twin Capabilities
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Professional competency modeling</li>
                          <li>• Independent research capability</li>
                          <li>• Leadership style development</li>
                          <li>• Career-ready AI assistant</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-logo-blue">
                          Learning Sources
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Thesis and dissertation work</li>
                          <li>• Internship and work experiences</li>
                          <li>• Professional communications</li>
                          <li>• Leadership and team projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Why Start as a Student?
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              The earlier you begin, the more sophisticated and personally
              aligned your Twin becomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <TrendingUp className="h-8 w-8 text-logo-teal mb-4" />
              <h3 className="font-bold mb-2">Competitive Advantage</h3>
              <p className="text-sm text-muted-foreground">
                Graduate with a unique AI asset that gives you an edge in
                college applications and job markets.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Lightbulb className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="font-bold mb-2">Enhanced Learning</h3>
              <p className="text-sm text-muted-foreground">
                Your Twin can help explain concepts, generate study materials,
                and support your learning journey.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Star className="h-8 w-8 text-cyber-blue mb-4" />
              <h3 className="font-bold mb-2">Personal Growth</h3>
              <p className="text-sm text-muted-foreground">
                Develop self-awareness and metacognitive skills through the Twin
                development process.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <UserCheck className="h-8 w-8 text-ai-accent mb-4" />
              <h3 className="font-bold mb-2">Authentic Representation</h3>
              <p className="text-sm text-muted-foreground">
                Your Twin truly represents your thinking, not generic AI
                patterns or internet content.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Clock className="h-8 w-8 text-logo-teal mb-4" />
              <h3 className="font-bold mb-2">Time Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Automate routine tasks while maintaining your personal standards
                and style.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border shadow-lg">
              <Target className="h-8 w-8 text-logo-blue mb-4" />
              <h3 className="font-bold mb-2">Career Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Enter the workforce with advanced AI collaboration skills and
                your own intelligent assistant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Program Structure
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-background shadow-xl">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold mb-4">What's Included</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Lifetime Twin development and ownership
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Teacher-supervised training process
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Gradual capability development
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Access to Twin Workbench upon maturity
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">
                          Complete data privacy and ownership
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold mb-4">Investment</h3>
                    <div className="text-center">
                      <div className="text-xl font-bold text-logo-teal mb-2">
                        $500
                      </div>
                      <p className="text-muted-foreground mb-4">
                        One-time payment for complete lifetime training
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">
                        Covers all education levels from Grade 1 to University
                        graduation.{" "}
                        <span className="font-semibold text-logo-teal">
                          Private students only.
                        </span>
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-logo-teal to-logo-blue text-white w-full py-4 text-sm font-bold hover:scale-105 transition-all duration-300"
                      >
                        <Link to="/train-your-twin">
                          Enroll in Student Program
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
              Start Building Your Future Today
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Join the pioneers who are creating the first generation of truly
              personal AI companions through natural learning processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-background border">
                <Calendar className="h-8 w-8 text-logo-teal mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  Pilot Programs Start Soon
                </h3>
                <p className="text-sm text-muted-foreground">
                  Be among the first students to begin Twin development.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Users className="h-8 w-8 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  Limited Initial Enrollment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring quality through manageable cohort sizes.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Award className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Pioneer Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Early participants receive enhanced support and features.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-10 py-7 text-xl font-bold hover:scale-105 transition-all duration-300"
            >
              <Link to="/train-your-twin">Begin Your Twin Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentProgram;
