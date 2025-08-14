"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 font-bold">
            IS
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            Ismail Shaikh
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <Link
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-500"
            >
              {n.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="h-9 w-9 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <Link
                key={n.id}
                href={`#${n.id}`}
                className="text-gray-900 dark:text-gray-200 hover:text-purple-500"
                onClick={() => setMobileOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
