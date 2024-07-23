"use client";
import React from "react";
import styles from "./Gallery.module.css";
import { ProjectProps } from "../../../../types";
import Modal from "../modal/Modal";

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.listItem}
    >
      <h2>{title}</h2>
      <p>Description</p>
    </div>
  );
};

export default Project;
