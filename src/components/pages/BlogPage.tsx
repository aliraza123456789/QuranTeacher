'use client';


import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  Tag,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import type { BlogPost } from '@/data/blogData';

const categories = [
  { name: 'All', count: 12 },
  { name: 'Parenting Tips', count: 5 },
  { name: 'Tajweed', count: 3 },
  { name: 'Hifz', count: 2 },
  { name: 'Islamic Studies', count: 2 },
];

const popularTags = [
  'Quran for Kids',
  'Tajweed',
  'Hifz',
  'Parenting',
  'Online Learning',
  'Noorani Qaida',
  'Islamic Education',
  'Quran Memorization',
];

export function BlogPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const openBlogPost = (post: BlogPost) => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img
            src="/images/blog/blog-header.jpg"
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center text-white pt-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Islamic Learning Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-emerald-400">Blog</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover helpful articles, tips, and guides for your Quranic learning journey
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCategory === 'All' && !searchQuery && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <ScrollReveal className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <h2 className="text-2xl font-bold text-slate-800">Featured Articles</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
                    onClick={() => openBlogPost(post)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
                        Featured
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-4 text-sm mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm font-bold">
                            {post.author[0]}
                          </div>
                          <span className="text-sm text-slate-600">{post.author}</span>
                        </div>
                        <span className="flex items-center text-emerald-600 text-sm font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <ScrollReveal className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {searchQuery ? 'Search Results' : 'All Articles'}
            </h2>
            <p className="text-slate-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                  <StaggerItem key={post.id}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      onClick={() => openBlogPost(post)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                      </div>
                    </motion.article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="space-y-8">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-500" />
                    About Our Blog
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Welcome to the QuranTutor Pro blog! Here we share valuable insights, 
                    tips, and resources to help you and your family on your Quranic learning journey.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-emerald-500" />
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Get the latest articles delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                    <button className="w-full bg-white text-emerald-600 font-medium py-2 rounded-lg hover:bg-white/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
