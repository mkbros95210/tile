import * as React from "react";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-glass-morph border border-gray-700 rounded-lg shadow-lg backdrop-blur-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
