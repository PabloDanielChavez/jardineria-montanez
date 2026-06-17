"use client";

import styles from "@/styles/sections/loading.module.scss";
import { PiPlantFill } from "@/components/utils/Iconos";

export default function Loading() {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.glow}></div>

      <div className={styles.gardenLoader}>
        <PiPlantFill className={styles.plantIcon} />

        <span className={`${styles.leaf} ${styles.leaf1}`} />
        <span className={`${styles.leaf} ${styles.leaf2}`} />
        <span className={`${styles.leaf} ${styles.leaf3}`} />
        <span className={`${styles.leaf} ${styles.leaf4}`} />
      </div>

      <div className={styles.loadingText}>
        Trabajando la naturaleza
        <span className={styles.dots}></span>
      </div>
    </section>
  );
}