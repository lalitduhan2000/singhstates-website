import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c68e?q=80&w=1600&auto=format&fit=crop"
          alt="City skyline"
          className="w-full h-[360px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow">Find Your Dream Property in Rohtak</h1>
        <p className="mt-3 max-w-2xl text-white/90">Explore verified listings of homes, plots and rentals with SinghStates — trusted real estate in Rohtak.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/buy" className="px-5 py-2.5 rounded-lg bg-gold text-black font-semibold shadow-soft">Explore Properties</Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-lg border border-white/70 backdrop-blur">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}
