import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-ss -mt-10 relative z-10">
        <SearchBar />
      </section>
      <section className="container-ss py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured in Rohtak</h2>
          <span className="text-sm text-slate-500">{properties.length} results</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p)=> <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
