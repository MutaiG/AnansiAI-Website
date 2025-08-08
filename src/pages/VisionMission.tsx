import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  Building2,
  GraduationCap,
  Shield,
  Cpu,
  Heart,
  Lightbulb,
} from "lucide-react";

const VisionMission = () => {
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
              <Lightbulb className="mr-2 h-5 w-5 text-logo-teal" />
              Our Vision & Mission
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <span className="text-foreground">of Human-AI Partnership</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-12 leading-relaxed">
              Our vision and mission guide everything we do at AnansiAI. We're
              not just building technology — we're shaping a future where humans
              and AI work together in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8">
                  <Target className="h-10 w-10 text-logo-teal" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-logo-teal">
                  Our Mission
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  To make AI personal, sustainable, and empowering — by enabling
                  every individual, student, and organization to train and own
                  their own AI Twin that reflects their skills, values, and
                  creativity.
                </p>
                <div className="p-6 rounded-lg bg-background border-l-4 border-logo-teal">
                  <p className="text-sm font-medium">
                    We aim to shift the AI world from{" "}
                    <span className="text-red-500 line-through">
                      "one model fits all"
                    </span>{" "}
                    to{" "}
                    <span className="text-logo-teal font-bold">
                      "one model fits you."
                    </span>
                  </p>
                </div>
              </div>

              <Card className="border-2 border-logo-teal shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-lg font-bold mb-6">Mission Pillars</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-logo-teal mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Personal</h4>
                        <p className="text-sm text-muted-foreground">
                          Every AI Twin is unique to its owner
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-logo-teal mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Sustainable</h4>
                        <p className="text-sm text-muted-foreground">
                          Low-energy, human-data approach
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-logo-teal mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Empowering</h4>
                        <p className="text-sm text-muted-foreground">
                          Amplifies human capability and creativity
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="border-2 border-logo-blue shadow-2xl order-2 lg:order-1">
                <CardContent className="p-10">
                  <h3 className="text-lg font-bold mb-6">Vision in Action</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <GraduationCap className="h-6 w-6 text-logo-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          Students graduate with AI Twins
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          As part of their core skillset for life
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Briefcase className="h-6 w-6 text-logo-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          Adults build amplifying Twins
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          That enhance their work, not replace it
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building2 className="h-6 w-6 text-logo-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          Organizations deploy value-aligned Twins
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Reflecting their mission, not generic automation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8">
                  <Eye className="h-10 w-10 text-logo-blue" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-logo-blue">
                  Our Vision
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  A world where humans remain central in the AI era — working
                  faster, thinking sharper, and creating fearlessly — powered by
                  AI Twins they've shaped themselves.
                </p>
                <div className="p-6 rounded-lg bg-background border-l-4 border-logo-blue">
                  <p className="text-sm font-medium">
                    We see a future where AI enhances human potential rather
                    than replacing it, where everyone has access to personal AI
                    that truly understands them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Four core principles guide everything we build and every decision
              we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-6">
                  <Users className="h-8 w-8 text-logo-teal" />
                </div>
                <h3 className="text-sm font-bold mb-4">Human-first AI</h3>
                <p className="text-muted-foreground text-sm">
                  Not general AI. Every Twin is built for and by its human
                  owner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-6">
                  <Shield className="h-8 w-8 text-logo-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">
                  Sustainability over scale
                </h3>
                <p className="text-muted-foreground text-sm">
                  Efficient, low-energy approaches that scale responsibly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-6">
                  <GraduationCap className="h-8 w-8 text-cyber-blue" />
                </div>
                <h3 className="text-sm font-bold mb-4">
                  Education before automation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learning and growth first, then intelligent assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-6">
                  <Heart className="h-8 w-8 text-ai-accent" />
                </div>
                <h3 className="text-sm font-bold mb-4">
                  Ownership before access
                </h3>
                <p className="text-muted-foreground text-sm">
                  You own your Twin, not rent access to someone else's model.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Future We're Building */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-8">
              The Future We're Building Together
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-6">
                  <span className="text-lg font-bold">2025</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Foundation</h3>
                <p className="text-muted-foreground">
                  Launch pilot programs in schools. Establish human-centered
                  training methodologies.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-6">
                  <span className="text-lg font-bold">2027</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Expansion</h3>
                <p className="text-muted-foreground">
                  Scale to universities and professional training. Launch Adult
                  Twin programs.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-6">
                  <span className="text-lg font-bold">2030</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Transformation</h3>
                <p className="text-muted-foreground">
                  AI Twins become standard. Enterprise adoption. Global impact
                  on education and work.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-logo-teal/10 to-logo-blue/10 border-2 border-logo-teal/20">
              <h3 className="text-lg font-bold mb-4">
                Join Us in Shaping This Future
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Every Twin trained brings us closer to a world where AI truly
                serves humanity. Your journey matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:scale-105 transition-all duration-300"
                >
                  <Link to="/train-your-twin" className="flex items-center">
                    Start Your Twin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue/10"
                >
                  <Link to="/company/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
