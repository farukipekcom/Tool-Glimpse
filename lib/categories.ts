import {supabase} from "./supabase";

export type Category = {
  slug: string;
  name: string;
  icon?: string;
};

export async function getCategories() {
  const {data, error} = await supabase().from("categories").select("slug, name, icon").order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getCategoryBySlug(slug: string) {
  const {data, error} = await supabase().from("categories").select("slug, name, icon").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}
