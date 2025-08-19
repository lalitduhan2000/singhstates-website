import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-base font-semibold">SinghStates</h3>
          <p className="mt-2 text-gray-600">
            Rohtak’s premium real estate partner for homes, plots and commercial spaces.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-gray-700">
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
            <li className="mt-2">
              Address: SCO(A16), <strong>2nd Floor</strong>, Sector 35, Near Agastya Cricket Academy, SUNCITY, Rohtak
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold">Links</h4>
          <ul className="mt-2 space-y-1">
            <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
            <li><Link className="hover:underline" href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SinghStates. All rights reserved.
      </div>
    </footer>
  );
}
