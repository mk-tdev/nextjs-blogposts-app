export interface Post {
  title: string;
  image: string;
  date: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  isFeatured?: boolean;
  asFullPage?: boolean;
  tags?: string;
  author?: string;
}
