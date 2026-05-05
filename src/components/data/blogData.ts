export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Teach Quran to Kids at Home',
    excerpt: 'Practical strategies for parents to support their child\'s Quranic learning journey with patience and love.',
    content: `
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
    image: '/images/blog/blog-teach-quran-home.jpg',
    category: 'Parenting Tips',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    author: 'Ustadha Fatima Ali',
    featured: true,
  },
  {
    id: 2,
    title: 'Importance of Tajweed for Children',
    excerpt: 'Why learning Tajweed early sets the foundation for lifelong Quranic recitation and proper pronunciation.',
    content: `
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
    image: '/images/blog/blog-tajweed-importance.jpg',
    category: 'Tajweed',
    date: 'Jan 10, 2024',
    readTime: '4 min read',
    author: 'Ustadh Ahmad Khan',
    featured: true,
  },
  {
    id: 3,
    title: 'Best Age to Start Quran Learning',
    excerpt: 'Expert insights on when and how to introduce Quran to your child for optimal learning outcomes.',
    content: `
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
    image: '/images/blog/blog-best-age-quran.jpg',
    category: 'Getting Started',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    author: 'Ustadha Aisha Rahman',
    featured: false,
  },
  {
    id: 4,
    title: 'Complete Guide to Tajweed Rules',
    excerpt: 'Master the essential Tajweed rules with our comprehensive guide.',
    content: `
      <h3>Introduction to Tajweed</h3>
      <p>Tajweed means to recite correctly and applies to every letter in the Quran.</p>
      
      <h3>Basic Rules</h3>
      <p>Understanding the basic rules is essential for proper recitation.</p>
    `,
    image: '/images/blog/blog-tajweed-importance.jpg',
    category: 'Tajweed',
    date: 'Dec 28, 2023',
    readTime: '8 min read',
    author: 'Ustadh Mohammed Hassan',
    featured: false,
  },
  {
    id: 5,
    title: 'Hifz Journey: From Beginner to Hafiz',
    excerpt: 'A step-by-step guide to Quran memorization.',
    content: `
      <h3>Starting Your Hifz Journey</h3>
      <p>Memorizing the Quran is a blessed endeavor that requires dedication and consistency.</p>
    `,
    image: '/images/blog/blog-best-age-quran.jpg',
    category: 'Hifz',
    date: 'Dec 20, 2023',
    readTime: '10 min read',
    author: 'Ustadha Fatima Ali',
    featured: false,
  },
  {
    id: 6,
    title: 'Online vs Traditional Quran Learning',
    excerpt: 'Compare the benefits of online Quran classes with traditional learning.',
    content: `
      <h3>Online Learning Benefits</h3>
      <p>Online Quran classes offer flexibility and access to qualified teachers worldwide.</p>
    `,
    image: '/images/blog/blog-teach-quran-home.jpg',
    category: 'Parenting Tips',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    author: 'Ustadh Ahmad Khan',
    featured: false,
  },
];

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};
