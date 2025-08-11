import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Download,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react";
import jsPDF from "jspdf";

interface TrainingProgressReportProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrainingProgressReport = ({
  isOpen,
  onClose,
}: TrainingProgressReportProps) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Mock training data
  const trainingData = {
    overallProgress: 75,
    completedModules: 12,
    totalModules: 16,
    trainingHours: 45.5,
    accuracy: 92,
    personalityAlignment: 88,
    skillsAcquired: [
      { name: "Language Processing", progress: 95 },
      { name: "Communication Style", progress: 87 },
      { name: "Decision Making", progress: 73 },
      { name: "Creative Writing", progress: 81 },
      { name: "Problem Solving", progress: 69 },
    ],
    recentMilestones: [
      { date: "2024-01-15", milestone: "Completed Basic Language Module" },
      { date: "2024-01-18", milestone: "Achieved 90% Personality Match" },
      { date: "2024-01-22", milestone: "Mastered Your Writing Style" },
    ],
    nextSteps: [
      "Advanced reasoning training",
      "Subject-specific knowledge integration",
      "Final personality calibration",
    ],
  };

  const generatePDFReport = async () => {
    setIsGeneratingPDF(true);

    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      let yPosition = margin;

      // Header
      pdf.setFontSize(24);
      pdf.setFont("helvetica", "bold");
      pdf.text("AI Twin Training Progress Report", margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        `Generated on: ${new Date().toLocaleDateString()}`,
        margin,
        yPosition,
      );
      yPosition += 20;

      // Overall Progress
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("Overall Training Progress", margin, yPosition);
      yPosition += 10;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Progress: ${trainingData.overallProgress}%`, margin, yPosition);
      yPosition += 8;
      pdf.text(
        `Modules Completed: ${trainingData.completedModules}/${trainingData.totalModules}`,
        margin,
        yPosition,
      );
      yPosition += 8;
      pdf.text(
        `Training Hours: ${trainingData.trainingHours}`,
        margin,
        yPosition,
      );
      yPosition += 8;
      pdf.text(`Accuracy Score: ${trainingData.accuracy}%`, margin, yPosition);
      yPosition += 8;
      pdf.text(
        `Personality Alignment: ${trainingData.personalityAlignment}%`,
        margin,
        yPosition,
      );
      yPosition += 20;

      // Skills Progress
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("Skills Development", margin, yPosition);
      yPosition += 10;

      trainingData.skillsAcquired.forEach((skill) => {
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${skill.name}: ${skill.progress}%`, margin, yPosition);
        yPosition += 8;
      });
      yPosition += 10;

      // Recent Milestones
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("Recent Milestones", margin, yPosition);
      yPosition += 10;

      trainingData.recentMilestones.forEach((milestone) => {
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");
        pdf.text(
          `${milestone.date}: ${milestone.milestone}`,
          margin,
          yPosition,
        );
        yPosition += 8;
      });
      yPosition += 10;

      // Next Steps
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("Next Steps", margin, yPosition);
      yPosition += 10;

      trainingData.nextSteps.forEach((step, index) => {
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${index + 1}. ${step}`, margin, yPosition);
        yPosition += 8;
      });

      // Save the PDF
      pdf.save("AI-Twin-Training-Progress-Report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4a7a6514fd9745e39ed72bb4e2406e93%2Fc431444156984e9699826882fee07f4a?format=webp&width=800"
              alt="Anansi AI"
              className="h-6 w-6"
            />
            <span>AI Twin Training Progress Report</span>
          </DialogTitle>
          <DialogDescription>
            Detailed overview of your AI Twin's learning journey and current
            capabilities
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Overall Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-logo-teal" />
                <span>Overall Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">
                      Training Progress
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {trainingData.overallProgress}%
                    </span>
                  </div>
                  <Progress
                    value={trainingData.overallProgress}
                    className="h-3"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-logo-teal">
                      {trainingData.completedModules}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Modules Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-logo-blue">
                      {trainingData.trainingHours}h
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Training Hours
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-blue">
                      {trainingData.accuracy}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Accuracy Score
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ai-accent">
                      {trainingData.personalityAlignment}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Personality Match
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-logo-blue" />
                <span>Skills Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingData.skillsAcquired.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.progress}%
                      </span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Recent Milestones</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trainingData.recentMilestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20"
                  >
                    <Calendar className="h-5 w-5 text-logo-teal mt-0.5" />
                    <div>
                      <div className="font-medium">{milestone.milestone}</div>
                      <div className="text-sm text-muted-foreground">
                        {milestone.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-cyber-blue" />
                <span>Next Training Steps</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trainingData.nextSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20"
                  >
                    <div className="w-6 h-6 rounded-full bg-logo-teal text-white text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div className="font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={generatePDFReport}
            disabled={isGeneratingPDF}
            className="bg-gradient-to-r from-logo-teal to-logo-blue text-white px-8 py-3"
          >
            {isGeneratingPDF ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download PDF Report
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingProgressReport;
