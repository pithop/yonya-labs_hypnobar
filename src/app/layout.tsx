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

          <footer className="glass py-16 border-t border-white/5 relative z-50 bg-[#050508] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-6 drop-shadow-[0_0_10px_rgba(255,0,128,0.5)]">HYPNOBAR</h3>
                  <p className="text-gray-400 max-w-sm mb-6">
                    Le club le plus exclusif de Montpellier. Haute mixologie, design avant-gardiste et expériences sur-mesure.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors font-bold text-sm">
                      IG
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Contact</h4>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>4 Rue des Trésoriers de la Bourse<br/>34000 Montpellier</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={16} className="text-secondary shrink-0" />
                      <span>04 67 XX XX XX</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={16} className="text-secondary shrink-0" />
                      <span>contact@hypnobar.fr</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Légal</h4>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">CGV Privatisation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Gestion des Cookies</a></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-wider">
                <p>© 2026 HypnoBar Montpellier. Tous droits réservés.</p>
                <p>L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.</p>
              </div>
            </div>
            
            {/* Ambient Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] pointer-events-none" />
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
