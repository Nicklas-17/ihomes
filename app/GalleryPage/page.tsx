import React from "react";
import Navbar from "../components/navbars/Navbar";
import styles from "./GalleryPage.module.css";
import Image from "next/image";

export const houseOptions = [
  {
    id: 1,
    title: "Modern Family Home",
    price: "$500,000",
    description: "A beautiful modern home with 4 bedrooms and 3 bathrooms.",
    imageUrl: "/images/AstoriaVillas.png",
  },
  {
    id: 2,
    title: "Luxury Villa",
    price: "$1,200,000",
    description: "A luxurious villa with a private pool and garden.",
    imageUrl: "/images/BeverlyCourt.png",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/HouseOne.png",
  },
  {
    id: 4,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/SkyVillaLakeside.png",
  },
  {
    id: 5,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
  {
    id: 6,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
  {
    id: 7,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
  {
    id: 8,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
  {
    id: 9,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
  {
    id: 10,
    title: "Cozy Cottage",
    price: "$350,000",
    description: "A cozy cottage perfect for a small family.",
    imageUrl: "/images/LynsBridge.png",
  },
];

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
