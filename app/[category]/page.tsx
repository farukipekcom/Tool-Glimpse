import {notFound} from "next/navigation";
import {getCategoryBySlug} from "@/lib/categories";
import {getTools} from "@/lib/tools";
import {CategoryFilters} from "@/components/category-filters/category-filters";
type Filters = {
  sub: string[];
  pricing: string[];
  platform: string[];
};
function toList(value?: string | string[]) {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value]).filter(Boolean);
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{category: string}>;
  searchParams: Promise<{sub?: string | string[]; pricing?: string | string[]; platform?: string | string[]}>;
}) {
  const {category: slug} = await params;
  const sp = await searchParams;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = await getTools({category: slug});
  const options: Filters = {
    sub: [...new Set(tools.flatMap((tool) => tool.sub_category))],
    pricing: [...new Set(tools.flatMap((tool) => tool.pricing))],
    platform: [...new Set(tools.flatMap((tool) => tool.platforms))],
  };

  const selected: Filters = {
    sub: toList(sp.sub),
    pricing: toList(sp.pricing),
    platform: toList(sp.platform),
  };
  return (
    <main className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <div className="flex flex-col gap-4">
        <CategoryFilters slug={slug} tools={tools} options={options} selected={selected} />
      </div>
    </main>
  );
}
