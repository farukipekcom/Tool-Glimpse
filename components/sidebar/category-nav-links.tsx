"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import type {Category} from "@/lib/categories";
import {cn} from "@/lib/utils";
import {CategoryIcon} from "./category-icon";

const linkClass = "flex w-full min-w-fit items-center gap-2 px-2 py-1 text-sm hover:bg-amber-200";

export function CategoryNavLinks({categories}: {categories: Category[]}) {
  const searchParams = useSearchParams();
  const active = searchParams.get("category");

  return (
    <ul className="flex flex-col gap-0.5">
      {categories.map((category) => {
        const isActive = active === category.slug;
        return (
          <li key={category.slug} className="w-full">
            <Link
              href={isActive ? "/" : `/?category=${category.slug}`}
              className={cn(linkClass, isActive && "bg-amber-200")}
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
