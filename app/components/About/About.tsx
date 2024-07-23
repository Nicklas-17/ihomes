import React from "react";
import Styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

const About = ({}) => {
  return (
    <section className={Styles.AboutsectionContainer}>
      <div className={Styles.highlightsContainer}>
        <Image
          src="/images/HouseOne.png"
          width={700}
          height={500}
          alt="house one"
          objectFit="cover"
        />
      </div>
      <div className={Styles.descriptionIntro}>
        <p>
          We thrive on timely and tailored builds, fostering client
          satisfaction.
        </p>
        <div className={Styles.description}>
          <p>
            At iHomes, we excel in delivering timely and customized construction
            solutions that prioritize client satisfaction. Our team is dedicated
            to executing every project efficiently, with a keen focus on meeting
            deadlines while tailoring each build to your unique needs. By
            combining our expertise with a personalized approach, we ensure that
            each project not only progresses smoothly but also aligns perfectly
            with your vision, exceeding expectations at every turn.
          </p>
        </div>
        <Link href="/Gallery" className={Styles.Link}>
          Click me
        </Link>
      </div>
    </section>
  );
};

export default About;
