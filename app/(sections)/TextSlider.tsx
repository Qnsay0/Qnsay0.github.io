"use client";
import { useScroll, useTransform } from "motion/react";
import { cn } from "cn";
import { useRef } from "react";
import { motion, MotionValue } from "framer-motion";

type Slide = {
  left: string;
  direction: string;
  scrollYProgress: MotionValue<number>;
  texts: string[];
};

const TextSlider = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <main ref={container}>
      <div className="h-[20vh]" />
      <Slide left="0%" direction={"left"} scrollYProgress={scrollYProgress} texts={["Passion", "Created", "With"]} />
      <Slide left="-110%" direction={"right"} scrollYProgress={scrollYProgress} texts={["With", "Passion", "Created"]} />
      <Slide left="-50%" direction={"left"} scrollYProgress={scrollYProgress} texts={["Passion", "Created", "With"]} />
      <div className="h-[20vh]" />
    </main>
  );
};

function Slide({ left, direction, scrollYProgress, texts }: Slide) {
  const sign = direction === "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [0, 800 * sign]);
  return (
    <div className="relative whitespace-nowrap flex overflow-hidden">
      <motion.div style={{ x, left }} className="flex gap-8 items-center relative">
        {[...texts, ...texts, ...texts].map((text, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className={cn("font-display text-[14vw] uppercase leading-none ", index % 2 === 0 ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]" : "text-muted-foreground")}>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TextSlider;
