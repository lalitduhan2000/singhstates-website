// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Singh States"
              width={36}
              height={36}
              priority
            />
            <span className="text-xl font-semibold tracking-wide">
              SINGH <span className="font-normal">STATES</span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={text-sm ${
                    active ? "text-blue-700 font-semibold" : "text-gray-700"
                  } hover:text-blue-700 transition}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden pb-3">
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={px-2 py-1 rounded ${
                      active ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
