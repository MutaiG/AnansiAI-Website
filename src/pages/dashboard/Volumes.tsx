import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Image,
  Mic,
  Video,
  Calendar,
  Search,
  Filter,
  Edit,
  Trash2,
  Heart,
  Lightbulb,
  Brain,
  Clock,
} from "lucide-react";

const Volumes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for user's content
  const entries = [
    {
      id: 1,
      title: "My childhood memories",
      type: "text",
      category: "reflection",
      content: "I remember playing in the garden with my siblings...",
      date: new Date("2024-01-20"),
      tags: ["childhood", "family"],
      wordCount: 245,
    },
    {
      id: 2,
      title: "Voice note about career goals",
      type: "audio",
      category: "planning",
      content: "Audio recording - 2m 34s",
      date: new Date("2024-01-19"),
      tags: ["career", "goals"],
      duration: "2:34",
    },
    {
      id: 3,
      title: "Creative writing exercise",
      type: "text",
      category: "creativity",
      content: "The old lighthouse stood tall against the stormy sky...",
      date: new Date("2024-01-18"),
      tags: ["writing", "creative"],
      wordCount: 189,
    },
    {
      id: 4,
      title: "Family photo description",
      type: "image",
      category: "memory",
      content: "Photo with description - Family vacation 2023",
      date: new Date("2024-01-17"),
      tags: ["family", "vacation"],
    },
    {
      id: 5,
      title: "Learning reflection",
      type: "text",
      category: "education",
      content: "Today I learned about machine learning algorithms...",
      date: new Date("2024-01-16"),
      tags: ["learning", "technology"],
      wordCount: 156,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return FileText;
      case "audio":
        return Mic;
      case "image":
        return Image;
      case "video":
        return Video;
      default:
        return FileText;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "reflection":
        return Heart;
      case "creativity":
        return Lightbulb;
      case "planning":
        return Brain;
      case "memory":
        return Clock;
      default:
        return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "reflection":
        return "text-red-600 bg-red-50";
      case "creativity":
        return "text-yellow-600 bg-yellow-50";
      case "planning":
        return "text-blue-600 bg-blue-50";
      case "memory":
        return "text-purple-600 bg-purple-50";
      case "education":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const filteredEntries = entries.filter((entry) => {
    const matchesSearch = entry.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || entry.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: entries.length,
    text: entries.filter((e) => e.type === "text").length,
    audio: entries.filter((e) => e.type === "audio").length,
    image: entries.filter((e) => e.type === "image").length,
    video: entries.filter((e) => e.type === "video").length,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">My Volumes</h1>
          <p className="text-muted-foreground">
            Your personal library of shared memories and thoughts
          </p>
        </div>
        <Button className="bg-gradient-to-r from-logo-teal to-logo-blue text-white">
          Add New Entry
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-logo-teal">
              {stats.total}
            </div>
            <div className="text-sm text-muted-foreground">Total Entries</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-6 w-6 mx-auto mb-1 text-blue-600" />
            <div className="text-lg font-semibold">{stats.text}</div>
            <div className="text-xs text-muted-foreground">Text</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Mic className="h-6 w-6 mx-auto mb-1 text-green-600" />
            <div className="text-lg font-semibold">{stats.audio}</div>
            <div className="text-xs text-muted-foreground">Audio</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Image className="h-6 w-6 mx-auto mb-1 text-purple-600" />
            <div className="text-lg font-semibold">{stats.image}</div>
            <div className="text-xs text-muted-foreground">Images</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Video className="h-6 w-6 mx-auto mb-1 text-red-600" />
            <div className="text-lg font-semibold">{stats.video}</div>
            <div className="text-xs text-muted-foreground">Videos</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your volumes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs
              value={selectedFilter}
              onValueChange={setSelectedFilter}
              className="w-full sm:w-auto"
            >
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
                <TabsTrigger value="image">Images</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Entries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEntries.map((entry) => {
          const TypeIcon = getTypeIcon(entry.type);
          const CategoryIcon = getCategoryIcon(entry.category);
          const categoryColor = getCategoryColor(entry.category);

          return (
            <Card
              key={entry.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <TypeIcon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-semibold text-sm truncate">
                      {entry.title}
                    </h3>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {entry.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${categoryColor}`}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {entry.category}
                    </div>
                    {entry.wordCount && (
                      <span className="text-xs text-muted-foreground">
                        {entry.wordCount} words
                      </span>
                    )}
                    {entry.duration && (
                      <span className="text-xs text-muted-foreground">
                        {entry.duration}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {entry.date.toLocaleDateString()}
                    </div>
                    <div className="flex space-x-1">
                      {entry.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-muted text-xs px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEntries.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No entries found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm
                ? "Try adjusting your search terms"
                : "Start by sharing your first memory or thought with your Twin"}
            </p>
            <Button className="bg-gradient-to-r from-logo-teal to-logo-blue text-white">
              Create First Entry
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Volumes;
