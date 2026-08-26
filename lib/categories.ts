export type Category = {
  slug: string;
  name: string;
  icon?: string;
};

export const categories: Category[] = [
  {slug: "design", name: "Design", icon: "palette"},
  {slug: "ai", name: "AI", icon: "sparkles"},
  {slug: "no-code", name: "No-Code", icon: "blocks"},
  {slug: "marketing", name: "Marketing", icon: "megaphone"},
  {slug: "video", name: "Video", icon: "clapperboard"},
  {slug: "e-commerce", name: "E-Commerce", icon: "shoppingBag"},
  {slug: "social-media", name: "Social Media", icon: "share2"},
  {slug: "coding", name: "Coding", icon: "code"},
  {slug: "writing", name: "Writing", icon: "penLine"},
  {slug: "audio", name: "Audio", icon: "audioLines"},
  {slug: "finance", name: "Finance", icon: "wallet"},
  {slug: "education", name: "Education", icon: "graduationCap"},
  {slug: "security", name: "Security", icon: "shieldCheck"},
  {slug: "newsletter", name: "Newsletter", icon: "newspaper"},
];

export async function getCategories() {
  return categories;
}
