import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/components/ui/Header";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MapPin, Mail, Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "HypnoBar Montpellier | Club Intime & Karaoke Privatif",
  description: "L'HypnoBar est un espace exclusif pour vos événements à Montpellier. Privatisation, EVG/EVJF, anniversaires et soirées karaoké. Réservez dès maintenant.",
  openGraph: {
    title: "HypnoBar Montpellier | Club Intime & Karaoke",
    description: "Le repaire secret des noctambules. Privatisation et événements sur mesure au cœur de l'Écusson.",
    url: "https://hypnobar-demo.vercel.app",
    siteName: "HypnoBar",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "HypnoBar Interior",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "HypnoBar Montpellier",
  "image": "https://hypnobar-demo.vercel.app/images/hero-bg.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4 Rue des Trésoriers de la Bourse",
    "addressLocality": "Montpellier",
    "postalCode": "34000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.609753,
    "longitude": 3.8765323
  },
  "url": "https://hypnobar-demo.vercel.app",
  "telephone": "+33467000000",
  "priceRange": "$$$",
  "servesCuisine": "Cocktails & Tapas Premium"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={clsx(inter.variable, playfair.variable, "font-sans bg-background text-white min-h-screen flex flex-col")}>
        <SmoothScroll>
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>

          <footer className="relative py-24 border-t border-white/5 bg-[#050508] overflow-hidden mt-20">
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 mb-20">
                <div className="text-center md:text-left flex-1 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <h3 className="font-serif text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter uppercase mb-6 drop-shadow-2xl">
                    HYPNOBAR
                  </h3>
                  <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-lg font-light leading-relaxed">
                    Le sanctuaire nocturne de l&apos;Écusson. Haute mixologie et expériences sur-mesure.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 md:gap-16 w-full md:w-auto">
                  <div className="text-center md:text-right">
                    <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-white/50">Contact</h4>
                    <ul className="space-y-5 text-gray-300 font-light">
                      <li className="hover:text-white transition-colors duration-300">4 Rue des Trésoriers de la Bourse<br/>34000 Montpellier</li>
                      <li><a href="tel:+33974641784" className="hover:text-primary transition-colors duration-300 inline-block">+33 9 74 64 17 84</a></li>
                      <li><a href="mailto:hypnobar34@gmail.com" className="hover:text-primary transition-colors duration-300 inline-block">hypnobar34@gmail.com</a></li>
                    </ul>
                  </div>

                  <div className="text-center md:text-right">
                    <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-white/50">Légal & Social</h4>
                    <ul className="space-y-5 text-gray-300 font-light">
                      <li><a href="https://www.instagram.com/hypnobar34/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">Instagram <span className="text-xs text-primary/50">↗</span></a></li>
                      <li><a href="https://www.facebook.com/p/HypnoBar-61561493402474/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">Facebook <span className="text-xs text-[#1877F2]/50">↗</span></a></li>
                      <li><a href="#" className="hover:text-white transition-colors duration-300">CGV & Mentions</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 flex flex-col items-center justify-center gap-6 text-center relative z-20">
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.3em] font-medium">
                  L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
                </p>
                <p className="text-xs text-gray-600 uppercase tracking-widest">
                  © 2026 HypnoBar Montpellier. Tous droits réservés.
                </p>
              </div>
            </div>
            
            {/* Ambient Footer Glow */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-primary/10 blur-[150px] pointer-events-none rounded-[100%]" />
          </footer>
        </SmoothScroll>

        <Toaster 
          theme="dark" 
          position="bottom-center" 
          toastOptions={{ 
            className: "font-sans",
            style: { 
              background: 'rgba(10, 10, 16, 0.9)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,0,128,0.5)', 
              color: 'white',
              boxShadow: '0 0 20px rgba(255,0,128,0.2)'
            } 
          }} 
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
