"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaWhatsapp } from "@/components/utils/Iconos";
import styles from "@/styles/sections/galeria.module.scss";
import { crearMensajeServicio, numeroUno } from "../utils/variables";

const trabajos = Array.from({ length: 26 }, (_, index) => {
    const id = index + 1;

    return {
        id,
        src: `/img/trabajos/${id}.jpeg`,
        alt: `Trabajo de jardinería realizado por Jardinería Montañez, imagen ${id}`,
        titulo: `Trabajo de jardinería ${id}`,
        descripcion: "Registro de un trabajo real realizado por Jardinería Montañez.",
    };
});

export default function Galeria() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState<null | typeof trabajos[number]>(null);
    const [cantidadVisible, setCantidadVisible] = useState(6);

    return (
        <section id="trabajos" className={styles.galeria}>
            <h2 className={styles.galeria_titulo}>Resultados jardines, patios y terrenos</h2>
            <p className={styles.galeria_subtitulo}>
                Mirá algunos trabajos de corte de pasto, poda, desmalezado, limpieza de terrenos y recuperación de espacios verdes.
            </p>

            <div className={styles.galeria_grid}>
                {trabajos.slice(0, cantidadVisible).map((trabajo) => (
                    <button
                        type="button"
                        key={trabajo.id}
                        className={styles.galeria_card}
                        onClick={() => setImagenSeleccionada(trabajo)}
                        aria-label={`Ampliar ${trabajo.titulo}`}
                    >
                        <Image
                            src={trabajo.src}
                            alt={trabajo.alt}
                            width={800}
                            height={1200}
                            className={styles.galeria_img}
                        />
                        <span className={styles.galeria_hover}>
                            <span className={styles.galeria_hover_icon} aria-hidden="true">
                                <FaMagnifyingGlassPlus />
                            </span>
                            <span className={styles.galeria_hover_text}>Ver resultado</span>
                        </span>
                    </button>
                ))}
            </div>

            <div className={styles.galeria_acciones}>
                {cantidadVisible < trabajos.length && (
                    <button
                        type="button"
                        className={styles.galeria_btnMostrar}
                        onClick={() =>
                            setCantidadVisible((prev) => Math.min(prev + 6, trabajos.length))
                        }
                    >
                        Ver más resultados
                    </button>
                )}
                <Link
                    href={`https://wa.me/${numeroUno}?text=${crearMensajeServicio("un trabajo de jardinería similar a los de la web")}`}
                    className={styles.galeria_cta}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                    Quiero algo así
                </Link>
            </div>

            {imagenSeleccionada && (
                <div
                    className={styles.modal}
                    onClick={() => setImagenSeleccionada(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="trabajo-seleccionado"
                >
                    <div className={styles.modal_contenido} onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className={styles.modal_cerrar}
                            onClick={() => setImagenSeleccionada(null)}
                            aria-label="Cerrar imagen ampliada"
                        >
                            ✕
                        </button>
                        <div className={styles.modal_imagen}>
                            <Image
                                src={imagenSeleccionada.src}
                                alt={imagenSeleccionada.alt}
                                width={1200}
                                height={1200}
                                className={styles.modal_img}
                            />
                        </div>
                        <div className={styles.modal_info}>
                            <h3 id="trabajo-seleccionado" className={styles.modal_h3}>
                                {imagenSeleccionada.titulo}
                            </h3>
                            <p className={styles.modal_texto}>{imagenSeleccionada.descripcion}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
