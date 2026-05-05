import { useState } from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { FloatingWhatsApp } from '@/components/shared/WhatsAppButton';
import { MobileAppPage } from '@/components/pages/MobileAppPage';
import { BlogPage } from '@/components/pages/BlogPage';
import { BlogDetailPage } from '@/components/pages/BlogDetailPage';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { KidsZoneSection } from '@/components/sections/KidsZoneSection';
import { TeachersSection } from '@/components/sections/TeachersSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CTASection } from '@/components/sections/CTASection';

type Page = 'home' | 'mobile-app' | 'blog' | 'blog-detail';

function HomePage({ onNavigate }: { onNavigate: (page: Page, postId?: number) => void }) {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <KidsZoneSection />
      <TeachersSection />
      <CoursesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection onNavigate={onNavigate} />
      <CTASection />
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<number | null>(null);

  const navigateTo = (page: Page, postId?: number) => {
    if (page === 'blog-detail' && postId) {
      setSelectedBlogPostId(postId);
      setCurrentPage('blog-detail');
    } else {
      setCurrentPage(page);
      setSelectedBlogPostId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <title>
        {currentPage === 'home' 
          ? 'Online Quran Tutor for Kids | Qualified Quran Teachers | Book Now | QuranTutor Pro'
          : currentPage === 'mobile-app'
          ? 'Quran Learning App | Download QuranTutor Pro Mobile App'
          : currentPage === 'blog-detail'
          ? 'Blog Article | QuranTutor Pro'
          : 'Islamic Learning Blog | Quran Education Resources | QuranTutor Pro'}
      </title>
      <meta name="description" content="Learn Quran online with certified Quran tutors. One-to-one classes for kids & adults. Tajweed, Hifz, Noorani Qaida. Book your class today!" />
      
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'mobile-app' && <MobileAppPage />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigateTo} />}
        {currentPage === 'blog-detail' && selectedBlogPostId && (
          <BlogDetailPage postId={selectedBlogPostId} onNavigate={navigateTo} />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} />
      
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
