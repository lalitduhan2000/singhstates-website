"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { properties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BuyPage() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const [type, setType] = useState(sp.get("type") || "All");
  const [min, setMin] = useState(sp.get("min") || "");
  const [max, setMax] = useState(sp.get("max") || "");

  const list = useMemo(()=>{
    return properties.filter(p=>{
      const text = (p.title + p.address + p.city + p.type).toLowerCase();
      const okQ = q ? text.includes(q.toLowerCase()) : true;
      const okT = type==="All" ? true : p.type===type;
      const price = p.price;
      const okMin = min ? price >= Number(min) : true;
      const okMax = max ? price <= Number(max) : true;
      return okQ && okT && okMin && okMax;
    });
  }, [q,type,min,max]);

  return (
    <div className="container-ss py-10">
      <h1 className="text-2xl font-semibold mb-4">Properties in Rohtak</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <input className="rounded-lg border px-3 py-2" placeholder="Search"
          value={q} onChange={e=>setQ(e.target.value)} />
        <select className="rounded-lg border px-3 py-2" value={type} onChange={e=>setType(e.target.value)}>
          {["All","Apartment","Villa","Plot","Commercial"].map(v=> <option key={v}>{v}</option>)}
        </select>
        <input className="rounded-lg border px-3 py-2" placeholder="Min ₹" inputMode="numeric" value={min} onChange={e=>setMin(e.target.value)} />
        <input className="rounded-lg border px-3 py-2" placeholder="Max ₹" inputMode="numeric" value={max} onChange={e=>setMax(e.target.value)} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <PropertyCard key={p.id} p={p} />)}
        {list.length===0 && <p>No properties match your filters.</p>}
      </div>
    </div>
  );
}
