import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles, Bell, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ComingSoonDialogProps {
  children: React.ReactNode;
  feature: string;
}

const ComingSoonDialog = ({ children, feature }: ComingSoonDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-logo-teal" />
            <span>Coming Soon</span>
          </DialogTitle>
          <DialogDescription>
            {feature} is currently under development
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <Card className="bg-gradient-to-br from-logo-teal/5 to-logo-blue/5 border-logo-teal/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-logo-teal/20 to-logo-blue/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-logo-teal" />
              </div>

              <h3 className="text-base font-bold mb-3">
                {feature} is Coming Soon!
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature === "Twin Workbench" ? (
                  "This is coming soon after you train your twin. Your workbench will be available once your AI Twin reaches sufficient maturity through our training programs."
                ) : (
                  <>
                    We're working hard to bring you the most advanced{" "}
                    {feature.toLowerCase()} experience. This feature will be
                    available once your AI Twin reaches sufficient maturity
                    through our training programs.
                  </>
                )}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Bell className="h-4 w-4" />
                  <span>You'll be notified when it's ready</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h4 className="font-semibold text-center">In the meantime...</h4>

            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="justify-start h-auto p-4 border-logo-teal/20 hover:border-logo-teal/50"
                onClick={() => {
                  setIsOpen(false);
                  // Navigate to training page
                  window.location.href = "/train-your-twin";
                }}
              >
                <div className="text-left">
                  <div className="font-medium">Start Training Your Twin</div>
                  <div className="text-sm text-muted-foreground">
                    Begin the journey to unlock all features
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>

              <Button
                variant="outline"
                className="justify-start h-auto p-4 border-logo-blue/20 hover:border-logo-blue/50"
                onClick={() => {
                  setIsOpen(false);
                  // Navigate to products page
                  window.location.href = "/#products";
                }}
              >
                <div className="text-left">
                  <div className="font-medium">Explore Our Products</div>
                  <div className="text-sm text-muted-foreground">
                    Learn about Student, Adult, and Enterprise Twins
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
