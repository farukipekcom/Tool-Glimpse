import {ToolCard} from "@/components/tool-card/tool-card";
import {getTools} from "@/lib/tools";
export default async function Home({searchParams}: {searchParams: Promise<{category?: string}>}) {
  const {category} = await searchParams;
  console.log(category);
  const tools = await getTools(category);
  console.log(tools);
  return (
    <div className="flex-1">
      <main className="p-6">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool) => {
            return (
              <li key={tool.slug} className="">
                <ToolCard tool={tool} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
