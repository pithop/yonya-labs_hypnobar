"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Le Concept", id: "concept" },
    { name: "La Carte", id: "menu" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 md:top-6 md:px-6 pointer-events-none flex justify-center">
        <div 
          className={`pointer-events-auto transition-all duration-500 w-full md:max-w-5xl md:rounded-full border-b md:border border-white/10 flex items-center justify-between px-6 ${
            isScrolled 
              ? "bg-[#050508]/80 backdrop-blur-2xl py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]" 
              : "bg-transparent md:bg-white/5 md:backdrop-blur-xl py-5 md:py-4"
          }`}
        >
          {/* Logo */}
          <div 
            className="cursor-pointer interactive group flex items-center h-12 relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-32 h-10 md:w-40 md:h-12 overflow-hidden mix-blend-screen drop-shadow-[0_0_15px_rgba(255,0,128,0.3)]">
              <Image src="/images/logo.jpg" alt="HypnoBar Logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors interactive font-medium"
              >
                {link.name}
              </button>
            ))}
            <div onClick={() => scrollTo("reserver")} className="ml-4">
              <NeonButton variant="pink" className="py-2.5 px-6 text-xs uppercase tracking-widest font-bold">
                Privatiser
              </NeonButton>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 interactive"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#050508]/95 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="relative w-32 h-10 overflow-hidden mix-blend-screen">
                <Image src="/images/logo.jpg" alt="HypnoBar Logo" fill className="object-contain" />
              </div>
              <button
                className="text-white p-2 bg-white/5 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center gap-10 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-4xl font-serif text-white hover:text-primary transition-colors italic"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-xs mt-8" 
                onClick={() => scrollTo("reserver")}
              >
                <NeonButton variant="pink" fullWidth className="py-4 text-lg">
                  Privatiser l&apos;HypnoBar
                </NeonButton>
              </motion.div>
            </div>
            
            {/* Ambient Mobile Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
