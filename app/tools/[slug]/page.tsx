import {notFound} from "next/navigation";
import ToolDetail from "@/components/tool-detail/tool-detail";
import {getRelatedTools, getNewTools, getToolBySlug} from "@/lib/tools";

export default async function ToolPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) notFound();

  const relatedTools = await getRelatedTools(tool.slug, tool.category);
  const newTools = await getNewTools(tool.slug, 12);

  return (
    <main className="p-6">
      <ToolDetail tool={tool} newTools={newTools} relatedTools={relatedTools} />
    </main>
  );
}
