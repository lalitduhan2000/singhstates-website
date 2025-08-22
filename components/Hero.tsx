import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a3a] via-[#122350] to-[#1c2d66]" />
      {/* Soft light vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Find Your Dream Property in Rohtak
          </h1>
          <p className="mt-3 max-w-prose text-slate-200">
            Explore verified listings of homes, plots and rentals with SinghStates — trusted real estate in Rohtak.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/buy" className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-900 hover:brightness-95">
              Explore Properties
            </Link>
            <Link href="/contact" className="rounded-lg border border-slate-300/60 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/hero.jpg"
            alt="City skyline"
            width={900}
            height={700}
            className="h-auto w-full rounded-xl shadow-2xl ring-1 ring-black/10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
