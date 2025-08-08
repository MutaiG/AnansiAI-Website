import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageNavigation from "@/components/PageNavigation";
import StudentEnrollmentForm from "@/components/StudentEnrollmentForm";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  School,
  University,
  Target,
  DollarSign,
  Calendar,
  Award,
  UserCheck,
  Cpu,
  Zap,
} from "lucide-react";

const StudentTwin = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <PageNavigation
          fallbackPath="/"
          showNext={true}
          nextPath="/products/adult-twin"
          nextLabel="Adult Twin"
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <GraduationCap className="mr-2 h-5 w-5 text-logo-teal" />
              Student Twin
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-poppins mb-8">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Learn humanly.
              </span>
              <br />
              <span className="text-foreground">Deliver super humanly.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
              The Student Twin is your personal AI that grows with you, trained
              from your own lessons, reflections, and assignments in school.
              Unlike generic AI tools, your Twin understands your unique
              learning style, strengths, and personality.
            </p>

            <Button
              onClick={() => setShowEnrollmentForm(true)}
              size="lg"
              className="bg-gradient-to-r from-ai-accent to-cyber-blue hover:from-ai-accent/90 hover:to-cyber-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Enroll Student
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">
              What Makes It Special?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8">
                  <Brain className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Human-Taught, Not Internet-Trained
                </h3>
                <p className="text-muted-foreground text-base">
                  Your Twin learns directly from your work, not random internet
                  data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <BookOpen className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Built Through Real Schoolwork
                </h3>
                <p className="text-muted-foreground text-base">
                  Paper, pen, teacher feedback, and your own thoughts shape your
                  Twin, not just typing on a keyboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8">
                  <Award className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Own Your AI, Own Your Future
                </h3>
                <p className="text-muted-foreground text-base">
                  Your Twin becomes a private tool you can use forever for
                  study, exams, projects, and future work.
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
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-8">
                <UserCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">You Learn Naturally</h3>
              <p className="text-muted-foreground text-base">
                Just attend class, do homework, reflect.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-8">
                <Cpu className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Your Twin Grows Silently
              </h3>
              <p className="text-muted-foreground text-base">
                Your assignments, quizzes, and notes feed your Twin
                automatically (through teacher uploads and system updates).
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-8">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">You Use It for Results</h3>
              <p className="text-muted-foreground text-base">
                When mature, your Twin can help write reports, plan projects, or
                suggest improvements in your own style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">
              Who It's For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each level unlocks new skills: from simple writing aids to
              personal research assistants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <School className="h-12 w-12 text-neural-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Primary School</h3>
                <p className="text-muted-foreground">
                  Build foundational learning habits and personality traits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-12 w-12 text-electric-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">High School</h3>
                <p className="text-muted-foreground">
                  Develop advanced study techniques and subject expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <University className="h-12 w-12 text-cyber-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">University</h3>
                <p className="text-muted-foreground">
                  Master research, critical thinking, and professional skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">Pricing</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-logo-teal shadow-2xl">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-8">
                  <DollarSign className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Lifetime Training</h3>
                <div className="text-3xl sm:text-4xl font-bold text-logo-teal mb-4">
                  $500
                </div>
                <p className="text-muted-foreground mb-6">
                  Complete lifetime training from Grade 1 to University
                  graduation. One-time payment covers all education levels.
                  <span className="block mt-2 font-semibold text-logo-teal">
                    Private students only.
                  </span>
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Personal AI Twin for life</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Grows with your education</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>100% human-supervised training</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Teacher-powered development</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowEnrollmentForm(true)}
                  size="lg"
                  className="bg-gradient-to-r from-ai-accent to-cyber-blue text-white px-10 py-7 text-xl font-bold hover:scale-105 transition-all duration-300"
                >
                  Enroll Student
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Start Early */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins mb-6">
              Why Start Early?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The younger you start, the more personal and skilled your Twin
              becomes, giving you a huge edge in exams, work, and life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-background border">
                <Calendar className="h-8 w-8 text-neural-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  Pilot schools in September
                </h3>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Users className="h-8 w-8 text-electric-purple mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  Teacher-powered training program
                </h3>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <Target className="h-8 w-8 text-cyber-teal mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  100% human-supervised development
                </h3>
              </div>
            </div>

            {/* Enrollment form is now shown in dialog */}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-logo-teal/10 via-logo-blue/5 to-cyber-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <GraduationCap className="mr-2 h-5 w-5 text-logo-teal" />
              Start Your Journey Today
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Ready to Train Your Twin?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait! Start building your personal AI Twin today and give
              yourself the competitive advantage for tomorrow's world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={() => setShowEnrollmentForm(true)}
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-12 py-8 text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Enroll Student
                <ArrowRight className="ml-4 h-7 w-7" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-logo-teal" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Lifetime Training
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-logo-blue" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Human-Supervised Learning
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-cyber-blue" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Your Personal AI Forever
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Student Enrollment Form Dialog */}
      <Dialog open={showEnrollmentForm} onOpenChange={setShowEnrollmentForm}>
        <DialogContent className="sm:max-w-6xl max-h-[95vh] overflow-y-auto p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Student Twin Enrollment</DialogTitle>
            <DialogDescription>
              Start your AI Twin training journey today
            </DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <StudentEnrollmentForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentTwin;
