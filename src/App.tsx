import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "@/components/DashboardLayout";
import MyTwin from "./pages/dashboard/MyTwin";
import Volumes from "./pages/dashboard/Volumes";
import TwinCourses from "./pages/dashboard/TwinCourses";
import DailyTasks from "./pages/dashboard/DailyTasks";
import Milestones from "./pages/dashboard/Milestones";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";

// Import all original marketing pages
import Index from "./pages/Index";
import StudentTwin from "./pages/StudentTwin";
import AboutUs from "./pages/AboutUs";
import TrainYourTwin from "./pages/TrainYourTwin";
import VisionMission from "./pages/VisionMission";
import AdultTwin from "./pages/AdultTwin";
import EnterpriseTwin from "./pages/EnterpriseTwin";
import TwinWorkbench from "./pages/TwinWorkbench";
import EducationSystem from "./pages/EducationSystem";
import StudentProgram from "./pages/StudentProgram";
import AdultFastTrack from "./pages/AdultFastTrack";
import ContactUs from "./pages/ContactUs";
import BlogAdmin from "./pages/BlogAdmin";
import TwinShowcase from "./pages/TwinShowcase";
import Verification from "./pages/Verification";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-logo-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Consolidated routes for both authenticated and non-authenticated users
  return (
    <Routes>
      {/* Marketing homepage at root */}
      <Route path="/" element={<Index />} />

      {/* Login/signup page */}
      <Route path="/login" element={<LandingPage />} />

      {/* Dashboard redirect for compatibility */}
      <Route path="/dashboard" element={<Navigate to="/train-your-twin-app" replace />} />

      {/* Train Your Twin app - conditional access based on authentication */}
      {user ? (
        <Route
          path="/train-your-twin-app/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<MyTwin />} />
                <Route path="/volumes" element={<Volumes />} />
                <Route path="/courses" element={<TwinCourses />} />
                <Route path="/tasks" element={<DailyTasks />} />
                <Route path="/milestones" element={<Milestones />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </DashboardLayout>
          }
        />
      ) : (
        <Route path="/train-your-twin-app" element={<LandingPage />} />
      )}

      {/* Marketing routes - accessible to all users */}
      <Route path="/marketing" element={<Index />} />
      <Route path="/products/student-twin" element={<StudentTwin />} />
      <Route path="/products/adult-twin" element={<AdultTwin />} />
      <Route path="/products/enterprise-twin" element={<EnterpriseTwin />} />
      <Route path="/products/twin-workbench" element={<TwinWorkbench />} />
      <Route path="/education" element={<EducationSystem />} />
      <Route path="/education/student-program" element={<StudentProgram />} />
      <Route path="/education/adult-program" element={<AdultFastTrack />} />
      <Route path="/company/about" element={<AboutUs />} />
      <Route path="/company/vision" element={<VisionMission />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/train-your-twin" element={<TrainYourTwin />} />
      <Route path="/twin-showcase" element={<TwinShowcase />} />
      <Route path="/verification" element={<Verification />} />

      {/* Blog Pages */}
      <Route
        path="/blog/future-of-personal-ai"
        element={
          <PlaceholderPage
            title="The Future of Personal AI"
            description="Why owning your AI Twin matters more than renting AI tools from big tech companies."
          />
        }
      />
      <Route
        path="/blog/education-revolution"
        element={
          <PlaceholderPage
            title="Education Revolution"
            description="How AI Twins are transforming classrooms and making learning truly personalized."
          />
        }
      />
      <Route
        path="/blog/enterprise-intelligence"
        element={
          <PlaceholderPage
            title="Enterprise Intelligence"
            description="How organizations can embody their vision and culture through AI Twins."
          />
        }
      />

      {/* Legal Pages */}
      <Route
        path="/terms"
        element={
          <PlaceholderPage
            title="Terms of Service"
            description="Legal terms for using AnansiAI Twin training services."
          />
        }
      />
      <Route
        path="/privacy"
        element={
          <PlaceholderPage
            title="Privacy Policy"
            description="How we protect and handle your personal and Twin training data."
          />
        }
      />

      {/* Admin Pages */}
      <Route path="/admin/blog" element={<BlogAdmin />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
