import Link from "next/link";

type socialsType = {
  label: string;
  href: string;
};
const SOCIALS: socialsType[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/bartlomiej-klimek-0a499b349/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Qnsay0",
  },
];

const Footer = () => (
  <footer id="footer" className="relative h-(--footer-h) bg-neutral-900 [--footer-h:520px] sm:[--footer-h:320px]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
    <div className="fixed bottom-0 left-0 right-0 mx-auto flex h-(--footer-h) max-w-7xl flex-col justify-between px-6 py-10 text-white sm:px-20">
      <div className="flex flex-col gap-10 sm:gap-20 sm:flex-row ">
        <div className="grid gap-x-20 gap-y-4 sm:grid-cols-[auto_auto_auto] sm:grid-rows-[auto_auto]">
          <div className="grid grid-rows-subgrid row-span-2 gap-4">
            <h2 className="self-end font-display text-7xl uppercase">enjoy</h2>
            <p className="max-w-sm text-sm text-muted-foreground">Built from scratch with Next.js, TypeScript, and a strong focus on smooth interactions and performance.</p>
          </div>

          <nav className="grid grid-rows-subgrid row-span-2 gap-4">
            <h3 className="self-end font-display text-xl tracking-wide">Explore</h3>
            <ul className="flex  flex-row sm:flex-col gap-2 text-sm text-muted-foreground">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="grid grid-rows-subgrid row-span-2 gap-4">
            <h3 className="self-end font-display text-xl tracking-wide">Get in touch</h3>
            <ul className="flex flex-row sm:flex-col gap-2 text-sm text-muted-foreground">
              <li>barteklim06@gmail.com</li>
            </ul>
          </nav>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">© 2026 Bartłomiej</p>
    </div>
  </footer>
);

export default Footer;
