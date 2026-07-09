"use client";

import Image from "next/image";
import styles from "@/styles/sections/sobre.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numeroUno } from "../utils/variables";

export default function Sobre() {
    return (
        <section id="por-que-confiar" className={styles.sobre}>
            <h2 className={styles.sobre_titulo}>
                Por qué confiar en Jardinería Montañez
            </h2>

            <div className={styles.sobre_layout}>
                <div className={styles.sobre_imgBox}>
                <Image
                    src="/img/jardinero.webp"
                    alt="Jardinero trabajando en el mantenimiento de un espacio verde"
                    fill
                    className={styles.sobre_img}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                />
                </div>

                <div className={styles.sobre_contenido}>
                <p className={styles.sobre_parrafo}>
                    <span className={styles.dropcap}>T</span>rabajamos con
                    <strong className={styles.sobre_destacado}> atención directa</strong>,
                    comunicación clara y coordinación previa para que sepas qué trabajo se va a realizar antes de avanzar.
                </p>

                <ul className={styles.sobre_lista}>
                    <li>Podés consultar enviando fotos del jardín, patio o terreno.</li>
                    <li>Te orientamos según el estado del espacio y el servicio que necesites.</li>
                    <li>Realizamos trabajos puntuales o mantenimiento periódico.</li>
                    <li>Coordinamos por WhatsApp el alcance, la zona, el día y el horario.</li>
                </ul>

                <p className={styles.sobre_nota}>
                    Si no sabés si necesitás corte, poda, limpieza, desmalezado o mantenimiento, mandanos fotos y te ayudamos a orientarte.
                </p>

                <Link
                    href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                    className={styles.sobre_btn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mandar fotos por WhatsApp
                </Link>
                </div>
            </div>
            </section>
    );
}
