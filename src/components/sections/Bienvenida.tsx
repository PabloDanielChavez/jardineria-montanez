"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";
import styles from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { GiGardeningShears, MdBuild, PiPlantFill , FaWhatsapp, FaArrowDown} from "@/components/utils/Iconos";

export default function Bienvenida() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    return (
        <section className={styles.bienvenida}>
            <Image
                src="/img/jardinero.webp"
                alt="Jardinero profesional"
                fill
                priority
                className={styles.backgroundImage}
                sizes="100vw"
            />  
            <div className={styles.bienvenida_layout}>
                <div className={styles.bienvenida_header_box_informacion}>
                    <span className={styles.bienvenida_header_span_tag}>Buenos Aires</span>
                    <h1 className={styles.bienvenida_header_h1_titulo}>Tu <strong className={styles.bienvenida_header_h1_resaltado}>Jardín</strong> en Manos de <strong className={styles.bienvenida_header_h1_resaltado}>Profesionales</strong> de la <strong className={styles.bienvenida_header_h1_resaltado}>Jardinería</strong></h1>
                    <p className={styles.bienvenida_header_p_descripcion}>
                        Brindamos servicios de <strong className={styles.bienvenida_header_p_resaltado}>jardinería</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> mantenimiento de jardines</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> corte de pasto</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> poda de árboles</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> desmalezado</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> limpieza de terrenos</strong> y
                        <strong className={styles.bienvenida_header_p_resaltado}> cuidado de espacios verdes</strong>,
                        combinando <strong className={styles.bienvenida_header_p_resaltado}>experiencia</strong>,
                        <strong className={styles.bienvenida_header_p_resaltado}> compromiso</strong> y atención al
                        <strong className={styles.bienvenida_header_p_resaltado}> detalle</strong>.
                    </p>
                    <div className={styles.bienvenida_header_box_btn}>
                        <button 
                            onClick={() => scrollToSection("servicio")}  
                            className={styles.bienvenida_header_btn}
                        >
                            Ver Servicios
                            <FaArrowDown className={`${styles.bienvenida_icono_secun}`}/>
                        </button>
                        <Link href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`} className={`${styles.bienvenida_header_btn} ${styles.bienvenida_header_btn_alt}`}><FaWhatsapp  className={`${styles.bienvenida_icono}`}/> Pedir Presupuesto</Link>
                    </div>

                    {/* Puedes agregar aquí el bloque de 500+ Proyectos, etc. */}
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <span></span>
            </div>
        </section>
    );
}