"use client";

import { MapPin, Navigation } from "lucide-react";
import { NeonButton } from "./NeonButton";
import { motion } from "framer-motion";

export function LocationSection() {
  const googleMapsUrl = "https://www.google.com/maps/place/HypnoBar/@43.6097569,3.8739574,806m/data=!3m3!1e3!4b1!5s0x12b6afa7f12dc6bf:0x37feb82fc2257ef9!4m6!3m5!1s0x12b6afa0801d8373:0x12fa2a010e23bd49!8m2!3d43.609753!4d3.8765323!16s%2Fg%2F11vj91rfrg";

  return (
    <section className="relative py-24 md:py-40 bg-[#050508] border-t border-white/5 overflow-hidden">
      {/* Background stylisé façon "Dark Map" */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Trouver le Repaire</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-md font-light">
              Dissimulé au cœur de l&apos;Écusson. Rejoignez-nous pour une expérience hors du temps.
            </p>
            
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0 bg-primary/10 text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-xl font-bold text-white">4 Rue des Trésoriers de la Bourse</p>
                <p className="text-gray-500">34000 Montpellier, France</p>
              </div>
            </div>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto">
              <NeonButton variant="pink" className="w-full md:w-auto flex items-center justify-center gap-2 py-4 px-8 text-lg">
                <Navigation size={20} />
                S&apos;y rendre (GPS)
              </NeonButton>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden glass border border-white/10 group"
          >
            {/* Simulation d'une carte haut de gamme avec un pin pulsant */}
            <div className="absolute inset-0 bg-[#0A0A10] flex items-center justify-center">
              <div className="relative">
                {/* Onde de choc */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full animate-ping" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/40 rounded-full animate-pulse" />
                
                {/* Pin central */}
                <div className="relative z-10 text-primary drop-shadow-[0_0_15px_rgba(255,0,128,1)]">
                  <MapPin size={48} fill="currentColor" className="text-black" />
                </div>
              </div>
            </div>
            
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
              <span className="text-white font-bold text-xl tracking-widest uppercase flex items-center gap-2">
                Ouvrir Google Maps <Navigation size={20} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
