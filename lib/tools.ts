export type Pricing = "free" | "subscription";

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  tags: string[];
  pricing: Pricing[];
  websiteUrl: string;
  features: string[];
  coverImage: string;
};

export const tools: Tool[] = [
  {
    slug: "orbitkit",
    name: "OrbitKit",
    tagline: "Create AI-powered videos quickly from text.",
    description: "Ideal for marketing and content creators. Generate short videos from a script without a timeline editor.",
    category: "design",
    type: "UI Component",
    tags: ["Free", "Subscription"],
    pricing: ["free", "subscription"],
    websiteUrl: "https://example.com/orbitkit",
    features: ["Text-to-video drafts", "Brand kit presets", "Export for social sizes"],
    coverImage: "/covers/orbitkit.jpg",
  },
  {
    slug: "ux-pilot",
    name: "UX Pilot",
    tagline: "AI UX Prototyping",
    description: "AI-driven design tool for rapid prototyping and iteration. Build web-app flows and high-quality wireframes in minutes.",
    category: "design",
    type: "UI Component",
    tags: ["Free", "Subscription", "Figma", "Figma Variables", "Dark mode", "Figma AutoLayout", "Figma Variants"],
    pricing: ["free", "subscription"],
    websiteUrl: "https://example.com/ux-pilot",
    features: ["Prompt to wireframe", "Figma-friendly components", "Iterate on real user flows"],
    coverImage: "/covers/ux-pilot.jpg",
  },
  {
    slug: "mailcraft",
    name: "Mailcraft",
    tagline: "Newsletters that don’t look like templates.",
    description: "Write, design, and send newsletters with a small set of opinionated blocks.",
    category: "newsletter",
    type: "Email",
    tags: ["Subscription"],
    pricing: ["subscription"],
    websiteUrl: "https://example.com/mailcraft",
    features: ["Block editor", "Audience segments", "Plain-text fallback"],
    coverImage: "/covers/mailcraft.jpg",
  },
  {
    slug: "clipnote",
    name: "Clipnote",
    tagline: "Cut podcasts without a timeline headache.",
    description: "Drop an audio file, mark the good parts, export a clean episode.",
    category: "audio",
    type: "Editor",
    tags: ["Free", "Subscription"],
    pricing: ["free", "subscription"],
    websiteUrl: "https://example.com/clipnote",
    features: ["Silence skip", "Multitrack-lite", "Show notes draft"],
    coverImage: "/covers/clipnote.jpg",
  },
];

export async function getTools(category?: string) {
  if (!category) {
    return tools;
  }

  return tools.filter((tool) => tool.category === category);
}

export async function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug) ?? null;
}
