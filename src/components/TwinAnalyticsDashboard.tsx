import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  X,
  Download,
  Brain,
  TrendingUp,
  FileText,
  Target,
  Lightbulb,
  Award,
  BarChart3,
  PieChart,
} from "lucide-react";

interface AnalyticsData {
  uploadedFiles: File[];
  textInput: string;
  trainingScore: number;
  analysisDetails: string;
  progressFeedback: string;
}

interface TwinAnalyticsDashboardProps {
  data: AnalyticsData;
  onClose: () => void;
}

const TwinAnalyticsDashboard = ({
  data,
  onClose,
}: TwinAnalyticsDashboardProps) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Calculate analytics
  const totalFiles = data.uploadedFiles.length;
  const totalSize = data.uploadedFiles.reduce(
    (sum, file) => sum + file.size,
    0,
  );
  const wordCount = data.textInput.split(/\s+/).filter(Boolean).length;

  // File type analysis
  const fileTypes = data.uploadedFiles.reduce(
    (acc, file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() || "unknown";
      acc[ext] = (acc[ext] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Calculate personality insights
  const personalityMetrics = {
    creativity: Math.min(95, 40 + totalFiles * 8 + wordCount * 0.5),
    analytical: Math.min(95, 35 + totalFiles * 6 + wordCount * 0.3),
    communication: Math.min(95, 50 + wordCount * 0.8),
    technical: Math.min(95, 30 + totalFiles * 10),
  };

  // Growth recommendations
  const recommendations = [
    {
      icon: FileText,
      title: "Add More Text Content",
      description:
        "Upload more written documents to enhance your Twin's writing style and vocabulary.",
      priority: wordCount < 100 ? "High" : "Medium",
    },
    {
      icon: Brain,
      title: "Diversify File Types",
      description:
        "Include audio, video, and image files to create a more comprehensive personality model.",
      priority: Object.keys(fileTypes).length < 3 ? "High" : "Low",
    },
    {
      icon: Target,
      title: "Professional Documents",
      description:
        "Add work-related documents to improve your Twin's professional communication.",
      priority: "Medium",
    },
    {
      icon: Award,
      title: "Consistency Training",
      description:
        "Regular training sessions help maintain and improve your Twin's accuracy.",
      priority: "High",
    },
  ];

  const generatePDF = async () => {
    setIsGeneratingPDF(true);

    try {
      // Dynamic import for PDF generation
      const jsPDF = (await import("jspdf")).default;

      // Create PDF document
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Add header
      pdf.setFontSize(24);
      pdf.setTextColor(0, 181, 165); // logo-teal color
      pdf.text("AI Twin Analytics Report", pageWidth / 2, 30, {
        align: "center",
      });

      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(
        `Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
        pageWidth / 2,
        40,
        { align: "center" },
      );

      // Add key metrics section
      let yPosition = 60;

      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Key Training Metrics", 20, yPosition);
      yPosition += 15;

      // Metrics
      pdf.setFontSize(12);
      pdf.text(`Training Progress: ${data.trainingScore}%`, 25, yPosition);
      yPosition += 8;
      pdf.text(`Files Processed: ${totalFiles}`, 25, yPosition);
      yPosition += 8;
      pdf.text(`Words Analyzed: ${wordCount}`, 25, yPosition);
      yPosition += 8;
      pdf.text(
        `Data Size: ${(totalSize / (1024 * 1024)).toFixed(1)}MB`,
        25,
        yPosition,
      );
      yPosition += 15;

      // Personality Analysis
      pdf.setFontSize(16);
      pdf.text("Personality & Capability Analysis", 20, yPosition);
      yPosition += 15;

      pdf.setFontSize(12);
      Object.entries(personalityMetrics).forEach(([trait, value]) => {
        pdf.text(
          `${trait.charAt(0).toUpperCase() + trait.slice(1)} Intelligence: ${value}%`,
          25,
          yPosition,
        );
        yPosition += 8;
      });

      yPosition += 10;

      // File Distribution
      if (Object.keys(fileTypes).length > 0) {
        pdf.setFontSize(16);
        pdf.text("Content Distribution", 20, yPosition);
        yPosition += 15;

        pdf.setFontSize(12);
        Object.entries(fileTypes).forEach(([type, count]) => {
          pdf.text(`${type.toUpperCase()} files: ${count}`, 25, yPosition);
          yPosition += 8;
        });

        yPosition += 10;
      }

      // Recommendations
      pdf.setFontSize(16);
      pdf.text("Growth Recommendations", 20, yPosition);
      yPosition += 15;

      pdf.setFontSize(12);
      recommendations.forEach((rec, index) => {
        if (yPosition > pageHeight - 40) {
          pdf.addPage();
          yPosition = 20;
        }

        pdf.setFontSize(14);
        pdf.text(
          `${index + 1}. ${rec.title} (${rec.priority} Priority)`,
          25,
          yPosition,
        );
        yPosition += 8;

        pdf.setFontSize(10);
        const lines = pdf.splitTextToSize(rec.description, pageWidth - 50);
        lines.forEach((line: string) => {
          if (yPosition > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.text(line, 30, yPosition);
          yPosition += 5;
        });
        yPosition += 5;
      });

      // Analysis Summary
      if (yPosition > pageHeight - 60) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFontSize(16);
      pdf.text("Analysis Summary", 20, yPosition);
      yPosition += 15;

      pdf.setFontSize(12);
      pdf.text("Content Analysis:", 25, yPosition);
      yPosition += 8;

      const analysisLines = pdf.splitTextToSize(
        data.analysisDetails,
        pageWidth - 50,
      );
      analysisLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(line, 30, yPosition);
        yPosition += 5;
      });

      yPosition += 10;
      pdf.text("Progress Insights:", 25, yPosition);
      yPosition += 8;

      const progressLines = pdf.splitTextToSize(
        data.progressFeedback,
        pageWidth - 50,
      );
      progressLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.text(line, 30, yPosition);
        yPosition += 5;
      });

      // Footer
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(
        "Generated by AnansiAI Twin Analytics System",
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" },
      );

      // Save the PDF
      pdf.save(
        `twin-analytics-report-${new Date().toISOString().split("T")[0]}.pdf`,
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
    }

    setTimeout(() => {
      setIsGeneratingPDF(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AI Twin Analytics</h2>
              <p className="text-muted-foreground">
                Training progress and insights
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              {isGeneratingPDF ? "Generating..." : "Download Report"}
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-logo-teal">
                  {data.trainingScore}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Training Progress
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-logo-blue">
                  {totalFiles}
                </div>
                <div className="text-sm text-muted-foreground">
                  Files Processed
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-cyber-blue">
                  {wordCount}
                </div>
                <div className="text-sm text-muted-foreground">
                  Words Analyzed
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-ai-accent">
                  {(totalSize / (1024 * 1024)).toFixed(1)}MB
                </div>
                <div className="text-sm text-muted-foreground">Data Size</div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personality Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Personality Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(personalityMetrics).map(([trait, value]) => (
                  <div key={trait}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{trait}</span>
                      <span>{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* File Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2" />
                  Content Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Object.keys(fileTypes).length > 0 ? (
                  <div className="space-y-3">
                    {Object.entries(fileTypes).map(([type, count]) => (
                      <div
                        key={type}
                        className="flex justify-between items-center"
                      >
                        <span className="capitalize">{type} files</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-logo-teal h-2 rounded-full"
                              style={{
                                width: `${(count / totalFiles) * 100}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No files uploaded yet
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Growth Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2" />
                Growth Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-logo-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <rec.icon className="h-4 w-4 text-logo-teal" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            rec.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : rec.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {rec.priority}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {rec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analysis Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Analysis Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-logo-teal/5 rounded-lg">
                  <h4 className="font-semibold text-logo-teal mb-2">
                    Content Analysis
                  </h4>
                  <p className="text-sm">{data.analysisDetails}</p>
                </div>
                <div className="p-4 bg-logo-blue/5 rounded-lg">
                  <h4 className="font-semibold text-logo-blue mb-2">
                    Progress Insights
                  </h4>
                  <p className="text-sm">{data.progressFeedback}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TwinAnalyticsDashboard;
