"use client";

import { LucideIcon } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemsProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItems = ({ icon: Icon, label, href }: SidebarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/}`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-primary-foreground hover:bg-primary my-2",
        isActive && "text-primary-foreground bg-primary"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={20} />
        <span>{label}</span>
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-500/50 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItems;
