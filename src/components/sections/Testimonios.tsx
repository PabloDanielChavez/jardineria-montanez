"use client";

import { useState } from "react";
import styles from "@/styles/sections/testimonios.module.scss";

import { FaChevronLeft, FaChevronRight, FaStar } from "@/components/utils/Iconos";
import Image from "next/image";
const testimonios = [
    {
        id: 1,
        nombre: "Carlos Gómez",
        iniciales: "CG",
        comentario:
            "Excelente trabajo. Dejaron el jardín impecable y muy ordenado."
    },
    {
        id: 2,
        nombre: "María Fernández",
        iniciales: "MF",
        comentario:
            "Muy responsables y puntuales. Los recomiendo."
    },
    {
        id: 3,
        nombre: "Roberto Díaz",
        iniciales: "RD",
        comentario:
            "La poda quedó perfecta y dejaron todo limpio."
    },
    {
        id: 4,
        nombre: "Lucía Martínez",
        iniciales: "LM",
        comentario:
            "Gran atención y excelente calidad de trabajo."
    }
];

export default function Testimonios() {

    const [offset, setOffset] = useState(0);

    const moverIzquierda = () => {
        setOffset(prev => prev + 320);
    };

    const moverDerecha = () => {
        setOffset(prev => prev - 320);
    };

    return (
        <section className={styles.testimonios}>
            <Image
                src="/img/fondo_testimonios.webp"
                alt="Jardín profesional"
                fill
                className={styles.testimonios_bg}
            />
            <div className={styles.testimonios_overlay}>
                <div className={styles.testimonios_header}>
                    <h2>
                        Lo que opinan nuestros clientes
                    </h2>
                    <p>
                        Más de 100 trabajos realizados
                    </p>
                </div>
                <div className={styles.testimonios_grid}>
                    {testimonios.map((item) => (
                        <article
                            key={item.id}
                            className={styles.testimonios_card}
                        >
                            <p>
                                "{item.comentario}"
                            </p>
                            <div className={styles.testimonios_autor}>
                                <div className={styles.testimonios_avatar}>
                                    {item.iniciales}
                                </div>
                                <div>
                                    <h3>{item.nombre}</h3>
                                    <span>
                                        Cliente Verificado
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}