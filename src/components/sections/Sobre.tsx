"use client";

import Image from "next/image";
import styles from "@/styles/sections/sobre.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { FaCalendarCheck, FaCamera, FaCompass, FaSeedling, FaWhatsapp } from "react-icons/fa";
import { MdEco, MdPhotoCamera } from "react-icons/md";
import { GiGardeningShears } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";

export default function Sobre() {
    return (
        <section id="por-que-confiar" className={styles.sobre}>
            <h2 className={styles.sobre_titulo}>
                Por qué confiar en Jardinería Montañez
            </h2>

            <div className={styles.sobre_layout}>
                <div className={styles.sobre_imgBox}>
                <Image
                    src="/img/trabajos/nosotros.webp"
                    alt="Jardinero trabajando en el mantenimiento de un espacio verde"
                    fill
                    className={styles.sobre_img}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                />
                </div>

                <div className={styles.sobre_contenido}>
                    <div className={styles.sobre_intro}>
                        <span className={styles.dropcap} aria-hidden="true">T</span>
                        <p className={styles.sobre_parrafo}>
                            rabajamos con
                            <strong className={styles.sobre_destacado}> atención directa</strong>,
                            comunicación clara y coordinación previa para que sepas qué trabajo se va a realizar antes de avanzar.
                        </p>
                    </div>

                    <div className={styles.sobre_divisor} aria-hidden="true">
                        <span><PiPlantFill /></span>
                    </div>

                    <ul className={styles.sobre_lista}>
                        <li>
                            <span className={styles.sobre_lista_icono} aria-hidden="true"><FaCamera /></span>
                            <span className={styles.sobre_lista_texto}>
                                <strong>Podés consultar</strong> enviando fotos del jardín, patio o terreno.
                            </span>
                        </li>
                        <li>
                            <span className={styles.sobre_lista_icono} aria-hidden="true"><FaSeedling /></span>
                            <span className={styles.sobre_lista_texto}>
                                <strong>Te orientamos</strong> según el estado del espacio y el servicio que necesites.
                            </span>
                        </li>
                        <li>
                            <span className={styles.sobre_lista_icono} aria-hidden="true"><FaCalendarCheck /></span>
                            <span className={styles.sobre_lista_texto}>
                                <strong>Realizamos</strong> trabajos puntuales o mantenimiento periódico.
                            </span>
                        </li>
                        <li>
                            <span className={styles.sobre_lista_icono} aria-hidden="true"><FaWhatsapp /></span>
                            <span className={styles.sobre_lista_texto}>
                                <strong>Coordinamos</strong> por WhatsApp el alcance, la zona, el día y el horario.
                            </span>
                        </li>
                    </ul>

                    <div className={styles.sobre_nota_box}>
                        <span className={styles.sobre_nota_icono} aria-hidden="true"><FaCompass /></span>
                        <p className={styles.sobre_nota}>
                            Si no sabés si necesitás corte, poda, limpieza, desmalezado o mantenimiento, <strong>mandanos fotos y te ayudamos a orientarte.</strong>
                        </p>
                    </div>

                    <Link
                        href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                        className={styles.sobre_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp aria-hidden="true" />
                        <span>Mandar fotos por WhatsApp</span>
                    </Link>
                </div>
            </div>
            </section>
    );
}
