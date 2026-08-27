import {ToolGrid} from "@/components/tool-grid/tool-grid";
import {getTools} from "@/lib/tools";
export default async function Home() {
  const tools = await getTools();
  return (
    <div className="flex-1">
      <main className="p-6">
        <ToolGrid tools={tools} />
      </main>
    </div>
  );
}
