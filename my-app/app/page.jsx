import Image from "next/image";
import Projects from "./Components/Projects";
import HeroBanner from "./Components/HeroBanner";


export default function Home() {
  return (
    <main className="">

      <HeroBanner />
    <Projects />
    </main>
  );
}
