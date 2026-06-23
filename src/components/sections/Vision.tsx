"use client";

import styles from "@/styles/sections/vision.module.scss";
import Image from "next/image";

export default function FraseMision() {
    return (
        <section className={styles.vision}>
            <Image 
                src="/img/fondo_vision.webp" 
                alt="Naturaleza y espacio urbano" 
                fill
                className={styles.vision_bg}
                quality={75} 
                priority={false}
            />
            <div className={styles.vision_overlay}>
                <blockquote className={styles.vision_texto}>
                    Nuestra <span className={styles.vision_highlight}>visión</span> es
                    transformar jardines, parques y <span className={styles.vision_highlight}>espacios</span> <span className={styles.vision_highlight}>verdes</span>    
                    <span> </span>en entornos que inspiren bienestar, combinando
                    <span className={styles.vision_highlight}>jardinería</span> <span className={styles.vision_highlight}>profesional</span>,<span> </span>
                    <span className={styles.vision_highlight}>paisajismo</span> y
                    respeto por la <span className={styles.vision_highlight}>naturaleza</span> <span> </span>
                    para que cada espacio alcance su mejor versión.
                </blockquote>
            </div>
        </section>
  );
}