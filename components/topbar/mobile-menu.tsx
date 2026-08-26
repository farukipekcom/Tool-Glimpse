"use client";

import {useState} from "react";
import {Dialog} from "@base-ui/react/dialog";
import {MenuIcon, XIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export function MobileMenu({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger render={<Button variant="ghost" size="icon" className="lg:hidden" />} aria-label="Open menu">
        <MenuIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 lg:hidden" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-68 flex-col bg-background shadow-lg outline-none lg:hidden">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <Dialog.Title className="text-sm font-medium">Categories</Dialog.Title>
            <Dialog.Close render={<Button variant="ghost" size="icon" />} aria-label="Close menu">
              <XIcon />
            </Dialog.Close>
          </div>
          <div
            className="overflow-y-auto"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setOpen(false);
            }}>
            {children}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
