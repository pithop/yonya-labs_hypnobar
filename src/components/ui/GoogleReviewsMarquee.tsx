"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clsx from "clsx";

const reviews = [
  {
    name: "Alexandre D.",
    role: "Local Guide",
    text: "Une ambiance électrisante ! Les meilleurs cocktails de Montpellier, dans un cadre intimiste et luxueux. Le karaoké est une folie.",
    rating: 5,
  },
  {
    name: "Sophie T.",
    text: "Le design du lieu est incroyable. On se croirait dans un club secret. Service impeccable et carte des boissons très pointue.",
    rating: 5,
  },
  {
    name: "Marc V.",
    role: "Client Privilège",
    text: "Privatisation pour un anniversaire réussie à 100%. L'équipe est au petit soin et le DJ set exclusif nous a fait vibrer toute la nuit.",
    rating: 5,
  },
  {
    name: "Julie R.",
    text: "L'expérience HypnoBar est unique. C'est l'endroit parfait pour commencer ou terminer sa soirée à l'Écusson.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    text: "Des cocktails signatures qu'on ne trouve nulle part ailleurs. La qualité est au rendez-vous. Je recommande les yeux fermés.",
    rating: 5,
  }
];

// Dupliquer pour l'effet infini
const marqueeItems = [...reviews, ...reviews];

export function GoogleReviewsMarquee() {
  return (
    <div className="relative flex overflow-hidden py-10 bg-[#050508] border-y border-white/5">
      {/* Gradients de fondu sur les bords */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 whitespace-nowrap px-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((review, i) => (
          <div 
            key={i} 
            className="w-[300px] md:w-[400px] flex-shrink-0 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,0,128,0.15)] transition-all duration-500"
          >
            {/* Holographic sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -translate-x-full pointer-events-none z-0" />
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} />
            </div>
            
            <div className="flex gap-1 text-yellow-400">
              {[...Array(review.rating)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-gray-300 font-serif italic text-base md:text-lg whitespace-normal line-clamp-4 relative z-10 leading-relaxed">
              &quot;{review.text}&quot;
            </p>
            
            <div className="mt-auto pt-6 flex items-center gap-3 border-t border-white/10 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,0,128,0.3)]">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm tracking-wider">{review.name}</p>
                {review.role && (
                  <p className="text-xs text-primary font-medium">{review.role}</p>
                )}
              </div>
              <div className="ml-auto text-xs font-bold text-gray-500 flex items-center gap-1 uppercase tracking-widest">
                Google <span className="text-xl text-white">G</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
