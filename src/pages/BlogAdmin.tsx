import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Upload,
  Save,
  Eye,
  Calendar,
  ArrowLeft,
  PenTool,
  FileText,
} from "lucide-react";

const BlogAdmin = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
    tags: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveDraft = () => {
    // Save to localStorage as draft
    const drafts = JSON.parse(localStorage.getItem("blogDrafts") || "[]");
    const draftId = Date.now();
    const newDraft = { ...blogData, id: draftId, isDraft: true };
    drafts.push(newDraft);
    localStorage.setItem("blogDrafts", JSON.stringify(drafts));

    toast({
      title: "Draft saved!",
      description: "Your blog post has been saved as a draft.",
    });
  };

  const handlePublish = () => {
    if (!blogData.title || !blogData.content) {
      toast({
        title: "Missing information",
        description: "Please add a title and content before publishing.",
      });
      return;
    }

    // Save to localStorage as published
    const blogs = JSON.parse(localStorage.getItem("publishedBlogs") || "[]");
    const blogId = Date.now();
    const newBlog = {
      ...blogData,
      id: blogId,
      isDraft: false,
      publishedAt: new Date().toISOString(),
    };
    blogs.push(newBlog);
    localStorage.setItem("publishedBlogs", JSON.stringify(blogs));

    toast({
      title: "Blog published!",
      description: "Your blog post is now live and visible on the website.",
    });

    // Clear form
    setBlogData({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      category: "",
      tags: "",
    });
  };

  const handlePreview = () => {
    toast({
      title: "Preview Mode",
      description:
        "Blog preview feature coming soon! You can see how your blog will look before publishing.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">Blog Admin</h1>
                <Button asChild variant="outline">
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground">
                Create and publish blog posts for the Insights & Updates
                section.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Editor */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PenTool className="mr-2 h-5 w-5" />
                      Write New Blog Post
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter blog post title"
                        value={blogData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        name="excerpt"
                        placeholder="Brief description of the blog post"
                        value={blogData.excerpt}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        name="content"
                        placeholder="Write your blog post content here..."
                        value={blogData.content}
                        onChange={handleInputChange}
                        rows={12}
                        required
                      />
                    </div>

                    {/* Author and Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          name="author"
                          placeholder="Author name"
                          value={blogData.author}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={blogData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Category and Tags */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          name="category"
                          placeholder="AI Development, Education, etc."
                          value={blogData.category}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags</Label>
                        <Input
                          id="tags"
                          name="tags"
                          placeholder="ai, education, technology (comma separated)"
                          value={blogData.tags}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleSaveDraft}
                        variant="outline"
                        className="flex-1"
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Draft
                      </Button>
                      <Button
                        onClick={handlePreview}
                        variant="outline"
                        className="flex-1"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button
                        onClick={handlePublish}
                        className="flex-1 bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Publish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Writing Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <FileText className="h-4 w-4 mt-0.5 text-logo-teal" />
                      <div>
                        <p className="font-medium">Keep it engaging</p>
                        <p className="text-muted-foreground">
                          Write in a conversational, human tone
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-logo-blue" />
                      <div>
                        <p className="font-medium">Use keywords</p>
                        <p className="text-muted-foreground">
                          Include skill printing, skill casting, AI twins
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <PenTool className="h-4 w-4 mt-0.5 text-cyber-blue" />
                      <div>
                        <p className="font-medium">Add value</p>
                        <p className="text-muted-foreground">
                          Share insights about AI development and education
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Note */}
                <Card className="border-logo-teal/20 bg-logo-teal/5">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-logo-teal mb-2">
                      Admin Access
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      This admin interface is for authorized users only. Blog
                      posts are stored locally and will be integrated with the
                      live site.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogAdmin;
