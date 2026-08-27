import {ToolCard} from "@/components/tool-card/tool-card";
import type {Tool} from "@/lib/tools";

export function ToolGrid({tools, emptyMessage = "No tools yet."}: {tools: Tool[]; emptyMessage?: string}) {
  if (tools.length === 0) {
    return <p className="text-sm text-muted-foreground font-medium">{emptyMessage}</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  );
}
