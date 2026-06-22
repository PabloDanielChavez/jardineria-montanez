"use client";

import styles from "@/styles/sections/servicios.module.scss";
import { GiBroom, GiGardeningShears, GiHighGrass, GiTreeGrowth, GiWateringCan,  } from "@/components/utils/Iconos";
import Image from "next/image";


export default function Servicios() {

    const servicios = [
        {
            nombre: "Mantenimiento de Jardines",
            texto: "Poda, desmalezado, limpieza y cuidado de jardines para mantener espacios verdes saludables, ordenados y con una apariencia impecable durante todo el año.",
            icono: <GiGardeningShears className={styles.servicios_icono}/>,
            img: "/img/jardinero.webp"
        },
        {
            nombre: "Sistemas de Riego",
            texto: "Instalación, reparación y optimización de sistemas de riego para favorecer el crecimiento de plantas, jardines y espacios verdes utilizando el agua de forma eficiente.",
            icono: <GiWateringCan className={styles.servicios_icono}/>,
            img: "/img/jardinero_regando.webp"
        },
        {
            nombre: "Limpieza de Terrenos y Exteriores",
            texto: "Realizamos limpieza de terrenos, patios, veredas y espacios exteriores, retirando hojas, residuos y maleza para recuperar el orden y la estética del lugar.",
            icono: <GiBroom className={styles.servicios_icono}/>,
            img: "/img/jardinero_limpiando.webp"
        },
        {
            nombre: "Poda de Árboles",
            texto: "Servicio de poda de árboles y arbustos para mejorar la seguridad, favorecer un crecimiento saludable y mantener la estética de jardines y espacios verdes..",
            icono: <GiTreeGrowth className={styles.servicios_icono}/>,
            img: "/img/jardinero_talando.webp"
        },
        {
            nombre: "Corte de Césped",
            texto: "Servicio de corte de césped y mantenimiento de áreas verdes para conservar jardines prolijos, saludables y listos para disfrutar durante todo el año.",
            icono: <GiHighGrass className={styles.servicios_icono}/>,
            img: "/img/jardinero_cortando.webp"
        }

    ];
    return (
        <section className={styles.servicios}>
            <div  className={styles.servicios_presentacion}>
                <h2 className={styles.servicios_titulo}>Servicios de Jardinería y Mantenimiento</h2>
                <p className={styles.servicios_subtitulo}>Más de 2 años brindando servicios de jardinería, mantenimiento de jardines y cuidado de espacios verdes.</p>
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