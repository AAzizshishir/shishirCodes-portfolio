import AboutMe from "./components/aboutMe/AboutMe";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
    </div>
  );
}
