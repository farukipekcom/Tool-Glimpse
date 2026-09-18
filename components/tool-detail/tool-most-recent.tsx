import {Tool} from "@/lib/tools";
import Link from "next/link";
import Image from "next/image";
export default function ToolMostRecent({newTools}: {newTools: Tool[]}) {
  return (
    <div className="bg-white ring-1 ring-border p-6 rounded-2xl flex flex-col gap-4">
      <h2 className="font-semibold text-sm">Most Recent Tools</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {newTools.map((item) => (
          <Link
            key={item.slug}
            href={`/tools/${item.slug}/`}
            className="flex group items-center gap-2 rounded-md ring-1 ring-transparent p-1 hover:ring-border hover:bg-gray-100">
            <Image
              src={item.logo}
              alt={item.name}
              width={40}
              height={40}
              className="ring-1 ring-transparent group-hover:ring-border min-w-10 min-h-10 rounded-sm"
            />
            <div>
              <h4 className="text-sm font-semibold line-clamp-1">{item.name}</h4>
              <p className="text-xs font-medium text-gray-500 line-clamp-1">{item.features}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
