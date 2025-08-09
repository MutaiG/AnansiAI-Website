import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Image,
  Mic,
  Calendar,
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";

const Volumes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const entries = [
    {
      id: 1,
      title: "Childhood Memory",
      type: "text",
      content: "Today I shared my happiest childhood memory about...",
      date: "2024-01-15",
      points: 50,
    },
    {
      id: 2,
      title: "Voice Note",
      type: "audio",
      content: "Recorded thoughts about career goals",
      date: "2024-01-14",
      points: 30,
    },
    {
      id: 3,
      title: "Family Photo",
      type: "image",
      content: "Shared a photo from last summer vacation",
      date: "2024-01-13",
      points: 25,
    },
    {
      id: 4,
      title: "Personal Reflection",
      type: "text",
      content: "Reflected on my values and what matters most...",
      date: "2024-01-12",
      points: 75,
    },
    {
      id: 5,
      title: "Dream Journal",
      type: "text",
      content: "Wrote about my aspirations for the future...",
      date: "2024-01-11",
      points: 60,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-4 w-4" />;
      case "image":
        return <Image className="h-4 w-4" />;
      case "audio":
        return <Mic className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "text":
        return "text-blue-600";
      case "image":
        return "text-green-600";
      case "audio":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredEntries = entries.filter((entry) => {
    const matchesSearch = entry.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || entry.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-lg font-bold mb-2">Your Volumes</h1>
        <p className="text-muted-foreground">
          Your personal library of shared memories and experiences
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filterType === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType("all")}
          >
            All
          </Button>
          <Button
            variant={filterType === "text" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType("text")}
          >
            Text
          </Button>
          <Button
            variant={filterType === "image" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType("image")}
          >
            Images
          </Button>
          <Button
            variant={filterType === "audio" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType("audio")}
          >
            Audio
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-logo-teal">
              {entries.length}
            </div>
            <div className="text-xs text-muted-foreground">Total Entries</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-logo-blue">
              {entries.filter((e) => e.type === "text").length}
            </div>
            <div className="text-xs text-muted-foreground">Text</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-green-600">
              {entries.filter((e) => e.type === "image").length}
            </div>
            <div className="text-xs text-muted-foreground">Images</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-base font-bold text-purple-600">
              {entries.filter((e) => e.type === "audio").length}
            </div>
            <div className="text-xs text-muted-foreground">Audio</div>
          </CardContent>
        </Card>
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`${getTypeColor(entry.type)} mt-1`}>
                    {getTypeIcon(entry.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{entry.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {entry.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {entry.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                      <span className="text-logo-teal">
                        +{entry.points} pts
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No entries found</p>
        </div>
      )}
    </div>
  );
};

export default Volumes;
