export type Category = {
  slug: string;
  name: string;
};

export const categories: Category[] = [
  {slug: "design", name: "Design"},
  {slug: "ai", name: "AI"},
  {slug: "no-code", name: "No-Code"},
  {slug: "marketing", name: "Marketing"},
  {slug: "video", name: "Video"},
  {slug: "e-commerce", name: "E-Commerce"},
  {slug: "social-media", name: "Social Media"},
  {slug: "coding", name: "Coding"},
  {slug: "writing", name: "Writing"},
  {slug: "audio", name: "Audio"},
  {slug: "finance", name: "Finance"},
  {slug: "education", name: "Education"},
  {slug: "security", name: "Security"},
  {slug: "newsletter", name: "Newsletter"},
];

export async function getCategories() {
  return categories;
}
