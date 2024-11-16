"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ImageIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  reactions?: number;
  time?: string;
}

export function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showStarted, setShowStarted] = useState(true);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Abu Sayed killed during quota protest",
      content:
        "content of Abu Sayed killed during quota protest,content of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protest",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      reactions: 30,
      time: "19:27",
    },
    {
      id: 2,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 3,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 4,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 5,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  function getFirst15Words(str: string) {
    return str.split(" ").slice(0, 15).join(" ");
  }

  const now = new Date();
  const hours = now.getHours(); // Get the current hour (0-23)
  const minutes = now.getMinutes(); // Get the current minute (0-59)
  const seconds = now.getSeconds(); // Get the current second (0-59)

  // Format the time as HH:MM:SS
  const currentTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return (
    <div className=" text-white min-h-screen font-sans">
      <main className=" pt-20 space-y-4 px-3">
        {showStarted ? (
          <div className="grid gap-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-8 mb-12">
              Wellcome to The Front Page
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-12 flex text-black  items-center justify-center gap-2 hover:bg-gray-700/50"
                onClick={() => setShowStarted(false)}
              >
                <ImageIcon className="w-6 h-6" />
                <span>Get Started</span>
              </Button>
              <Button
                variant="outline"
                className="h-12 flex text-black  items-center justify-center gap-2 hover:bg-gray-700/50"
              >
                <ImageIcon className="w-6 h-6" />
                <span>About Us</span>
              </Button>
              <Button
                variant="outline"
                className="h-12 flex text-black  items-center justify-center gap-2 hover:bg-gray-700/50"
              >
                <ImageIcon className="w-6 h-6" />
                <span>Contact Us</span>
              </Button>
            </div>
          </div>
        ) : null}
        {!showStarted && (
          <div>
            {selectedPost ? (
              <SinglePostView post={selectedPost} onClose={closePost} />
            ) : (
              <div className="flex flex-col mb-24">
                <div className="flex justify-end items-end">
                  <div className=" min-w-44">
                    <div className="bg-[#005C4B] p-2 rounded m-2 flex justify-between">
                      <div>Top 5 News</div>

                      <span className="text-[10px] text-[#7eb6ac] whitespace-nowrap pt-3">
                        {currentTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="float-left mb-8 md:mb-22 md:pt-8 pt-8">
                  <div className="">
                    {filteredPosts.map((post) => (
                      <div key={post.id} className="flex">
                        <div
                          className="bg-[#1F2C33] my-4 rounded-lg w-[300px] shadow-xl overflow-hidden cursor-pointer"
                          onClick={() => openPost(post)}
                        >
                          <div className="">
                            <div className="flex justify-center">
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={500}
                                height={500}
                                className="rounded-lg mb-4 h-[300px] w-[300px]"
                              />
                            </div>

                            <div className="flex justify-between items-center p-1">
                              <p className="text-sm text-white">
                                {getFirst15Words(post.content)} (...More)
                              </p>
                            </div>
                            {post.time && (
                              <span className="text-gray-400 float-right p-1">
                                {post.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredPosts.length === 0 && (
                    <p className="text-center text-gray-400">
                      No matching blog posts found.
                    </p>
                  )}
                </div>
                <div className="flex justify-end items-end">
                  <div className=" min-w-44">
                    <div className="bg-[#005C4B] p-2 rounded m-2 flex justify-between">
                      <div>Read More....</div>

                      <span className="text-[10px] text-[#7eb6ac] whitespace-nowrap pt-3">
                        {currentTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-[#343541] border-t border-gray-600/20 p-4">
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          <Input
            type="text"
            placeholder="Message ChatGPT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-[#40414F] border-0 focus-visible:ring-0 text-white placeholder-gray-400"
          />
          <Button variant="ghost" size="icon" className="shrink-0">
            <Search className="w-6 h-6" />
          </Button>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          ChatGPT can make mistakes. Consider checking important info.
        </p>
      </footer>
    </div>
  );
}

function SinglePostView({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mt-10 mb-40">
      <div className="p-4">
        <Button variant="ghost" size="icon" onClick={onClose} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="w-[300px] h-[300px] rounded-lg mb-4"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-lg mb-4">{post.content}</p>
        <div className="flex justify-between items-center">
          {post.reactions && (
            <div className="flex items-center">
              <span className="text-xl mr-2">😂</span>
              <span>{post.reactions} reactions</span>
            </div>
          )}
          {post.time && (
            <span className="text-gray-400">Posted at {post.time}</span>
          )}
        </div>
      </div>
    </div>
  );
}
