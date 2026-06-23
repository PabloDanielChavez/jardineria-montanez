"use client";

import Image from "next/image";
import styles from "@/styles/sections/galeria.module.scss";
import { useState } from "react";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const trabajos = [
    {
        id: 1,
        src: "/img/trabajos/1.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 2,
        src: "/img/trabajos/2.jpeg",
        alt: "Poda de árboles",
        descripcion:
            "Poda de arbol.",
    },
    {
        id: 3,
        src: "/img/trabajos/3.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 4,
        src: "/img/trabajos/4.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 5,
        src: "/img/trabajos/5.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 6,
        src: "/img/trabajos/6.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 7,
        src: "/img/trabajos/7.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 8,
        src: "/img/trabajos/8.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 9,
        src: "/img/trabajos/9.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 10,
        src: "/img/trabajos/10.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 11,
        src: "/img/trabajos/11.jpeg",
        alt: "Poda de árboles",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 12,
        src: "/img/trabajos/12.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 13,
        src: "/img/trabajos/13.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 14,
        src: "/img/trabajos/14.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 15,
        src: "/img/trabajos/15.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 16,
        src: "/img/trabajos/16.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 17,
        src: "/img/trabajos/17.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 18,
        src: "/img/trabajos/18.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 19,
        src: "/img/trabajos/19.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 20,
        src: "/img/trabajos/20.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 21,
        src: "/img/trabajos/21.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 22,
        src: "/img/trabajos/22.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 23,
        src: "/img/trabajos/23.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 24,
        src: "/img/trabajos/24.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 25,
        src: "/img/trabajos/25.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    },
    {
        id: 26,
        src: "/img/trabajos/26.jpeg",
        alt: "Poda de arbol",
        descripcion:
            "Poda de arbol",
    }
];

export default function Galeria() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState<null | typeof trabajos[number]>(null);
    const [cantidadVisible, setCantidadVisible] = useState(6);
    return (
      <section className={styles.galeria}>
        <h2 className={styles.galeria_titulo}>
            Trabajos Realizados
        </h2>
        <p className={styles.galeria_subtitulo}>
            Algunos de nuestros proyectos de jardinería,
            mantenimiento de Poda de arbol y poda profesional.
        </p>
        <div className={styles.galeria_grid}>
            {trabajos
                .slice(0, cantidadVisible)
                .map((trabajo) => (
                    <div
                        key={trabajo.id}
                        className={styles.galeria_card}
                        onClick={() => setImagenSeleccionada(trabajo)}
                    >
                        <Image
                            src={trabajo.src}
                            alt={trabajo.alt}
                            width={800}
                            height={1200}
                            className={styles.galeria_img}
                        />

                        <div className={styles.galeria_hover}>
                            <div className={styles.galeria_hover_icon}>
                                <FaMagnifyingGlassPlus />
                            </div>

                            <span className={styles.galeria_hover_text}>
                                Ver trabajo
                            </span>
                        </div>
                    </div>
                ))}
        </div>
        {cantidadVisible < trabajos.length && (
            <div className={styles.galeria_btnBox}>
                <button
                    className={styles.galeria_btnMostrar}
                    onClick={() =>
                        setCantidadVisible((prev) =>
                            Math.min(prev + 6, trabajos.length)
                        )
                    }
                >Ver más trabajos</button>
            </div>
        )}
        {imagenSeleccionada && (
            <div
                className={styles.modal}
                onClick={() => setImagenSeleccionada(null)}
            >
                <div
                    className={styles.modal_contenido}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className={styles.modal_cerrar}
                        onClick={() => setImagenSeleccionada(null)}
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
                        <h3 className={styles.modal_h3}> {imagenSeleccionada.alt} </h3>

                        <p className={styles.modal_texto}> {imagenSeleccionada.descripcion} </p>
                    </div>
                </div>
            </div>
        )}
    </section>
    );
}