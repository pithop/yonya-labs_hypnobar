"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "./NeonButton";
import { GlassCard } from "./GlassCard";
import { Info, X } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay on first load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-lg relative"
          >
            <GlassCard className="border border-primary/50 shadow-neonPink relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-[50px]" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 text-center pt-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Info className="text-primary" size={32} />
                </div>
                
                <h2 className="font-serif text-3xl font-bold text-white mb-4">Bienvenue sur la Démo</h2>
                
                <div className="space-y-4 text-gray-300 mb-8">
                  <p>
                    Ceci est une <strong>première version de démonstration</strong> conçue pour présenter l&apos;architecture et le design haut de gamme du site de l&apos;HypnoBar.
                  </p>
                  <p className="text-sm">
                    ⚠️ Les images actuellement affichées sont générées par IA et servent d&apos;inspiration pour le rendu final. Elles seront remplacées par les véritables photos et vidéos de votre établissement par la suite.
                  </p>
                </div>

                <NeonButton variant="pink" onClick={() => setIsOpen(false)} fullWidth>
                  Découvrir le site
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
