import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import type {Category} from "@/lib/categories";
import type {Tool} from "@/lib/tools";

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";

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
  // const category = categories.find((item) => item.slug === tool.category);
  return (
    <article className="">
      <header className="bg-[#EAE4FF] border border-border rounded-md p-6">
        <div className="flex items-center gap-2 justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-[#505050] font-medium" render={<Link href="/">Home</Link>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black  font-semibold" render={<Link href={`/${category?.slug}/`}>{category?.name}</Link>} />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link
            href={tool.website_url}
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 h-10 bg-primary rounded-full text-white font-semibold text-sm"
            target="_blank">
            <span>Visit Website</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="flex items-center gap-3 mt-9">
          <div>
            <Image src={`${tool.logo}`} alt={tool.name} className="rounded-md" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{tool.name}</h1>
            <p className="text-sm font-medium text-gray-500">{tool.tagline}</p>
          </div>
        </div>
        <div className="mt-6">
          <ul className="flex items-center gap-2">
            {tool.pricing.map((feature) => (
              <Badge variant="secondary" className="bg-white text-xs" key={feature}>
                {feature}
              </Badge>
            ))}
            {tool.sub_category.map((feature) => (
              <Badge variant="secondary" className="bg-white text-xs" key={feature}>
                {feature}
              </Badge>
            ))}
            {tool.platforms.map((feature) => (
              <Badge variant="secondary" className="bg-white text-xs" key={feature}>
                {feature}
              </Badge>
            ))}
          </ul>
        </div>
      </header>
      <section className="mt-6 w-full flex flex-col lg:flex-row gap-6">
        <div className="bg-white lg:w-9/12 border border-border p-5 rounded-md flex flex-col gap-4">
          <h2 className="font-semibold text-sm">About</h2>
          <div dangerouslySetInnerHTML={{__html: tool.description}} className="flex flex-col gap-2" />
        </div>
        <div className="bg-white lg:w-3/12 border border-border p-5 rounded-md flex flex-col gap-4">
          <h2 className="font-semibold text-sm">SIMILAR TOOLS</h2>
          {relatedTools.length === 0 ? (
            <p className="text-sm text-muted-foreground">No similar tools yet.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {relatedTools.map((item) => (
                <li key={item.slug}>
                  <Link href={`/tools/${item.slug}/`} className="flex items-center gap-2">
                    <Image src={item.logo} alt="" width={32} height={32} className="rounded-md" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section className="mt-6 w-full flex gap-6">
        <div className="bg-white w-full lg:w-9/12 border border-border p-3 rounded-md flex flex-col gap-4">
          <h2 className="font-semibold text-sm pl-2">Most Recent Tools</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
            {newTools.map((item) => (
              <Link
                key={item.slug}
                href={`/tools/${item.slug}/`}
                className="flex items-center gap-2 rounded-md border border-transparent p-2 hover:border-border hover:bg-gray-100">
                <Image src={item.logo} alt="" width={40} height={40} className="min-w-10 min-h-10 rounded-md" />
                <div>
                  <h4 className="text-sm font-semibold line-clamp-1">{item.name}</h4>
                  <p className="text-xs font-medium text-gray-500 line-clamp-1">{item.features}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/12"></div>
      </section>
    </article>
  );
}
