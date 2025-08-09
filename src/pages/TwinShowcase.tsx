import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Search,
  Star,
  Eye,
  MessageSquare,
  Award,
  Calendar,
  User,
  ExternalLink,
  Filter,
  TrendingUp,
  Heart,
  Share2,
} from "lucide-react";

// Mock data for public Twin profiles
const publicTwins = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    description:
      "Specialized in machine learning and neural networks with 10+ years of research experience.",
    avatar: "👩‍🔬",
    verified: true,
    capabilities: [
      "Research Analysis",
      "Technical Writing",
      "Data Science",
      "Academic Papers",
    ],
    rating: 4.9,
    interactions: 1247,
    lastActive: "2 hours ago",
    specialties: ["Machine Learning", "Neural Networks", "AI Ethics"],
    joinDate: "January 2024",
    profileUrl: "/twin/sarah-chen",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Creative Director",
    description:
      "Brand strategist and creative professional with expertise in marketing and design thinking.",
    avatar: "🎨",
    verified: true,
    capabilities: [
      "Brand Strategy",
      "Creative Direction",
      "Marketing",
      "Design Thinking",
    ],
    rating: 4.8,
    interactions: 892,
    lastActive: "1 day ago",
    specialties: ["Branding", "Creative Strategy", "Digital Marketing"],
    joinDate: "February 2024",
    profileUrl: "/twin/marcus-rodriguez",
  },
  {
    id: 3,
    name: "Prof. James Thompson",
    title: "History Professor",
    description:
      "Expert in European history and historical analysis with 20+ years of teaching experience.",
    avatar: "📚",
    verified: true,
    capabilities: [
      "Historical Analysis",
      "Academic Writing",
      "Research",
      "Teaching",
    ],
    rating: 4.7,
    interactions: 564,
    lastActive: "3 hours ago",
    specialties: [
      "European History",
      "Historical Research",
      "Academic Writing",
    ],
    joinDate: "March 2024",
    profileUrl: "/twin/james-thompson",
  },
];

const TwinShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Research",
    "Creative",
    "Academic",
    "Business",
    "Technical",
  ];

  const filteredTwins = publicTwins.filter((twin) => {
    const matchesSearch =
      twin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      twin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      twin.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" ||
      twin.specialties.some((specialty) =>
        specialty.toLowerCase().includes(selectedCategory.toLowerCase()),
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-logo-teal/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-logo-teal to-logo-blue bg-clip-text text-transparent">
                Twin Showcase
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover verified AI Twins from professionals across different
              fields. Interact with their capabilities and see how AI Twins can
              enhance expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                <Link to="/train-your-twin">Create Your Twin</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products/twin-workbench">Learn About Twins</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name, profession, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twin Profiles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTwins.map((twin) => (
                <Card
                  key={twin.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-logo-teal/20 to-logo-blue/20 rounded-full flex items-center justify-center text-lg">
                          {twin.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold">{twin.name}</h3>
                            {twin.verified && (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-700"
                              >
                                <Award className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {twin.title}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {twin.description}
                    </p>

                    {/* Capabilities */}
                    <div className="flex flex-wrap gap-1">
                      {twin.capabilities
                        .slice(0, 3)
                        .map((capability, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {capability}
                          </Badge>
                        ))}
                      {twin.capabilities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{twin.capabilities.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{twin.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{twin.interactions}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{twin.lastActive}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                      >
                        <Link to={twin.profileUrl}>
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Interact
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTwins.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-semibold mb-2">No Twins Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg font-bold mb-4">
              Ready to Showcase Your Expertise?
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Join our community of verified professionals and share your AI
              Twin's capabilities with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                <Link to="/train-your-twin">Create Your Twin</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/verification">Get Verified</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TwinShowcase;
