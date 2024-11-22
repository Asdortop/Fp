import React, { useState } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import BlogPost from './components/BlogPost';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Minimal Design",
    excerpt: "Discover how minimalism can transform your design approach and create more impactful user experiences.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Mar 1, 2024",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Building Sustainable Web Applications",
    excerpt: "Learn how to create eco-friendly web applications that minimize environmental impact while maximizing performance.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Feb 28, 2024",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies that will shape the future of web development in the coming years.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Feb 25, 2024",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  }
];

function App() {
  const [posts, setPosts] = useState(BLOG_POSTS);
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  const handleSearch = (query: string) => {
    const filtered = BLOG_POSTS.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found matching your search.</p>
          </div>
        )}
      </main>

      {selectedPost && (
        <BlogPost
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}

export default App;