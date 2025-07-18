import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/student-twin"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/adult-twin"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adult Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/enterprise-twin"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Enterprise Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/twin-workbench"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twin Workbench
                </Link>
              </li>
            </ul>
          </div>

          {/* Education System */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Education System</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/education"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/education/student-program"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Program
                </Link>
              </li>
              <li>
                <Link
                  to="/education/adult-program"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adult Fast-Track Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/company/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/vision"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Vision and Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Policy</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/legal/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                alt="AnansiAI"
                className="h-7 w-7"
              />
              <span className="text-sm text-muted-foreground">
                © 2025 AnansiAI. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Building human-first AI, one Twin at a time.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
