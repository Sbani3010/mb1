import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import GetInvolved from "../components/GetInvolved";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Nav from "../components/Nav";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [1200]);
    // setLoading(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Head>
        <title>Mabhoyi Foundation</title>
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/vercel.svg" />
        <link rel="icon" href="/vercel.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta charset="utf-8" />
        <meta name="msapplication-TileImage" content="/vercel.svg" />
        <meta
          name="description"
          content="Mabhoyi Foundation is a youth led Foundation. Mental health is a big issue across South Africa. Young people suffer from it and lead to high rates of young people who commit suicide. Rates of depression, suicidal behavior, eating disorders and substance abuse has increased dramatically over the past few years."
        />
        <meta
          property="article:modified_time"
          content="2021-11-16T13:30:37+00:00"
        />
        <meta
          property="og:title"
          content="Education | Tutorials | Learning | Skills Development | Physiotherapy"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:url" content="https://mabhoyi.com/" />
        <meta property="og:site_name" content="Mabhoyi Foundation" />
      </Head>
      {loading ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ height: "100px", width: "100px" }}
          ></div>
        </div>
      ) : (
        <div>
          <Nav />
          <div className="container">
            <Header />
            <HomePage />
            <About />
            <GetInvolved />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
