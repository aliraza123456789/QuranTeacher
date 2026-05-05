import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { BlogPage } from "@/components/pages/BlogPage";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  );
}
