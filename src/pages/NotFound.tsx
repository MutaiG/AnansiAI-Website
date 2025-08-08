import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-blue/40 mb-8">
              <Brain className="h-12 w-12 text-logo-teal" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                404
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Page Not Found
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              This page doesn't exist yet, but your AI Twin could help you find
              what you're looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Homepage
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:scale-105 transition-all duration-300"
              >
                <Link to="/train-your-twin">Train Your Twin</Link>
              </Button>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-muted/50 border">
              <p className="text-sm text-muted-foreground">
                Lost? Try exploring our{" "}
                <Link
                  to="/products/student-twin"
                  className="text-logo-teal hover:underline font-medium"
                >
                  Student Twin
                </Link>{" "}
                or{" "}
                <Link
                  to="/education"
                  className="text-logo-blue hover:underline font-medium"
                >
                  Education System
                </Link>{" "}
                to learn more about personal AI training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
