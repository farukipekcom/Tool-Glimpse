"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import type {Category} from "@/lib/categories";
import {cn} from "@/lib/utils";
import {CategoryIcon} from "./category-icon";
import {Badge} from "../ui/badge";

const linkClass = "flex w-full h-8 min-w-fit items-center gap-1 rounded-sm px-2 py-1 text-sm hover:bg-[#F5F5F5] justify-between";

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
              className={cn(linkClass, isActive && "bg-[#E3E3E3] hover:bg-[#E3E3E3]")}
              aria-current={isActive ? "page" : undefined}>
              <span className="flex items-center gap-3">
                {category.icon ? <CategoryIcon name={category.icon} className="size-4 shrink-0" /> : null}
                {category.name}
              </span>
              <Badge className="bg-gray-100 text-gray-500 text-xs">{category.count}</Badge>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
