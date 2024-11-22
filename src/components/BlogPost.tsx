import React from 'react';
import { Calendar, Clock, X } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogPostProps {
  post: Post;
  onClose: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="prose max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;