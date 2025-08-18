"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (type !== "All") params.set("type", type);
    if (min) params.set("min", min);
    if (max) params.set("max", max);
    router.push(`/buy?${params.toString()}`);
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-2xl shadow-soft p-4 grid gap-3 md:grid-cols-5">
      <input className="rounded-lg border px-3 py-2 md:col-span-2" placeholder="Search in Rohtak (area, landmark)"
        value={q} onChange={e=>setQ(e.target.value)} />
      <select className="rounded-lg border px-3 py-2"
        value={type} onChange={e=>setType(e.target.value)}>
        {["All","Apartment","Villa","Plot","Commercial"].map(v=> <option key={v}>{v}</option>)}
      </select>
      <input className="rounded-lg border px-3 py-2" placeholder="Min ₹" inputMode="numeric" value={min} onChange={e=>setMin(e.target.value)} />
      <input className="rounded-lg border px-3 py-2" placeholder="Max ₹" inputMode="numeric" value={max} onChange={e=>setMax(e.target.value)} />
      <button className="md:col-span-5 md:justify-self-start px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-500">Search</button>
    </form>
  );
}
