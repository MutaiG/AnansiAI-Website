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
  ArrowRight,
  Award,
  Target,
} from "lucide-react";

const AboutUs = () => {
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
              <Heart className="mr-2 h-4 w-4 text-logo-teal" />
              About AnansiAI
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 font-serif">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Reinventing AI,
              </span>
              <br />
              <span className="text-foreground">One Human at a Time.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed font-sans">
              At AnansiAI, we believe the future of AI is personal — not generic. We're building technology that learns from individual humans, creating AI companions that truly understand and reflect each person's unique way of thinking.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-6 sm:px-8 py-3 text-sm font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/train-your-twin" className="flex items-center">
                Explore Our Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-serif">
              What Sets Us Apart
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-sans">
              Our approach to AI development is fundamentally different from existing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                  <Users className="h-6 w-6 text-logo-teal" />
                </div>
                <h3 className="text-base font-bold mb-3 font-serif">Personal Ownership</h3>
                <p className="text-xs text-muted-foreground font-sans">
                  You own your Twin. You train it. No scraping, no mining of public data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                  <Leaf className="h-6 w-6 text-logo-blue" />
                </div>
                <h3 className="text-base font-bold mb-3 font-serif">
                  Sustainable by Design
                </h3>
                <p className="text-xs text-muted-foreground font-sans">
                  Minimal cloud resources. Low energy costs. Built using local data sources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                  <GraduationCap className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-base font-bold mb-3 font-serif">Education-Focused</h3>
                <p className="text-xs text-muted-foreground font-sans">
                  Starting with schools and growing to serve universities, adults, and companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-ai-accent/20 to-ai-accent/40 mb-4">
                  <Lightbulb className="h-6 w-6 text-ai-accent" />
                </div>
                <h3 className="text-base font-bold mb-3 font-serif">
                  Human-First Innovation
                </h3>
                <p className="text-xs text-muted-foreground font-sans">
                  Technology that adapts to humans, not the other way around.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Anansi Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
                Why "Anansi"?
              </h2>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground font-sans max-w-2xl mx-auto">
                Named after the legendary{" "}
                <span className="font-semibold text-logo-teal">
                  West African spider deity
                </span>{" "}
                known for wisdom, storytelling, and connecting knowledge across communities. Like Anansi wove stories that passed wisdom through generations, our AI Twins weave together your personal experiences, thoughts, and knowledge into an intelligent companion that grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 font-serif">Our Promise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-red-50 border border-red-100">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">❌</span>
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold font-serif mb-2">
                    We don't build general AI.
                  </h3>
                  <p className="text-xs text-red-700 font-sans">
                    No scraping internet data, no one-size-fits-all solutions, no privacy violations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-lg bg-green-50 border border-green-100">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✅</span>
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold font-serif mb-2">
                    We build human-first AI.
                  </h3>
                  <p className="text-xs text-green-700 font-sans">
                    Personal, private, and trained exclusively from your own experiences and knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-6">
                <Target className="h-6 w-6 text-logo-teal" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-logo-teal font-serif">
                Our Mission
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                To democratize AI by making it personal, private, and accessible to every human being. We believe everyone deserves an AI companion that truly understands them, not a generic tool built from internet data.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-6">
                <Award className="h-6 w-6 text-logo-blue" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-logo-blue font-serif">
                Our Vision
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                A future where AI enhances human potential rather than replacing it. Where every person has a personal AI Twin that grows with them, learns from them, and helps them achieve their unique goals and dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
              Ready to Build Your AI Twin?
            </h2>
            <p className="text-sm text-muted-foreground mb-8 font-sans">
              Join thousands of students, professionals, and organizations who are already building their personal AI companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-6 sm:px-8 py-3 text-sm font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/train-your-twin" className="flex items-center">
                  Create a Twin
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue/10 px-6 sm:px-8 py-3 text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Contact Us</Link>
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
