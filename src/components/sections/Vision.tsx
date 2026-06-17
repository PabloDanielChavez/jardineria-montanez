"use client";

import styles from "@/styles/sections/vision.module.scss";

export default function FraseMision() {
    return (
        <section className={styles.mision}>
            <div className={styles.mision_overlay}>
                <blockquote className={styles.mision_texto}>
                    Nuestra Misión es <span className={styles.mision_highlight}>rediseñar los espacios urbanos</span> para que puedas conectarte con la Naturaleza y descubrir tu mejor versión.
                </blockquote>
            </div>
        </section>
    );
}