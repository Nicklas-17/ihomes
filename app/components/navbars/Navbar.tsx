import React from "react";
import Styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={Styles.navBarWrapper}>
      <div className={Styles.navLeftContaienr}>
        <Link href="/">
          <div className={Styles.logoContainer}>LOGO</div>
        </Link>
      </div>

      <nav className={Styles.navMenu}>
        <Link href="/" className={Styles.linkContainer}>
          About us
        </Link>
        <Link className={Styles.linkContainer} href="/">
          Careers
        </Link>
        <Link className={Styles.linkContainer} href="/GalleryPage">
          Gallery
        </Link>
        <Link className={Styles.linkContainer} href="/">
          News
        </Link>
        <Link className={Styles.linkContainerTwo} href="/">
          Hire Us !
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
