import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Tool} from "@/lib/tools";
import {Category} from "@/lib/categories";

export default function ToolHeading({tool, category}: {tool: Tool; category: Category}) {
  return (
    <header className="bg-white ring-1 col-span-6 col-start-1 row-start-1 ring-border rounded-2xl p-6">
      <div className="flex gap-2 justify-between">
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
      <div id="tool-hero" className="flex items-center gap-3 mt-2">
        <div>
          <Image src={`${tool.logo}`} alt={tool.name} className="rounded-md ring-1 ring-border min-w-16 min-h-16" width={64} height={64} />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{tool.name}</h1>
          <p className="text-sm font-medium text-gray-500">{tool.tagline}</p>
        </div>
      </div>
      <div className="mt-6">
        <ul className="flex items-center gap-2 flex-wrap">
          {tool.pricing.map((feature) => (
            <Badge variant="secondary" className="bg-white text-xs ring-1 ring-border  px-2.5 py-2" key={feature}>
              {feature}
            </Badge>
          ))}
          {tool.sub_category.map((feature) => (
            <Badge variant="secondary" className="bg-white text-xs ring-1 ring-border  px-2.5 py-2" key={feature}>
              {feature}
            </Badge>
          ))}
          {tool.platforms.map((feature) => (
            <Badge variant="secondary" className="bg-white text-xs ring-1 ring-border  px-2.5 py-2" key={feature}>
              {feature}
            </Badge>
          ))}
        </ul>
      </div>
    </header>
  );
}
