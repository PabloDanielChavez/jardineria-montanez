"use client";
import Link from "next/link";
import styles from "@/styles/sections/contacto.module.scss";
import { mensajePresupuesto, numero } from "../utils/variables";
import { FaWhatsapp} from "../utils/Iconos";

export default function Contacto() {
    return (
        <section className={styles.contacto}>
            <div className={styles.contacto_container}>
                <h2 className={styles.contacto_titulo}>
                    ¿Necesitás asesoramiento o un presupuesto para nuestros servicios?
                    
                <p className={styles.contacto_subtitulo}>
                    Respondemos consultas, presupuestos y asesoramiento sin compromiso.
                </p>
                </h2>
                <Link
                    href={`https://wa.me/${numero}?text=${mensajePresupuesto}`}
                    className={styles.contacto_boton}
                >
                    <FaWhatsapp />
                    Solicitar Presupuesto
                </Link>
            </div>
        </section>
    );
}