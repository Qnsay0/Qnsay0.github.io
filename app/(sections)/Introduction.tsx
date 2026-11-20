"use client";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import SectionHeader from "@/components/SectionHeader";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const TEXT = {
  about: {
    text: "Hi, I’m Bartłomiej Klimek – a 20-year-old Next.js Frontend Developer from Silesia, Poland. I've been building detail-oriented web applications since 2022, turning ideas into clean, functional code. When I'm not coding, you'll likely find me on the volleyball court.",
  },
};

const Introduction = () => (
  <MaxWidthContainer className="mt-30 max-w-6xl px-4 mx-auto flex flex-col text-muted-foreground">
    <SectionHeader index="01" sectionName="introduction" id="introduction" />
    <AnimatedText text={TEXT.about.text} />
  </MaxWidthContainer>
);

const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.5"] });
  const words = text.split(" ");

  return (
    <h1 ref={ref} className="px-4  mt-16 mb-20 text-white max-w-5xl text-2xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </h1>
  );
};

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
};

export default Introduction;
