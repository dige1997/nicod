import Image from "next/image";
import Projects from "./Components/Projects";
import HeroBanner from "./Components/HeroBanner";
import About from "./Components/About";


export default function Home() {
  return (
    <main className="">

      <HeroBanner />
      <About />
    <Projects />
    </main>
  );
}
