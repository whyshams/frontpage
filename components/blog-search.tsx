"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  Copy,
  Image,
  BarChart2,
  Eye,
  Menu,
  MessageSquare,
  User,
  ArrowLeft,
  Search,
} from "lucide-react";

export function BlogSearch() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{ title: string; content: string; category: string }>
  >([]);

  const blogPosts = {
    latest: [
      {
        title: "AI Image Generation Basics",
        content:
          "AI image generation uses machine learning models to create images from text descriptions. Popular models include DALL-E, Midjourney, and Stable Diffusion.",
      },
      {
        title: "Prompt Engineering for Image Generation",
        content:
          "Crafting effective prompts is key to getting the desired results. Be specific, use descriptive language, and experiment with different styles and attributes.",
      },
    ],
    bangla: [
      {
        title: "Text Summarization Techniques",
        content:
          "There are two main approaches to text summarization: extractive (selecting key sentences) and abstractive (generating new sentences). Each has its own strengths and use cases.",
      },
      {
        title: "Applications of Text Summarization",
        content:
          "Text summarization is useful in various fields, including news aggregation, academic research, and content curation. It helps in quickly grasping the main points of large documents.",
      },
    ],
    "about-us": [
      {
        title: "Data Analysis Fundamentals",
        content:
          "Data analysis involves collecting, cleaning, and interpreting data to derive insights. Key steps include data collection, preprocessing, exploratory analysis, and visualization.",
      },
      {
        title: "Machine Learning in Data Analysis",
        content:
          "Machine learning algorithms can be used to identify patterns, make predictions, and automate decision-making processes based on large datasets.",
      },
    ],
    "analyze-images": [
      {
        title: "Computer Vision Basics",
        content:
          "Computer vision enables machines to interpret and understand visual information from the world. It involves tasks like image classification, object detection, and segmentation.",
      },
      {
        title: "Applications of Image Analysis",
        content:
          "Image analysis is used in various fields, including medical diagnostics, autonomous vehicles, facial recognition systems, and quality control in manufacturing.",
      },
    ],
  };

  const navigateTo = (route: string) => {
    setActiveRoute(route);
    setSearchQuery("");
    setSearchResults([]);
  };

  const goBack = () => {
    navigateTo("home");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = Object.entries(blogPosts).flatMap(([category, posts]) =>
      posts
        .filter(
          (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.content.toLowerCase().includes(query.toLowerCase())
        )
        .map((post) => ({ ...post, category }))
    );
    setSearchResults(results);
  };

  useEffect(() => {
    if (searchResults.length > 0 && activeRoute === "home") {
      setActiveRoute("search");
    } else if (searchResults.length === 0 && activeRoute === "search") {
      setActiveRoute("home");
    }
  }, [searchResults]);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main
        className="flex-grow flex flex-col items-center justify-between p-6 overflow-hidden"
        style={{ backgroundColor: "#480608" }}
      >
        <div className="w-full max-w-2xl space-y-4 flex flex-col h-full">
          {activeRoute === "home" ? (
            <>
              <h1 className="text-4xl font-semibold text-center text-white">
                Wellcome To The Front Page
              </h1>

              {/* Navigation */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-[#5a0a0d]"
                  onClick={() => navigateTo("latest")}
                >
                  <Image className="w-4 h-4 mr-2" />
                  Latest Article
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-[#5a0a0d]"
                  onClick={() => navigateTo("bangla")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Bangla Article
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-[#5a0a0d]"
                  onClick={() => navigateTo("about-us")}
                >
                  <BarChart2 className="w-4 h-4 mr-2" />
                  About Us
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-[#5a0a0d]"
                  onClick={() => navigateTo("analyze-images")}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Analyze images
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-[#5a0a0d]"
                  onClick={() => navigateTo("more")}
                >
                  More
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center mb-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-[#5a0a0d] mr-4"
                onClick={goBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h2 className="text-2xl font-semibold text-white">
                {activeRoute === "search"
                  ? "Search Results"
                  : activeRoute
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
              </h2>
            </div>
          )}

          {/* Route Content */}
          <ScrollArea className="flex-grow w-full">
            <div className="space-y-4">
              {activeRoute !== "home" &&
                activeRoute !== "more" &&
                activeRoute !== "search" &&
                blogPosts[activeRoute as keyof typeof blogPosts].map(
                  (post, index) => (
                    <Card
                      key={index}
                      className="p-4 bg-black border-[#480608] text-white"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-[#480608] rounded-full flex items-center justify-center">
                            {index % 2 === 0 ? (
                              <MessageSquare className="w-5 h-5 text-white" />
                            ) : (
                              <User className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-300">{post.content}</p>
                        </div>
                      </div>
                    </Card>
                  )
                )}
              {activeRoute === "search" &&
                searchResults.map((post, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-black border-[#480608] text-white"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#480608] rounded-full flex items-center justify-center">
                          {index % 2 === 0 ? (
                            <MessageSquare className="w-5 h-5 text-white" />
                          ) : (
                            <User className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-300">{post.content}</p>
                        <p className="text-sm text-gray-400 mt-2">
                          Category:{" "}
                          {post.category
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              {activeRoute === "more" && (
                <Card className="p-4 bg-black border-[#480608] text-white">
                  <h2 className="text-xl mb-4">More Options</h2>
                  <p>
                    Explore additional features and capabilities of ChatGPT.
                  </p>
                </Card>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Footer Input */}
        <div className="w-full max-w-2xl mt-4 mb-4">
          <div className="relative">
            <Input
              className="w-full bg-black border-[#480608] rounded-lg pl-4 pr-20 py-6 text-white"
              placeholder="Search The Front Page"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button size="icon" variant="ghost" className="text-white">
                <Search className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-white text-center mt-4">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </main>
    </div>
  );
}
