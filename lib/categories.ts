import {supabase} from "./supabase";

export type Category = {
  slug: string;
  name: string;
  icon?: string;
  count?: number;
};

export async function getCategories() {
  const {data, error} = await supabase().from("categories").select("slug, name, icon, tools(count)").order("name");
  if (error) throw error;
  return (data ?? [])
    .map((row) => ({
      slug: row.slug,
      name: row.name,
      icon: row.icon,
      count: row.tools[0]?.count ?? 0,
    }))
    .filter((category) => category.count > 0);
}

export async function getCategoryBySlug(slug: string) {
  const {data, error} = await supabase().from("categories").select("slug, name, icon").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}
