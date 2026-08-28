import {supabase} from "./supabase";

export type Pricing = "Free" | "Paid" | "Freemium" | "One-time";
export type Platform = "Web" | "Mac" | "Windows" | "IOS" | "Android";

export type Tool = {
  slug: string;
  name: string;
  category: string;
  sub_category: string[];
  website_url: string;
  platforms: Platform[];
  pricing: Pricing[];
  tagline: string;
  description: string;
  features: string;
  cover_image: string;
  logo: string;
};

export async function getTools(options?: {category?: string; q?: string}) {
  let query = supabase().from("tools").select("*");

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  const q = options?.q?.trim().replace(/[%_,]/g, "");
  if (q) {
    const pattern = `%${q}%`;
    query = query.or(`name.ilike.${pattern},tagline.ilike.${pattern},description.ilike.${pattern}`);
  }

  const {data, error} = await query;
  if (error) throw error;
  return (data ?? []) as Tool[];
}

export async function getToolBySlug(slug: string) {
  const {data, error} = await supabase().from("tools").select("*").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return (data as Tool | null) ?? null;
}

export async function getRelatedTools(slug: string, category: string) {
  const {data, error} = await supabase().from("tools").select("*").eq("category", category).neq("slug", slug);
  if (error) throw error;
  return (data ?? []) as Tool[];
}

export async function getNewTools(excludeSlug?: string, limit = 12) {
  let query = supabase().from("tools").select("*").order("created_at", {ascending: false}).limit(limit);

  if (excludeSlug) {
    query = query.neq("slug", excludeSlug);
  }

  const {data, error} = await query;
  if (error) throw error;
  return (data ?? []) as Tool[];
}
