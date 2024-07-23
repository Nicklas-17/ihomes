"use client";

import React, { useState } from "react";
import { teamMember, teamMembers } from "../data/data";
import Styles from "./TheTeam.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const TheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedMembers: teamMember[] = teamMembers.slice(
    currentIndex,
    currentIndex + 4
  );

  const shuffleTeam = () => {
    const randomIndex = Math.floor(Math.random() * (teamMembers.length - 4));
    setCurrentIndex(randomIndex);
  };

  return (
    <section className={Styles.ColumnSectionContainer}>
      <div className={Styles.HeaderContainer}>
        <h2>ABOUT</h2>
        <p className={Styles.sectionIntroText}>
          Our team is driven by a genuine passion for enriching our clients'
          lives and making a lasting impact.
        </p>
        <div className={Styles.valuesContainer}>
          <div className={Styles.valuesLeftContainer}>
            <h3>CLEAR STRATEGY</h3>
            <p>
              we believe in a methodical approach to success. Our process begins
              with understanding your goals and setting a clear, actionable
              plan. We then commit our time and expertise to ensure every detail
              is meticulously executed, striving for excellence in every step.
            </p>
          </div>
          <div className={Styles.valuesRightContainer}>
            <h3>STRONG PARTNERSHIPS</h3>
            <p>
              Building trust is at the heart of our operations. We focus on
              cultivating a transparent and collaborative environment, where
              your needs are heard and valued. By fostering a strong
              partnership, we ensure that your project progresses smoothly and
              meets your highest expectations.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.teamSection}>
        {displayedMembers.map((member) => (
          <div key={member.name} className={Styles.teamGallery}>
            <>
              <Image
                src={member.image}
                alt={member.name}
                width={350}
                height={470}
                className={Styles.imageContainer}
              />
            </>
            <div className={Styles.textContainer}>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.shuffleContainer}>
        <motion.div
          onClick={shuffleTeam}
          className={Styles.shuffleButton}
          initial={{ "--x": "100%", scale: 1 } as any}
          animate={{ "--x": "-100%" } as any}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              stiffness: 20,
              damping: 15,
              mass: 0.1,
            },
          }}
        >
          <span className={Styles.buttonText}>Shuffle Team</span>
          <span className={Styles.spanBorder} />
        </motion.div>
      </div>
    </section>
  );
};

export default TheTeam;
