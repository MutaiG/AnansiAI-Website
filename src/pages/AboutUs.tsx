import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  Users,
  Leaf,
  GraduationCap,
  Lightbulb,
  Heart,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const AboutUs = () => {
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
              <Heart className="mr-2 h-5 w-5 text-logo-teal" />
              About AnansiAI
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Reinventing AI,
              </span>
              <br />
              <span className="text-foreground">One Human at a Time.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-sm text-muted-foreground mb-8 leading-relaxed">
              At AnansiAI, we believe the future of AI is personal — not
              general. Instead of depending on mass-trained models scraping the
              internet, we build AI Twins: digital versions of real people,
              trained directly by their human owners.
            </p>

            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-muted/50 border mb-8">
              <span className="text-lg font-medium">
                Our mission is simple:
              </span>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Learn humanly. Deliver super humanly.
              </span>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/train-your-twin" className="flex items-center">
                Explore Our Twin Programs
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              We're creating an alternative to generic AI — where individuals,
              students, and organizations can train, own, and deploy their own
              AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-6">
                  <Users className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-4">Personal Ownership</h3>
                <p className="text-muted-foreground">
                  You own your Twin. You train it. No scraping, no mining of
                  public data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-6">
                  <Leaf className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Sustainable by Design
                </h3>
                <p className="text-muted-foreground">
                  Minimal cloud resources. Low energy costs. Built using local
                  data sources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-6">
                  <GraduationCap className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Education-Focused</h3>
                <p className="text-muted-foreground">
                  Starting with schools and growing to serve universities,
                  adults, and companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-6">
                  <Lightbulb className="h-10 w-10 text-ai-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Visionary Yet Grounded
                </h3>
                <p className="text-muted-foreground">
                  Inspired by digital humans, but built carefully, step-by-step,
                  from the classroom up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Anansi */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6">
                Why "Anansi"?
              </h2>
            </div>

            <Card className="border-2 border-logo-teal/20 bg-gradient-to-br from-background to-logo-teal/5 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-8">
                  <Sparkles className="h-12 w-12" />
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Named after the legendary{" "}
                  <span className="font-bold text-logo-teal">
                    African storyteller
                  </span>{" "}
                  who spread wisdom to the world — AnansiAI helps people capture
                  their skills, knowledge, and creativity into Twins they
                  control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-8">Our Promise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 bg-background shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <span className="text-2xl">❌</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      We don't build general AI.
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-logo-teal/10 to-logo-blue/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">
                      We build human-first AI.
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Empowering individuals to remain valuable, creative, and
                    competitive in an AI-driven future.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-logo-teal text-logo-teal hover:bg-logo-teal/10 px-10 py-7 text-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              <Link to="/company/vision" className="flex items-center">
                Read Our Vision & Mission
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <Card className="border-2 border-logo-teal shadow-xl">
                <CardContent className="p-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-logo-teal">
                    Our Mission
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    To make AI personal, sustainable, and empowering — by
                    enabling every individual, student, and organization to
                    train and own their own AI Twin that reflects their skills,
                    values, and creativity.
                  </p>
                  <p className="font-medium text-foreground">
                    We aim to shift the AI world from "one model fits all" to
                    "one model fits you."
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-2 border-logo-blue shadow-xl">
                <CardContent className="p-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-6">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-logo-blue">
                    Our Vision
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    A world where humans remain central in the AI era — working
                    faster, thinking sharper, and creating fearlessly — powered
                    by AI Twins they've shaped themselves.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                      <span className="text-sm">
                        Students graduate with an AI Twin as part of their
                        skillset
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                      <span className="text-sm">
                        Adults build Twins that amplify their work, not replace
                        it
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-logo-blue mr-2" />
                      <span className="text-sm">
                        Organizations deploy AI Twins that reflect their values
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-logo-teal/10 to-logo-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6">
              Ready to Build Your AI Twin?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Join us in creating the future of human-first AI. Start your
              journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/train-your-twin" className="flex items-center">
                  Create a Twin
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue/10 px-10 py-7 text-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                <Link to="/education">Explore Education Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
