import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Shield, Award, AlertTriangle } from "lucide-react";

interface VerificationBadgeProps {
  status: "verified" | "pending" | "unverified";
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

const VerificationBadge = ({
  status,
  size = "md",
  showTooltip = true,
}: VerificationBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "verified":
        return {
          icon: Shield,
          text: "Verified",
          className: "bg-green-100 text-green-700 border-green-200",
          tooltip:
            "This Twin has been verified through our comprehensive authentication process including document verification, professional validation, and continuous monitoring.",
        };
      case "pending":
        return {
          icon: AlertTriangle,
          text: "Pending",
          className: "bg-yellow-100 text-yellow-700 border-yellow-200",
          tooltip:
            "Verification is in progress. This usually takes 2-3 business days to complete.",
        };
      case "unverified":
        return {
          icon: Award,
          text: "Get Verified",
          className: "bg-gray-100 text-gray-700 border-gray-200",
          tooltip:
            "This Twin is not yet verified. Click to start the verification process.",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const badge = (
    <Badge
      variant="outline"
      className={`${config.className} ${sizeClasses[size]} cursor-help`}
    >
      <Icon className={`${iconSizes[size]} mr-1`} />
      {config.text}
    </Badge>
  );

  if (showTooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{config.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return badge;
};

export default VerificationBadge;
