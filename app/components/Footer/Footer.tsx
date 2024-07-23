"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./Footer.module.css";
import Image from "next/image";
import Ghanaicon from "../icons/Ghanaicon";
import Link from "next/link";
import Calendar from "../calendar";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeInUTC = (date: any) => {
    const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
    return format(utcDate, "HH:mm 'UTC+0'");
  };

  return (
    <section className={styles.sectionContainer} id="Footer">
      <Calendar />
      <div className={styles.footerBottomRow}>
        <div className={styles.botLeftContainer}>
          <div className={styles.copyrightContainer}>
            <p className={styles.containerTitle}>Version 1.0</p>
            <p className={styles.containerInfo}>©2024 - All rights reserved.</p>
          </div>
          <div className={styles.localTimeContainer}>
            <p className={styles.containerTitle}>Local Time</p>
            <p>{formatTimeInUTC(time)}</p>
          </div>
        </div>
        <div className={styles.botRightContainer}>
          <div className={styles.socialsContainer}>
            <p className={styles.containerTitle}>Socials</p>
            <div className={styles.socialsWrapper}>
              <Link href="https://www.linkedin.com/in/nicklas-kragbé-b420a617a/">
                <p>Linkedin</p>
              </Link>
              <Link href="https://github.com/Nicklas-17">
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
