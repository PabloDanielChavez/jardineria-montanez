"use client";

import styles from "@/styles/sections/vision.module.scss";
import Image from "next/image";

export default function FraseMision() {
    return (
        <section className={styles.mision}>
            <Image 
                src="/img/fondo_vision.webp" 
                alt="Naturaleza y espacio urbano" 
                fill
                className={styles.mision_bg}
                quality={75} 
                priority={false}
            />
            <div className={styles.mision_overlay}>
                <blockquote className={styles.mision_texto}>
                    Nuestra <span className={styles.mision_highlight}>visión</span> es
                    transformar jardines, parques y <span className={styles.mision_highlight}>espacios</span> <span className={styles.mision_highlight}>verdes</span>    
                    <span> </span>en entornos que inspiren bienestar, combinando
                    <span className={styles.mision_highlight}>jardinería</span> <span className={styles.mision_highlight}>profesional</span>,<span> </span>
                    <span className={styles.mision_highlight}>paisajismo</span> y
                    respeto por la <span className={styles.mision_highlight}>naturaleza</span> <span> </span>
                    para que cada espacio alcance su mejor versión.
                </blockquote>
            </div>
        </section>
  );
}