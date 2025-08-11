import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  Mail,
  Send,
  CheckCircle,
  Users,
  Building2,
  MessageSquare,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
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
    <div className="min-h-screen bg-background font-serif">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-6">
              <MessageSquare className="mr-2 h-4 w-4 text-logo-teal" />
              Contact Us
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-serif">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed font-sans">
              Have questions about AI Twins? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - Centered */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <Card className="border border-logo-teal/20 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 shadow-xl">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-base font-bold font-serif">Send us a message</CardTitle>
                  <p className="text-xs text-muted-foreground font-sans">We'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="name" className="text-xs font-sans">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="h-8 border-logo-teal/30 focus:border-logo-teal"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-xs font-sans">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-8 border-logo-teal/30 focus:border-logo-teal"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="inquiryType" className="text-xs font-sans">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                      >
                        <SelectTrigger className="h-8 border-logo-teal/30 focus:border-logo-teal">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Questions</SelectItem>
                          <SelectItem value="student">Student Program</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-xs font-sans">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        rows={3}
                        className="resize-none border-logo-teal/30 focus:border-logo-teal"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white py-2 text-xs font-bold hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 bg-background shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-serif">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-sans">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="text-sm"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-4 font-serif">
                Other Ways to Connect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-background shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                    <Users className="h-6 w-6 text-logo-teal" />
                  </div>
                  <h3 className="text-base font-bold mb-2 font-serif">
                    For Schools
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    Educational partnerships and institutional programs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                    <Building2 className="h-6 w-6 text-logo-blue" />
                  </div>
                  <h3 className="text-base font-bold mb-2 font-serif">
                    For Organizations
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    Enterprise solutions and custom implementations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                    <Mail className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h3 className="text-base font-bold mb-2 font-serif">
                    For Media
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    Press inquiries and partnership opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
