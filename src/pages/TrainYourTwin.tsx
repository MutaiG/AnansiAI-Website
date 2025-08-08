import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Briefcase,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TrainYourTwin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/10 via-logo-blue/5 to-cyber-blue/8" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <Sparkles className="mr-2 h-5 w-5 text-logo-teal" />
              Start Your AI Twin Journey
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-logo-teal via-cyber-blue to-logo-blue bg-clip-text text-transparent">
                Train Your Twin
              </span>
              <br />
              <span className="text-foreground">Your Personal AI Awaits</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xs sm:text-sm text-muted-foreground mb-12 leading-relaxed">
              Choose your path to creating a personal AI Twin that learns from
              you, thinks like you, and grows with you.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Twin */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-4">
              Choose Your Twin
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Start where you are. Build a Twin that evolves with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Student Twin */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-logo-teal/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-logo-teal" />
                </div>
                <h3 className="text-lg font-bold mb-4">Student Twin</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  For learners of all ages. Grow your Twin as you learn,
                  creating a personal AI that understands your study methods.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-logo-teal text-logo-teal hover:bg-logo-teal/10 group-hover:bg-logo-teal group-hover:text-white transition-all duration-300"
                >
                  <Link
                    to="/products/student-twin"
                    className="flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Adult Twin */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-logo-blue/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-10 w-10 text-logo-blue" />
                </div>
                <h3 className="text-lg font-bold mb-4">Adult Twin</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  Fast-track training for professionals. Build a Twin that
                  amplifies your work and keeps you competitive.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-logo-blue text-logo-blue hover:bg-logo-blue/10 group-hover:bg-logo-blue group-hover:text-white transition-all duration-300"
                >
                  <Link to="/products/adult-twin" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Twin */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-cyber-blue/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-lg font-bold mb-4">Enterprise Twin</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  Scalable AI solutions for teams. Create a Twin that embodies
                  your organization's knowledge and culture.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 group-hover:bg-cyber-blue group-hover:text-white transition-all duration-300"
                >
                  <Link
                    to="/products/enterprise-twin"
                    className="flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm sm:text-xl lg:text-lg font-bold mb-6">
              Ready to Train Your Twin?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Start building a personal AI that truly understands you.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white border-none px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/products/student-twin" className="flex items-center">
                Start with Student Twin
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainYourTwin;
