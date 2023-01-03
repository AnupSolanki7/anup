/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
