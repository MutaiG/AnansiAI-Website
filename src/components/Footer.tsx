import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left max-w-4xl mx-auto">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/student-twin"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/adult-twin"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adult Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/enterprise-twin"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Enterprise Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/twin-workbench"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twin Workbench
                </Link>
              </li>
            </ul>
          </div>

          {/* Education System */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Education System</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/education"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/education/student-program"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Program
                </Link>
              </li>
              <li>
                <Link
                  to="/education/adult-program"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adult Fast-Track Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/company/about"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/vision"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Vision and Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal & Policy</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-3 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                alt="AnansiAI"
                className="h-5 w-5"
              />
              <span className="text-xs text-muted-foreground">
                © 2025 AnansiAI. All rights reserved.
              </span>
            </div>
            <div className="text-xs text-muted-foreground text-center md:text-right">
              Building human-first AI, one Twin at a time.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
