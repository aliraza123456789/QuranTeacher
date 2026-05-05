import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { BlogDetailPage } from "@/components/pages/BlogDetailPage";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <BlogDetailPage postId={post.id} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
