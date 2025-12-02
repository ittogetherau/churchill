import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInAnimationProps {
  children: ReactNode;
  delay?: number;
}

const FadeInAnimation = ({ children, delay = 0 }: FadeInAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
