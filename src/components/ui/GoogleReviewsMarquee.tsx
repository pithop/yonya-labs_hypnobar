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
            className="w-[300px] md:w-[400px] flex-shrink-0 p-6 rounded-2xl glass border border-white/10 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} />
            </div>
            
            <div className="flex gap-1 text-yellow-400">
              {[...Array(review.rating)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-gray-300 font-light text-sm md:text-base whitespace-normal line-clamp-4">
              &quot;{review.text}&quot;
            </p>
            
            <div className="mt-auto pt-4 flex items-center gap-3 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm">{review.name}</p>
                {review.role && (
                  <p className="text-xs text-gray-500">{review.role}</p>
                )}
              </div>
              <div className="ml-auto text-xs font-medium text-gray-400 flex items-center gap-1">
                Google <span className="text-xl">G</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
