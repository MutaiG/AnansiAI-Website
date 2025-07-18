import { Routes, Route } from "react-router-dom";
import Index from "./Index";
import StudentTwin from "./StudentTwin";
import AdultTwin from "./AdultTwin";
import EnterpriseTwin from "./EnterpriseTwin";
import TwinWorkbench from "./TwinWorkbench";
import EducationSystem from "./EducationSystem";
import StudentProgram from "./StudentProgram";
import AdultFastTrack from "./AdultFastTrack";
import AboutUs from "./AboutUs";
import VisionMission from "./VisionMission";
import ContactUs from "./ContactUs";
import TrainYourTwin from "./TrainYourTwin";
import NotFound from "./NotFound";
import PlaceholderPage from "./PlaceholderPage";

const MarketingContent = () => {
  return (
    <Routes>
      {/* Main marketing pages */}
      <Route path="/" element={<Index />} />
      <Route path="/train-your-twin" element={<TrainYourTwin />} />

      {/* Product Pages */}
      <Route path="/products/student-twin" element={<StudentTwin />} />
      <Route path="/products/adult-twin" element={<AdultTwin />} />
      <Route path="/products/enterprise-twin" element={<EnterpriseTwin />} />
      <Route path="/products/twin-workbench" element={<TwinWorkbench />} />

      {/* Education System Pages */}
      <Route path="/education" element={<EducationSystem />} />
      <Route path="/education/student-program" element={<StudentProgram />} />
      <Route path="/education/adult-program" element={<AdultFastTrack />} />

      {/* Company Pages */}
      <Route path="/company/about" element={<AboutUs />} />
      <Route path="/company/vision" element={<VisionMission />} />

      {/* Contact Page */}
      <Route path="/contact" element={<ContactUs />} />

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

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MarketingContent;
