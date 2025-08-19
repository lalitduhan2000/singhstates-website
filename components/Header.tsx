'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/buy', label: 'Buy' },
  { href: '/rent', label: 'Rent' },
  { href: '/agents', label: 'Agents' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SinghStates logo" width={44} height={44} priority />
          <span className="text-xl font-semibold tracking-wide">SINGH STATES</span>
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? 'text-blue-700 font-semibold underline underline-offset-4'
                    : 'text-gray-700 hover:text-blue-700'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
