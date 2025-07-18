import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import {
  Brain,
  Send,
  Paperclip,
  Mic,
  Camera,
  FileText,
  Heart,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const MyTwin = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Mock conversation history
  const [conversations, setConversations] = useState([
    {
      id: 1,
      type: "twin",
      message:
        "Hello! I'm excited to learn more about you today. How are you feeling?",
      timestamp: new Date(Date.now() - 10000),
    },
    {
      id: 2,
      type: "user",
      message: "I'm feeling great! Ready to work on some tasks.",
      timestamp: new Date(Date.now() - 5000),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      message: message.trim(),
      timestamp: new Date(),
    };

    setConversations((prev) => [...prev, userMessage]);
    setMessage("");

    // Simulate twin response
    setTimeout(() => {
      const responses = [
        "That's interesting! Tell me more about that.",
        "I love learning about your perspective on this.",
        "How does that make you feel?",
        "That helps me understand you better!",
        "Would you like to explore this topic further?",
      ];

      const twinMessage = {
        id: Date.now() + 1,
        type: "twin",
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setConversations((prev) => [...prev, twinMessage]);
    }, 1500);
  };

  return (
    <div className="h-full bg-gray-50 flex flex-col relative">
      {/* Twin Avatar Circle - positioned to match reference design */}
      <div className="absolute top-8 right-8 z-10">
        <div className="relative">
          {/* Main avatar circle with progress ring */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full relative">
            {/* Progress ring */}
            <svg
              className="absolute inset-0 w-32 h-32 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#10B981"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${75 * 2.83} 283`}
                className="transition-all duration-300"
              />
            </svg>

            {/* Twin faces */}
            <div className="absolute inset-4 bg-white/20 rounded-full flex items-center justify-center">
              <div className="flex items-center space-x-4">
                {/* Left face */}
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1 mb-1">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                {/* Right face */}
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1 mb-1">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Content */}
      <div className="flex-1 p-8 pt-20">
        <div className="max-w-2xl mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Hi {user?.name}! 👋
            </h2>
            <p className="text-gray-600">
              I'm {user?.twinName}, ready to learn and grow with you today.
            </p>
          </div>

          {/* Conversation Area */}
          <Card className="mb-6 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`flex ${
                      conv.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-sm p-4 rounded-2xl ${
                        conv.type === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{conv.message}</p>
                      <p
                        className={`text-xs mt-2 ${
                          conv.type === "user"
                            ? "text-white/70"
                            : "text-gray-500"
                        }`}
                      >
                        {conv.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Input Area */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Textarea
                    placeholder="Tell me about yourself, share a thought, or ask me anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="resize-none border-2 border-gray-200 focus:border-blue-400 rounded-xl"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="p-3">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-3 ${isRecording ? "bg-red-100" : ""}`}
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Quick suggestions to help me learn about you:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Heart, text: "Share a memory", color: "text-red-500" },
                {
                  icon: Lightbulb,
                  text: "Describe a goal",
                  color: "text-yellow-500",
                },
                {
                  icon: FileText,
                  text: "Tell a story",
                  color: "text-blue-500",
                },
                {
                  icon: Sparkles,
                  text: "Express creativity",
                  color: "text-purple-500",
                },
              ].map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto hover:bg-gray-50"
                    onClick={() =>
                      setMessage(`Help me ${action.text.toLowerCase()}`)
                    }
                  >
                    <Icon className={`h-5 w-5 ${action.color} mb-2`} />
                    <span className="text-xs">{action.text}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTwin;
