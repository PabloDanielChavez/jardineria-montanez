"use client";

import Image from "next/image";
import styles from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { FaWhatsapp, FaArrowDown } from "@/components/utils/Iconos";

export default function Bienvenida() {
    const scrollToSection = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="inicio" className={styles.bienvenida}>
            <Image
                src="/img/jardinero.webp"
                alt="Trabajo de jardinería en un espacio verde"
                fill
                priority
                className={styles.backgroundImage}
                sizes="100vw"
            />  
            <div className={styles.bienvenida_layout}>
                <div className={styles.bienvenida_header_box_informacion}>
                    <span className={styles.bienvenida_header_span_tag}>Jardinería en Buenos Aires</span>
                    <h1 className={styles.bienvenida_header_h1_titulo}>
                        Servicio de jardinería profesional para dejar tu espacio verde <strong className={styles.bienvenida_header_h1_resaltado}>limpio, cuidado y prolijo</strong>
                    </h1>
                    
                    <p className={styles.bienvenida_header_p_descripcion}>
                        Corte de pasto, poda, desmalezado, limpieza de terrenos y mantenimiento de jardines en Cañuelas, Buenos Aires y alrededores.
                    </p>
                    <div className={styles.bienvenida_header_box_btn}>
                        <Link
                            href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                            className={styles.bienvenida_header_btn}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className={styles.bienvenida_icono_secun} />
                            Dejarlo prolijo
                        </Link>
                        <button
                            onClick={() => scrollToSection("trabajos")}
                            className={`${styles.bienvenida_header_btn} ${styles.bienvenida_header_btn_alt}`}
                        >
                            Ver resultados
                            <FaArrowDown className={styles.bienvenida_icono} />
                        </button>
                    </div>
                    <p className={styles.bienvenida_header_microcopy}>
                        Mandanos una foto y tu zona. Te orientamos sin compromiso.
                    </p>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <span></span>
            </div>
        </section>
    );
}
