import {notFound} from "next/navigation";
import {getToolBySlug} from "@/lib/tools";

export default async function ToolPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) notFound();

  return (
    <main className="p-6">
      <h1>{tool.name}</h1>
      <p>{tool.tagline}</p>
      <p>{tool.description}</p>
      <ul>
        {tool.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href={tool.websiteUrl}>Visit website</a>
    </main>
  );
}
