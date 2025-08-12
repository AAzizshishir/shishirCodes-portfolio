import AboutMe from "./components/aboutMe/AboutMe";
import Banner from "./components/banner/Banner";
import ContactMe from "./components/contactMe/ContactMe";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projetcs";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}
