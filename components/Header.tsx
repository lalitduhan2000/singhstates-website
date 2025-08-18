import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="SinghStates" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/buy" className="hover:text-brand-600">Buy</Link>
          <Link href="/rent" className="hover:text-brand-600">Rent</Link>
          <Link href="/agents" className="hover:text-brand-600">Agents</Link>
          <Link href="/contact" className="hover:text-brand-600">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace('+','') || ''}`} className="px-3 py-1.5 rounded-lg border hover:bg-slate-50">WhatsApp</a>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || ''}`} className="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500">Call Now</a>
        </div>
      </div>
    </header>
  );
}
