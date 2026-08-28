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
import {ToolGrid} from "@/components/tool-grid/tool-grid";
import {Badge} from "@/components/ui/badge";
type Filters = {
  sub: string[];
  pricing: string[];
  platform: string[];
};
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
      <div className="flex flex-wrap gap-3">
        <FilterCombobox
          items={options.sub}
          value={selected.sub}
          placeholder="Categories"
          countLabel="Categories"
          onValueChange={(sub) => push({...selected, sub})}
        />
        <FilterCombobox
          items={options.pricing}
          value={selected.pricing}
          placeholder="Pricing"
          countLabel="Pricing"
          onValueChange={(pricing) => push({...selected, pricing})}
        />
        <FilterCombobox
          items={options.platform}
          value={selected.platform}
          placeholder="Platform"
          countLabel="Platforms"
          onValueChange={(platform) => push({...selected, platform})}
        />
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
}: {
  items: string[];
  value: string[];
  placeholder: string;
  countLabel: string;
  onValueChange: (next: string[]) => void;
}) {
  const anchor = useComboboxAnchor();

  return (
    <Combobox multiple autoHighlight items={items} value={value} onValueChange={onValueChange}>
      <ComboboxChips ref={anchor} className="w-full max-w-60 border border-border text-black! font-medium ">
        <ComboboxValue>
          {(values) => (
            <>
              <ComboboxChipsInput className="placeholder:text-black" placeholder={values.length > 0 ? `${countLabel}` : placeholder} />
              {values.length > 0 ? <Badge className="bg-border text-black font-semibold text-xs">{values.length}</Badge> : null}
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
