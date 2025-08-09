import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2, CheckCircle, ArrowLeft, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EnterpriseWaitingList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    useCase: "",
    agreeToUpdates: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companySizes = [
    "1-50 employees",
    "51-200 employees", 
    "201-1000 employees",
    "1000+ employees",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const waitingListData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      // Send to backend API here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">You're on the List!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in AnansiAI Enterprise. We'll notify you as soon as it becomes available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/" className="flex items-center justify-center">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </Button>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      companySize: "",
                      useCase: "",
                      agreeToUpdates: false,
                    });
                  }}
                  className="flex-1"
                >
                  Refer Another Company
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/products/enterprise-twin" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Enterprise Twin
            </Link>
          </Button>
        </div>

        <Card className="max-w-lg mx-auto">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Join Enterprise Waiting List</CardTitle>
            <p className="text-sm text-muted-foreground">
              Be first to experience Enterprise Twin
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Acme Corp"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="useCase">How will you use Enterprise Twin? *</Label>
                  <Textarea
                    id="useCase"
                    value={formData.useCase}
                    onChange={(e) => setFormData(prev => ({ ...prev, useCase: e.target.value }))}
                    placeholder="Brief description of your use case..."
                    rows={3}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToUpdates"
                    checked={formData.agreeToUpdates}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToUpdates: checked as boolean }))}
                  />
                  <Label htmlFor="agreeToUpdates" className="text-sm">
                    I agree to receive updates about Enterprise Twin development *
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.agreeToUpdates}
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                {isSubmitting ? "Joining..." : "Join Waiting List"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default EnterpriseWaitingList;
