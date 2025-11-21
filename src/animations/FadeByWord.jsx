"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const FadeByWordAnimation = ({ children }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start .8", "start .3"],
  });

  const words = children.split(" ");

  return (
    <p className="flex flex-wrap gap-3" ref={element}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + (1 / words.length) * 1;

        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="flex">
      {characters.map((item, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);

        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {item}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute top-0 left-0" style={{ opacity: 0.3 }}>
        {children}
      </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>{" "}
    </span>
  );
};

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (
//     <span className="relative mt-3 mr-3">
// <span className="absolute top-0 left-0" style={{ opacity: 0.3 }}>
//   {children}
// </span>

//       <motion.span className="relative z-10" style={{ opacity: opacity }}>
//         {children}
//       </motion.span>
//     </span>
//   );
// };

export default FadeByWordAnimation;
