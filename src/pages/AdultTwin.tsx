import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageNavigation from "@/components/PageNavigation";
import WaitlistCTA from "@/components/WaitlistCTA";
import {
  Briefcase,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Cpu,
  Brain,
  Zap,
  UserCheck,
  Award,
  TrendingUp,
} from "lucide-react";

const AdultTwin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <PageNavigation
          fallbackPath="/"
          showNext={true}
          nextPath="/products/enterprise-twin"
          nextLabel="Enterprise Twin"
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/8 via-cyber-blue/5 to-logo-teal/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <Briefcase className="mr-2 h-5 w-5 text-logo-blue" />
              Adult Twin
            </div>

            <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight font-poppins mb-8">
              <span className="bg-gradient-to-br from-logo-blue to-cyber-blue bg-clip-text text-transparent">
                Stay relevant.
              </span>
              <br />
              <span className="text-foreground">Train your own AI.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed">
              The Adult Twin helps you compete in an AI-driven job market by
              becoming your private, personalized AI clone. It understands your
              tone, reasoning, and skill set because it learns directly from
              you, not scraped data or generic models.
            </p>

            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-8 mb-8">
              <h3 className="text-lg font-bold text-center mb-4">Your twin, your future</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-ai-accent to-cyber-blue hover:from-ai-accent/90 hover:to-cyber-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/login">
                    Sign In
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Adults Need Their Own Twin */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold font-poppins mb-4">
              Why Adults Need Their Own Twin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Award className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">Own Your AI Future</h3>
                <p className="text-muted-foreground text-sm">
                  Build lasting value with AI that's truly yours. Your Twin
                  preserves your voice, your thinking, and your method, creating
                  a permanent asset that grows with you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <TrendingUp className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">Stay Competitive</h3>
                <p className="text-muted-foreground text-sm">
                  While others use generic AI tools, your Twin learns to work
                  exactly like you, giving you a unique advantage in the modern
                  workplace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-8">
                  <UserCheck className="h-10 w-10 text-ai-accent" />
                </div>
                <h3 className="text-sm font-bold mb-4">Your Unique Voice</h3>
                <p className="text-muted-foreground text-sm">
                  Your Twin understands your tone, reasoning, and skill set
                  because it learns directly from you, not scraped data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold font-poppins mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-8">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-sm font-bold mb-4">
                1. Montage Learning Program
              </h3>
              <p className="text-muted-foreground text-sm">
                Adults skip years of school-level training through an intensive,
                tailored curriculum focusing on communication, decision-making,
                and task handling.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-8">
                <Cpu className="h-10 w-10" />
              </div>
              <h3 className="text-sm font-bold mb-4">2. Your Work Feeds It</h3>
              <p className="text-muted-foreground text-sm">
                Emails, reports, chats, voice notes. The Twin trains on the real
                tasks you do daily.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent to-logo-teal text-white mb-8">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-sm font-bold mb-4">
                3. Human-Guided Finishing Touch
              </h3>
              <p className="text-muted-foreground text-sm">
                Pro plans include expert data labeling for extra accuracy so
                your Twin reflects your tone, personality, and approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold font-poppins mb-4">
              Who It's For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-logo-blue mx-auto mb-3" />
                <h3 className="font-bold text-sm">Job Seekers</h3>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                <h3 className="font-bold text-sm">Entrepreneurs</h3>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-ai-accent mx-auto mb-3" />
                <h3 className="font-bold text-sm">Managers</h3>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 text-logo-teal mx-auto mb-3" />
                <h3 className="font-bold text-sm">Creatives</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Designers, Writers, Marketers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 text-center">
                <Cpu className="h-8 w-8 text-logo-blue mx-auto mb-3" />
                <h3 className="font-bold text-sm">Technicians</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Coders, Accountants, Engineers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Disciplines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold font-poppins mb-4">
              Course Disciplines Available
            </h2>
            <p className="text-sm text-muted-foreground">
              Access specialized training modules once logged in to your Twin dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Programming & Development */}
            <Card className="border-2 border-logo-blue/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Cpu className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-lg font-bold mb-4">Programming & Development</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                    <span className="text-sm">Programming Logic</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                    <span className="text-sm">Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                    <span className="text-sm">Web Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI & Machine Learning */}
            <Card className="border-2 border-cyber-blue shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <Brain className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-lg font-bold mb-4">AI & Machine Learning</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyber-blue mr-2" />
                    <span className="text-sm">Machine Learning Fundamentals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyber-blue mr-2" />
                    <span className="text-sm">Deep Learning & Neural Networks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyber-blue mr-2" />
                    <span className="text-sm">Computer Vision & NLP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Cloud */}
            <Card className="border-2 border-ai-accent/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-8">
                  <Zap className="h-10 w-10 text-ai-accent" />
                </div>
                <h3 className="text-lg font-bold mb-4">Security & Cloud</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ai-accent mr-2" />
                    <span className="text-sm">Cybersecurity Essentials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ai-accent mr-2" />
                    <span className="text-sm">Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ai-accent mr-2" />
                    <span className="text-sm">IoT & Edge Computing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-8">
              Why It's Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-background border">
                <CheckCircle className="h-8 w-8 text-logo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">You own the AI</h3>
                <p className="text-sm text-muted-foreground">
                  Not us, not the cloud provider.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <CheckCircle className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Human-trained</h3>
                <p className="text-sm text-muted-foreground">Not AI-trained.</p>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <CheckCircle className="h-8 w-8 text-ai-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Built for your tasks</h3>
                <p className="text-sm text-muted-foreground">Your way.</p>
              </div>
            </div>

            <div id="signup" className="mt-8">
              <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-semibold text-center mb-2">Your twin, your future</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Start your AI Twin training journey today
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white px-10 py-7 text-xl font-bold hover:scale-105 transition-all duration-300"
              >
                <Link to="/login">
                  Sign In
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdultTwin;
