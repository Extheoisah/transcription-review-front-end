import Footer from "@/components/footer/Footer";
import GlobalContainer from "@/components/GlobalContainer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.app_container}>
      <Head>
        <title>Bitcoin Transcription Reviews</title>
        <meta name="description" content="Bitcoin Transcription Review" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./btc-transcript-circle-128.png" />
      </Head>
      <Navbar />
      <GlobalContainer flexGrow={1} py={4} mt={12}>
        {children}
      </GlobalContainer>
      <Footer />
    </div>
  );
};

export default Layout;
