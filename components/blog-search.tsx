"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Bell,
  LinkIcon,
  MoreHorizontal,
  Search,
} from "lucide-react";
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Abu Sayed killed during quota protest",
      content: "content of Abu Sayed killed during quota protest",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      reactions: 30,
      time: "19:27",
    },
    {
      id: 2,
      title: "Student of Begum Rokeya University, ",
      content: "Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Student of Begum Rokeya University, ",
      content: "Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="fixed top-0 w-full bg-gray-900">
        <header className=" flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="The Front Page"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <h1 className="font-bold">The Front Page</h1>
              <p className="text-sm text-gray-400">1K followers</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LinkIcon className="w-6 h-6" />
            <Bell className="w-6 h-6" />
            <MoreHorizontal className="w-6 h-6" />
          </div>
        </header>
      </div>

      <main className=" pt-20 space-y-4 px-3">
        {selectedPost ? (
          <SinglePostView post={selectedPost} onClose={closePost} />
        ) : (
          <div className="float-right pb-20">
            {filteredPosts.map((post) => (
              <div key={post.id} className="flex">
                <div
                  className="bg-gray-800 my-4 rounded-lg w-[300px] shadow-xl overflow-hidden cursor-pointer"
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
                        {post.content} (...More)
                      </p>
                      {post.time && (
                        <span className="text-gray-400">{post.time}</span>
                      )}
                    </div>
                  </div>
                </div>
                <Image
                  width={100}
                  height={100}
                  alt="Something"
                  src={"/favicon.ico"}
                  className="h-[50px] w-[50px] m-4"
                />
              </div>
            ))}
            {filteredPosts.length === 0 && (
              <p className="text-center text-gray-400">
                No matching blog posts found.
              </p>
            )}
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 flex items-center justify-between p-4">
        <Input
          type="search"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow mx-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
        <Button variant="ghost" size="icon">
          <Search className="w-6 h-6" />
        </Button>
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
    <div className="bg-gray-800 rounded-lg overflow-hidden">
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
