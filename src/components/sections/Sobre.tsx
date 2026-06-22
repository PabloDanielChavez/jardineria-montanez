"use client";

import Image from "next/image";
import styles from "@/styles/sections/sobre.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numeroUno } from "../utils/variables";

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <h2 className={styles.sobre_titulo}>¿Quiénes somos?</h2>
            
            <div className={styles.sobre_layout}>
                <div className={styles.sobre_imgBox}>
                    <Image 
                        src="/img/jardinero.webp"
                        alt="Equipo de Jardinería Montañez trabajando"
                        fill
                        className={styles.sobre_img}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                    />
                </div>
                
                <div className={styles.sobre_contenido}>
                    <p className={styles.sobre_parrafo}>
                        <span className={styles.dropcap}>S</span>omos
                        <strong className={styles.sobre_destacado}> Jardinería Montañez</strong>, una empresa especializada en
                        <strong className={styles.sobre_destacado}> jardinería profesional</strong>,
                        <strong className={styles.sobre_destacado}> mantenimiento de jardines</strong>,
                        <strong className={styles.sobre_destacado}> paisajismo</strong> y
                        <strong className={styles.sobre_destacado}> cuidado de espacios verdes</strong>.

                        Con más de <strong className={styles.sobre_destacado}>2 años de experiencia</strong> y más de
                        <strong className={styles.sobre_destacado}> 100 proyectos realizados</strong>, brindamos
                        <strong className={styles.sobre_destacado}> servicios de jardinería</strong> adaptados a las necesidades
                        de cada cliente, combinando compromiso, atención al detalle y soluciones duraderas para hogares, comercios y propiedades de todo tipo.
                    </p>
                    <Link href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`} className={styles.sobre_btn}>
                        Solicitar Presupuesto
                    </Link>
                </div>
            </div>
        </section>
    );
}