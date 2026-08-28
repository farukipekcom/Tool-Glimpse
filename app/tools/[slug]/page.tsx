import {notFound} from "next/navigation";
import ToolDetail from "@/components/tool-detail/tool-detail";
import {getCategoryBySlug} from "@/lib/categories";
import {getRelatedTools, getNewTools, getToolBySlug} from "@/lib/tools";

export default async function ToolPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) notFound();

  const category = await getCategoryBySlug(tool.category);
  const relatedTools = await getRelatedTools(tool.slug, tool.category);
  const newTools = await getNewTools(tool.slug, 12);

  return (
    <main className="p-6">
      <ToolDetail tool={tool} category={category} newTools={newTools} relatedTools={relatedTools} />
    </main>
  );
}
