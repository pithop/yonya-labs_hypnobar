"use client";

import { useState } from "react";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { toast } from "sonner";
import { PartyPopper, Cake, Briefcase, Music, Utensils, CheckCircle } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type EventType = "EVG_EVJF" | "Anniversaire" | "Entreprise" | "Autre";
type GroupSize = "-10" | "15-30" | "30-40";

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<EventType | null>(null);
  const [groupSize, setGroupSize] = useState<GroupSize | null>(null);
  const [date, setDate] = useState("");
  const [options, setOptions] = useState({ dj: false, traiteur: false });
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mlgkdqop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Type_Evenement: eventType,
          Taille_Groupe: groupSize,
          Date: date,
          Option_DJ: options.dj ? "Oui" : "Non",
          Option_Traiteur: options.traiteur ? "Oui" : "Non",
          Nom: contact.name,
          Email: contact.email,
          Telephone: contact.phone
        })
      });

      setIsSubmitting(false);

      if (response.ok) {
        toast.success("Demande envoyée", {
          description: "L'équipe de l'HypnoBar vous recontactera très vite.",
        });
        setIsSuccess(true);
      } else {
        toast.error("Erreur", { description: "Une erreur est survenue lors de l'envoi." });
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Erreur", { description: "Impossible de joindre le serveur." });
    }
  };

  if (isSuccess) {
    return (
      <GlassCard className="text-center p-12 max-w-lg mx-auto border-primary">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex justify-center mb-6 text-primary"
        >
          <CheckCircle size={80} />
        </motion.div>
        <h3 className="font-serif text-3xl mb-4 text-white">Demande Envoyée !</h3>
        <p className="text-gray-300 mb-8">
          Votre demande de privatisation a bien été transmise à <strong>hypnobar34@gmail.com</strong>. Notre équipe vous recontactera très vite.
        </p>
        <NeonButton variant="pink" onClick={() => window.location.reload()}>Fermer</NeonButton>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="max-w-2xl mx-auto p-8 border-t-2 border-t-primary/50 relative overflow-visible">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-800 w-full rounded-t-xl overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out shadow-neonPink"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="mb-8 text-center mt-4">
        <h3 className="font-serif text-3xl font-bold mb-2">Privatiser l&apos;HypnoBar</h3>
        <p className="text-gray-400 text-sm uppercase tracking-wider">Étape {step} sur 4</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xl mb-6 text-center">Quel est l&apos;objet de votre événement ?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "EVG_EVJF", label: "EVG / EVJF", icon: <PartyPopper /> },
                  { id: "Anniversaire", label: "Anniversaire", icon: <Cake /> },
                  { id: "Entreprise", label: "Entreprise", icon: <Briefcase /> },
                  { id: "Autre", label: "Autre", icon: <Music /> },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id as EventType)}
                    className={clsx(
                      "p-6 border rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300",
                      eventType === type.id
                        ? "bg-primary/20 border-primary shadow-neonPink text-white scale-105"
                        : "border-white/10 text-gray-400 hover:border-primary/50 hover:bg-white/5"
                    )}
                  >
                    <div className={eventType === type.id ? "text-primary" : ""}>{type.icon}</div>
                    <span className="font-bold tracking-wider uppercase text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h4 className="text-xl text-center mb-6">Combien de personnes prévoyez-vous ?</h4>
              <div className="flex flex-col gap-4">
                {[
                  { id: "-10", label: "Moins de 10 personnes", desc: "Idéal pour la Mezzanine" },
                  { id: "15-30", label: "15 à 30 personnes", desc: "Espace Bar Principal" },
                  { id: "30-40", label: "Jusqu'à 40 personnes", desc: "Privatisation Complète" },
                ].map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setGroupSize(size.id as GroupSize)}
                    className={clsx(
                      "p-4 border rounded-xl text-left flex justify-between items-center transition-all duration-300",
                      groupSize === size.id
                        ? "bg-secondary/20 border-secondary shadow-neonCyan text-white"
                        : "border-white/10 text-gray-400 hover:border-secondary/50 hover:bg-white/5"
                    )}
                  >
                    <div>
                      <div className="font-bold text-lg text-white">{size.label}</div>
                      <div className="text-sm">{size.desc}</div>
                    </div>
                    <div
                      className={clsx(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                        groupSize === size.id ? "border-secondary" : "border-gray-500"
                      )}
                    >
                      {groupSize === size.id && <div className="w-3 h-3 bg-secondary rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h4 className="text-xl text-center mb-6">Date et Options</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date souhaitée</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-4 pt-4">
                <label className="flex items-center justify-between p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Music className={options.dj ? "text-primary" : "text-gray-500"} />
                    <div>
                      <div className="font-bold text-white">Réservation DJ</div>
                      <div className="text-xs text-gray-400">Set privé jusqu&apos;à 1h du matin</div>
                    </div>
                  </div>
                  <div className={clsx("w-12 h-6 rounded-full transition-colors relative", options.dj ? "bg-primary" : "bg-gray-600")}>
                    <input type="checkbox" className="sr-only" checked={options.dj} onChange={(e) => setOptions({...options, dj: e.target.checked})} />
                    <div className={clsx("absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform", options.dj ? "translate-x-6" : "")} />
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Utensils className={options.traiteur ? "text-secondary" : "text-gray-500"} />
                    <div>
                      <div className="font-bold text-white">Option Traiteur</div>
                      <div className="text-xs text-gray-400">Paella, Hot Dogs, etc.</div>
                    </div>
                  </div>
                  <div className={clsx("w-12 h-6 rounded-full transition-colors relative", options.traiteur ? "bg-secondary" : "bg-gray-600")}>
                    <input type="checkbox" className="sr-only" checked={options.traiteur} onChange={(e) => setOptions({...options, traiteur: e.target.checked})} />
                    <div className={clsx("absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform", options.traiteur ? "translate-x-6" : "")} />
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <form id="privatisation-form" onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-xl text-center mb-6">Vos Coordonnées</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nom Complet</label>
                <input
                  required
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Adresse Email</label>
                <input
                  required
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Téléphone</label>
                <input
                  required
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-primary"
                />
              </div>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 border border-white/20 rounded-md text-gray-300 hover:bg-white/10 transition-colors"
          >
            Retour
          </button>
        ) : (
          <div /> // Spacer
        )}

        {step < 4 ? (
          <NeonButton
            variant="pink"
            onClick={nextStep}
            disabled={
              (step === 1 && !eventType) ||
              (step === 2 && !groupSize) ||
              (step === 3 && !date)
            }
            className="disabled:opacity-50 disabled:pointer-events-none"
          >
            Suivant
          </NeonButton>
        ) : (
          <NeonButton
            type="submit"
            form="privatisation-form"
            variant="cyan"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "Valider la demande"}
          </NeonButton>
        )}
      </div>
    </GlassCard>
  );
}
