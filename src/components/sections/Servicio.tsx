"use client";

import styles from "@/styles/sections/servicios.module.scss";
import { GiBroom, GiGardeningShears, GiHighGrass, GiTreeGrowth, FaWhatsapp } from "@/components/utils/Iconos";
import Image from "next/image";
import Link from "next/link";
import { crearMensajeServicio, numeroUno } from "../utils/variables";

export default function Servicios() {
    const servicios = [
        {
            nombre: "Corte de pasto",
            texto: "Cortamos y emparejamos el pasto para que tu jardín, patio o frente se vea limpio, prolijo y cuidado.",
            consulta: "corte de pasto",
            icono: <GiHighGrass className={styles.servicios_icono} />,
            img: "/img/jardinero_cortando.webp",
        },
        {
            nombre: "Poda de árboles y arbustos",
            texto: "Realizamos poda de árboles y arbustos para mantenerlos sanos, seguros y estéticamente agradables.",
            consulta: "poda de árboles y arbustos",
            icono: <GiTreeGrowth className={styles.servicios_icono} />,
            img: "/img/jardinero_talando.webp",
        },
        {
            nombre: "Desmalezado y limpieza de terrenos",
            texto: "Retiramos maleza, pasto alto y acumulación de residuos verdes para recuperar el acceso y el orden del lugar.",
            consulta: "desmalezado y limpieza de terreno",
            icono: <GiBroom className={styles.servicios_icono} />,
            img: "/img/jardinero_limpiando.webp",
        },
        {
            nombre: "Mantenimiento de jardines",
            texto: "Realizamos tareas periódicas para conservar jardines, patios y espacios verdes limpios, cuidados y fáciles de disfrutar.",
            consulta: "mantenimiento de jardín",
            icono: <GiGardeningShears className={styles.servicios_icono} />,
            img: "/img/jardinero.webp",
        },
        {
            nombre: "Recuperación de espacios verdes",
            texto: "Trabajamos sobre jardines, patios o terrenos descuidados combinando corte, poda, limpieza y desmalezado según el caso.",
            consulta: "recuperación de espacio verde",
            icono: <GiBroom className={styles.servicios_icono} />,
            img: "/img/jardinero_trabajando_grande.webp",
        },
    ];

    return (
        <section id="servicios" className={styles.servicios}>
            <div className={styles.servicios_presentacion}>
                <h2 className={styles.servicios_titulo}>Servicios de jardinería y mantenimiento</h2>
                <p className={styles.servicios_subtitulo}>
                    Corte de pasto, poda, desmalezado, limpieza de terrenos y recuperación de espacios verdes para casas, quintas, comercios y patios.
                </p>
            </div>
            <div className={styles.servicios_layout}>
                <div className={styles.servicios_container_principal}>
                    {servicios.map((item, index) => (
                        <article key={index} className={styles.servicios_item}>
                            <div className={styles.servicios_media}>
                                <Image
                                    src={item.img}
                                    alt={item.nombre}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1218px) 50vw, 33vw"
                                    className={styles.servicios_imagen}
                                    loading="lazy"
                                    quality={75}
                                />
                            </div>
                            <div className={styles.servicios_overlay}>
                                <div className={styles.servicios_icono_box}>{item.icono}</div>
                                <div className={styles.servicios_contenido}>
                                    <h3 className={styles.servicios_heading}>{item.nombre}</h3>
                                    <p className={styles.servicios_texto}>{item.texto}</p>
                                    <Link
                                        href={`https://wa.me/${numeroUno}?text=${crearMensajeServicio(item.consulta)}`}
                                        className={styles.servicios_cta}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp />
                                        Consultar
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
