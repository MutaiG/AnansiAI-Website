import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrainingDemo from "@/components/TrainingDemo";
import TrainingProgressReport from "@/components/TrainingProgressReport";
import {
  GraduationCap,
  Briefcase,
  Building2,
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Brain,
} from "lucide-react";

const Index = () => {
  const [showProgressReport, setShowProgressReport] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Learn Humanly.{" "}
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Deliver Superhumanly.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
              Train your personal AI Twin designed to match your personality,
              skills, and style.
            </p>
          </div>
        </div>
      </section>

      {/* Twin Growth Flow */}
      <section className="py-16 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-foreground mb-12">
              How Your Twin Grows With You
            </h2>

            {/* Marquee Container */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee whitespace-nowrap inline-block">
                <div className="inline-flex gap-16 items-center">
                  {/* Create duplicate content for seamless loop */}
                  {[1, 2].map((iteration) => (
                    <div
                      key={iteration}
                      className="inline-flex gap-12 items-center"
                    >
                      {/* Step 1: You Start */}
                      <div className="text-center flex-shrink-0 w-64">
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                          <div className="w-full h-full bg-gradient-to-br from-logo-teal/20 to-logo-blue/20 rounded-full flex items-center justify-center">
                            <Users className="h-10 w-10 text-logo-teal" />
                          </div>
                        </div>
                        <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-logo-teal to-logo-teal/80 text-white text-sm font-bold">
                            1
                          </span>
                          You Share
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Tell your story through daily tasks
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center flex-shrink-0">
                        <ArrowRight className="h-6 w-6 text-logo-teal" />
                      </div>

                      {/* Step 2: Twin Learns */}
                      <div className="text-center flex-shrink-0 w-64">
                        <div className="w-24 h-24 mx-auto mb-4">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2Fe4efd42219fb4deabaee31adbd5f6fe2?format=webp&width=800"
                            alt="Twin synchronization"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-logo-blue to-logo-blue/80 text-white text-sm font-bold">
                            2
                          </span>
                          Twin Learns
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          AI captures your unique style
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center flex-shrink-0">
                        <ArrowRight className="h-6 w-6 text-logo-blue" />
                      </div>

                      {/* Step 3: Twin Grows */}
                      <div className="text-center flex-shrink-0 w-64">
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2F0b8dcc308c0849bfb5cec098500ba084?format=webp&width=800"
                            alt="Your twin delivers output"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                            <p className="text-xs font-bold text-white bg-gradient-to-r from-logo-teal to-cyber-blue px-2 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                              your twin
                            </p>
                          </div>
                        </div>
                        <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-blue/80 text-white text-sm font-bold">
                            3
                          </span>
                          You Deliver
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          1,000,000x faster, in your voice
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Static version for fallback */}
            <div className="hidden lg:block relative mt-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Step 1: You Start */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <div className="w-full h-full bg-gradient-to-br from-logo-teal/20 to-logo-blue/20 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-logo-teal" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-logo-teal to-logo-teal/80 text-white text-sm font-bold">
                      1
                    </span>
                    You Share
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tell your story through daily tasks
                  </p>
                </div>

                {/* Arrow between step 1 and 2 */}
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="h-6 w-6 text-logo-teal" />
                </div>
                <div className="md:hidden flex justify-center my-4">
                  <div className="h-6 w-0.5 bg-logo-teal"></div>
                </div>

                {/* Step 2: Twin Learns */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2Fe4efd42219fb4deabaee31adbd5f6fe2?format=webp&width=800"
                      alt="Twin synchronization"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-logo-blue to-logo-blue/80 text-white text-sm font-bold">
                      2
                    </span>
                    Twin Learns
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI captures your unique style
                  </p>
                </div>

                {/* Arrow pointing to third image */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-logo-blue" />
                </div>
                <div className="md:hidden flex justify-center my-4">
                  <div className="h-6 w-0.5 bg-cyber-blue"></div>
                </div>

                {/* Step 3: You Deliver */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2F0b8dcc308c0849bfb5cec098500ba084?format=webp&width=800"
                      alt="Your twin delivers output"
                      className="w-full h-full object-contain"
                    />
                    {/* Conspicuous "your twin" text overlay */}
                    <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                      <p className="text-xs font-bold text-white bg-gradient-to-r from-logo-teal to-cyber-blue px-2 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                        your twin
                      </p>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-blue/80 text-white text-sm font-bold">
                      3
                    </span>
                    You Deliver
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    1,000,000x faster, in your voice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Own Your AI. Stay Competitive.
            </h3>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Your twin, your future
                </h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white px-8 py-3 text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/login" className="flex items-center">
                    Sign Up / Sign In
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center max-w-md">
                Join thousands who've already secured their competitive edge with personalized AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Proof */}
      <section className="py-12 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Video Space */}
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.84A1 1 0 004 3.52v12.96a1 1 0 001.6.8L14.8 11.6a1 1 0 000-1.6L5.6 3.64a1 1 0 00-.7-.16.97.97 0 00-.6.16z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Short Demo Video
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-background rounded-xl p-6 shadow-lg border border-logo-teal/20">
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "While others struggle with generic AI tools, my Twin gives me
                  a massive edge. I'm landing better clients because I can
                  deliver faster without losing my unique voice. It's like
                  having superpowers in the job market."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold text-sm">
                    MR
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      Marcus Rodriguez
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Freelance Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Snapshot */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link
                to="/products/student-twin"
                className="group block p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-6">
                  <GraduationCap className="h-8 w-8 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Student Twin</h3>
                <p className="text-muted-foreground">
                  For learners of all ages.
                </p>
              </Link>

              <Link
                to="/products/adult-twin"
                className="group block p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-6">
                  <Briefcase className="h-8 w-8 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Adult Twin</h3>
                <p className="text-muted-foreground">
                  Fast-track training for professionals.
                </p>
              </Link>

              <Link
                to="/products/enterprise-twin"
                className="group block p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-6">
                  <Building2 className="h-8 w-8 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Twin</h3>
                <p className="text-muted-foreground">
                  Scalable AI solutions for teams.
                </p>
              </Link>
            </div>

            <p className="text-xl text-muted-foreground mt-12 max-w-2xl mx-auto">
              Ready to Train Your Twin at early age? Start building a personal
              AI that truly understands you.
            </p>
          </div>
        </div>
      </section>

      {/* Insights & Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Insights & Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest thoughts on AI, education, and the future of personalized
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                  <Users className="h-6 w-6 text-logo-teal" />
                </div>
                <h3 className="text-lg font-bold mb-3">
                  The Future of Personal AI
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Why owning your AI Twin matters more than renting AI tools
                  from big tech companies.
                </p>
                <Link
                  to="/blog/future-of-personal-ai"
                  className="text-logo-teal hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                  <BookOpen className="h-6 w-6 text-logo-blue" />
                </div>
                <h3 className="text-lg font-bold mb-3">Education Revolution</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How AI Twins are transforming classrooms and making learning
                  truly personalized.
                </p>
                <Link
                  to="/blog/education-revolution"
                  className="text-logo-blue hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                  <Lightbulb className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-lg font-bold mb-3">
                  Enterprise Intelligence
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How organizations can embody their vision and culture through
                  AI Twins.
                </p>
                <Link
                  to="/blog/enterprise-intelligence"
                  className="text-cyber-blue hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      {/* Training Progress Report Dialog */}
      <TrainingProgressReport
        isOpen={showProgressReport}
        onClose={() => setShowProgressReport(false)}
      />
    </div>
  );
};

export default Index;
