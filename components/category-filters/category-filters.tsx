"use client";

import {useRouter} from "next/navigation";
import {
  Combobox,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {Badge} from "@/components/ui/badge";
import {Filters} from "@/lib/tools";
import {DollarSign, LayoutGrid, Monitor, MonitorSmartphone, SearchIcon} from "lucide-react";

export function CategoryFilters({slug, options, selected}: {slug: string; options: Filters; selected: Filters}) {
  const router = useRouter();
  function push(next: Filters) {
    const params = new URLSearchParams();
    for (const value of next.sub) params.append("sub", value);
    for (const value of next.pricing) params.append("pricing", value);
    for (const value of next.platform) params.append("platform", value);
    const qs = params.toString();
    router.push(qs ? `/${slug}/?${qs}` : `/${slug}/`, {scroll: false});
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-3 min-w-full">
        <FilterCombobox
          items={options.sub}
          value={selected.sub}
          placeholder="Categories"
          countLabel="Categories"
          onValueChange={(sub) => push({...selected, sub})}
          icon={<LayoutGrid className="w-4 h-4 text-input-text" />}
        />
        <FilterCombobox
          items={options.pricing}
          value={selected.pricing}
          placeholder="Pricing"
          countLabel="Pricing"
          onValueChange={(pricing) => push({...selected, pricing})}
          icon={<DollarSign className="w-4 h-4 text-input-text" />}
        />
        <FilterCombobox
          items={options.platform}
          value={selected.platform}
          placeholder="Platform"
          countLabel="Platforms"
          onValueChange={(platform) => push({...selected, platform})}
          icon={<MonitorSmartphone className="w-4 h-4 text-input-text" />}
        />
        <form action="/" className="justify-self-end">
          <InputGroup className="rounded-lg bg-input-background h-9">
            <InputGroupInput name="q" type="search" placeholder="Search tools.." className="placeholder:text-input-text font-display" />
            <InputGroupAddon align="inline-start">
              <SearchIcon className=" text-input-text" />
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </>
  );
}

function FilterCombobox({
  items,
  value,
  placeholder,
  countLabel,
  onValueChange,
  icon,
}: {
  items: string[];
  value: string[];
  placeholder: string;
  countLabel: string;
  onValueChange: (next: string[]) => void;
  icon: React.ReactNode;
}) {
  const anchor = useComboboxAnchor();

  return (
    <Combobox multiple autoHighlight items={items} value={value} onValueChange={onValueChange}>
      <ComboboxChips ref={anchor} className="border bg-[#F7F7F7] border-border text-black! h-9 font-medium ">
        <ComboboxValue>
          {(values) => (
            <>
              {icon}
              <ComboboxChipsInput
                className="placeholder:text-input-text w-auto"
                placeholder={values.length > 0 ? `${countLabel}` : placeholder}
              />
              {values.length > 0 ? <Badge className="bg-border text-[#727272] font-semibold text-xs">{values.length}</Badge> : null}
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
