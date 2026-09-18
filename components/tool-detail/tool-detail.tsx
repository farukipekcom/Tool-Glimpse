import type {Category} from "@/lib/categories";
import type {Tool} from "@/lib/tools";

import ToolHeading from "./tool-heading";
import SimilarTools from "./tool-similar";
import ToolMostRecent from "./tool-most-recent";
import ToolAbout from "./tool-about";

export default function ToolDetail({
  tool,
  category,
  newTools,
  relatedTools,
}: {
  tool: Tool;
  category: Category | null;
  newTools: Tool[];
  relatedTools: Tool[];
}) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto_auto_auto] gap-6">
      <ToolHeading tool={tool} category={category!} />
      <div className="col-span-6 md:col-span-4 md:col-start-1 md:row-start-2 flex flex-col gap-6">
        <ToolAbout tool={tool} />
        <ToolMostRecent newTools={newTools} />
      </div>
      <div className="col-span-6 row-start-3 md:col-span-2 md:col-start-5 md:row-start-2 flex flex-col gap-6">
        <SimilarTools relatedTools={relatedTools} />
      </div>
    </article>
  );
}
