/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../src/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>Anup Solanki</title>
            <link rel="shortcut icon" href="/code.ico" />
          </Head>
          <Header />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
