import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container-ss py-10 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-semibold mb-3">Contact SinghStates</h1>
        <p className="text-slate-600 mb-6">We usually reply within a few working hours.</p>
        <ContactForm />
      </div>
      <div className="rounded-2xl overflow-hidden border bg-white">
        <iframe
          title="Map"
          width="100%" height="100%" style={{minHeight:"420px"}}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=SCO(A16)%2C%20Durga%20Tower%2C%20Near%20Agastya%20cricket%20academy%2C%20Sector%2035%2C%20Suncity%20(Rohtak)&output=embed">
        </iframe>
      </div>
    </div>
  );
}
