"use client";

import { useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "pink" | "cyan";
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function NeonButton({ children, variant = "pink", fullWidth = false, className, ...props }: NeonButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const x = (clientX - (left + width / 2)) * 0.2; // 0.2 is the intensity
    const y = (clientY - (top + height / 2)) * 0.2;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "relative px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-md transition-colors duration-300 interactive z-10";
  const variants = {
    pink: "bg-primary/10 text-white border border-primary shadow-neonPink hover:bg-primary/20",
    cyan: "bg-secondary/10 text-white border border-secondary shadow-neonCyan hover:bg-secondary/20",
  };

  return (
    <motion.button
      ref={buttonRef}
      className={twMerge(clsx(baseStyle, variants[variant], fullWidth ? "w-full" : ""), className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
    >
      {/* Glow effect that moves with the mouse inside the button */}
      <motion.div
        className={clsx("absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl -z-10", 
          variant === "pink" ? "bg-primary/50" : "bg-secondary/50"
        )}
      />
      {children}
    </motion.button>
  );
}
