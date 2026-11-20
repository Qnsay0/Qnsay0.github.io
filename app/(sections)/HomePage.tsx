"use client";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const TEXT = {
  mainTitle: [
    "Frontend",
    "Developer",
    <>
      <span className="text-muted">&</span>WUST STUDENT
    </>,
  ],
  footerText: {
    fisrt: "Hi, I'm Bartłomiej Klimek, 2nd-year Computer Science Student @ WUST | Frontend Developer @ Solvero | Student Goverment Member @ W4",
    second: "Based in Wrocław | Tarnowskie Góry PL",
  },
};

const LINKS = [
  {
    label: "Introduction",
    href: "#introduction",
  },
  {
    label: "Work",
    href: "#my-work",
  },
  {
    label: "Contact",
    href: "#footer",
  },
];

const HomePage = () => {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-ink px-4 pt-6 pb-8 sm:px-10 lg:px-14 text-white">
      <div className="mx-auto flex w-full  flex-1 flex-col">
        <Navbar />
        <Content />
        <Separator className="bg-ink-3" />
        <HomePageFooter />
      </div>
    </section>
  );
};

const HomePageFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row text-sm justify-between text-muted-foreground w-full mt-5 gap-2">
      <p className="text-muted-foreground max-w-sm">{TEXT.footerText.fisrt} </p>
      <p className="mt-auto text-start lg:text-center">{TEXT.footerText.second}</p>
      <div className="flex flex-row items-center text-white gap-2">
        <p>Scroll to explore</p>
        <Link href="#introduction" className="text-lg w-10 h-10 rounded-full flex items-center justify-center border border-white ">
          <ArrowDownRight size={20} />
        </Link>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <article className="mt-30 mb-10 sm:mb-30">
      <div>
        <motion.div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-mute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>
      </div>
      <h1 className="font-display text-[clamp(4.5rem,15.5vw,10.5rem)] uppercase leading-[0.88] text-[#ececec]">
        {TEXT.mainTitle.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span className="block" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 * i, ease: "easeOut" }}>
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
    </article>
  );
};
const Navbar = () => {
  return (
    <motion.nav className="flex  items-center justify-between text-sm ">
      <ul className="flex items-center gap-5 sm:gap-5 ml-auto">
        {LINKS.map((link, index) => (
          <li key={link.label}>
            <motion.a initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 * index, ease: "easeInOut" }} href={link.href} className="group relative inline-block">
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default HomePage;
