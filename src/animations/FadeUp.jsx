"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeUpAnimation = ({ children, delay, className }) => {
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
