import {getCategories} from "@/lib/categories";
import {CategoryNavLinks} from "./category-nav-links";

export async function CategoryNav() {
  const categories = await getCategories();
  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 px-2 font-display text-sm font-medium">Categories</h2>
      <nav>
        <CategoryNavLinks categories={categories} />
      </nav>
    </div>
  );
}
