"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-serif text-2xl font-bold tracking-widest uppercase cursor-pointer interactive"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Hypno<span className="text-primary">Bar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors interactive font-bold"
              >
                {link.name}
              </button>
            ))}
            <div onClick={() => scrollTo("reserver")}>
              <NeonButton variant="pink" className="py-2 px-6 text-xs">
                Privatiser
              </NeonButton>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
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
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#050508] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="font-serif text-2xl font-bold tracking-widest uppercase">
                Hypno<span className="text-primary">Bar</span>
              </div>
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center gap-12 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-3xl font-serif text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="w-full max-w-sm mt-8" onClick={() => scrollTo("reserver")}>
                <NeonButton variant="pink" fullWidth className="py-4 text-lg">
                  Privatiser l&apos;HypnoBar
                </NeonButton>
              </div>
            </div>
            
            {/* Ambient Mobile Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
