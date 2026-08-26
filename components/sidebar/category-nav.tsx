import Link from "next/link";
import {getCategories} from "@/lib/categories";

export async function CategoryNav() {
  const categories = await getCategories();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 px-2 font-display text-sm font-medium">Categories</h2>
      <nav>
        <ul className="flex flex-col gap-0.5">
          {categories.map((category) => (
            <li key={category.slug} className="w-full">
              <Link href={`/?category=${category.slug}`} className="text-sm min-w-fit w-full flex hover:bg-amber-200 px-2 py-1">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
