'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

// ✅ Build errors fix
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// (Relative paths so alias की जरूरत नहीं)
import SearchBar from '../../components/SearchBar';
import PropertyCard from '../../components/PropertyCard';

// ---- Helpers
const toNumber = (v: string | null, fallback = 0) => {
  if (!v) return fallback;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};
const toLower = (v: string | null) => (v ? v.toLowerCase() : 'all');

// ---- Dummy data (अगर आपके पास lib/properties.ts है तो उसे import करके
//  इस array की जगह उसका डेटा use कर सकते हो)
const LISTINGS = [
  {
    id: 1,
    title: '2 BHK Apartment – Suncity',
    price: 2800000,
    type: '2bhk',
    address: 'Sector 35, Suncity',
    city: 'rohtak',
    image: '/public/logo.svg', // replace with real image if needed
  },
  {
    id: 2,
    title: '3 BHK Apartment – City Center',
    price: 4200000,
    type: '3bhk',
    address: 'City Center, Rohtak',
    city: 'rohtak',
    image: '/public/logo.svg',
  },
  {
    id: 3,
    title: 'Residential Plot – Jhajjar Road',
    price: 1600000,
    type: 'plot',
    address: 'Jhajjar Road',
    city: 'rohtak',
    image: '/public/logo.svg',
  },
  {
    id: 4,
    title: 'Luxury Villa – Premium Block',
    price: 9500000,
    type: 'villa',
    address: 'Premium Block, Rohtak',
    city: 'rohtak',
    image: '/public/logo.svg',
  },
];

// ---- Page
export default function BuyPage() {
  const sp = useSearchParams();

  // URL params: ?type=2bhk&min=10&max=50&city=rohtak  (price लाखों में नहीं, रुपये में)
  const type = toLower(sp.get('type')); // 'all' | '1bhk' | '2bhk' | '3bhk' | 'plot' | 'villa'
  const city = toLower(sp.get('city')); // e.g., 'rohtak'
  const min = toNumber(sp.get('min'), 0);
  const max = toNumber(sp.get('max'), Number.MAX_SAFE_INTEGER);

  const filtered = LISTINGS.filter((p) => {
    const okType = type === 'all' ? true : p.type.toLowerCase() === type;
    const okCity = city ? p.city.toLowerCase().includes(city) : true;
    const okPrice = p.price >= min && p.price <= max;
    return okType && okCity && okPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Top search/filters */}
      <SearchBar />

      {/* Results */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <PropertyCard
              key={item.id}
              title={item.title}
              price={item.price}
              address={item.address}
              city="Rohtak"
              imageUrl={item.image}
              type={item.type}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No properties match your filters. Try changing the type/price range.
          </div>
        )}
      </div>
    </div>
  );
}
