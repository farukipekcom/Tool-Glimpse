export type Pricing = "Free" | "Paid" | "Freemium" | "One-time";
export type Platform = "Web" | "Mac" | "Windows" | "IOS" | "Android";

export type Tool = {
  slug: string;
  name: string;
  category: string;
  subCategory: string[];
  websiteUrl: string;
  platforms: Platform[];
  pricing: Pricing[];
  tagline: string;
  description: string;
  features: string;
  coverImage: string;
  logo: string;
};

export const tools: Tool[] = [
  {
    slug: "beyond-ui",
    name: "Beyond UI",
    category: "design",
    subCategory: ["Design Systems & Kits", "UI Kits"],
    websiteUrl: "https://www.beyondui.design/",
    platforms: ["Web", "Mac"],
    pricing: ["Free", "Paid"],
    tagline: "Create AI-powered videos quickly from text.",
    description:
      "Streamline your design process with 9,000+ Figma components tailored for SaaS applications. Beyond UI offers a comprehensive Figma UI kit that includes 9,000+ components, 500+ customizable sections, and templates tailored to various industries. Designed for efficiency, it supports native Figma variables and auto-layout, enabling rapid design and prototyping, complete with a built-in dark mode feature.",
    features: "Design Tool",
    coverImage: "/tool-1.jpg",
    logo: "/ux-pilot.jpg",
  },
  {
    slug: "doppio",
    name: "Doppio",
    category: "design",
    subCategory: ["Design Systems & Kits", "UI Kits"],
    websiteUrl: "https://www.beyondui.design/",
    platforms: ["Web"],
    pricing: ["Free", "Paid"],
    tagline: "Create AI-powered videos quickly from text.",
    description:
      "When it's time When its time to show off those perfectly pushed pixels, dont settle for deca energy.  Doppio turns your designs into motion reels impossible to ignore. Drop in your designs, pick a template, and tweak everything from composition to animation — all in the browser. No motion software or experience required.",
    features: "Motion Templates",
    coverImage: "/tool-1.jpg",
    logo: "/ux-pilot.jpg",
  },
  {
    slug: "motioner",
    name: "Motioner",
    category: "design",
    subCategory: ["Design Systems & Kits", "UI Kits"],
    websiteUrl: "https://motioner.app/",
    platforms: ["Web"],
    pricing: ["Freemium"],
    tagline: "Design your professional motion project easily.",
    description:
      "Motioner provides a powerful workspace for motion graphics professionals, enabling them to open video frames, add layers, and keyframe properties with comprehensive control and clarity. The platform supports vector editing, auto-layout features, rich text capabilities, and offers a freemium model to get started easily.",
    features: "Motion Graphics Editor",
    coverImage: "/tool-1.jpg",
    logo: "/ux-pilot.jpg",
  },
];

export async function getTools(options?: {category?: string; q?: string}) {
  let result = options?.category ? tools.filter((tool) => tool.category === options.category) : tools;
  const q = options?.q?.trim().toLowerCase();
  if (q) {
    result = result.filter(
      (tool) => tool.name.toLowerCase().includes(q) || tool.tagline.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q),
    );
  }
  return result;
}

export async function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug) ?? null;
}
export async function getRelatedTools(slug: string, category: string) {
  return tools.filter((item) => item.category === category && item.slug !== slug);
}
export async function getNewTools(excludeSlug?: string, limit = 12) {
  return tools
    .filter((item) => item.slug !== excludeSlug)
    .slice(-limit)
    .reverse();
}
