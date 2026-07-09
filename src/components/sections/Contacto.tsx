"use client";
import Link from "next/link";
import styles from "@/styles/sections/contacto.module.scss";
import { mensajePresupuesto, numeroUno } from "../utils/variables";
import { FaWhatsapp} from "../utils/Iconos";

export default function Contacto() {
    return (
        <section id="contacto" className={styles.contacto}>
            <div className={styles.contacto_container}>
                <div>
                    <h2 className={styles.contacto_titulo}>
                        ¿Querés dejar tu jardín, patio o terreno más prolijo?
                    </h2>
                    <p className={styles.contacto_subtitulo}>
                        Podemos ayudarte a ordenar, limpiar o mantener tu jardín, patio o terreno para que vuelva a ser un espacio más cómodo y agradable.
                    </p>
                    <p className={styles.contacto_microcopy}>Atención: lunes a sábado, de 9 a 19 h.</p>
                </div>
                <Link
                    href={`https://wa.me/${numeroUno}?text=${mensajePresupuesto}`}
                    className={styles.contacto_boton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                    Dejarlo prolijo
                </Link>
            </div>
        </section>
    );
}
