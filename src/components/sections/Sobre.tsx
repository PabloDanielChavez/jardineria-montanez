"use client";

import Image from "next/image";
import styles from "@/styles/sections/sobre.module.scss";
import Link from "next/link";

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <h2 className={styles.sobre_titulo}>¿Quiénes somos?</h2>
            
            <div className={styles.sobre_layout}>
                <div className={styles.sobre_imgBox}>
                    <Image 
                        src="/img/jardinero.webp" // Asegúrate de tener esta ruta
                        alt="Equipo de Jardinería Montañez trabajando"
                        fill
                        className={styles.sobre_img}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                
                <div className={styles.sobre_contenido}>
                    <p>
                        <span className={styles.dropcap}>S</span>omos <strong>Jardineria Montañez</strong>, la Empresa Líder en Innovación, Diseño e Instalación de Espacios Verdes. 
                        Contamos con más de 5 años de experiencia y más de 100 Proyectos realizados en todo el País. 
                        Tenemos Profesionales Certificados en diferentes áreas, Alianzas Internacionales y Garantía sobre nuestros trabajos.
                    </p>
                    
                    <Link href="/contacto" className={styles.sobre_btn}>
                        PRESUPUESTAR AHORA
                    </Link>
                </div>
            </div>
        </section>
    );
}