// components/layout/SidebarItem.tsx
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
 // optional if you're using className helpers

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
  onClick?: () => void;
};

export function SidebarItem({ icon, label, badge, active, onClick }: SidebarItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={cn(
        "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all outline-none",
        "hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 active:bg-blue-100 focus:text-blue-900 active:text-blue-900",
        "dark:hover:bg-zinc-800 dark:hover:text-white",
        active ? "bg-blue-50 text-blue-900" : "text-gray-700 dark:text-gray-300"
      )}
    >
      <div className="grid place-items-center mr-4">{icon}</div>
      <span className="flex-1">{label}</span>
      {badge !== undefined && (
        <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-900">
          {badge}
        </span>
      )}
    </div>
  );
}
