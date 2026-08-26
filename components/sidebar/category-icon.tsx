import {
  AudioLines,
  Blocks,
  Circle,
  Clapperboard,
  Code,
  GraduationCap,
  Megaphone,
  Newspaper,
  Palette,
  PenLine,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wallet,
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  palette: Palette,
  sparkles: Sparkles,
  blocks: Blocks,
  megaphone: Megaphone,
  clapperboard: Clapperboard,
  shoppingBag: ShoppingBag,
  share2: Share2,
  code: Code,
  penLine: PenLine,
  audioLines: AudioLines,
  wallet: Wallet,
  graduationCap: GraduationCap,
  shieldCheck: ShieldCheck,
  newspaper: Newspaper,
};

export function CategoryIcon({name, className}: {name: string; className?: string}) {
  const Icon = categoryIcons[name] ?? Circle;
  return <Icon className={className} aria-hidden />;
}
