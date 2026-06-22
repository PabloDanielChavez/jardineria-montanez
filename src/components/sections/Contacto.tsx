"use client";
import Link from "next/link";
import styles from "@/styles/sections/contacto.module.scss";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { FaWhatsapp} from "../utils/Iconos";

export default function Contacto() {
    return (
        <section className={styles.contacto}>
            <div className={styles.contacto_container}>
                <div>
                    <h2 className={styles.contacto_titulo}>
                        ¿Necesitás un presupuesto para servicios de jardinería?
                    </h2>
                    <p className={styles.contacto_subtitulo}>
                        Brindamos asesoramiento y presupuestos sin compromiso para mantenimiento de jardines,
                        corte de césped, poda de árboles, limpieza de terrenos y cuidado de espacios verdes.
                    </p>
                </div>
                <Link
                    href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                    className={styles.contacto_boton}
                >
                    <FaWhatsapp />
                    Solicitar Presupuesto
                </Link>
            </div>
        </section>
    );
}