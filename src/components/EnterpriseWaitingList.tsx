import { useState } from "react";
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
import { Building2, Users, Clock, CheckCircle, Mail } from "lucide-react";

const EnterpriseWaitingList = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    companySize: "",
    industry: "",
    phoneNumber: "",
    website: "",
    useCase: "",
    timeline: "",
    budget: "",
    additionalInfo: "",
    agreeToUpdates: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Financial Services",
    "Education",
    "Manufacturing",
    "Retail",
    "Consulting",
    "Government",
    "Non-profit",
    "Other",
  ];

  const timelines = [
    "Immediate (1-3 months)",
    "Short-term (3-6 months)",
    "Medium-term (6-12 months)",
    "Long-term (12+ months)",
    "Just exploring",
  ];

  const budgetRanges = [
    "Under $10K",
    "$10K - $50K",
    "$50K - $100K",
    "$100K - $500K",
    "$500K+",
    "To be determined",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending to info@anansiai.com
      // In a real implementation, this would:
      // 1. Send immediate confirmation
      // 2. Add to waiting list database
      // 3. Set up weekly digest emails to info@anansiai.com

      const waitingListData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        waitingListPosition: Math.floor(Math.random() * 500) + 100, // Simulated position
      };

      console.log("Enterprise waiting list signup:", waitingListData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">You're on the List!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in AnansiAI Enterprise. You've been
            added to our priority waiting list. We'll keep you updated on our
            progress and notify you as soon as Enterprise Twin becomes
            available.
          </p>
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
              <Mail className="h-4 w-4" />
              <span>Weekly updates sent to our team at info@anansiai.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Expected launch: Q2 2025</span>
            </div>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                company: "",
                companySize: "",
                industry: "",
                phoneNumber: "",
                website: "",
                useCase: "",
                timeline: "",
                budget: "",
                additionalInfo: "",
                agreeToUpdates: false,
              });
            }}
            variant="outline"
          >
            Refer Another Company
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl">Join Enterprise Waiting List</CardTitle>
        <p className="text-muted-foreground">
          Be among the first to experience organizational intelligence with
          Enterprise Twin
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2 text-logo-teal" />
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      jobTitle: e.target.value,
                    }))
                  }
                  placeholder="e.g., CTO, VP of Engineering"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Building2 className="h-5 w-5 mr-2 text-logo-teal" />
              Company Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                  placeholder="https://company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size *</Label>
                <Select
                  value={formData.companySize}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, companySize: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
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
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, industry: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2 text-logo-teal" />
              Project Details
            </h3>

            <div className="space-y-2">
              <Label htmlFor="useCase">Primary Use Case *</Label>
              <Textarea
                id="useCase"
                value={formData.useCase}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    useCase: e.target.value,
                  }))
                }
                placeholder="Describe how you plan to use Enterprise Twin in your organization..."
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="timeline">Implementation Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, timeline: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    additionalInfo: e.target.value,
                  }))
                }
                placeholder="Any specific requirements, questions, or additional context..."
                rows={3}
              />
            </div>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToUpdates"
                checked={formData.agreeToUpdates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreeToUpdates: checked as boolean,
                  }))
                }
              />
              <Label
                htmlFor="agreeToUpdates"
                className="text-sm leading-relaxed"
              >
                I agree to receive updates about Enterprise Twin development,
                early access opportunities, and relevant AnansiAI news. Updates
                are compiled and sent to our team weekly.
              </Label>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Weekly Team Updates</p>
                  <p>
                    Your information will be included in our weekly waiting list
                    digest sent to info@anansiai.com every 7 days to keep our
                    team informed of enterprise interest and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.agreeToUpdates}
            className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
          >
            {isSubmitting
              ? "Joining Waiting List..."
              : "Join Enterprise Waiting List"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnterpriseWaitingList;
