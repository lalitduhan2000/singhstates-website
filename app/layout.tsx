import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SinghStates – Best Real Estate in Rohtak",
  description: "SinghStates is a trusted real estate agency in Rohtak offering premium homes, plots and rentals with professional service.",
  openGraph: {
    title: "SinghStates – Best Real Estate in Rohtak",
    description: "Premium real estate services in Rohtak. Buy, rent, sell with confidence.",
    url: "https://singhstates.com",
    siteName: "SinghStates",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://singhstates.com" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
