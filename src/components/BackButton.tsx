import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackPath?: string;
  className?: string;
  label?: string;
}

const BackButton = ({
  fallbackPath = "/",
  className = "",
  label = "Back",
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if there's browser history to go back to
    if (window.history.length > 1) {
      // Check if the previous page was within our app
      try {
        window.history.back();
      } catch (error) {
        // Fallback to specified path if history navigation fails
        navigate(fallbackPath);
      }
    } else {
      // No history available, use fallback path
      navigate(fallbackPath);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 ${className}`}
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};

export default BackButton;
