import Link from "next/link";
import {CategoryNav} from "./category-nav";
import {Logo} from "../logo/logo";

export function Sidebar() {
  return (
    <aside className="bg-white border-r shrink-0 border-border w-68 min-h-dvh lg:flex flex-col hidden">
      <div className="h-20 border-b border-border flex items-center pl-6">
        <Link href="/" aria-label="ToolGlimpse Homepage">
          <Logo />
        </Link>
      </div>
      <CategoryNav />
    </aside>
  );
}
