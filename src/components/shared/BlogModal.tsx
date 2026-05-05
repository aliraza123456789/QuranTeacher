'use client';


import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const blogPostsContent: Record<string, string> = {
  'How to Teach Quran to Kids at Home': `
    <h3>Introduction</h3>
    <p>Teaching Quran to children at home is one of the most rewarding experiences for Muslim parents. With the right approach, patience, and consistency, you can help your child develop a lifelong love for the Quran.</p>
    
    <h3>1. Start with the Basics</h3>
    <p>Begin with Noorani Qaida to help your child learn Arabic letters and pronunciation. This foundation is crucial for proper Quran reading.</p>
    
    <h3>2. Create a Consistent Schedule</h3>
    <p>Set aside a specific time each day for Quran learning. Consistency is more important than duration - even 15-20 minutes daily is effective.</p>
    
    <h3>3. Make it Fun and Interactive</h3>
    <p>Use colorful books, apps, and games to make learning engaging. Reward progress with stars, stickers, or small treats.</p>
    
    <h3>4. Lead by Example</h3>
    <p>Children learn by watching. When they see you reading Quran regularly, they naturally want to follow.</p>
    
    <h3>5. Be Patient and Encouraging</h3>
    <p>Every child learns at their own pace. Celebrate small victories and avoid criticism.</p>
    
    <h3>Conclusion</h3>
    <p>With dedication and the right approach, teaching Quran at home can be a beautiful bonding experience for you and your child.</p>
  `,
  'Importance of Tajweed for Children': `
    <h3>What is Tajweed?</h3>
    <p>Tajweed is the set of rules for the correct pronunciation of the Quranic letters and words. It ensures that the Quran is recited exactly as it was revealed.</p>
    
    <h3>Why Learn Tajweed Early?</h3>
    <p>Children have a remarkable ability to pick up correct pronunciation when they're young. Learning Tajweed early prevents bad habits that are hard to correct later.</p>
    
    <h3>Benefits of Tajweed</h3>
    <ul>
      <li>Correct pronunciation of Arabic letters</li>
      <li>Understanding the rules of recitation</li>
      <li>Increased confidence in Quran reading</li>
      <li>Better connection with the Quran</li>
    </ul>
    
    <h3>How to Start</h3>
    <p>Begin with basic Makharij (points of articulation) and gradually move to more complex rules. A qualified teacher can make this journey much easier.</p>
  `,
  'Best Age to Start Quran Learning': `
    <h3>The Early Years (Ages 3-5)</h3>
    <p>At this age, children are like sponges. They can start with simple Arabic alphabet recognition and listening to Quran recitation.</p>
    
    <h3>The Foundation Years (Ages 6-8)</h3>
    <p>This is the ideal age to start formal Quran learning. Children have better focus and can handle structured lessons.</p>
    
    <h3>The Growth Years (Ages 9-12)</h3>
    <p>Children at this age can handle more complex Tajweed rules and begin memorization if they show interest.</p>
    
    <h3>It's Never Too Late</h3>
    <p>While starting early has benefits, it's never too late to begin learning Quran. Adults can learn effectively with dedication.</p>
    
    <h3>Key Factors</h3>
    <p>The best age depends on the child's readiness, interest, and ability to focus. Every child is different!</p>
  `,
};

export function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!isOpen || !post) return null;

  const fullContent = blogPostsContent[post.title] || `<p>${post.excerpt}</p><p class="mt-4">Full article content coming soon...</p>`;

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
        >
          {/* Header Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium mb-3">
                {post.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {post.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {/* Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isBookmarked ? 'bg-amber-100 text-amber-500' : 'bg-slate-100 hover:bg-slate-200 text-slate-500'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={shareArticle}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: fullContent }}
            />

            {/* Back Button */}
            <Button
              variant="outline"
              onClick={onClose}
              className="mt-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
