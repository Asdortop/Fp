import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
  onClick: (id: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article 
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(post.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center text-indigo-600 font-medium">
          Read More 
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;