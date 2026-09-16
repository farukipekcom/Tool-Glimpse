"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import type {Category} from "@/lib/categories";
import {cn} from "@/lib/utils";
import {CategoryIcon} from "./category-icon";
import {Badge} from "../ui/badge";

const linkClass =
  "flex w-full h-8 min-w-fit items-center gap-1 group rounded-sm px-2 text-sm border-transparent hover:border-border border hover:bg-hover justify-between";

export function CategoryNavLinks({categories}: {categories: Category[]}) {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <ul className="flex flex-col gap-0.5">
      {categories.map((category) => {
        const isActive = pathname === `/${category.slug}`;
        return (
          <li key={category.slug} className="w-full">
            <Link
              href={isActive ? "/" : `/${category.slug}`}
              className={cn(linkClass, isActive && "bg-hover border border-border hover:bg-hover")}
              aria-current={isActive ? "page" : undefined}>
              <span className="flex items-center gap-3">
                {category.icon ? <CategoryIcon name={category.icon} className="size-4 shrink-0" /> : null}
                {category.name}
              </span>
              <Badge className="bg-hover text-[#727272] border border-border group-hover:border group-hover:border-border text-xs">
                {category.count}
              </Badge>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
