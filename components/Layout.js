import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta title="Some Title" description="Some text" />

      <main className="container-fluid px-0">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
}
