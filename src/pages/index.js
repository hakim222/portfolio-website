import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Works from "@/components/Works";
import Contacts from "@/components/Contacts";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navigation />
      <About />
      <Works />
      <Skills />
      <Careers />
      <Contacts />
    </main>
  );
}
