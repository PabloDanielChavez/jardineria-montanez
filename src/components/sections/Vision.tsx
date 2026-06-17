"use client";

import styles from "@/styles/sections/vision.module.scss";

export default function FraseMision() {
    return (
        <section className={styles.mision}>
            <div className={styles.mision_overlay}>
                <blockquote className={styles.mision_texto}>
                    Nuestra <span className={styles.mision_highlight}>Vision</span> es <span className={styles.mision_highlight}>rediseñar</span> los espacios urbanos para que puedas conectarte con la <span className={styles.mision_highlight}>Naturaleza</span> y descubrir su mejor <span className={styles.mision_highlight}>versión</span>.
                </blockquote>
            </div>
        </section>
    );
}