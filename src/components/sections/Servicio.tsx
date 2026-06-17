"use client";

import styles from "@/styles/sections/servicios.module.scss";
import { GiBroom, GiGardeningShears, GiTreeGrowth, GiWateringCan,  } from "@/components/utils/Iconos";
import Image from "next/image";


export default function Servicios() {

    const servicios = [
        {
            nombre: "Mantenimiento de Jardines",
            texto: "Poda, limpieza y cuidado profesional para mantener jardines saludables, ordenados y con una apariencia impecable durante todo el año.",
            icono: <GiGardeningShears className={styles.servicios_icono}/>,
            img: "/img/jardinero.webp"
        },
        {
            nombre: "Sistemas de Riego",
            texto: "Instalación, reparación y optimización de sistemas de riego para garantizar un uso eficiente del agua y el crecimiento de tus plantas.",
            icono: <GiWateringCan className={styles.servicios_icono}/>,
            img: "/img/jardinero_regando.webp"
        },
        {
            nombre: "Limpieza de Exteriores",
            texto: "Limpieza integral de patios, veredas y espacios exteriores, eliminando hojas, residuos y acumulaciones que afectan la estética.",
            icono: <GiBroom className={styles.servicios_icono}/>,
            img: "/img/jardinero_limpiando.webp"
        },
        {
            nombre: "Poda de Árboles",
            texto: "Poda segura y controlada para mejorar la salud, el crecimiento y la seguridad de árboles, arbustos y especies ornamentales.",
            icono: <GiTreeGrowth className={styles.servicios_icono}/>,
            img: "/img/jardinero_talando.webp"
        }
    ];
    return (
        <section className={styles.servicios}>
            <div  className={styles.servicios_presentacion}>
                <h2 className={styles.servicios_titulo}>¿Qué ofrecemos?</h2>
                <p className={styles.servicios_subtitulo}>Más de 2 años ofreciendo un mantenimiento integral a nuestros clientes</p>
            </div>
            <div className={styles.servicios_layout}>
                <div className={styles.servicios_container_principal}>
                {servicios.map((item, index) => (
                    <div key={index} className={styles.servicios_item}>
                    <Image 
                        src={item.img} 
                        alt={item.nombre}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className={styles.servicios_imagen}
                        loading="lazy"
                        quality={75}
                    />
                    <div className={styles.servicios_overlay}>
                        <div className={styles.servicios_icono_box}>{item.icono}</div>
                        <div className={styles.servicios_contenido}>
                            <h3 className={styles.servicios_heading}>{item.nombre}</h3>
                            <p className={styles.servicios_texto}>{item.texto}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
  );
}