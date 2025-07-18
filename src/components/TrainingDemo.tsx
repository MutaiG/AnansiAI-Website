import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Brain, CheckCircle } from "lucide-react";

const TrainingDemo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    "What's your name and where are you from?",
    "Describe your childhood in a few sentences. What was it like?",
    "What are you most passionate about in life?",
    "Tell me about a challenge you've overcome recently.",
    "What's your biggest dream or goal for the future?",
    "How do you usually spend your free time?",
    "What's a value or principle that guides your decisions?",
    "Describe your ideal day from start to finish.",
    "What's something you've learned about yourself this year?",
    "If you could give advice to someone just like you, what would it be?",
  ];

  const analyzePersonality = (answers: string[]) => {
    const allText = answers.join(" ").toLowerCase();

    // Analyze communication style
    const isDetailOriented = answers.some((a) => a.length > 100);
    const isConcise = answers.every((a) => a.length < 80);
    const usesEmotionalWords =
      /feel|love|passionate|excited|happy|sad|worry|fear|hope|dream/.test(
        allText,
      );
    const usesLogicalWords =
      /think|analyze|plan|strategy|goal|objective|efficient|logical/.test(
        allText,
      );

    // Personality traits
    const isFutureOriented =
      /future|goal|dream|plan|aspire|hope|want to|will be/.test(allText);
    const isReflective =
      /learn|grow|experience|understand|realize|discover/.test(allText);
    const isActionOriented =
      /do|make|create|build|achieve|accomplish|work/.test(allText);

    // Values
    const valueFamily = /family|parent|child|home|together/.test(allText);
    const valueGrowth = /learn|grow|improve|develop|progress|better/.test(
      allText,
    );
    const valueCreativity =
      /create|creative|art|design|music|write|imagine/.test(allText);

    return {
      communicationStyle: isDetailOriented
        ? "Detailed storyteller"
        : isConcise
          ? "Clear and concise"
          : "Balanced communicator",
      primaryTrait: isFutureOriented
        ? "Future-focused visionary"
        : isReflective
          ? "Thoughtful reflector"
          : isActionOriented
            ? "Action-oriented achiever"
            : "Balanced individual",
      emotionalStyle: usesEmotionalWords
        ? "Emotionally expressive"
        : usesLogicalWords
          ? "Analytically minded"
          : "Balanced thinker",
      coreValues: [
        valueFamily && "Family & relationships",
        valueGrowth && "Personal growth",
        valueCreativity && "Creativity & self-expression",
      ].filter(Boolean),
      twinStrength: isDetailOriented
        ? "storytelling and detailed explanations"
        : isConcise
          ? "clear, efficient communication"
          : "balanced, adaptable communication",
    };
  };

  const handleAnswerSubmit = () => {
    if (!currentAnswer.trim()) return;

    const newAnswers = [...answers, currentAnswer.trim()];
    setAnswers(newAnswers);
    setCurrentAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const progress =
    ((currentQuestion + (isCompleted ? 1 : 0)) / questions.length) * 100;

  if (isCompleted) {
    const analysis = analyzePersonality(answers);

    return (
      <Card className="bg-background border-2 border-gradient-to-r from-logo-teal via-logo-blue to-cyber-blue shadow-xl backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-logo-teal via-logo-blue to-cyber-blue p-[2px]">
          <div className="bg-background rounded-lg h-full w-full"></div>
        </div>
        <CardContent className="relative p-8 z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-4">
              Your Twin Profile Created! 🎉
            </h3>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Based on your responses, here's what your Twin has learned about
              you:
            </p>
          </div>

          {/* Personality Analysis */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 p-6 rounded-lg border border-logo-teal/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-logo-teal" />
                Communication Style
              </h4>
              <p className="text-muted-foreground">
                {analysis.communicationStyle}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Your Twin will excel at {analysis.twinStrength}
              </p>
            </div>

            <div className="bg-gradient-to-br from-logo-blue/5 to-cyber-blue/5 p-6 rounded-lg border border-logo-blue/20">
              <h4 className="font-semibold text-foreground mb-3">
                Personality Type
              </h4>
              <p className="text-muted-foreground">{analysis.primaryTrait}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {analysis.emotionalStyle}
              </p>
            </div>

            {analysis.coreValues.length > 0 && (
              <div className="md:col-span-2 bg-gradient-to-r from-logo-teal/5 to-logo-blue/5 p-6 rounded-lg border border-logo-teal/20">
                <h4 className="font-semibold text-foreground mb-3">
                  Core Values Detected
                </h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.coreValues.map((value, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-logo-teal/10 text-logo-teal rounded-full text-sm font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <Link to="/train-your-twin-app" className="flex items-center">
                  Continue Training Your Twin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-logo-teal/50 hover:bg-logo-teal/10 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/login">Sign In</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              This is just the beginning! Your Twin will continue learning and
              adapting to become more like you.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-background border-2 border-gradient-to-r from-logo-teal via-logo-blue to-cyber-blue shadow-xl backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-logo-teal via-logo-blue to-cyber-blue p-[2px]">
        <div className="bg-background rounded-lg h-full w-full"></div>
      </div>
      <CardContent className="relative p-8 z-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-3">
            Start Training Your Twin
          </h3>
          <p className="text-muted-foreground text-lg">
            Answer these questions to help your Twin learn about you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Current Question */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mr-4">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">
              {questions[currentQuestion]}
            </h4>
          </div>

          <Textarea
            placeholder="Share your thoughts here..."
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            rows={4}
            className="w-full bg-background border-2 border-logo-teal/30 text-foreground placeholder:text-muted-foreground resize-none text-lg p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue/50 focus:border-logo-blue/70 transition-all duration-200"
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAnswerSubmit();
              }
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {answers.length > 0 && (
              <span>✓ {answers.length} questions answered</span>
            )}
          </div>

          <Button
            onClick={handleAnswerSubmit}
            disabled={!currentAnswer.trim()}
            className="bg-gradient-to-r from-logo-teal to-logo-blue hover:from-logo-teal/90 hover:to-logo-blue/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1
              ? "Complete Demo"
              : "Next Question"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Previous Answers Preview */}
        {answers.length > 0 && (
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              Your Twin is learning from your responses...
            </p>
            <div className="text-xs text-muted-foreground">
              Analyzing communication style, personality traits, and interests
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TrainingDemo;
