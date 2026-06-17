"use client";

import styles from "@/styles/sections/servicios.module.scss";
import { GiGardeningShears, GiTreeGrowth, GiWateringCan, MdCleaningServices, MdPool } from "@/components/utils/Iconos";


export default function Servicios() {

    const servicios = [
        { nombre: "Mantenimiento de Jardines", icono: <GiGardeningShears className={styles.servicios_icono}/>, img:"/img/jardinero.webp" },
        { nombre: "Sistemas de Riego", icono: <GiWateringCan className={styles.servicios_icono}/>, img:"/img/jardinero_regando.webp" },
        { nombre: "Limpieza de Exteriores", icono: <MdCleaningServices className={styles.servicios_icono}/>, img:"/img/jardinero_limpiando.webp" },
        { nombre: "Poda de Arboles", icono: <GiTreeGrowth className={styles.servicios_icono}/>, img:"/img/jardinero_talando.webp" }, 
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
                        <div key={index} className={styles.servicios_item} style={{ backgroundImage: `url(${item.img})` }}>
                          <div className={styles.servicios_overlay}>
                              <div className={styles.servicios_icono_box}>{item.icono}</div>
                              <div className={styles.servicios_contenido}>
                                  <h3 className={styles.servicios_heading}>{item.nombre}</h3>
                              </div>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}