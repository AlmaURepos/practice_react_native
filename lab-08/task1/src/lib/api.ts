import { Post, Author } from "@/types";

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a React framework that enables server-side rendering...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding Static Site Generation",
    content: "Static Site Generation is a way to pre-render pages at build time...",
    author: "2",
    date: "2026-03-02",
    tags: ["ssg", "nextjs"],
    readTime: 6,
  },
  {
    id: "3",
    title: "Advanced React Patterns",
    content: "Learn about advanced patterns in React including render props and compound components...",
    author: "1",
    date: "2026-03-03",
    tags: ["react", "patterns"],
    readTime: 8,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find(a => a.id === id);
}
