import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, User, Users, School, BookOpen, Send } from "lucide-react";

const StudentEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    currentSchool: "",
    gradeLevel: "",
    subjectAreas: [] as string[],
    enrollmentStatus: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjectOptions = [
    {
      id: "stem",
      label: "STEM",
      description: "Science, Technology, Engineering, Mathematics",
    },
    {
      id: "languages",
      label: "Languages",
      description: "English, Foreign Languages, Literature",
    },
    {
      id: "arts-sports",
      label: "Arts & Sports",
      description: "Visual Arts, Music, Drama, Physical Education",
    },
    {
      id: "social-sciences",
      label: "Social Sciences",
      description: "History, Geography, Economics, Civics",
    },
  ];

  const enrollmentOptions = [
    {
      value: "enrolled",
      label: "My school is already enrolled with AnansiAI",
      description: "Your school has an existing partnership with AnansiAI",
    },
    {
      value: "not-enrolled",
      label: "My school is not enrolled with AnansiAI",
      description: "Your school doesn't currently have AnansiAI integration",
    },
    {
      value: "partner-school",
      label: "I'm willing to join through another enrolled school",
      description: "Yes, I can enroll through a partner school with AnansiAI",
    },
  ];

  const gradeOptions = [
    "Pre-K", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", 
    "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", 
    "11th Grade", "12th Grade", "College Freshman", "College Sophomore", 
    "College Junior", "College Senior", "Graduate School"
  ];

  const handleSubjectChange = (subjectId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      subjectAreas: checked 
        ? [...prev.subjectAreas, subjectId]
        : prev.subjectAreas.filter(id => id !== subjectId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Application submitted successfully! We'll contact you within 48 hours.");
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-4">
          <GraduationCap className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Student Twin Enrollment</h1>
        <p className="text-muted-foreground">Start your AI Twin training journey today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Student Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-logo-teal" />
              Student Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  placeholder="Enter full name"
                  value={formData.studentName}
                  onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Age"
                  min="3"
                  max="30"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guardian Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-logo-blue" />
              Guardian Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="guardianName">Guardian Name *</Label>
              <Input
                id="guardianName"
                placeholder="Parent/Guardian full name"
                value={formData.guardianName}
                onChange={(e) => setFormData(prev => ({ ...prev, guardianName: e.target.value }))}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guardianEmail">Email Address *</Label>
                <Input
                  id="guardianEmail"
                  type="email"
                  placeholder="guardian@email.com"
                  value={formData.guardianEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, guardianEmail: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianPhone">Phone Number *</Label>
                <Input
                  id="guardianPhone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.guardianPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, guardianPhone: e.target.value }))}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* School Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5 text-cyber-blue" />
              School Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentSchool">Current School *</Label>
                <Input
                  id="currentSchool"
                  placeholder="Enter school name"
                  value={formData.currentSchool}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentSchool: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradeLevel">Grade Level *</Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gradeLevel: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeOptions.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-ai-accent" />
              Subject Areas *
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjectOptions.map((subject) => (
                <div key={subject.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Checkbox
                    id={subject.id}
                    checked={formData.subjectAreas.includes(subject.id)}
                    onCheckedChange={(checked) => 
                      handleSubjectChange(subject.id, checked as boolean)
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor={subject.id} className="font-semibold cursor-pointer">
                      {subject.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {subject.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* School Enrollment Status */}
        <Card>
          <CardHeader>
            <CardTitle>School Enrollment Status *</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.enrollmentStatus}
              onValueChange={(value) => setFormData(prev => ({ ...prev, enrollmentStatus: value }))}
              className="space-y-4"
            >
              {enrollmentOptions.map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor={option.value} className="font-semibold cursor-pointer">
                      {option.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Share any specific requirements, learning goals, or questions you have..."
                rows={4}
                value={formData.additionalNotes}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-12 py-6 text-lg font-bold hover:scale-105 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Processing Application...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentEnrollmentForm;
