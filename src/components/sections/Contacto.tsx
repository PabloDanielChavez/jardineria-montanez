"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa6";
import styles from "@/styles/sections/contacto.module.scss";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { FaWhatsapp } from "../utils/Iconos";

export default function Contacto() {
    return (
        <section id="contacto" className={styles.contacto}>
            <div className={styles.contacto_container}>
                <div className={styles.contacto_panel}>
                    <Image
                        src="/img/decor/contacto-hojas-izquierda.svg"
                        alt=""
                        width={230}
                        height={320}
                        className={styles.contacto_svg_izquierda}
                        aria-hidden="true"
                    />

                    <Image
                        src="/img/decor/contacto-hojas-derecha.svg"
                        alt=""
                        width={220}
                        height={320}
                        className={styles.contacto_svg_derecha}
                        aria-hidden="true"
                    />

                    <div className={styles.contacto_contenido}>
                        <div className={styles.contacto_texto}>
                            <h2 className={styles.contacto_titulo}>
                                ¿Querés dejar tu jardín, patio o terreno más prolijo?
                            </h2>

                            <p className={styles.contacto_subtitulo}>
                                Podemos ayudarte a ordenar, limpiar o mantener tu jardín, patio o terreno para que vuelva a ser un espacio más cómodo y agradable.
                            </p>

                            <p className={styles.contacto_microcopy}>
                                <span
                                    className={styles.contacto_microcopy_icono}
                                    aria-hidden="true"
                                >
                                    <FaLeaf />
                                </span>
                                <strong>Atención:</strong> lunes a sábado, de 9 a 19 h.
                            </p>
                        </div>

                        <div className={styles.contacto_divisor} aria-hidden="true" />

                        <div className={styles.contacto_acciones}>
                            <Link
                                href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                                className={styles.contacto_boton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                                <span>Dejarlo prolijo</span>
                            </Link>

                            <p className={styles.contacto_badge}>
                                <span
                                    className={styles.contacto_badge_icono}
                                    aria-hidden="true"
                                >
                                    <FaLeaf />
                                </span>
                                Respuesta rápida por WhatsApp
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
