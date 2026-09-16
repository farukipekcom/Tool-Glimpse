import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getCategoryBySlug} from "@/lib/categories";
import {getTools} from "@/lib/tools";
import {ToolGrid} from "@/components/tool-grid/tool-grid";
import {CategoryFilters} from "@/components/category-filters/category-filters";
import {Topbar} from "@/components/topbar/topbar";
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
    <div className="">
      <Topbar title={category.name} />
      <main className="flex flex-col gap-4">
        <div className="bg-white h-[68px] items-center px-6 hidden md:flex">
          <CategoryFilters slug={slug} options={options} selected={selected} />
        </div>
        <div className="p-6">
          <ToolGrid tools={tools} emptyMessage={`No tools in ${category.name} yet.`} />
        </div>
      </main>
    </div>
  );
}
