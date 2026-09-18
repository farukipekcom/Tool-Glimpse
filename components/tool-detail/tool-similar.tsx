import {Tool} from "@/lib/tools";
import Image from "next/image";
import Link from "next/link";

export default function SimilarTools({relatedTools}: {relatedTools: Tool[]}) {
  return (
    <div className="bg-white ring-1 ring-border p-6 rounded-2xl flex flex-col gap-4">
      <h2 className="font-semibold text-sm">SIMILAR TOOLS</h2>
      {relatedTools.length === 0 ? (
        <p className="text-sm text-muted-foreground">No similar tools yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {relatedTools.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/tools/${item.slug}/`}
                className="flex group items-center gap-2 p-1 hover:ring-border hover:ring-1 rounded-md hover:bg-hover">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="rounded-sm ring-1 ring-transparent group-hover:ring-border"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
