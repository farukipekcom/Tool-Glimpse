import {notFound} from "next/navigation";
import {getCategoryBySlug} from "@/lib/categories";
import {getTools} from "@/lib/tools";
import {ToolGrid} from "@/components/tool-grid/tool-grid";

export default async function CategoryPage({params}: {params: Promise<{category: string}>}) {
  const {category: slug} = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = await getTools({category: slug});

  return (
    <main className="p-6">
      <h1>{category.name}</h1>
      <ToolGrid tools={tools} emptyMessage={`No tools in ${category.name} yet.`} />
    </main>
  );
}
