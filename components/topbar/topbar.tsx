import {SearchIcon} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import Link from "next/link";
import {Logo} from "../logo/logo";
import {CategoryNav} from "../sidebar/category-nav";
import {MobileMenu} from "./mobile-menu";
import {ToolHeading} from "./tool-heading";
import type {Tool} from "@/lib/tools";

export function Topbar({title, tool}: {title?: string; tool?: Pick<Tool, "name" | "logo" | "tagline" | "website_url">}) {
  return (
    <header className="bg-white sticky top-0 z-30 flex h-14 justify-between items-center gap-3 border-b px-6 lg:h-20 lg:px-6">
      {tool ? (
        <ToolHeading tool={tool} />
      ) : (
        <>
          <Link href="/" className="lg:hidden" aria-label="ToolGlimpse home">
            <Logo />
          </Link>
          {title ? (
            <h1 className="hidden lg:block min-w-0 flex-1 truncate font-display text-xl font-bold lg:text-2xl">{title}</h1>
          ) : (
            <form action="/" className="hidden lg:block min-w-0 flex-1 lg:w-60 lg:flex-none">
              <InputGroup className="rounded-lg bg-input-background">
                <InputGroupInput name="q" type="search" placeholder="Search tools.." className="placeholder:text-input-text" />
                <InputGroupAddon align="inline-start">
                  <SearchIcon className="text-input-text" />
                </InputGroupAddon>
              </InputGroup>
            </form>
          )}
        </>
      )}
      <MobileMenu>
        <CategoryNav />
      </MobileMenu>
    </header>
  );
}
