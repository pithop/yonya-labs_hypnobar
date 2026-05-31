"use client";

import { useEffect } from "react";
import { NeonButton } from "@/components/ui/NeonButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050508] text-white p-6">
      <h2 className="font-serif text-6xl font-bold mb-4 text-primary">Oups !</h2>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
        Une erreur inattendue s&apos;est produite dans la matrice de l&apos;HypnoBar.
      </p>
      <div onClick={() => reset()}>
        <NeonButton variant="cyan">Réessayer</NeonButton>
      </div>
    </div>
  );
}
