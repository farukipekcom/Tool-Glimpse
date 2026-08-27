import {SearchIcon} from "lucide-react";
import {Field} from "@/components/ui/field";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import Link from "next/link";
import {Logo} from "../logo/logo";
import {CategoryNav} from "../sidebar/category-nav";
import {MobileMenu} from "./mobile-menu";
export function Topbar() {
  return (
    <header className="bg-white sticky top-0 z-10 flex h-14 items-center gap-3 border-b px-6 lg:h-20 lg:px-6">
      <Link href="/" className="lg:hidden" aria-label="ToolGlimpse home">
        <Logo />
      </Link>
      <form action="/" className="min-w-0 flex-1 lg:w-90 lg:flex-none">
        <InputGroup className="rounded-full">
          <InputGroupInput name="q" type="search" placeholder="Search tools.." />
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </form>

      <MobileMenu>
        <CategoryNav />
      </MobileMenu>
    </header>
  );
}
