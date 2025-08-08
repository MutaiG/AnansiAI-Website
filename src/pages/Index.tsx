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
  X,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

const Index = () => {
  const [showProgressReport, setShowProgressReport] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<number | null>(null);
  const [popupSequence, setPopupSequence] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Learn Humanly.{" "}
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Deliver Superhumanly.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Train your personal AI Twin designed to match your personality,
              skills, and style.
            </p>
          </div>
        </div>
      </section>

      {/* Twin Growth Flow */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-foreground mb-8 sm:mb-12">
              How Your Twin Grows With You
            </h2>

            {/* Mobile/Tablet: Triangular layout with proper flow */}
            <div className="block lg:hidden">
              <div className="relative max-w-lg mx-auto">
                {/* Step 1: You Share - Top of triangle */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 relative">
                    <div className="w-full h-full bg-gradient-to-br from-logo-teal/20 to-logo-blue/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-logo-teal" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 flex items-center justify-center gap-2 text-sm">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-logo-teal to-logo-teal/80 text-white text-xs font-bold">
                      1
                    </span>
                    You Share
                  </h3>
                  <div className="text-xs text-muted-foreground mb-4 sm:mb-6">
                    Tell <span className="relative">your<div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rotate-[135deg]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(174, 100%, 42%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></span> story through <span className="relative">daily<div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rotate-[225deg]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(207, 90%, 54%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></span> tasks
                  </div>
                </div>

                {/* Bottom row with aligned images and horizontal arrow */}
                <div className="flex items-center justify-center gap-3">
                  {/* Step 2: Twin Learns */}
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2Fe4efd42219fb4deabaee31adbd5f6fe2?format=webp&width=800"
                        alt="Twin synchronization"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold mb-1 flex items-center justify-center gap-1 text-xs">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-logo-blue to-logo-blue/80 text-white text-xs font-bold">
                        2
                      </span>
                      Twin Learns
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      AI captures your style
                    </p>
                  </div>

                  {/* Horizontal arrow between steps 2 and 3 */}
                  <div className="flex items-center justify-center px-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(174, 100%, 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Step 3: You Deliver */}
                  <div className="text-center flex-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 relative">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fec8aaf6f713d4001ba68182e7cd7ce77%2F0b8dcc308c0849bfb5cec098500ba084?format=webp&width=800"
                        alt="Your twin delivers output"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute -bottom-1 left-0 right-0 flex justify-center">
                        <p className="text-xs font-bold text-white bg-gradient-to-r from-logo-teal to-cyber-blue px-1.5 py-0.5 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                          your twin
                        </p>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1 flex items-center justify-center gap-1 text-xs">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-blue/80 text-white text-xs font-bold">
                        3
                      </span>
                      You Deliver
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      1,000,000x faster
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

                        {/* Step 3: You Deliver */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA - Moved after twin growth */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Own Your AI. Stay Competitive.
            </h3>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center">
                  Your twin, your future
                </h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Link to="/login" className="flex items-center justify-center">
                    Sign Up / Sign In
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-md px-4 sm:px-0">
                Join thousands who've already secured their competitive edge with personalized AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Twin Capabilities Showcase */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Download, Deploy, Dominate
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Your AI Twin works seamlessly across all platforms, handling your digital presence while you focus on what matters most.
              </p>
            </div>

            {/* Three-column showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Download & Setup */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-logo-teal/20 to-logo-blue/20 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-logo-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Download Ready
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Easy Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Quick setup on any device.
                </p>
              </div>

              {/* Social Media Management */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-logo-blue/20 to-cyber-blue/20 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-logo-blue relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Auto-Posting
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Social Media Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  Auto-posts and engages across all platforms.
                </p>
              </div>

              {/* Email Management */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-cyber-blue/20 to-logo-teal/20 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Smart Replies
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">Email Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Smart replies and inbox management.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Competitive Advantage Proof */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Video Space */}
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.84A1 1 0 004 3.52v12.96a1 1 0 001.6.8L14.8 11.6a1 1 0 000-1.6L5.6 3.64a1 1 0 00-.7-.16.97.97 0 00-.6.16z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Short Demo Video
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-background rounded-xl p-4 sm:p-6 shadow-lg border border-logo-teal/20 order-1 lg:order-2">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 italic leading-relaxed">
                  "While others struggle with generic AI tools, my Twin gives me
                  a massive edge. I'm landing better clients because I can
                  deliver faster without losing my unique voice. It's like
                  having superpowers in the job market."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    MR
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm sm:text-base">
                      Marcus Rodriguez
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
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
      <section id="products" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Link
                to="/products/student-twin"
                className="group block p-6 sm:p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4 sm:mb-6">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-logo-teal" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Student Twin</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  For learners of all ages.
                </p>
              </Link>

              <Link
                to="/products/adult-twin"
                className="group block p-6 sm:p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4 sm:mb-6">
                  <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-logo-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Adult Twin</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fast-track training for professionals.
                </p>
              </Link>

              <Link
                to="/products/enterprise-twin"
                className="group block p-6 sm:p-8 rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4 sm:mb-6">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Enterprise Twin</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Scalable AI solutions for teams.
                </p>
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0 mb-6">
                Ready to Train Your Twin at early age? Start building a personal
                AI that truly understands you.
              </p>

              <Button
                onClick={() => {
                  setCurrentPopup(1);
                  setPopupSequence(1);
                }}
                className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See Your Twin's Device Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Updates */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Insights & Updates
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Latest thoughts on AI, education, and the future of personalized
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-logo-teal" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3">
                  The Future of Personal AI
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                  Why owning your AI Twin matters more than renting AI tools
                  from big tech companies.
                </p>
                <Link
                  to="/blog/future-of-personal-ai"
                  className="text-logo-teal hover:underline text-xs sm:text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-logo-blue" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3">Education Revolution</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                  How AI Twins are transforming classrooms and making learning
                  truly personalized.
                </p>
                <Link
                  to="/blog/education-revolution"
                  className="text-logo-blue hover:underline text-xs sm:text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-blue" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3">
                  Enterprise Intelligence
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                  How organizations can embody their vision and culture through
                  AI Twins.
                </p>
                <Link
                  to="/blog/enterprise-intelligence"
                  className="text-cyber-blue hover:underline text-xs sm:text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      {/* Device Capabilities Popups */}
      {currentPopup === 1 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 border-logo-teal/30 animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-2">
                <Mail className="w-6 h-6 text-logo-teal" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPopup(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Email Assistant</h3>
            <p className="text-muted-foreground mb-6">
              Your Twin reads, prioritizes, and responds to emails using your writing style and communication preferences. It learns from your past interactions to maintain your professional tone.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setCurrentPopup(2)}
                className="flex-1 bg-logo-teal hover:bg-logo-teal/90 text-white"
              >
                Next: Messaging
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPopup(null)}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentPopup === 2 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 border-logo-blue/30 animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-2">
                <MessageCircle className="w-6 h-6 text-logo-blue" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPopup(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Smart Messaging</h3>
            <p className="text-muted-foreground mb-6">
              Handle WhatsApp, Telegram, and other messaging platforms with intelligent responses that sound like you. Your Twin understands context and responds appropriately to different conversation types.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setCurrentPopup(3)}
                className="flex-1 bg-logo-blue hover:bg-logo-blue/90 text-white"
              >
                Next: Social Media
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPopup(1)}
                className="flex-1"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentPopup === 3 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 border-cyber-blue/30 animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-2">
                <Share2 className="w-6 h-6 text-cyber-blue" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPopup(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Social Media Manager</h3>
            <p className="text-muted-foreground mb-6">
              Post content, engage with followers, and maintain your social media presence across all platforms with your unique voice. Available on Mobile, Desktop, Tablet, and Web Browser.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setCurrentPopup(null)}
                className="flex-1 bg-cyber-blue hover:bg-cyber-blue/90 text-white"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPopup(2)}
                className="flex-1"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      )}


      {/* Training Progress Report Dialog */}
      <TrainingProgressReport
        isOpen={showProgressReport}
        onClose={() => setShowProgressReport(false)}
      />
    </div>
  );
};

export default Index;
