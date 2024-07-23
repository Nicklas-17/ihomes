import React from "react";
import Styles from "./Header.module.css";
import { EB_Garamond, Open_Sans } from "next/font/google";
import Image from "next/image";
import CopyrightIcon from "../icons/Copyright";

const Header = () => {
  return (
    <section className={Styles.SectionContainer}>
      <div className={Styles.headerTextWrapper}>
        <div className={Styles.h1Wrapper}>
          <h1>iHomes</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "2%",
            }}
          >
            <CopyrightIcon />
          </div>
        </div>

        <h2 className={Styles.descriptionOne}>
          Building Your Home in Ghana While You Live Abroad. A dedicated team
          for your tailored, reliable and memorable,
          <br />
          Construction projects.
        </h2>
      </div>
      <div className={Styles.ImageWrapper}>
        {/* <Video src="/videos/HeaderVideo.mp4" layout="fill" /> */}
        <Image
          src="/images/LynsBridge.png"
          alt="house one"
          objectFit="cover"
          fill
        />
      </div>
    </section>
    // <section className={Styles.SectionContainer}>
    //   <video style={{ width: "90vw", height: "90vh" }} autoPlay muted loop>
    //     <source src="/videos/HeaderVideo.mp4" type="video/mp4" />
    //   </video>
    // </section>
  );
};

export default Header;
