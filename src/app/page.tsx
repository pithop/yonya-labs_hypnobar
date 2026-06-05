"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { MultiStepForm } from "@/components/form/MultiStepForm";
import { MapPin, Clock } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HypnoticCanvas } from "@/components/ui/HypnoticCanvas";
import { Preloader } from "@/components/ui/Preloader";
import { GoogleReviewsMarquee } from "@/components/ui/GoogleReviewsMarquee";
import { LocationSection } from "@/components/ui/LocationSection";

// Utility for large text reveals
const RevealText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Parallax values
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Remove generic scrollbar for custom cursor experience, but keep it normal for touch devices
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";
    return () => {
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div ref={container} className="bg-[#050508] text-white selection:bg-primary/30 min-h-screen">
      <Preloader />
      <CustomCursor />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        <HypnoticCanvas />
        
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ scale: scaleHeroBg }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/50 to-[#050508] z-10" />
        </motion.div>

        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          style={{ y: yHeroText }}
        >
          <RevealText>
            <h1 className="sr-only">HypnoBar</h1>
            <div className="relative w-[80vw] h-[25vh] md:w-[50vw] md:h-[35vh] mix-blend-screen drop-shadow-[0_0_30px_rgba(255,0,128,0.4)]">
              <Image src="/images/logo.jpg" alt="HypnoBar Logo" fill className="object-contain" priority />
            </div>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="mt-6 md:mt-8 text-base md:text-3xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary drop-shadow-[0_0_20px_rgba(255,0,128,0.8)]">
              L&apos;Élévation de la Nuit
            </p>
          </RevealText>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-16"
          >
            <a href="#concept">
              <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent animate-pulse mx-auto interactive" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* MANIFESTO / SAFE SPACE */}
      <section className="py-20 md:py-32 relative bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealText>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-white">
              Un Sanctuaire <span className="text-primary italic">Nocturne</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed">
              Où l&apos;élégance rencontre la liberté absolue. L&apos;HypnoBar est un <strong className="text-white">Safe Space inclusif</strong> et bienveillant. Que vous veniez pour l&apos;amour du bon son, des cocktails pointus ou simplement pour être vous-même : 
            </p>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="mt-8 text-2xl md:text-4xl font-serif text-secondary italic">
              Venez chic, venez vous-même.
            </p>
          </RevealText>
        </div>
      </section>

      {/* L'EXPÉRIENCE (PARALLAX EDITORIAL) */}
      <section id="concept" className="relative py-40 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative">
            
            <div className="md:col-span-5 md:mt-40 z-10">
              <RevealText>
                <h2 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-none">
                  Au Delà <br/><span className="text-secondary italic">du Réel</span>
                </h2>
              </RevealText>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
                  Un espace où le design architectural rencontre l&apos;art immersif. L&apos;HypnoBar redéfinit le concept de club intimiste au cœur de Montpellier.
                </p>
                
                <div className="mt-16 space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors interactive">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">4 Rue des Trésoriers de la Bourse</p>
                      <p className="text-gray-500 text-sm">34000 Montpellier (Écusson)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border border-secondary/30 flex items-center justify-center group-hover:border-secondary transition-colors interactive">
                      <Clock className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">Ouverture</p>
                      <p className="text-gray-500 text-sm">Mercredi - Samedi • 18h - 01h</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-7 relative h-[60vh] md:h-[80vh] w-full mt-20 md:mt-0">
              <motion.div 
                className="absolute top-0 right-0 w-[90%] md:w-[80%] h-[80%] md:h-[70%] z-10"
                style={{ y: yImage1 }}
              >
                <div className="w-full h-full relative overflow-hidden group">
                  <Image src="/images/interior.png" alt="Interior" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-0 w-[70%] md:w-[60%] h-[60%] md:h-[50%] z-20"
                style={{ y: yImage2 }}
              >
                <div className="w-full h-full relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5">
                  <Image src="/images/cocktail.png" alt="Cocktail" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* LA CARTE (OVERLAPPING CARDS) */}
      <section id="menu" className="py-40 relative border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20 md:mb-32">
            <RevealText>
              <h2 className="font-serif text-4xl md:text-9xl text-white/5 uppercase font-black tracking-widest absolute left-1/2 -translate-x-1/2 top-4 md:top-10 pointer-events-none whitespace-nowrap">
                Haute Mixologie
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h3 className="font-serif text-4xl md:text-7xl font-bold relative z-10 mt-12 md:mt-20">L&apos;Art du Goût</h3>
            </RevealText>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[4/5] relative overflow-hidden mb-8">
                <Image src="/images/cocktail.png" alt="Drinks" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
              </div>
              <h4 className="text-3xl font-serif text-primary mb-6">Élixirs & Spiritueux</h4>
              <ul className="space-y-4 text-xl font-light">
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-primary transition-colors"><span>Signature L&apos;Hypnotique</span><span>10 €</span></li>
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-primary transition-colors"><span>Vins de Domaine</span><span>Dès 6 €</span></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group md:mt-32"
            >
              <div className="aspect-[4/5] relative overflow-hidden mb-8">
                <Image src="/images/food.png" alt="Food" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
              </div>
              <h4 className="text-3xl font-serif text-secondary mb-6">Food & Traiteur</h4>
              <ul className="space-y-4 text-lg md:text-xl font-light">
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-secondary transition-colors"><span>Apéro Dînatoire</span><span>Sur devis</span></li>
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-secondary transition-colors"><span>Paella Géante</span><span>Sur devis</span></li>
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-secondary transition-colors"><span>Barbe à Papa</span><span>Sur devis</span></li>
                <li className="flex justify-between border-b border-white/10 pb-4 interactive hover:text-secondary transition-colors"><span>Stand Hot Dog</span><span>Sur devis</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS (FULL WIDTH SCROLL) */}
      <section className="py-20 md:py-40 relative">
        <div className="sticky top-0 h-[50vh] md:h-screen flex flex-col justify-center items-center overflow-hidden z-0">
          <Image src="/images/dj-set.png" alt="Ambiance" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 -mt-[40vh] md:-mt-[80vh] space-y-[20vh] md:space-y-[40vh] pb-20 md:pb-40">
          {[
            { title: "DJ Set Exclusif", desc: "Système son L-Acoustics. Résidences locales et guests internationaux.", color: "text-primary", img: "/images/dj-set.png" },
            { title: "Karaoké Privatif", desc: "Des classiques intemporels. La scène est à vous.", color: "text-secondary", img: "/images/karaoke.png" },
            { title: "Blind Test", desc: "Compétition bon enfant. Remportez la tournée.", color: "text-white", img: "/images/blind-test.png" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-black/80 backdrop-blur-xl p-6 md:p-8 border border-white/5 interactive shadow-2xl"
            >
              <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-md">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className={`font-serif text-3xl md:text-4xl mb-4 ${item.color}`}>{item.title}</h3>
                <p className="text-lg md:text-xl text-gray-400 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREUVE SOCIALE & LOCALISATION */}
      <GoogleReviewsMarquee />
      <LocationSection />

      {/* PRIVATISATION */}
      <section id="reserver" className="py-40 relative bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <RevealText>
              <h2 className="font-serif text-4xl md:text-8xl font-bold text-white mb-6">Privatisation</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">L&apos;HypnoBar devient le vôtre. Réservez l&apos;espace pour une expérience inoubliable.</p>
            </RevealText>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center relative"
            >
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative border border-primary/50 bg-black/50 backdrop-blur-md px-6 py-4 rounded-full flex items-center gap-3">
                  <span className="text-2xl">🎂</span>
                  <span className="font-serif text-lg md:text-xl text-primary font-bold tracking-widest uppercase">
                    Gâteau offert (Minimum 10 personnes)
                  </span>
                </div>
              </div>
            </motion.div>

            <MultiStepForm />
          </div>
        </div>
      </section>
    </div>
  );
}
