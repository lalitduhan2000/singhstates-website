"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<null | string>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("/api/lead", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("Sent! We'll contact you soon.");
      form.reset();
    } catch (err: any) {
      setStatus("Failed to send. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input required name="name" placeholder="Full Name" className="rounded-lg border px-3 py-2" />
        <input required name="phone" placeholder="Phone" className="rounded-lg border px-3 py-2" />
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="email" type="email" placeholder="Email (optional)" className="rounded-lg border px-3 py-2" />
        <input name="address" placeholder="Property Address / Location" className="rounded-lg border px-3 py-2" />
      </div>
      <textarea name="message" placeholder="Message" className="rounded-lg border px-3 py-2 min-h-[100px]" />
      <div>
        <label className="text-sm text-slate-600 block mb-1">Upload property photos (up to 5)</label>
        <input name="photos" type="file" accept="image/*" multiple className="rounded-lg border px-3 py-2 w-full" />
      </div>
      <button className="rounded-lg bg-brand-600 text-white px-4 py-2 hover:bg-brand-500">Send Inquiry</button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
