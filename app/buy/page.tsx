// @ts-nocheck
"use client";

import React, { useState } from "react";

export const revalidate = 60;

// Dummy listings (INR prices)
const PROPERTIES = [
  {
    id: "P-1001",
    title: "2BHK Apartment – City Center",
    price: 4200000,
    address: "Sector 3, Suncity",
    city: "Rohtak",
    type: "apartment",
    imageUrl: "/logo.svg",
  },
  {
    id: "P-1002",
    title: "Modern 3BHK House – Corner Plot",
    price: 6800000,
    address: "Near Durga Tower, Sector 35",
    city: "Rohtak",
    type: "house",
    imageUrl: "/logo.svg",
  },
  {
    id: "P-1003",
    title: "Commercial Shop – High Footfall",
    price: 3200000,
    address: "Main Market, Old Bus Stand",
    city: "Rohtak",
    type: "shop",
    imageUrl: "/logo.svg",
  },
  {
    id: "P-1004",
    title: "Residential Plot – 200 sq yd",
    price: 2800000,
    address: "Near Agastya Cricket Academy",
    city: "Rohtak",
    type: "plot",
    imageUrl: "/logo.svg",
  },
];

const TYPE_OPTIONS = [
  { label: "All Types", value: "all" },
  { label: "Apartment", value: "apartment" },
  { label: "House/Villa", value: "house" },
  { label: "Plot/Land", value: "plot" },
  { label: "Shop/Commercial", value: "shop" },
];

export default function BuyPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // Simple filter (no useMemo to avoid mistakes)
  const minN = Number.isFinite(Number(min)) ? Number(min) : 0;
  const maxN =
    Number.isFinite(Number(max)) && max !== "" ? Number(max) : Number.MAX_SAFE_INTEGER;
  const qlc = q.trim().toLowerCase();

  const filtered = PROPERTIES.filter((p) => {
    const textHit =
      !qlc ||
      p.title.toLowerCase().includes(qlc) ||
      p.address.toLowerCase().includes(qlc) ||
      p.city.toLowerCase().includes(qlc);

    const typeHit = type === "all" ? true : p.type === type;
    const priceHit = p.price >= minN && p.price <= maxN;

    return textHit && typeHit && priceHit;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Buy Properties in Rohtak</h1>
      <p className="text-sm text-gray-500 mt-1">
        Curated listings by <strong>SinghStates</strong>. Prices in INR.
      </p>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by area / address / title"
          className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
          {TYPE_OPTIONS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>

        <input
          type="number"
          inputMode="numeric"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Min Price (₹)"
          className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          inputMode="numeric"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Max Price (₹)"
          className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden bg-white"
          >
            <div className="h-40 w-full bg-gray-100 flex items-center justify-center">
              <img src={p.imageUrl} alt={p.title} className="h-24 w-24 opacity-80" />
            </div>
            <div className="p-4 space-y-1">
              <div className="text-sm uppercase tracking-wide text-gray-500">{p.type}</div>
              <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
              <div className="text-sm text-gray-600">
                {p.address}, {p.city}
              </div>
              <div className="mt-2 text-blue-700 font-semibold">
                ₹ {p.price.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="px-4 pb-4">
              <a
                href={/contact?property=${encodeURIComponent(p.id)}}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700"
              >
                Enquire
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 text-center text-gray-500">No properties match your filters.</div>
      )}
    </div>
  );
}
