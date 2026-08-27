"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import type {Category} from "@/lib/categories";
import {cn} from "@/lib/utils";
import {CategoryIcon} from "./category-icon";

const linkClass = "flex w-full min-w-fit items-center gap-2 rounded-sm px-2 py-1 text-sm hover:bg-[#EAE4FF]";

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
              className={cn(linkClass, isActive && "bg-[#EAE4FF]")}
              aria-current={isActive ? "page" : undefined}>
              {category.icon ? <CategoryIcon name={category.icon} className="size-4 shrink-0" /> : null}
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
