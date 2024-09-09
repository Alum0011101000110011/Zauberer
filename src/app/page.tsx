import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Infos from "@/components/Infos";
import Socialmedia from "@/components/socialmedia";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />      
      <Contact />
      <About />
      <Infos />
      <Socialmedia />
      <Contact />
      <Footer />
    </>
  );
}
