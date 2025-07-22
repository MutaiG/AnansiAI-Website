import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ArrowRight } from "lucide-react";

interface PageNavigationProps {
  fallbackPath?: string;
  className?: string;
  nextPath?: string;
  nextLabel?: string;
  showHome?: boolean;
  showNext?: boolean;
}

const PageNavigation = ({
  fallbackPath = "/",
  className = "",
  nextPath,
  nextLabel = "Next",
  showHome = true,
  showNext = false,
}: PageNavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      try {
        window.history.back();
      } catch (error) {
        navigate(fallbackPath);
      }
    } else {
      navigate(fallbackPath);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (nextPath) {
      navigate(nextPath);
    }
  };

  // Don't show on homepage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="text-sm font-medium">Back</span>
        </Button>

        {showHome && (
          <Button
            variant="ghost"
            onClick={handleHome}
            className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="text-sm font-medium">Home</span>
          </Button>
        )}
      </div>

      {showNext && nextPath && (
        <Button
          variant="ghost"
          onClick={handleNext}
          className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">{nextLabel}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      )}
    </div>
  );
};

export default PageNavigation;
