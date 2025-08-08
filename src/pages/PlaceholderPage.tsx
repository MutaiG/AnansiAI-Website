import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Construction, ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-blue/40 mb-8">
              <Construction className="h-10 w-10 text-logo-teal" />
            </div>

            <h1 className="text-lg font-bold mb-4">{title}</h1>
            <p className="text-sm text-muted-foreground mb-8">{description}</p>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                This page is coming soon. We're working hard to bring you the
                complete AnansiAI experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Homepage
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:scale-105 transition-all duration-300"
                >
                  <Link to="/train-your-twin">Train Your Twin</Link>
                </Button>
              </div>
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

export default PlaceholderPage;
