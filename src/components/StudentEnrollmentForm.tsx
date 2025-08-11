import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, User, School, Send } from "lucide-react";

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
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjectOptions = [
    { id: "stem", label: "STEM" },
    { id: "languages", label: "Languages" },
    { id: "arts-sports", label: "Arts & Sports" },
    { id: "social-sciences", label: "Social Sciences" },
  ];

  const gradeOptions = [
    "Pre-K", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", 
    "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", 
    "11th Grade", "12th Grade", "College"
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
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue text-white mb-2">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h1 className="text-base font-bold mb-1">Student Twin Enrollment</h1>
        <p className="text-muted-foreground text-xs">Start your AI Twin journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student & Guardian Information */}
        <Card className="border-logo-teal/20 hover:border-logo-teal/40 transition-colors duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <User className="h-3 w-3 text-logo-teal" />
              Student & Guardian Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="studentName" className="text-xs">Student Name *</Label>
                <Input
                  id="studentName"
                  placeholder="Full name"
                  value={formData.studentName}
                  onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                  className="h-8 border-logo-teal/30 focus:border-logo-teal focus:ring-logo-teal/20"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="age" className="text-xs">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Age"
                  min="3"
                  max="30"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  className="h-8 border-logo-teal/30 focus:border-logo-teal focus:ring-logo-teal/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="guardianName" className="text-xs">Guardian Name *</Label>
              <Input
                id="guardianName"
                placeholder="Parent/Guardian name"
                value={formData.guardianName}
                onChange={(e) => setFormData(prev => ({ ...prev, guardianName: e.target.value }))}
                className="h-8 border-logo-teal/30 focus:border-logo-teal focus:ring-logo-teal/20"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="guardianEmail" className="text-xs">Email *</Label>
                <Input
                  id="guardianEmail"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.guardianEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, guardianEmail: e.target.value }))}
                  className="h-8 border-logo-teal/30 focus:border-logo-teal focus:ring-logo-teal/20"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="guardianPhone" className="text-xs">Phone *</Label>
                <Input
                  id="guardianPhone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.guardianPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, guardianPhone: e.target.value }))}
                  className="h-8 border-logo-teal/30 focus:border-logo-teal focus:ring-logo-teal/20"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* School Information */}
        <Card className="border-logo-blue/20 hover:border-logo-blue/40 transition-colors duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <School className="h-3 w-3 text-cyber-blue" />
              School Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="currentSchool" className="text-xs">School Name *</Label>
                <Input
                  id="currentSchool"
                  placeholder="School name"
                  value={formData.currentSchool}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentSchool: e.target.value }))}
                  className="h-8 border-logo-blue/30 focus:border-logo-blue focus:ring-logo-blue/20"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gradeLevel" className="text-xs">Grade *</Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gradeLevel: value }))}
                  required
                >
                  <SelectTrigger className="h-8 border-logo-blue/30 focus:border-logo-blue focus:ring-logo-blue/20">
                    <SelectValue placeholder="Grade" />
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

            <div className="space-y-2">
              <Label className="text-xs">Subjects</Label>
              <div className="grid grid-cols-2 gap-2">
                {subjectOptions.map((subject) => (
                  <div key={subject.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={subject.id}
                      checked={formData.subjectAreas.includes(subject.id)}
                      onCheckedChange={(checked) =>
                        handleSubjectChange(subject.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={subject.id} className="text-xs cursor-pointer hover:text-logo-teal transition-colors">
                      {subject.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors duration-300">
          <CardContent className="pt-4">
            <div className="space-y-1">
              <Label htmlFor="additionalNotes" className="text-xs">Notes (Optional)</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any questions..."
                rows={2}
                value={formData.additionalNotes}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                className="resize-none border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="sm"
            className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-6 py-2 text-xs font-bold hover:scale-105 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
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
