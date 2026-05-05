'use client';


import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogData';

type Page = 'home' | 'mobile-app' | 'blog' | 'blog-detail';

export function BlogSection({ onNavigate }: { onNavigate: (page: Page, postId?: number) => void }) {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding gradient-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Islamic Learning <span className="text-emerald-500">Blog</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Helpful resources for parents and students on their Quranic journey
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -8 }}
                onClick={() => onNavigate('blog-detail', post.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800 hover:bg-white">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center text-emerald-600 font-medium text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </motion.div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <motion.button
            onClick={() => onNavigate('blog')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-900 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}
