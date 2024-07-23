import React from "react";
import Styles from "./FloatingNav.module.css";
import Link from "next/link";
import Image from "next/image";
import MailIcon from "../icons/MailIcon";

const FloatingNav = () => {
  return (
    <section className={Styles.SectionContainer}>
      <Link href={"intelligenthomesafrica@gmail.com"} className={Styles.Widget}>
        <div className={Styles.textContainer}>
          <p className={Styles.callToAction}>Contact us for your enquires : </p>
          <p className={Styles.emailText}>iHomesAfrica@gmail.com</p>
        </div>
      </Link>
    </section>
  );
};

export default FloatingNav;
