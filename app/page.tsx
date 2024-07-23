import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbars/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/header/Header";
import AboutPage from "./components/About/About";
import TheTeam from "./components/TheTeam";
import FloatingNav from "./components/navbars/FloatingNav";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.NavParentContainer}>
        <Navbar />
      </div>
      <main className={styles.main}>
        <Header />
        <FloatingNav />
        <AboutPage />
        <Gallery />
        <TheTeam />
        <Footer />
      </main>
    </>
  );
}
