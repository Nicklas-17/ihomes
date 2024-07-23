import React from "react";
import Navbar from "../components/navbars/Navbar";
import styles from "./GalleryPage.module.css";
import Image from "next/image";
import { houseOptions } from "../data/data";

const GalleryPage = () => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.NavParentContainer}>
        <Navbar />
      </div>
      <section className={styles.SectionContainer}>
        <div className={styles.GridWrapper}>
          <div className={styles.GalleryGrid}>
            {houseOptions.map((house) => (
              <div key={house.id} className={styles.GalleryItem}>
                <div className={styles.ImageContainer}>
                  <Image
                    src={house.imageUrl}
                    alt={house.title}
                    className={styles.HouseImage}
                    fill
                  />
                </div>
                <div className={styles.InfoContainer}>
                  <h2 className={styles.Title}>{house.title}</h2>
                  <p className={styles.Price}>{house.price}</p>
                  <p className={styles.Description}>{house.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
