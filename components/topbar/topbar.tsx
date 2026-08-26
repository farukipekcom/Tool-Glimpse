import {SearchIcon} from "lucide-react";
import {Field} from "@/components/ui/field";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
export function Topbar() {
  return (
    <div className="h-20 border-b border-border px-6 flex items-center">
      <Field className="w-90">
        <InputGroup className="rounded-full font-sans">
          <InputGroupInput placeholder="Search tools.." />
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  );
}
