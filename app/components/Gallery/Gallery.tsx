"use client";

import React from "react";
import Styles from "./Gallery.module.css";
import Link from "next/link";
import { useState } from "react";
import Project from "./project";
import { GalleryState, ModalState } from "@/types";
import Modal from "../modal/Modal";

const Gallery: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  const projects: GalleryState[] = [
    {
      title: "Sky Villas",
      source: "/images/SkyVillaLakeside.png",
      color: "#000000",
    },
    {
      title: "Beverly Court",
      source: "/images/BeverlyCourt.png",
      color: "#000000",
    },
    {
      title: "Astoria Villas",
      source: "/images/AstoriaVillas.png",
      color: "#000000",
    },
    {
      title: "Lynsbridge",
      source: "/images/LynsBridge.png",
      color: "#000000",
    },
  ];

  return (
    <section className={Styles.SectionContainer}>
      <div className={Styles.GalleryList}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
};

export default Gallery;
