'use client';

import { useState } from 'react';

export const revalidate = 60; // build errors fix: valid export

export default function BuyPage() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('category', 'buy');

    // NOTE: API route already handles SMTP env vars; keep same endpoint
    const res = await fetch('/api/lead', { method: 'POST', body: data });
    setOk(res.ok);
    setSending(false);
    if (res.ok) form.reset();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Buy Property in Rohtak</h1>
      <p className="text-sm text-gray-500 mt-1">Fill details below. Photos optional (up to 5).</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="category" defaultValue="buy" hidden />
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="border rounded-md px-3 py-2"
          />
          <input
            name="phone"
            required
            placeholder="Phone / WhatsApp"
            className="border rounded-md px-3 py-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="border rounded-md px-3 py-2 md:col-span-2"
          />
          <input
            name="address"
            placeholder="Property Address / Location"
            className="border rounded-md px-3 py-2 md:col-span-2"
          />
          <div className="grid grid-cols-3 gap-3 md:col-span-2">
            <select name="type" className="border rounded-md px-3 py-2">
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
              <option value="Commercial">Commercial</option>
            </select>
            <input name="min" type="number" min={0} placeholder="Min ₹" className="border rounded-md px-3 py-2" />
            <input name="max" type="number" min={0} placeholder="Max ₹" className="border rounded-md px-3 py-2" />
          </div>
          <textarea
            name="message"
            rows={4}
            placeholder="Any specific requirements…"
            className="border rounded-md px-3 py-2 md:col-span-2"
          />
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Upload Property Photos (up to 5)</label>
            <input name="photos" type="file" accept="image/*" multiple className="block" />
          </div>
        </div>

        <button
          disabled={sending}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 disabled:opacity-60 w-fit"
        >
          {sending ? 'Submitting…' : 'Send Inquiry'}
        </button>

        {ok === true && <p className="text-green-600 text-sm">Thanks! We’ll contact you shortly.</p>}
        {ok === false && (
          <p className="text-red-600 text-sm">
            Could not send right now. Please check details and try again.
          </p>
        )}
      </form>
    </div>
  );
}
