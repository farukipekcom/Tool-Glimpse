import {Tool} from "@/lib/tools";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {ExternalLink} from "lucide-react";
import Link from "next/link";

export function ToolCard({tool}: {tool: Tool}) {
  return (
    <article className="rounded-lg group">
      <Link href={`/tools/${tool.slug}`} className="block relative aspect-3/2 overflow-hidden rounded-lg">
        <Image src={tool.coverImage} alt={tool.name} width={420} height={280} className="rounded-lg size-full object-cover" />
        <div
          className="absolute inset-0 rounded-lg bg-linear-to-t from-[#4D2297] to-[#4D229740] p-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 backdrop-blur-[2px] transition-all duration-300 text-white flex flex-col justify-end gap-2"
          aria-hidden="true">
          <h3 className="text-base font-semibold">{tool.name}</h3>
          <p className="text-sm line-clamp-2 font-medium">{tool.description}</p>
          <div className="flex items-center gap-2">
            {tool.pricing.map((price) => (
              <Badge key={price} className="bg-white text-xs text-black">
                {price}
              </Badge>
            ))}
            <div className="ml-auto">
              {/* <Link href={`/tools/${tool.slug}`}> */}
              <ExternalLink className="w-4 h-4" />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Link>
      <div className="pt-2 flex items-center justify-between">
        <h3 className="text-base font-medium">{tool.name}</h3>
        <p className="text-sm">{tool.type}</p>
      </div>
    </article>
  );
}
