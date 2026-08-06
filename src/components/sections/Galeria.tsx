"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaCircleCheck,
    FaHouse,
    FaLeaf,
    FaLocationDot,
    FaMagnifyingGlassPlus,
    FaXmark,
} from "react-icons/fa6";
import { FaWhatsapp } from "@/components/utils/Iconos";
import styles from "@/styles/sections/galeria.module.scss";
import { crearMensajeServicio, numeroUno } from "../utils/variables";

type Trabajo = {
    id: number;
    src: string;
    alt: string;
    titulo: string;
    descripcion: string;
    servicio: string;
    zona: string;
    tipo: string;
    tareas: string[];
};

const trabajos: Trabajo[] = Array.from({ length: 11 }, (_, index) => {
    const id = index + 1;

    return {
        id,
        src: `/img/trabajos/montañez_${id}.webp`,
        alt: `Trabajo de jardinería realizado por Jardinería Montañez, imagen ${id}`,
        titulo: `Trabajo de jardinería ${id}`,
        descripcion:
            "Registro de un trabajo real realizado por Jardinería Montañez.",
        servicio: "Mantenimiento",
        zona: "Cañuelas",
        tipo: "Jardín residencial",
        tareas: [
            "Corte y nivelado del césped",
            "Limpieza del perímetro",
            "Mantenimiento de canteros",
        ],
    };
});

export default function Galeria() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState<Trabajo | null>(null);
    const [cantidadVisible, setCantidadVisible] = useState(6);

    const indiceSeleccionado = useMemo(() => {
        if (!imagenSeleccionada) {
            return -1;
        }

        return trabajos.findIndex((trabajo) => trabajo.id === imagenSeleccionada.id);
    }, [imagenSeleccionada]);

    const miniaturas = useMemo(() => {
        if (indiceSeleccionado < 0) {
            return [];
        }

        return Array.from({ length: 3 }, (_, desplazamiento) => {
            const indice = (indiceSeleccionado + desplazamiento) % trabajos.length;
            return trabajos[indice];
        });
    }, [indiceSeleccionado]);

    const mostrarAnterior = () => {
        if (indiceSeleccionado < 0) {
            return;
        }

        const indiceAnterior =
            (indiceSeleccionado - 1 + trabajos.length) % trabajos.length;
        setImagenSeleccionada(trabajos[indiceAnterior]);
    };

    const mostrarSiguiente = () => {
        if (indiceSeleccionado < 0) {
            return;
        }

        const indiceSiguiente = (indiceSeleccionado + 1) % trabajos.length;
        setImagenSeleccionada(trabajos[indiceSiguiente]);
    };

    useEffect(() => {
        if (!imagenSeleccionada) {
            return undefined;
        }

        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const manejarTeclado = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setImagenSeleccionada(null);
            }

            if (event.key === "ArrowLeft") {
                mostrarAnterior();
            }

            if (event.key === "ArrowRight") {
                mostrarSiguiente();
            }
        };

        window.addEventListener("keydown", manejarTeclado);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", manejarTeclado);
        };
    }, [imagenSeleccionada, indiceSeleccionado]);

    return (
        <section id="trabajos" className={styles.galeria}>
            <h2 className={styles.galeria_titulo}>
                Resultados jardines, patios y terrenos
            </h2>
            <p className={styles.galeria_subtitulo}>
                Mirá algunos trabajos de corte de pasto, poda, desmalezado,
                limpieza de terrenos y recuperación de espacios verdes.
            </p>

            <div className={styles.galeria_grid}>
                {trabajos.slice(0, cantidadVisible).map((trabajo) => (
                    <button
                        type="button"
                        key={trabajo.id}
                        className={styles.galeria_card}
                        onClick={() => setImagenSeleccionada(trabajo)}
                        aria-label={`Abrir galería de ${trabajo.titulo}`}
                    >
                        <Image
                            src={trabajo.src}
                            alt={trabajo.alt}
                            width={800}
                            height={1200}
                            className={styles.galeria_img}
                        />

                        <span className={styles.galeria_hover}>
                            <span className={styles.galeria_hover_contenido}>
                                <span className={styles.galeria_hover_etiqueta}>
                                    <FaLeaf aria-hidden="true" />
                                    Trabajo
                                </span>

                                <span className={styles.galeria_hover_titulo}>
                                    Ver resultado
                                </span>
                            </span>

                            <span
                                className={styles.galeria_hover_icon}
                                aria-hidden="true"
                            >
                                <FaMagnifyingGlassPlus />
                            </span>
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
                            setCantidadVisible((prev) =>
                                Math.min(prev + 6, trabajos.length),
                            )
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
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setImagenSeleccionada(null);
                        }
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="trabajo-seleccionado"
                    aria-describedby="descripcion-trabajo-seleccionado"
                >
                    <div className={styles.modal_contenido}>
                        <button
                            type="button"
                            className={styles.modal_cerrar}
                            onClick={() => setImagenSeleccionada(null)}
                            aria-label="Cerrar trabajo ampliado"
                        >
                            <FaXmark aria-hidden="true" />
                        </button>

                        <div className={styles.modal_imagen}>
                            <Image
                                src={imagenSeleccionada.src}
                                alt={imagenSeleccionada.alt}
                                fill
                                priority
                                sizes="(max-width: 900px) 100vw, 64vw"
                                className={styles.modal_img}
                            />

                            <div
                                className={styles.modal_imagen_degradado}
                                aria-hidden="true"
                            />

                            <button
                                type="button"
                                className={`${styles.modal_navegacion} ${styles.modal_navegacion_anterior}`}
                                onClick={mostrarAnterior}
                                aria-label="Ver trabajo anterior"
                            >
                                <FaArrowLeft aria-hidden="true" />
                            </button>

                            <button
                                type="button"
                                className={`${styles.modal_navegacion} ${styles.modal_navegacion_siguiente}`}
                                onClick={mostrarSiguiente}
                                aria-label="Ver trabajo siguiente"
                            >
                                <FaArrowRight aria-hidden="true" />
                            </button>

                            <div
                                className={styles.modal_miniaturas}
                                aria-label="Vista previa de trabajos"
                            >
                                {miniaturas.map((trabajo, index) => (
                                    <button
                                        type="button"
                                        key={trabajo.id}
                                        className={`${styles.modal_miniatura} ${
                                            index === 0
                                                ? styles.modal_miniatura_activa
                                                : ""
                                        }`}
                                        onClick={() => setImagenSeleccionada(trabajo)}
                                        aria-label={`Ver ${trabajo.titulo}`}
                                        aria-current={index === 0 ? "true" : undefined}
                                    >
                                        <Image
                                            src={trabajo.src}
                                            alt=""
                                            fill
                                            sizes="96px"
                                            className={styles.modal_miniatura_img}
                                        />
                                    </button>
                                ))}

                                <div className={styles.modal_indicadores} aria-hidden="true">
                                    {miniaturas.map((trabajo, index) => (
                                        <span
                                            key={trabajo.id}
                                            className={
                                                index === 0
                                                    ? styles.modal_indicador_activo
                                                    : undefined
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.modal_info}>
                            <span className={styles.modal_etiqueta}>
                                <FaLeaf aria-hidden="true" />
                                Trabajo real
                            </span>

                            <h3
                                id="trabajo-seleccionado"
                                className={styles.modal_h3}
                            >
                                {imagenSeleccionada.titulo}
                            </h3>

                            <p
                                id="descripcion-trabajo-seleccionado"
                                className={styles.modal_texto}
                            >
                                {imagenSeleccionada.descripcion}
                            </p>

                            <dl className={styles.modal_metadatos}>
                                <div className={styles.modal_metadato}>
                                    <dt>
                                        <FaLeaf aria-hidden="true" />
                                        Servicio:
                                    </dt>
                                    <dd>{imagenSeleccionada.servicio}</dd>
                                </div>

                                <div className={styles.modal_metadato}>
                                    <dt>
                                        <FaLocationDot aria-hidden="true" />
                                        Zona:
                                    </dt>
                                    <dd>{imagenSeleccionada.zona}</dd>
                                </div>

                                <div className={styles.modal_metadato}>
                                    <dt>
                                        <FaHouse aria-hidden="true" />
                                        Tipo:
                                    </dt>
                                    <dd>{imagenSeleccionada.tipo}</dd>
                                </div>
                            </dl>

                            <div className={styles.modal_separador} aria-hidden="true">
                                <span />
                                <FaLeaf />
                                <span />
                            </div>

                            <div className={styles.modal_realizado}>
                                <h4>Qué se realizó</h4>
                                <ul>
                                    {imagenSeleccionada.tareas.map((tarea) => (
                                        <li key={tarea}>
                                            <FaCircleCheck aria-hidden="true" />
                                            {tarea}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.modal_acciones}>
                                <Link
                                    href={`https://wa.me/${numeroUno}?text=${crearMensajeServicio(`un trabajo similar a ${imagenSeleccionada.titulo}`)}`}
                                    className={styles.modal_cta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp aria-hidden="true" />
                                    Quiero algo así
                                </Link>

                                <button
                                    type="button"
                                    className={styles.modal_secundario}
                                    onClick={() => setImagenSeleccionada(null)}
                                >
                                    Ver más trabajos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
