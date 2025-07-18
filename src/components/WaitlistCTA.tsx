import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

interface WaitlistCTAProps {
  children: React.ReactNode;
  productType: "adult" | "enterprise";
}

const WaitlistCTA = ({ children, productType }: WaitlistCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "contact@anansiai.com";
  const subject =
    productType === "adult"
      ? "Join Adult Twin Waitlist"
      : "Join Enterprise Twin Waitlist";

  const message =
    productType === "adult"
      ? `Hi,\n\nI'm interested in joining the waitlist for the Adult Twin program. Please let me know when it becomes available.\n\nThanks!`
      : `Hi,\n\nI'm interested in joining the waitlist for the Enterprise Twin solution. Please provide more information about availability and pricing for our organization.\n\nThanks!`;

  const handleEmailClick = () => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailto);
  };

  const handleCopyEmail = async () => {
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback to older method
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (fallbackError) {
        console.error("Failed to copy email with fallback:", fallbackError);
        // Just show a message that copy failed
        alert(`Please copy this email manually: ${email}`);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Mail className="h-6 w-6 text-logo-teal" />
            <span>Join Our Waitlist</span>
          </DialogTitle>
          <DialogDescription>
            {productType === "adult"
              ? "Be the first to know when Adult Twin becomes available"
              : "Get early access to Enterprise Twin solutions"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <Card className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 border-logo-teal/20">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-logo-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ready to Join?</h3>
              <p className="text-muted-foreground mb-6">
                Send us an email to secure your spot on the waitlist
              </p>

              <div className="space-y-4">
                <div className="p-3 bg-background rounded-lg border">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">{email}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="h-8 w-8 p-0"
                    >
                      {copied ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleEmailClick}
                  className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h4 className="font-semibold mb-2">What happens next?</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• We'll add you to our priority waitlist</p>
              <p>• You'll receive updates on development progress</p>
              <p>• Get early access when we launch</p>
              {productType === "enterprise" && (
                <p>• Schedule a personalized demo</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistCTA;
