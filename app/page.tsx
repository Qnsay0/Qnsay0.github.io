import VelocityMarquee from "@/components/VelocityMarquee";
import HomePage from "./(sections)/HomePage";
import { MotionConfig } from "motion/react";
import Introduction from "./(sections)/Introduction";
import Education from "./(sections)/Education";
import Projects from "./(sections)/Projects";
import TextSlider from "./(sections)/TextSlider";
import Footer from "./(sections)/Footer";
export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ink ">
        <HomePage />
        <div className="border-y border-white/10 bg-ink py-6 font-display text-[8vw] uppercase leading-none text-mute">
          <VelocityMarquee baseVelocity={-2}>Frontend Developer -</VelocityMarquee>
        </div>
        <Introduction />
        <Education />
        <Projects />
        <TextSlider />
        <Footer />
      </main>
    </MotionConfig>
  );
}
