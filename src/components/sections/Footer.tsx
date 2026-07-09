"use client";

import Image from "next/image";
import Link from "next/link";
import { MdAccessTime, MdLocationOn, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/footer.module.scss";
import { mensajeWSP, numeroDos, numeroUno } from "../utils/variables";

const footerMenu = [
    { nombre: "Inicio", target: "inicio" },
    { nombre: "Servicios", target: "servicios" },
    { nombre: "Contacto", target: "contacto" },
    { nombre: "Trabajos", target: "trabajos" },
    { nombre: "Cómo trabajamos", target: "como-trabajamos" },
    { nombre: "Preguntas frecuentes", target: "preguntas" },
];

const footerServicios = [
    "Corte de pasto",
    "Poda de árboles y arbustos",
    "Desmalezado",
    "Limpieza de terrenos y patios",
    "Mantenimiento de jardines",
    "Recuperación de espacios verdes",
];

export default function Footer() {
    const scrollToSection = (targetId: string) => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_contenedor}>
                <div className={styles.footer_box_logo}>
                    <Image
                        className={styles.footer_logo_imagen}
                        src="/img/logo_nombre_chico.png"
                        alt="Jardinería Montañez"
                        width={200}
                        height={57}
                    />
                    <p className={styles.footer_descripcion}>
                        Servicios de jardinería, mantenimiento y recuperación de espacios verdes.
                    </p>
                    <p className={styles.footer_microcopy}>
                        Trabajos puntuales o periódicos para jardines, patios, terrenos y espacios exteriores.
                    </p>
                </div>

                <div className={styles.footer_col}>
                    <h2 className={styles.footer_h3}>Secciones</h2>
                    <ul className={styles.footer_ul}>
                        {footerMenu.map((item) => (
                            <li key={item.target} className={styles.footer_li}>
                                <button
                                    type="button"
                                    className={styles.footer_LINK}
                                    onClick={() => scrollToSection(item.target)}
                                >
                                    {item.nombre}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footer_col}>
                    <h2 className={styles.footer_h3}>Servicios</h2>
                    <ul className={styles.footer_ul}>
                        {footerServicios.map((servicio) => (
                            <li key={servicio} className={styles.footer_servicio}>
                                {servicio}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footer_col}>
                    <h2 className={styles.footer_h3}>Contacto</h2>
                    <ul className={styles.footer_ul}>
                        <li className={styles.footer_li}>
                            <Link
                                href="https://maps.app.goo.gl/F85DGScrQwF3ub8F8"
                                className={styles.footer_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLocationOn className={styles.footer_icono} />
                                Base en Cañuelas
                            </Link>
                        </li>
                        <li className={styles.footer_li}>
                            <Link
                                href={`https://wa.me/${numeroUno}?text=${mensajeWSP}`}
                                className={styles.footer_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdPhone className={styles.footer_icono} />
                                WhatsApp: +54 9 2226 60-7508
                            </Link>
                        </li>
                        <li className={styles.footer_li}>
                            <Link
                                href={`https://wa.me/${numeroDos}?text=${mensajeWSP}`}
                                className={styles.footer_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdPhone className={styles.footer_icono} />
                                Alternativo: +54 9 11 6368-3403
                            </Link>
                        </li>
                        <li className={styles.footer_li}>
                            <span className={styles.footer_TEXTO}>
                                <MdAccessTime className={styles.footer_icono} />
                                Lunes a sábado, de 9 a 19 h
                            </span>
                        </li>
                    </ul>
                    <Link
                        href={`https://wa.me/${numeroUno}?text=${mensajeWSP}`}
                        className={styles.footer_whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                        Consultar
                    </Link>
                </div>
            </div>

            <div className={styles.footer_legal}>
                <p className={styles.footer_copy_p}>
                    Todos los derechos reservados
                    <strong className={styles.destacadoDorado}> | </strong>
                    ©2026 <strong className={styles.destacadoPrimary}>Jardinería Montañez</strong>
                </p>
                <p className={styles.footer_copy_p}>
                    Desarrollado por{" "}
                    <Link
                        href="https://paginaswebchavez.netlify.app"
                        aria-label="Sitio del desarrollador"
                        className={styles.footer_LINKDESARROLLADOR}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className={styles.destacadoPrimary}>PaginasWebChavez</strong>
                    </Link>
                </p>
            </div>
        </footer>
    );
}
