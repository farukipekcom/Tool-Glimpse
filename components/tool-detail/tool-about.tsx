import {Tool} from "@/lib/tools";

export default function ToolAbout({tool}: {tool: Tool}) {
  return (
    <div className="bg-white ring-1 ring-border p-6 rounded-2xl flex flex-col gap-4">
      <h2 className="font-semibold text-sm">About</h2>
      <div dangerouslySetInnerHTML={{__html: tool.description}} className="custom-text flex flex-col gap-2" />
    </div>
  );
}
