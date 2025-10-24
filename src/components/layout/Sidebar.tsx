import Link from "next/link";
import { ReactNode } from "react";

type SidebarLink = {
  href: string;
  label: string;
  icon: ReactNode;
  badge?: number;
};

export default function Sidebar({ links }: { links: SidebarLink[] }) {
  return (
    <aside className="flex flex-col h-full w-[250px] bg-white dark:bg-zinc-900 p-4 rounded-r-xl shadow-lg">
      <div className="mb-6 px-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Dev Playground
        </h2>
      </div>
      <nav className="flex flex-col gap-2">
        {links.map(({ href, label, icon, badge }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-900 transition-all"
          >
            <div className="shrink-0">{icon}</div>
            <span className="flex-1 truncate">{label}</span>
            {badge !== undefined && (
              <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-900">
                {badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    
    </aside>
  );
}
