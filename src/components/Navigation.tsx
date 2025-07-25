import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
              alt="AnansiAI"
              className="h-16 w-16 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg border-2 border-logo-teal/30 hover:border-logo-teal/70 hover:bg-logo-teal/5">
                <span>Products</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    to="/products/student-twin"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">Student Twin</div>
                    <div className="text-sm text-muted-foreground">
                      For learners of all ages
                    </div>
                  </Link>
                  <Link
                    to="/products/adult-twin"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">Adult Twin</div>
                    <div className="text-sm text-muted-foreground">
                      Fast-track for professionals
                    </div>
                  </Link>
                  <Link
                    to="/products/enterprise-twin"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">Enterprise Twin</div>
                    <div className="text-sm text-muted-foreground">
                      Scalable AI for teams
                    </div>
                  </Link>
                  <Link
                    to="/products/twin-workbench"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">Twin Workbench</div>
                    <div className="text-sm text-muted-foreground">
                      Your AI's workspace
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Education Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg border-2 border-logo-blue/30 hover:border-logo-blue/70 hover:bg-logo-blue/5">
                <span>Education</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    to="/education"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/education/student-program"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    Student Program
                  </Link>
                  <Link
                    to="/education/adult-program"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    Adult Fast-Track Program
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg border-2 border-cyber-blue/30 hover:border-cyber-blue/70 hover:bg-cyber-blue/5">
                <span>Company</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    to="/company/about"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/company/vision"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Empty div for right side balance */}
          <div className="hidden md:block"></div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Products
                </div>
                <Link
                  to="/products/student-twin"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Student Twin
                </Link>
                <Link
                  to="/products/adult-twin"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Adult Twin
                </Link>
                <Link
                  to="/products/enterprise-twin"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Enterprise Twin
                </Link>
                <Link
                  to="/products/twin-workbench"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Twin Workbench
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Education
                </div>
                <Link
                  to="/education"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Overview
                </Link>
                <Link
                  to="/education/student-program"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Student Program
                </Link>
                <Link
                  to="/education/adult-program"
                  className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Adult Program
                </Link>
              </div>

              <Link
                to="/company/about"
                className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>

              {/* Train Twin demo moved to center of page */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
