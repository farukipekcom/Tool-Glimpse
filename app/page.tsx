import {ToolGrid} from "@/components/tool-grid/tool-grid";
import {getTools} from "@/lib/tools";
export default async function Home({searchParams}: {searchParams: Promise<{q?: string}>}) {
  const {q} = await searchParams;
  const tools = await getTools({q});
  return (
    <main className="p-6">
      <ToolGrid tools={tools} emptyMessage={q ? `No tools matching “${q}”.` : "No tools yet."} />
    </main>
  );
}
