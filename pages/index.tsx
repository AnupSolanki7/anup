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
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    api()
  }, []);

  const api = async() => {
    const result = await  axios.get('http://localhost:3000/api/hello')

    console.log(result);
    
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>Anup Solanki</title>
            <link rel="shortcut icon" href="/code.ico" />
            <meta name="title" property="og:title" content="My Portfolio Website | Anup Solanki"></meta>
            <meta property="og:type" content="website"></meta>
            <meta name="author" content="Anup Solanki"></meta>
            <meta name="image" property="og:image" content="https://drive.google.com/file/d/1no0iLOAAbOqBYpYefYrVIPa7UNqkTe6M/view?usp=share_link"></meta>
            <meta name="description" property="og:description" content=""></meta>
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
