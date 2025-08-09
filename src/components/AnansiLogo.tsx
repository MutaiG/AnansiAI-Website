import React from "react";
import { useNavigate } from "react-router-dom";

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
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16",
    lg: "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
  };

  const textSizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl lg:text-3xl",
    lg: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
  };

  return (
    <div 
      onClick={handleLogoClick}
      className={`cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F4a7a6514fd9745e39ed72bb4e2406e93%2Fa8153a8a168448789baa0c2bfbb61625?format=webp&width=800"
        alt="Anansi AI Twin Process"
        className={`${sizeClasses[size]} object-contain`}
      />
      <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent whitespace-nowrap`}>
        Anansi AI
      </span>
    </div>
  );
};

export default AnansiLogo;
