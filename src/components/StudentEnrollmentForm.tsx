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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GraduationCap, School, CheckCircle } from "lucide-react";

const StudentEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    age: "",
    currentSchool: "",
    gradeLevel: "",
    subjects: [] as string[],
    schoolEnrollmentStatus: "",
    willingToEnrollElsewhere: false,
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjectCategories = [
    {
      category: "STEM",
      fullName: "Science, Technology, Engineering, Mathematics",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Engineering",
      ],
    },
    {
      category: "Languages",
      fullName: "English, Foreign Languages, Literature",
      subjects: [
        "English Literature",
        "Creative Writing",
        "Spanish",
        "French",
        "German",
        "Mandarin",
      ],
    },
    {
      category: "Arts & Sports",
      fullName: "Visual Arts, Music, Drama, Physical Education",
      subjects: [
        "Visual Arts",
        "Music",
        "Drama",
        "Dance",
        "Physical Education",
        "Photography",
      ],
    },
    {
      category: "Social Sciences",
      fullName: "History, Geography, Economics, Civics",
      subjects: [
        "History",
        "Geography",
        "Economics",
        "Political Science",
        "Psychology",
        "Sociology",
      ],
    },
  ];

  const gradeLevels = [
    "Elementary (K-5)",
    "Middle School (6-8)",
    "High School (9-12)",
    "College/University",
  ];

  const handleSubjectChange = (category: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, category]
        : prev.subjects.filter((s) => s !== category),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Student enrollment data:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">Application Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            We'll contact you within 2-3 business days with next steps.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                studentName: "",
                guardianName: "",
                guardianEmail: "",
                guardianPhone: "",
                age: "",
                currentSchool: "",
                gradeLevel: "",
                subjects: [],
                schoolEnrollmentStatus: "",
                willingToEnrollElsewhere: false,
                additionalInfo: "",
              });
            }}
            variant="outline"
          >
            Submit Another
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="text-center">
        <div className="w-10 h-10 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-3">
          <School className="h-5 w-5 text-white" />
        </div>
        <CardTitle className="text-xl">Enroll Student</CardTitle>
        <p className="text-muted-foreground text-sm">Start AI Twin training</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-logo-teal border-b border-logo-teal/20 pb-2">
              Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName" className="text-sm font-medium">
                  Student Name *
                </Label>
                <Input
                  id="studentName"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      studentName: e.target.value,
                    }))
                  }
                  placeholder="Enter full name"
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm font-medium">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, age: e.target.value }))
                  }
                  placeholder="Age"
                  className="h-11"
                  min="5"
                  max="25"
                  required
                />
              </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-logo-teal border-b border-logo-teal/20 pb-2">
              Guardian Information
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="guardianName" className="text-sm font-medium">
                  Guardian Name *
                </Label>
                <Input
                  id="guardianName"
                  value={formData.guardianName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      guardianName: e.target.value,
                    }))
                  }
                  placeholder="Parent/Guardian full name"
                  className="h-11"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="guardianEmail"
                    className="text-sm font-medium"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="guardianEmail"
                    type="email"
                    value={formData.guardianEmail}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        guardianEmail: e.target.value,
                      }))
                    }
                    placeholder="guardian@email.com"
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="guardianPhone"
                    className="text-sm font-medium"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="guardianPhone"
                    type="tel"
                    value={formData.guardianPhone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        guardianPhone: e.target.value,
                      }))
                    }
                    placeholder="+1 (555) 123-4567"
                    className="h-11"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* School Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-logo-teal border-b border-logo-teal/20 pb-2">
              School Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentSchool" className="text-sm font-medium">
                  Current School *
                </Label>
                <Input
                  id="currentSchool"
                  value={formData.currentSchool}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      currentSchool: e.target.value,
                    }))
                  }
                  placeholder="Enter school name"
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gradeLevel" className="text-sm font-medium">
                  Grade Level *
                </Label>
                <Select
                  value={formData.gradeLevel}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, gradeLevel: value }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Subject Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-logo-teal border-b border-logo-teal/20 pb-2">
              Subject Areas *
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjectCategories.map((subjectGroup) => (
                <div key={subjectGroup.category} className="relative group">
                  <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-logo-teal/50 transition-colors">
                    <Checkbox
                      id={subjectGroup.category}
                      checked={formData.subjects.includes(
                        subjectGroup.category,
                      )}
                      onCheckedChange={(checked) =>
                        handleSubjectChange(
                          subjectGroup.category,
                          checked as boolean,
                        )
                      }
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={subjectGroup.category}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {subjectGroup.category}
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        {subjectGroup.fullName}
                      </p>
                    </div>
                  </div>

                  {/* Hover tooltip showing individual subjects */}
                  <div className="absolute left-0 top-full mt-2 w-64 bg-background border rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <h4 className="font-medium text-sm mb-2">
                      Subjects include:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {subjectGroup.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-logo-teal border-b border-logo-teal/20 pb-2">
              Additional Information
            </h3>

            <div className="space-y-4">
              {/* School Enrollment Status */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  School Enrollment Status *
                </Label>
                <RadioGroup
                  value={formData.schoolEnrollmentStatus}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      schoolEnrollmentStatus: value,
                    }))
                  }
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-logo-teal/50 transition-colors">
                    <RadioGroupItem
                      value="enrolled"
                      id="enrolled"
                      className="mt-0.5"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="enrolled"
                        className="text-sm font-medium cursor-pointer"
                      >
                        My school is already enrolled with AnansiAI
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Your school has an existing partnership with AnansiAI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-logo-teal/50 transition-colors">
                    <RadioGroupItem
                      value="not-enrolled"
                      id="not-enrolled"
                      className="mt-0.5"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="not-enrolled"
                        className="text-sm font-medium cursor-pointer"
                      >
                        My school is not enrolled with AnansiAI
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Your school doesn't currently have AnansiAI integration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg border hover:border-logo-teal/50 transition-colors">
                    <RadioGroupItem
                      value="willing-to-join-other"
                      id="willing-to-join-other"
                      className="mt-0.5"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="willing-to-join-other"
                        className="text-sm font-medium cursor-pointer"
                      >
                        I'm willing to join through another enrolled school
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Yes, I can enroll through a partner school with AnansiAI
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-sm font-medium">
                  Additional Notes
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      additionalInfo: e.target.value,
                    }))
                  }
                  placeholder="Share any specific requirements, learning goals, or questions you have..."
                  rows={4}
                  className="resize-none"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={
              isSubmitting ||
              formData.subjects.length === 0 ||
              !formData.schoolEnrollmentStatus
            }
            className="w-full h-12 bg-gradient-to-r from-logo-teal to-logo-blue text-white font-semibold text-lg hover:from-logo-teal/90 hover:to-logo-blue/90 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentEnrollmentForm;
