import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your Dream Property in Rohtak
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl">
            Explore verified listings of homes, plots and rentals with SinghStates — trusted real estate in Rohtak.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/buy" className="rounded-md bg-yellow-400 px-5 py-2.5 text-black font-semibold hover:bg-yellow-300">
              Explore Properties
            </Link>
            <Link href="/contact" className="rounded-md border border-white/40 px-5 py-2.5 hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
