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
  Shield,
  Heart,
  Lightbulb,
  Award,
  Compass,
} from "lucide-react";

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-background font-serif">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-6">
              <Lightbulb className="mr-2 h-4 w-4 text-logo-teal" />
              Vision & Mission
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-serif">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <span className="text-foreground">of Human-AI Partnership</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed font-sans">
              At AnansiAI, we envision a world where AI enhances human potential rather than replacing it. Our mission is to create personal AI companions that truly understand and grow with each individual.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="border-0 bg-background shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                    <Target className="h-8 w-8 text-logo-teal" />
                  </div>
                  <h2 className="text-xl font-bold mb-4 text-logo-teal font-serif">
                    Our Mission
                  </h2>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-sans">
                    To democratize AI by making it personal, private, and accessible to every human being. We create AI Twins that learn exclusively from individual experiences, ensuring each person has a truly personalized AI companion.
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-base font-bold mb-3 font-serif">Mission Pillars</h3>
                    <div className="space-y-2 max-w-md mx-auto">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-teal mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Personal AI that reflects individual thinking patterns</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-teal mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Privacy-first architecture with complete user ownership</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-teal mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Education-based training through natural learning</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-teal mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Sustainable and ethical AI development practices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 bg-background shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                    <Eye className="h-8 w-8 text-logo-blue" />
                  </div>
                  <h2 className="text-xl font-bold mb-4 text-logo-blue font-serif">
                    Our Vision
                  </h2>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-sans">
                    A future where every person has a personal AI Twin that enhances their capabilities, preserves their unique perspective, and grows alongside them throughout their life journey.
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-base font-bold mb-3 font-serif">Vision in Action</h3>
                    <div className="space-y-2 max-w-md mx-auto">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-blue mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Students graduate with AI Twins trained in their learning style</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-blue mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Professionals amplify their expertise through AI partners</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-blue mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">Organizations embody their culture through institutional Twins</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-logo-blue mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-sans text-left">AI becomes a tool for human enhancement, not replacement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-serif">
              What Drives Us
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-sans">
              Our core values guide every decision we make in building the future of personal AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                <Heart className="h-6 w-6 text-logo-teal" />
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">Human-first AI</h3>
              <p className="text-xs text-muted-foreground font-sans">
                Technology that adapts to humans, not the other way around.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                <Shield className="h-6 w-6 text-logo-blue" />
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">
                Privacy by design
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Your data stays yours. No mining, no sharing, complete ownership.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                <Award className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">
                Excellence through education
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Building AI through structured learning, not data scraping.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-4">
                <Users className="h-6 w-6 text-ai-accent" />
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">
                Community empowerment
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Democratizing AI access for individuals and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-serif">
              Our Journey Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-4">
                <span className="text-sm font-bold">1</span>
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">Foundation</h3>
              <p className="text-xs text-muted-foreground font-sans">
                Launch student programs and establish core AI Twin training methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue to-cyber-blue text-white mb-4">
                <span className="text-sm font-bold">2</span>
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">Expansion</h3>
              <p className="text-xs text-muted-foreground font-sans">
                Scale to universities, professionals, and organizations worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-ai-accent text-white mb-4">
                <span className="text-sm font-bold">3</span>
              </div>
              <h3 className="text-base font-bold mb-3 font-serif">Transformation</h3>
              <p className="text-xs text-muted-foreground font-sans">
                Reshape how humanity interacts with AI through personal companionship.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto border-2 border-logo-teal/20 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5">
              <CardContent className="p-6">
                <h3 className="text-base font-bold mb-3 font-serif">
                  Join Us in Shaping This Future
                </h3>
                <p className="text-sm text-muted-foreground mb-6 font-sans">
                  Be part of the movement toward personal, private, and powerful AI that truly serves humanity.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-8 py-3 text-sm font-bold hover:scale-105 transition-all duration-300"
                >
                  <Link to="/train-your-twin" className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
