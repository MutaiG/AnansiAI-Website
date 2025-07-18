import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { BookOpen, GraduationCap, Users, ArrowRight } from "lucide-react";

const EducationRevolution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton fallbackPath="/" />
      </div>

      {/* Article Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
              <BookOpen className="mr-2 h-4 w-4 text-logo-blue" />
              Education & AI
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Education Revolution
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              How AI Twins are transforming classrooms and making learning truly
              personalized.
            </p>

            <div className="border-l-4 border-logo-blue pl-6 mb-12">
              <p className="text-lg italic text-muted-foreground">
                "The future of education isn't about teaching students to use AI
                tools—it's about students training their own AI to think like
                them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-logo-blue mr-3" />
              The Problem with One-Size-Fits-All AI
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Today's students are being told to adapt to AI tools built for
              everyone and no one in particular. ChatGPT, Claude, and other
              general AI models provide the same responses to millions of users,
              regardless of their learning style, personality, or unique way of
              thinking.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              This approach misses the fundamental truth about learning: it's
              deeply personal. Every student processes information differently,
              asks questions differently, and finds motivation through different
              methods.
            </p>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 text-logo-teal mr-3" />
              Enter AI Twins: Personalized Learning Companions
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI Twins represent a paradigm shift. Instead of students adapting
              to generic AI, they train their own AI to understand their unique
              approach to learning, problem-solving, and creative thinking.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">How Student AI Twins Work:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-logo-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Natural Learning:</strong> Students continue their
                    normal classroom activities—taking notes, doing assignments,
                    participating in discussions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-logo-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Twin Observation:</strong> The AI Twin learns from
                    the student's work, thinking patterns, and teacher feedback.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyber-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Personalized Assistance:</strong> Once mature, the
                    Twin can help with homework, explain concepts in the
                    student's preferred style, and prepare for exams.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">
              The Impact on Classrooms
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              This revolution extends beyond individual students. Classrooms
              become dynamic environments where:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>
                • Teachers can focus on higher-level guidance while Twins handle
                routine explanations
              </li>
              <li>
                • Students develop digital literacy by training their own AI
                rather than just consuming it
              </li>
              <li>
                • Learning becomes more equitable as each student has a
                personalized tutor
              </li>
              <li>
                • Assessment evolves to measure both human learning and Twin
                development
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Starting Early Matters</h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              The earlier students begin training their AI Twin, the more
              sophisticated and helpful it becomes. A Twin that grows with a
              student from elementary school through university understands not
              just what they know, but how they learn, what motivates them, and
              how they think through complex problems.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              This creates a compounding advantage: while their peers are
              learning to prompt generic AI tools, students with mature Twins
              are collaborating with AI that truly understands them.
            </p>

            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 rounded-lg p-8 text-center mb-12">
              <h3 className="text-xl font-bold mb-4">
                Ready to Join the Education Revolution?
              </h3>
              <p className="text-muted-foreground mb-6">
                Help your student build a personalized AI Twin that grows with
                their learning journey.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                <Link to="/products/student-twin" className="flex items-center">
                  Learn About Student Twins
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationRevolution;
