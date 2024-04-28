import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import WorkExperience from "@/components/WorkExperience";
export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title> Vidushi's Portfolio</title>
      </Head>
      {/* Header */}
      <Header></Header>
      {/* Hero */}
      <section id="hero" className="snap-center">
      <Hero/>
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>
      
      {/* Experience */}
      <section id="experience" className="snap-center">
      <WorkExperience/>
      </section>
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact Me */}
    </div>
  );
}
