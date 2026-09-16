"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {Logo} from "../logo/logo";
import type {Tool} from "@/lib/tools";

export function ToolHeading({tool}: {tool: Pick<Tool, "name" | "logo" | "tagline" | "website_url">}) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("tool-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const header = document.querySelector("header.sticky");
    if (!header) return;
    header.toggleAttribute("data-tool-stuck", stuck);
    return () => header.removeAttribute("data-tool-stuck");
  }, [stuck]);

  return (
    <>
      <Link href="/" className="lg:hidden" aria-label="ToolGlimpse home">
        <Logo />
      </Link>
      <div data-stuck={stuck} className="topbar-tool hidden min-w-0 flex-1 lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:items-center">
        <p className="topbar-idle col-start-1 row-start-1 truncate font-display text-xl font-bold lg:text-2xl">{tool.name}</p>
        <div className="topbar-compact col-start-1 row-start-1 flex min-w-0 items-center gap-3" aria-hidden={!stuck}>
          <Image src={tool.logo} alt="" width={40} height={40} className="topbar-logo size-10 shrink-0 rounded-md border border-border" />
          <div className="topbar-copy min-w-0 flex-1">
            <p className="truncate font-display text-base font-bold">{tool.name}</p>
            <p className="topbar-tagline truncate text-xs font-medium text-gray-500">{tool.tagline}</p>
          </div>
          <Link
            href={tool.website_url}
            rel="noopener noreferrer"
            target="_blank"
            className="topbar-btn relative flex h-10 shrink-0 items-center gap-3 overflow-hidden rounded-full bg-primary px-4 text-sm font-semibold text-white">
            <span className="topbar-sheen" aria-hidden />
            <span>Visit Website</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
