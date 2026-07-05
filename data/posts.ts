export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [];
