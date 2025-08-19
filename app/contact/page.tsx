'use client';

export const revalidate = 60;

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact SinghStates</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Left: Address & Contact */}
        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-base font-semibold">Office</h2>
            <p className="text-gray-700 mt-1">
              SCO(A16), <strong>2nd Floor</strong>, Sector 35, Near Agastya Cricket Academy, SUNCITY, Rohtak
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">Contact</h2>
            <ul className="mt-1 space-y-1">
              <li>
                Phone:{' '}
                <a className="text-blue-700 hover:underline" href="tel:+919671575769">
                  +91 96715 75769
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a className="text-blue-700 hover:underline" href="https://wa.me/919671575769" target="_blank">
                  Chat on WhatsApp
                </a>
              </li>
              <li>Hours: Mon–Sun, 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right: Google Map */}
        <div>
          <iframe
            className="w-full h-80 rounded-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=SCO%20A16%20Sector%2035%20Rohtak&output=embed"
          />
        </div>
      </div>
    </div>
  );
}
