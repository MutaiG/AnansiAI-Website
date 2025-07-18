import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  FileText,
  Image,
  Video,
  Music,
  File,
  ArrowRight,
  Download,
  Brain,
  Zap,
  CheckCircle,
  X,
  Paperclip,
} from "lucide-react";

const TwinTrainingDemo = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<{ name: string; type: string; size: number; source: string }>
  >([]);
  const [trainingText, setTrainingText] = useState("");
  const [uploadSource, setUploadSource] = useState("computer");
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const uploadSources = [
    { value: "computer", label: "Upload from Computer" },
    { value: "google-drive", label: "Google Drive" },
    { value: "dropbox", label: "Dropbox" },
    { value: "onedrive", label: "OneDrive" },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = files.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
      source: uploadSource,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return Image;
    if (type.startsWith("video/")) return Video;
    if (type.startsWith("audio/")) return Music;
    if (type.includes("text") || type.includes("document")) return FileText;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const startTraining = async () => {
    if (uploadedFiles.length === 0 && !trainingText.trim()) return;

    setIsTraining(true);
    setTrainingProgress(0);

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setShowResults(true);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const generatePDF = async () => {
    try {
      // Dynamic import for PDF generation
      const jsPDF = (await import("jspdf")).default;

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();

      // Header
      pdf.setFontSize(24);
      pdf.setTextColor(0, 181, 165); // logo-teal color
      pdf.text("Twin Development Report", pageWidth / 2, 30, {
        align: "center",
      });

      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(
        `Generated on ${new Date().toLocaleDateString()}`,
        pageWidth / 2,
        40,
        { align: "center" },
      );

      // Training Summary
      let yPos = 60;
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Training Summary", 20, yPos);
      yPos += 15;

      pdf.setFontSize(12);
      pdf.text(`Files Processed: ${uploadedFiles.length}`, 25, yPos);
      yPos += 8;
      pdf.text(`Text Content: ${trainingText.length} characters`, 25, yPos);
      yPos += 8;
      pdf.text(`Training Progress: ${Math.round(trainingProgress)}%`, 25, yPos);
      yPos += 15;

      // File Analysis
      if (uploadedFiles.length > 0) {
        pdf.setFontSize(16);
        pdf.text("File Analysis", 20, yPos);
        yPos += 15;

        uploadedFiles.forEach((file, index) => {
          pdf.setFontSize(10);
          pdf.text(
            `${index + 1}. ${file.name} (${formatFileSize(file.size)})`,
            25,
            yPos,
          );
          yPos += 6;
        });
        yPos += 10;
      }

      // Twin Capabilities
      pdf.setFontSize(16);
      pdf.text("Developed Capabilities", 20, yPos);
      yPos += 15;

      const capabilities = [
        "Text comprehension and analysis",
        "Personal writing style recognition",
        "Content pattern understanding",
        "Context-aware responses",
        "Personality trait modeling",
      ];

      capabilities.forEach((capability) => {
        pdf.setFontSize(12);
        pdf.text(`• ${capability}`, 25, yPos);
        yPos += 8;
      });

      // Footer
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(
        "Generated by AnansiAI Twin Development System",
        pageWidth / 2,
        pdf.internal.pageSize.getHeight() - 10,
        { align: "center" },
      );

      // Save the PDF
      pdf.save("twin-development-report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-purple-900/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700/50 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              {!showResults ? (
                <>
                  {/* Demo Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      What should we build?
                    </h3>
                    <p className="text-slate-300 text-lg">
                      using your existing content & personal context
                    </p>
                  </div>

                  {/* Main Input Area */}
                  <div className="mb-6">
                    <div className="relative">
                      <Textarea
                        value={trainingText}
                        onChange={(e) => setTrainingText(e.target.value)}
                        placeholder="Ask your Twin to learn about your style, preferences, or knowledge areas..."
                        rows={4}
                        className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 resize-none text-lg p-4"
                      />
                    </div>
                  </div>

                  {/* Upload Section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Paperclip className="h-5 w-5 text-slate-400" />
                        <span className="text-slate-300 font-medium">
                          Attach
                        </span>
                      </div>

                      <Select
                        value={uploadSource}
                        onValueChange={setUploadSource}
                      >
                        <SelectTrigger className="w-48 bg-slate-800/50 border-slate-600/50 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          {uploadSources.map((source) => (
                            <SelectItem
                              key={source.value}
                              value={source.value}
                              className="text-white hover:bg-slate-700"
                            >
                              {source.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-2 border-dashed border-slate-600/50 rounded-lg p-6 text-center hover:border-slate-500/50 transition-colors">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-300 mb-3">
                        Drop files here or click to browse
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept="*/*"
                      />
                      <Button
                        variant="outline"
                        onClick={() =>
                          document.getElementById("file-upload")?.click()
                        }
                        className="bg-slate-700/50 border-slate-600/50 text-white hover:bg-slate-600/50"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Uploaded Files */}
                  {uploadedFiles.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-300 font-medium">
                          Uploaded Files ({uploadedFiles.length})
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setUploadedFiles([])}
                          className="text-slate-400 hover:text-white"
                        >
                          Clear All
                        </Button>
                      </div>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {uploadedFiles.map((file, index) => {
                          const FileIcon = getFileIcon(file.type);
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                            >
                              <div className="flex items-center space-x-3">
                                <FileIcon className="h-5 w-5 text-slate-400" />
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    {file.name}
                                  </div>
                                  <div className="text-xs text-slate-400">
                                    {formatFileSize(file.size)} • {file.source}
                                  </div>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="text-slate-400 hover:text-white"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Training Progress */}
                  {isTraining && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">
                          Training Progress
                        </span>
                        <span className="text-sm text-slate-300">
                          {Math.round(trainingProgress)}%
                        </span>
                      </div>
                      <Progress value={trainingProgress} className="mb-2" />
                      <p className="text-xs text-slate-400">
                        Your Twin is learning your style and preferences...
                      </p>
                    </div>
                  )}

                  {/* Start Training Button */}
                  <div className="flex justify-end">
                    <Button
                      onClick={startTraining}
                      disabled={
                        isTraining ||
                        (uploadedFiles.length === 0 && !trainingText.trim())
                      }
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                    >
                      {isTraining ? (
                        <>
                          <Zap className="h-4 w-4 mr-2 animate-pulse" />
                          Training...
                        </>
                      ) : (
                        <>
                          Train Your Twin
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                /* Training Results */
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-logo-teal to-logo-blue text-white mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Twin Training Complete!
                  </h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    Your AI Twin has analyzed {uploadedFiles.length} files and{" "}
                    {trainingText.length} characters of text to learn your
                    unique style and preferences.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="text-2xl font-bold text-logo-teal mb-1">
                        {uploadedFiles.length}
                      </div>
                      <div className="text-sm text-slate-300">
                        Files Processed
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="text-2xl font-bold text-logo-blue mb-1">
                        95%
                      </div>
                      <div className="text-sm text-slate-300">Style Match</div>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        5
                      </div>
                      <div className="text-sm text-slate-300">Capabilities</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={generatePDF}
                      variant="outline"
                      className="flex items-center bg-slate-800/50 border-slate-600/50 text-white hover:bg-slate-700/50"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Development Report
                    </Button>
                    <Button
                      onClick={() => {
                        setShowResults(false);
                        setTrainingProgress(0);
                        setUploadedFiles([]);
                        setTrainingText("");
                      }}
                      className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                    >
                      Try Another Training
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TwinTrainingDemo;
