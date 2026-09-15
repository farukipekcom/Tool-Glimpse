import {Tool} from "@/lib/tools";
import Image from "next/image";
import Link from "next/link";

export function ToolCard({tool}: {tool: Tool}) {
  return (
    <article className="rounded-lg group">
      <Link href={`/tools/${tool.slug}`} className="relative flex flex-col overflow-hidden rounded-lg bg-white p-6">
        <span
          aria-hidden
          className="tool-card-wash pointer-events-none absolute inset-0 bg-linear-to-br from-gradient-from to-gradient-to [--card-wipe:0%] group-hover:[--card-wipe:140%] group-focus-within:[--card-wipe:140%]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-lg border border-border transition-[border-width,border-color] group-hover:border-[1.5px] group-hover:border-gradient"
        />
        <div className="relative z-10 flex flex-col">
          <Image src={tool.logo} alt={tool.name} width={48} height={48} className="rounded-lg border border-border" />
          <h2 className="mt-6 text-xl font-semibold">{tool.name}</h2>
          <p className="mt-2 line-clamp-2 text-sm">{tool.description}</p>
          <div className="mt-6 flex items-center justify-between gap-2">
            <p className="line-clamp-1 rounded-[6px] border border-border group-hover:bg-white transition-all duration-300 bg-gray-50 px-2 py-0.5 font-display text-xs font-medium text-gray-800">
              {tool.features}
            </p>
            <div className="flex items-center gap-1 font-display">
              {tool.pricing.map((price) => (
                <p
                  key={price}
                  className="rounded-full border border-border group-hover:bg-white transition-all duration-300 px-2 py-0.5 text-xs font-medium text-gray-800">
                  {price}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
