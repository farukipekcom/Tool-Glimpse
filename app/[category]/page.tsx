import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getCategoryBySlug} from "@/lib/categories";
import {getTools} from "@/lib/tools";
import {ToolGrid} from "@/components/tool-grid/tool-grid";
import {CategoryFilters} from "@/components/category-filters/category-filters";
import {Filters} from "@/lib/tools";

function toList(value?: string | string[]) {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value]).filter(Boolean);
}

export async function generateMetadata({params}: {params: Promise<{category: string}>}): Promise<Metadata> {
  const {category: slug} = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {title: "Category"};
  return {title: category.name};
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

  const selected: Filters = {
    sub: toList(sp.sub),
    pricing: toList(sp.pricing),
    platform: toList(sp.platform),
  };

  const [allTools, tools] = await Promise.all([getTools({category: slug}), getTools({category: slug, ...selected})]);

  const options: Filters = {
    sub: [...new Set(allTools.flatMap((tool) => tool.sub_category))],
    pricing: [...new Set(allTools.flatMap((tool) => tool.pricing))],
    platform: [...new Set(allTools.flatMap((tool) => tool.platforms))],
  };
  return (
    <main className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <div className="flex flex-col gap-4">
        <CategoryFilters slug={slug} options={options} selected={selected} />
        <ToolGrid tools={tools} emptyMessage={`No tools in ${category.name} yet.`} />
      </div>
    </main>
  );
}
