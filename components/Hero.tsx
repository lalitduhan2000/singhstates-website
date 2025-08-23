import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative h-[520px] md:h-[560px]">
        <Image
          src="/hero.jpg"          // public/hero.jpg से ली जाएगी — remote config की जरूरत नहीं
          alt="City skyline"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a3a] via-[#122550] to-[#1c2d66] opacity-80 z-10"></div> />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-6xl items-center px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Find Your Dream Property in Rohtak
            </h1>
            <p className="mt-3 text-slate-200">
              Explore verified listings of homes, plots and rentals with SinghStates — trusted real estate in Rohtak.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/buy"
                className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-900 hover:brightness-95"
              >
                Explore Properties
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
