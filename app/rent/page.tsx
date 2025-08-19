'use client';

import { useState } from 'react';

export const revalidate = 60;

export default function RentPage() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const data = new FormData(e.currentTarget);
    data.set('category', 'rent');

    const res = await fetch('/api/lead', { method: 'POST', body: data });
    setOk(res.ok);
    setSending(false);
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Rent Property in Rohtak</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <input name="category" defaultValue="rent" hidden />
        <input name="name" required placeholder="Your Name" className="border rounded-md px-3 py-2" />
        <input name="phone" required placeholder="Phone / WhatsApp" className="border rounded-md px-3 py-2" />
        <input name="address" placeholder="Preferred Location" className="border rounded-md px-3 py-2 md:col-span-2" />
        <select name="type" className="border rounded-md px-3 py-2">
          <option>Apartment</option>
          <option>Villa</option>
          <option>Commercial</option>
        </select>
        <select name="budget" className="border rounded-md px-3 py-2">
          <option>₹5k–₹10k</option>
          <option>₹10k–₹20k</option>
          <option>₹20k–₹40k</option>
          <option>₹40k+</option>
        </select>
        <textarea name="message" rows={4} placeholder="Any details…" className="border rounded-md px-3 py-2 md:col-span-2" />
        <button
          disabled={sending}
          className="rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 disabled:opacity-60 w-fit md:col-span-2"
        >
          {sending ? 'Submitting…' : 'Send Inquiry'}
        </button>
        {ok === true && <p className="text-green-600 text-sm md:col-span-2">Thanks! We’ll contact you.</p>}
        {ok === false && <p className="text-red-600 text-sm md:col-span-2">Error sending. Try again.</p>}
      </form>
    </div>
  );
}
