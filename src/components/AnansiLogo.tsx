import React from "react";
import { useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";

interface AnansiLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AnansiLogo: React.FC<AnansiLogoProps> = ({ 
  className = "",
  size = "md" 
}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-10 w-10"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div 
      onClick={handleLogoClick}
      className={`cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
    >
      <Brain className={`${sizeClasses[size]} text-logo-teal`} />
      <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent`}>
        Anansi AI
      </span>
    </div>
  );
};

export default AnansiLogo;
