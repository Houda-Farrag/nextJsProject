import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import {
  BookOpen,
  Blocks,
  FileBox,
  Power,
  Settings,
  User,
  BookMarked,
} from "lucide-react";
import Header from "@/components/layout/Header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Dev Playground",
  description: "Experiments and learning space using Next.js and Tailwind",
};

// Define the sidebar items
const sidebarLinks = [
  { href: "/tagweed", label: "Tagweed", icon: <BookMarked  className="h-5 w-5" /> },
  { href: "/functioncss", label: "Blocks", icon: <Blocks className="h-5 w-5" /> },
  { href: "/animatedCircular", label: "Books", icon: <BookOpen className="h-5 w-5" /> },
  { href: "/examples", label: "Example Pages", icon: <FileBox className="h-5 w-5" />, badge: 14 },
  { href: "/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
  { href: "/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  { href: "/logout", label: "Logout", icon: <Power className="h-5 w-5" /> },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
           className={`h-full ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
          {/* Top Bar */}
          <Header />

          {/* Sidebar */}
          <nav className="col-start-1 row-start-2 r bg-zinc-100 dark:bg-zinc-950 space-y-2">
            <Sidebar links={sidebarLinks} />
          </nav>

          {/* Main Content */}
          <main className="col-start-2 row-start-2 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
