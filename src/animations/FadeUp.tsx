"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const FadeUpAnimation = ({ children, delay = 0, className }: props) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 50, opacity: 0, scale: 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
