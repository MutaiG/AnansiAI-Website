import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageSquare,
  ArrowLeft,
  Send,
  CheckCircle,
  Users,
  Handshake,
  Target,
  Building2,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
                <Handshake className="mr-2 h-5 w-5 text-logo-teal" />
                Partner with Us
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Transform Your Organization with{" "}
                <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                  AI Twin Solutions
                </span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Ready to implement Enterprise Twin, Student Twin, or Adult Twin
                solutions? Contact us to discuss your specific needs and get
                started with personalized AI that understands your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="mr-3 h-6 w-6 text-logo-teal" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@organization.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          Company/Organization *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="inquiryType"
                          className="text-sm font-medium"
                        >
                          Inquiry Type *
                        </Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="enterprise-twin">
                            Enterprise Twin Solution
                          </option>
                          <option value="student-twin">
                            Student Twin Program
                          </option>
                          <option value="adult-twin">
                            Adult Twin Training
                          </option>
                          <option value="partnership">
                            General Partnership
                          </option>
                          <option value="research">
                            Research Collaboration
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please provide details about your requirements, organization size, and specific needs..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white h-12 text-sm font-semibold hover:scale-105 transition-all duration-300"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for your interest in partnering with us. We'll
                        get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Partnership Information */}
              <div className="space-y-8">
                <Card className="border-0 bg-muted/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-logo-teal/20 flex-shrink-0">
                        <Users className="h-6 w-6 text-logo-teal" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-2">
                          Educational Institutions
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Schools, universities, and educational organizations
                          interested in pioneering AI Twin development programs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-muted/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-logo-blue/20 flex-shrink-0">
                        <Target className="h-6 w-6 text-logo-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-2">
                          Technology Partners
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Organizations with complementary technologies or
                          expertise in AI, education, or human-computer
                          interaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-muted/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber-blue/20 flex-shrink-0">
                        <Mail className="h-6 w-6 text-cyber-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-2">
                          Research Collaborators
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Academic researchers and institutions working on AI
                          ethics, human-AI collaboration, or educational
                          innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Direct Contact Info */}
                <div className="p-6 rounded-lg bg-background border">
                  <h4 className="font-semibold mb-3">Alternative Contact</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer direct communication? You can also reach us at:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-logo-teal" />
                      <span>partnerships@anansi.ai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Homepage */}
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Insights & Updates Section */}
        <section className="py-20 bg-muted/30 mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-4">
                Insights & Updates
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Stay informed about the latest in personal AI development and
                training methodologies.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 bg-background shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get exclusive insights, research updates, and early access
                    to new developments in AI Twin technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1"
                    />
                    <Button className="bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:scale-105 transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
