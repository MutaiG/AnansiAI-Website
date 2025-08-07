import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  showBackButton?: boolean;
  backPath?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  showBackButton = true, 
  backPath,
  className = "" 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={`w-full flex justify-between items-center p-4 bg-background/80 backdrop-blur-sm border-b border-border/50 ${className}`}>
      {/* Back Button */}
      {showBackButton ? (
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      ) : (
        <div /> // Empty div to maintain layout
      )}
      
      {/* Anansi Logo */}
      <div 
        onClick={handleLogoClick}
        className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <Brain className="h-8 w-8 text-logo-teal" />
        <span className="text-xl font-bold bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent">
          Anansi AI
        </span>
      </div>

      {/* Empty space for balance */}
      <div className="w-[80px]" /> {/* Approximately same width as back button */}
    </div>
  );
};

export default PageHeader;
