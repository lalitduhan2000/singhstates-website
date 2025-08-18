export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-900">SinghStates</p>
          <p className="mt-2">Rohtak's premium real-estate partner for homes, plots and commercial spaces.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <ul className="mt-2 space-y-1">
            <li>Phone: {process.env.NEXT_PUBLIC_PHONE}</li>
            <li>WhatsApp: {process.env.NEXT_PUBLIC_WHATSAPP}</li>
            <li>Address: {process.env.NEXT_PUBLIC_OFFICE_ADDRESS}</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Hours</p>
          <p className="mt-2">Mon–Sun: 9:00 AM – 7:00 PM</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} SinghStates · All rights reserved</div>
    </footer>
  );
}
