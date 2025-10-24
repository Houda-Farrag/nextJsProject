"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type HeaderProps = {
  title?: string;
};

export default function Header({ title = "🧪 Dev Playground" }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme
      ? storedTheme === "dark"
      : systemPrefersDark;

    setIsDark(shouldUseDark);
    root.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    root.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="col-span-2 px-6 py-4 border-b border-border  text-foreground transition-colors duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 " />
          )}
        </button>
      </div>
    </header>
  );
}
