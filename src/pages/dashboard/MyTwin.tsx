import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import {
  Brain,
  MessageCircle,
  Send,
  Sparkles,
  Camera,
  FileText,
  Mic,
  Heart,
  Zap,
  Clock,
  Star,
  Share2,
  Image,
  Music,
  Video,
  Link,
  Smile,
  MoreHorizontal,
  RotateCcw,
  X,
  ArrowRight,
} from "lucide-react";

const MyTwin = () => {
  const { user } = useAuth();
  const [inputText, setInputText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [skippedPrompts, setSkippedPrompts] = useState<string[]>([]);
  const [promptType, setPromptType] = useState<'memory' | 'question' | 'feelings' | null>(null);

  const twinPersonality = {
    mood: "Energetic",
    learningFocus: "Creative Problem Solving",
    lastActive: "Active now",
    conversationTopics: [
      "Technology & Innovation",
      "Creative Projects",
      "Personal Growth",
      "Future Planning",
    ],
    twinInsights: [
      "You're most creative in the mornings",
      "You love collaborative brainstorming",
      "Innovation excites you the most",
    ],
  };

  const sharingOptions = [
    { icon: Camera, label: "Photo", color: "text-blue-500" },
    { icon: FileText, label: "Document", color: "text-green-500" },
    { icon: Mic, label: "Voice Note", color: "text-purple-500" },
    { icon: Video, label: "Video", color: "text-red-500" },
    { icon: Music, label: "Audio", color: "text-orange-500" },
    { icon: Link, label: "Link", color: "text-cyan-500" },
  ];

  const handleSendMessage = () => {
    if (inputText.trim() || selectedFiles.length > 0) {
      // Handle message sending logic here
      console.log("Sending:", { text: inputText, files: selectedFiles });
      setInputText("");
      setSelectedFiles([]);
    }
  };

  const handleMediaUpload = (type: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;

    switch (type) {
      case "photo":
        input.accept = "image/*";
        break;
      case "video":
        input.accept = "video/*";
        break;
      case "audio":
        input.accept = "audio/*";
        break;
      case "document":
        input.accept = ".pdf,.doc,.docx,.txt,.rtf";
        break;
      case "voice note":
        input.accept = "audio/*";
        break;
      case "link":
        // Handle link sharing differently
        const url = prompt("Enter a URL to share:");
        if (url) {
          setInputText((prev) => prev + (prev ? "\n" : "") + url);
        }
        return;
      default:
        input.accept = "*/*";
    }

    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      if (files.length > 0) {
        setSelectedFiles((prev) => [...prev, ...files]);
        // Show file names in textarea
        const fileNames = files.map((f) => f.name).join(", ");
        setInputText((prev) => prev + (prev ? "\n" : "") + `📎 ${fileNames}`);
      }
    };

    input.click();
  };

  const handleSkipPrompt = () => {
    if (currentPrompt) {
      setSkippedPrompts(prev => [...prev, currentPrompt]);

      // Clear current prompt from textarea
      setInputText(prev => {
        const promptText = `💭 Memory prompt: ${currentPrompt}`;
        return prev.replace(promptText, '').replace(/\n\n\n+/g, '\n\n').trim();
      });

      // Generate a new prompt automatically
      if (promptType === 'memory') {
        handleShareMemory();
      } else if (promptType === 'question') {
        handleRandomQuestion();
      } else if (promptType === 'feelings') {
        handleFeelingsCheck();
      }
    }
  };

  const handleUndoSkip = () => {
    if (skippedPrompts.length > 0) {
      const lastSkipped = skippedPrompts[skippedPrompts.length - 1];
      setSkippedPrompts(prev => prev.slice(0, -1));
      setCurrentPrompt(lastSkipped);

      // Add the prompt back to textarea
      setInputText(
        (prev) =>
          prev + (prev ? "\n\n" : "") + `💭 Memory prompt: ${lastSkipped}\n\n`,
      );

      // Focus the textarea
      setTimeout(() => {
        const textarea = document.querySelector("textarea");
        if (textarea) {
          textarea.focus();
          textarea.setSelectionRange(
            textarea.value.length,
            textarea.value.length,
          );
        }
      }, 100);
    }
  };

  const handleShareMemory = () => {
    const memoryPrompts = [
      "What's your most cherished childhood memory?",
      "Tell me about a time you felt truly proud of yourself.",
      "What's a funny memory that always makes you smile?",
      "Describe a moment when you felt completely at peace.",
      "What's a memory that taught you something important?",
      "Share a memory involving someone you love.",
      "What's an adventure or trip you'll never forget?",
      "Tell me about a moment that changed your perspective.",
    ];

    // Filter out skipped prompts
    const availablePrompts = memoryPrompts.filter(prompt => !skippedPrompts.includes(prompt));

    let selectedPrompt: string;
    if (availablePrompts.length === 0) {
      // All prompts have been skipped, reset the list
      setSkippedPrompts([]);
      selectedPrompt = memoryPrompts[Math.floor(Math.random() * memoryPrompts.length)];
    } else {
      selectedPrompt = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
    }

    setCurrentPrompt(selectedPrompt);
    setPromptType('memory');

    setInputText(
      (prev) =>
        prev + (prev ? "\n\n" : "") + `💭 Memory prompt: ${selectedPrompt}\n\n`,
    );

    // Focus the textarea after adding the prompt
    setTimeout(() => {
      const textarea = document.querySelector("textarea");
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(
          textarea.value.length,
          textarea.value.length,
        );
      }
    }, 100);
  };

  const handleRandomQuestion = () => {
    const questions = [
      "If you could have dinner with anyone, living or dead, who would it be and why?",
      "What's something you've always wanted to learn but haven't had the chance to?",
      "If you could change one thing about the world, what would it be?",
      "What's the best advice you've ever received?",
      "If you could relive one day of your life, which would it be?",
      "What's something that never fails to make you happy?",
      "If you had unlimited resources, what project would you start?",
      "What's a skill you wish you were naturally good at?",
      "What does success mean to you personally?",
      "If you could send a message to your future self, what would it say?",
    ];

    const availableQuestions = questions.filter(q => !skippedPrompts.includes(q));

    let selectedQuestion: string;
    if (availableQuestions.length === 0) {
      setSkippedPrompts([]);
      selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
    } else {
      selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    }

    setCurrentPrompt(selectedQuestion);
    setPromptType('question');

    setInputText(
      (prev) => prev + (prev ? "\n\n" : "") + `❓ ${selectedQuestion}\n\n`,
    );

    // Focus the textarea after adding the question
    setTimeout(() => {
      const textarea = document.querySelector("textarea");
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(
          textarea.value.length,
          textarea.value.length,
        );
      }
    }, 100);
  };

  const handleFeelingsCheck = () => {
    const feelingsPrompts = [
      "How are you feeling right now, and what's contributing to that feeling?",
      "What emotions have you experienced most today?",
      "Is there anything weighing on your mind that you'd like to share?",
      "What's bringing you joy or excitement lately?",
      "How has your energy level been today?",
      "What's one thing that would improve your mood right now?",
      "Are you feeling stressed about anything specific?",
      "What's something you're grateful for today?",
    ];

    const availablePrompts = feelingsPrompts.filter(p => !skippedPrompts.includes(p));

    let selectedPrompt: string;
    if (availablePrompts.length === 0) {
      setSkippedPrompts([]);
      selectedPrompt = feelingsPrompts[Math.floor(Math.random() * feelingsPrompts.length)];
    } else {
      selectedPrompt = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
    }

    setCurrentPrompt(selectedPrompt);
    setPromptType('feelings');

    setInputText(
      (prev) =>
        prev +
        (prev ? "\n\n" : "") +
        `💚 Feelings check-in: ${selectedPrompt}\n\n`,
    );

    // Focus the textarea after adding the prompt
    setTimeout(() => {
      const textarea = document.querySelector("textarea");
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(
          textarea.value.length,
          textarea.value.length,
        );
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-logo-teal/5">
      <div className="container mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-6xl">
        {/* Twin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="w-16 h-16 border-4 border-logo-teal/20">
                <AvatarFallback className="bg-gradient-to-br from-logo-teal to-logo-blue text-white text-2xl font-bold">
                  🤖
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {user?.twinName || `${user?.name}'s Twin`}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-green-100 text-green-800 text-xs">
                  {twinPersonality.lastActive}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Mood: {twinPersonality.mood}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Twin
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Unified Share Interface with Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-logo-teal" />
                  Share with Your Twin
                </h3>
                <p className="text-muted-foreground mb-6">
                  Share anything with your Twin to help it learn about you and
                  your preferences.
                </p>

                {/* Quick Action Buttons */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    Quick prompts to get you started:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="justify-start hover:bg-red-50 hover:border-red-200 transition-all duration-200 active:scale-95"
                      onClick={handleShareMemory}
                    >
                      <Heart className="h-4 w-4 mr-2 text-red-500" />
                      Share a Memory
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start hover:bg-yellow-50 hover:border-yellow-200 transition-all duration-200 active:scale-95"
                      onClick={handleRandomQuestion}
                    >
                      <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                      Random Question
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start hover:bg-green-50 hover:border-green-200 transition-all duration-200 active:scale-95"
                      onClick={handleFeelingsCheck}
                    >
                      <Smile className="h-4 w-4 mr-2 text-green-500" />
                      How I'm Feeling
                    </Button>
                  </div>

                  {/* Skip/Undo Controls */}
                  {currentPrompt && (
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-logo-teal rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">Current prompt active</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-orange-300 text-orange-600 hover:bg-orange-50"
                            onClick={handleSkipPrompt}
                          >
                            <ArrowRight className="h-4 w-4 mr-1" />
                            Skip & Get New
                          </Button>
                          {skippedPrompts.length > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                              onClick={handleUndoSkip}
                            >
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Undo Last Skip ({skippedPrompts.length})
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <Textarea
                    placeholder="Tell your Twin anything... thoughts, experiences, ideas, feelings..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />

                  {/* Selected Files Preview */}
                  {selectedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 p-3 bg-muted/30 rounded-lg">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-background px-3 py-2 rounded-md text-sm"
                        >
                          <FileText className="h-4 w-4 text-logo-teal" />
                          <span className="truncate max-w-[150px]">
                            {file.name}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => {
                              setSelectedFiles((prev) =>
                                prev.filter((_, i) => i !== index),
                              );
                              // Remove file name from text
                              setInputText((prev) =>
                                prev
                                  .replace(
                                    new RegExp(`📎 ${file.name}[,\\s]*`, "g"),
                                    "",
                                  )
                                  .trim(),
                              );
                            }}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {sharingOptions.map((option) => (
                        <Button
                          key={option.label}
                          variant="ghost"
                          size="sm"
                          className="flex-shrink-0"
                          onClick={() =>
                            handleMediaUpload(option.label.toLowerCase())
                          }
                        >
                          <option.icon className={`h-4 w-4 ${option.color}`} />
                        </Button>
                      ))}
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() && selectedFiles.length === 0}
                      className="bg-gradient-to-r from-logo-teal to-logo-blue"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Share with Twin
                      {selectedFiles.length > 0 && (
                        <Badge className="ml-2 bg-white/20 text-white">
                          {selectedFiles.length}
                        </Badge>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Twin Insights Sidebar */}
          <div className="space-y-4">
            {/* Twin Status */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Brain className="h-4 w-4 text-logo-teal" />
                  Twin Status
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Learning Focus
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {twinPersonality.learningFocus}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Conversations
                    </span>
                    <span className="text-sm font-medium">47 this week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Shared Items
                    </span>
                    <span className="text-sm font-medium">23 items</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversation Topics */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-logo-blue" />
                  Topics We Explore
                </h3>
                <div className="space-y-2">
                  {twinPersonality.conversationTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-logo-teal"></div>
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Twin Insights */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 text-cyber-blue" />
                  What I Know About You
                </h3>
                <div className="space-y-3">
                  {twinPersonality.twinInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gradient-to-r from-logo-teal/5 to-logo-blue/5 border-l-2 border-logo-teal"
                    >
                      <p className="text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTwin;
