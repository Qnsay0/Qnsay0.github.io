import MaxWidthContainer from "@/components/MaxWidthContainer";
import SectionHeader from "@/components/SectionHeader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const DATA = [
  {
    title: "The-Voice-Of-pwr",
    subtitle: "Design & Development",
    tools: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    href: "https://github.com/robuspospolitus/the-voice-of-pwr",
  },
  {
    title: "Boolean-solver",
    subtitle: "Design & Development",
    tools: ["Next.js", "Tailwind CSS", "JavaScript"],
    href: "https://github.com/Qnsay0/boolean-solver",
  },
  {
    title: "Portfolio",
    subtitle: "Design & Development",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    href: "/",
  },
];

type Project = (typeof DATA)[number];
const Projects = () => {
  return (
    <MaxWidthContainer className={"px-4 mt-30"}>
      <SectionHeader sectionName="My work" index="03" id="my-work" />
      {DATA.map((project) => (
        <Link key={project.title} href={project.href} target="_blank" rel="noreferrer" className="block">
          <ProjectCard {...project} />
        </Link>
      ))}
    </MaxWidthContainer>
  );
};

const ProjectCard = ({ title, subtitle, tools }: Project) => {
  return (
    <div className="px-2 mt-10 flex flex-col gap-5 ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <h1 className="hover:text-white/70 text-white duration-100 ease-in-out uppercase font-display text-[clamp(4.5rem,10.5vw,7.5rem)] leading-none">{title}</h1>
        <div className="text-white lg:ml-auto space-y-2 text-sm ">
          <ul className="flex flex-row gap-2 text-muted-foreground max-w-xs">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="bg-ink-3" />
    </div>
  );
};
export default Projects;
