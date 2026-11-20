"use client";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import SectionHeader from "@/components/SectionHeader";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCw, Search, Star } from "lucide-react";

const MOCKUP: { refString: string; record: RecordType[] }[] = [
  {
    refString: "https://about.my.education.pl",
    record: [
      {
        span: "PWr (W4)",
        hrefString: "https://pwr.edu.pl",
        title: "Technical Computer Science at Wrocław University of Science and Technology",
        date: "2025 – now",
        text: "I'm a second-year engineering student. Alongside classes, I build real projects and I'm a member of the student government at my faculty.",
      },
      {
        span: "PWr (W4)",
        hrefString: "https://wit.pwr.edu.pl",
        title: "What I learn: algorithms, databases, computer systems & web",
        date: "2026 – now",
        text: "From how a processor runs code to how a website talks to a database. This background helps me write apps that are fast and reliable.",
      },
      {
        span: "High School",
        hrefString: "https://[school].edu.pl",
        title: "I LO im. Stefanii Sempołowskiej in Tarnowskie Góry",
        date: "[2021 – 2025]",
        text: "Advanced math and physics class. This is where I wrote my first lines of code and realised I want to build things for a living.",
      },
    ],
  },

  {
    refString: "https://about.my.skills.pl",
    record: [
      {
        span: "Languages",
        hrefString: "https://developer.mozilla.org",
        title: "JavaScript, TypeScript, HTML & CSS",
        date: "Daily",
        text: "Semantic markup, modern CSS and type-safe code under every interface I ship.",
      },
      {
        span: "Frontend",
        hrefString: "https://nextjs.org",
        title: "React, Next.js, Tailwind CSS & shadcn/ui",
        date: "Daily",
        text: "Component-driven architecture, server components and accessible UI.",
      },
      {
        span: "Backend",
        hrefString: "https://nestjs.com",
        title: "Node.js, Express, NestJS & Prisma",
        date: "Growing",
        text: "REST APIs, server logic and type-safe database access with Prisma that connect my interfaces to real data.",
      },
      {
        span: "Tools",
        hrefString: "https://github.com",
        title: "Git & GitHub",
        date: "Daily",
        text: "Version control, pull requests and collaborative workflows.",
      },
    ],
  },
];

type RecordType = {
  span: string;
  hrefString: string;
  title: string;
  date: string;
  text: string;
};

type Card = {
  index: number;
  records: RecordType[];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  hrefString: string;
};

const Education = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <MaxWidthContainer className="mt-30 px-4">
      <SectionHeader sectionName="Education" index="02" />
      <div className="text-white">
        <h1 className="mt-16 l text-3xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">What I can build for you</h1>
      </div>

      <div ref={container} className="mt-20">
        {MOCKUP.map((el, index) => {
          const targetScale = 1 - (MOCKUP.length - index) * 0.05;
          return <Card key={index} records={el.record} index={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} hrefString={el.refString} />;
        })}
      </div>
    </MaxWidthContainer>
  );
};

const Card = ({ index, records, progress, range, targetScale, hrefString }: Card) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-10">
      <motion.div style={{ scale, top: `calc(-15vh + ${index * 65}px)` }} className="relative flex flex-col md:flex-row w-full max-w-250 min-h-150 h-fit min-h-[min(500px,75vh)] max-h-[85vh] overflow-hidden bg-ink-2 border border-ink-3 rounded-3xl px-4 sm:px-10 py-5 origin-top shadow-xl">
        <div className="w-full ">
          <header className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 text-muted-foreground">
              <ArrowLeft size={16} />
              <ArrowRight size={16} />
              <RotateCw size={16} />
            </div>

            <div className="order-last basis-full sm:order-0 sm:basis-auto sm:flex-1 sm:max-w-120 sm:mx-auto min-w-0 bg-ink-3 rounded-full h-8 flex items-center px-4 gap-2 text-muted-foreground">
              <Search size={16} className="shrink-0" />
              <p className="text-xs truncate">{hrefString}</p>
              <Star size={16} className="ml-auto shrink-0" />
            </div>

            <div className="ml-auto flex gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
          </header>
          <div className="mt-5 flex flex-col gap-5">
            {records.map((record, index) => (
              <Record key={index} {...record} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Record = ({ span, hrefString, title, date, text }: RecordType) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row">
        <div className="h-8 w-8 bg-ink-3 rounded-lg" />
        <div className="flex flex-col text-xs ml-3 justify-center text-muted-foreground">
          <h2 className="leading-none font-semibold">{span}</h2>
          <p className="leading-none">{hrefString}</p>
        </div>
      </div>

      <div className="max-w-xl">
        <h1 className="text-blue-200 truncate">{title}</h1>
        <p className="text-xs text-white line-clamp-2">
          <span className="text-muted-foreground">{date}</span> - {text}
        </p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};
export default Education;
