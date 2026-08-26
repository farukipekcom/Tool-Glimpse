import Link from "next/link";
import {CategorySidebar} from "./categoryNav";
import Logo from "../logo/logo";

export function Sidebar() {
  return (
    <aside className="border-r bg-amber-50 border-border w-68 min-h-dvh flex flex-col">
      <div className="h-20 border-b border-border flex items-center pl-6">
        <Link href="/" aria-label="ToolGlimpse Homepage">
          <Logo />
        </Link>
      </div>
      <CategorySidebar />
    </aside>
  );
}
