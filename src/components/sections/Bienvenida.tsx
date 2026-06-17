"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";
import styles from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { mensajePresupuesto, numero } from "../utils/variables";
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
            <div className={styles.bienvenida_layout}>
                <div className={styles.bienvenida_header_box_informacion}>
                    <span className={styles.bienvenida_header_span_tag}>Buenos Aires</span>
                    <h1 className={styles.bienvenida_header_h1_titulo}>Tu <strong className={styles.bienvenida_header_h1_resaltado}>Jardin </strong>habla por <strong className={styles.bienvenida_header_h1_resaltado}>Nostros</strong></h1>

                    <p className={styles.bienvenida_header_p_descripcion}><strong className={styles.bienvenida_header_p_resaltado}>Creamos jardines únicos</strong>, diseñados a medida, con estética impecable y terminaciones de excelencia. Cada proyecto lleva el sello de nuestra pasión</p>

                    <div className={styles.bienvenida_header_box_btn}>
                        
                        <button 
                            onClick={() => scrollToSection("servicio")}  
                            className={styles.bienvenida_header_btn}
                        >
                            Ver Servicios
                            <FaArrowDown className={`${styles.bienvenida_icono_secun}`}/>
                        </button>
                        <Link href={`https://wa.me/${numero}?text=${mensajePresupuesto}`} className={`${styles.bienvenida_header_btn} ${styles.bienvenida_header_btn_alt}`}><FaWhatsapp  className={`${styles.bienvenida_icono}`}/> Pedir Presupuesto</Link>
                    </div>

                    {/* Puedes agregar aquí el bloque de 500+ Proyectos, etc. */}
                </div>
            </div>
        </section>
    );
}