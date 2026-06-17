"use client";

import Image from "next/image";
import styles from "@/styles/sections/bienvenida.module.scss";
import Link from "next/link";
import { mensaje, numero } from "../utils/variables";
import { GiGardeningShears, MdBuild, PiPlantFill } from "@/components/utils/Iconos";

export default function Bienvenida() {

    return (
        <section className={styles.bienvenida}>
            <div className={styles.bienvenida_layout}>
                <div className={styles.bienvenida_header_box_informacion}>
                    <div className={styles.bienvenida_logo_box}>
                        <PiPlantFill className={styles.bienvenida_logo_icono} />
                        <h2 className={styles.bienvenida_logo_h2_Montserrat}>Montañez</h2>
                    </div>
                    <p className={styles.bienvenida_header_p_descripcion} >Expertos en instalaciones, reparaciones y mantenimiento preventivo. Garantizamos el funcionamiento óptimo de tu hogar o industria con rapidez y profesionalismo.</p>
                    <div className={styles.bienvenida_header_box_btn}>
                        <Link 
                            className={styles.bienvenida_header_btn}
                            href={`https://wa.me/${numero}?text=${mensaje}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`SOLICITAR SERVICIO`}
                        >
                            <span className={styles.bienvenida_header_btn_span}><GiGardeningShears className={styles.bienvenida_logo_icono_serv} />SOLICITAR SERVICIOS</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}