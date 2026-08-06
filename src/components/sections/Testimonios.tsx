"use client";

import Image from "next/image";
import {
    FaCheckCircle,
    FaExternalLinkAlt,
    FaLeaf,
    FaMapMarkerAlt,
    FaQuoteLeft,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "@/styles/sections/testimonios.module.scss";

export type Testimonio = {
    id: string;
    comentario: string;
    nombre: string;
    zona?: string;
    servicio?: string;
    foto: string;
    fotoAlt?: string;
};

const GOOGLE_REVIEWS_URL =
    "https://business.google.com/v/_/AKsrIN3ArLBMDeHEoGLQ6bM3_zCSFxMBOgwMwQDszB9HC6Lm8SzHycOmqA2v/6c87/_/rev/";

const testimonios: Testimonio[] = [
    {
        id: "testimonio-sergio-scoffe",
        comentario:
            "Muy bueno todo su trabajo, mucha excelencia y profesión en su labor.",
        nombre: "Sergio Scoffe",
        foto: "/img/testimonios/Sergio_Scoffe.png",
        fotoAlt:
            "Foto de perfil de Sergio Scoffe, cliente de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-maira-garcete",
        comentario:
            "Exelentes, muy recomendables. Puntuales y muy prolijos🍀 La verdad 10/10",
        nombre: "Maira Garcete",
        foto: "/img/testimonios/Maira_Garcete.png",
        fotoAlt:
            "Foto de perfil de Maira Garcete, clienta de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-lucas-barboza",
        comentario:
            "Muy prolijos y rápidos en su labor. La verdad 100% recomendables",
        nombre: "Lucas ezequiel Barboza",
        foto: "/img/testimonios/Lucas_ezequiel_Barboza.png",
        fotoAlt:
            "Foto de perfil de Lucas Ezequiel Barboza, cliente de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-david-juarez",
        comentario: "Excelentes!!! Hacen un trabajo impecable!!",
        nombre: "David Juarez",
        foto: "/img/testimonios/David_Juarez.png",
        fotoAlt:
            "Foto de perfil de David Juarez, cliente de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-gisela-torres",
        comentario: "Muy buen trabajo..",
        nombre: "Gisela Mariel Torres",
        foto: "/img/testimonios/Gisela_Mariel_Torres.png",
        fotoAlt:
            "Foto de perfil de Gisela Mariel Torres, clienta de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-david-medina",
        comentario: "Trabajan muy bien! 👏🏽👏🏽",
        nombre: "David Medina",
        foto: "/img/testimonios/David_Medina.png",
        fotoAlt:
            "Foto de perfil de David Medina, cliente de Montañez Mantenimiento y Jardinería",
    },
    {
        id: "testimonio-florencia-montanez",
        comentario: "Muy lindo trabajo !!!",
        nombre: "Florencia Montañez",
        foto: "/img/testimonios/Florencia_Montañez.png",
        fotoAlt:
            "Foto de perfil de Florencia Montañez, clienta de Montañez Mantenimiento y Jardinería",
    },
];

export default function Testimonios() {
    if (testimonios.length === 0) {
        return null;
    }

    return (
        <section
            id="opiniones"
            className={styles.testimonios}
            aria-labelledby="testimonios-titulo"
        >
            <div className={styles.testimonios_decoracion} aria-hidden="true">
                <FaLeaf />
                <FaLeaf />
                <FaLeaf />
            </div>

            <div className={styles.testimonios_contenedor}>
                <header className={styles.testimonios_header}>
                    <div className={styles.testimonios_intro}>
                        <span className={styles.testimonios_etiqueta}>
                            <FaLeaf aria-hidden="true" />
                            Lo que dicen nuestros clientes
                        </span>

                        <h2 id="testimonios-titulo">
                            <span>El resultado se nota.</span>
                            <span>La confianza también.</span>
                        </h2>
                    </div>

                    <div className={styles.testimonios_resumen}>
                        <p>
                            Personas que nos eligieron para mejorar, recuperar o
                            mantener sus espacios verdes comparten cómo fue trabajar
                            con <strong>Jardinería Montañez.</strong>
                        </p>

                        <div
                            className={styles.testimonios_indicadores}
                            aria-label="Información sobre las opiniones"
                        >
                            <span className={styles.testimonios_indicador}>
                                <FaCheckCircle aria-hidden="true" />
                                Opiniones verificadas
                            </span>

                            <a
                                href={GOOGLE_REVIEWS_URL}
                                target="_blank"
                                rel="noreferrer"
                                className={`${styles.testimonios_indicador} ${styles.testimonios_indicador_google}`}
                                aria-label="Ver las opiniones de Jardinería Montañez en Google"
                            >
                                <FcGoogle aria-hidden="true" />
                                Reseñas en Google
                                <FaExternalLinkAlt
                                    className={styles.testimonios_indicador_externo}
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </header>

                <div className={styles.testimonios_grid} role="list">
                    {testimonios.map((item, index) => (
                        <article
                            key={item.id}
                            className={styles.testimonios_card}
                            role="listitem"
                        >
                            {index === 0 && (
                                <FaLeaf
                                    className={styles.testimonios_hoja_card}
                                    aria-hidden="true"
                                />
                            )}

                            <div className={styles.testimonios_card_header}>
                                <FaQuoteLeft
                                    className={styles.testimonios_comillas}
                                    aria-hidden="true"
                                />

                                {item.servicio && (
                                    <span className={styles.testimonios_servicio}>
                                        <FaLeaf aria-hidden="true" />
                                        {item.servicio}
                                    </span>
                                )}
                            </div>

                            <blockquote className={styles.testimonios_comentario}>
                                <p>{item.comentario}</p>
                            </blockquote>

                            <span
                                className={styles.testimonios_linea}
                                aria-hidden="true"
                            />

                            <footer className={styles.testimonios_autor}>
                                <div className={styles.testimonios_foto_contenedor}>
                                    <Image
                                        src={item.foto}
                                        alt={item.fotoAlt ?? `Foto de ${item.nombre}`}
                                        width={72}
                                        height={72}
                                        sizes="56px"
                                        className={styles.testimonios_foto}
                                    />
                                </div>

                                <div className={styles.testimonios_identidad}>
                                    <strong>{item.nombre}</strong>

                                    <div className={styles.testimonios_detalles}>
                                        <span
                                            className={styles.testimonios_verificado}
                                        >
                                            Cliente verificado
                                            <FaCheckCircle aria-hidden="true" />
                                        </span>

                                        {item.zona && (
                                            <span
                                                className={styles.testimonios_zona}
                                            >
                                                <FaMapMarkerAlt aria-hidden="true" />
                                                {item.zona}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
