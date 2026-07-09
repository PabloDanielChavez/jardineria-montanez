"use client";

import styles from "@/styles/sections/vision.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "@/components/utils/Iconos";
import { crearMensajeServicio, numeroUno } from "../utils/variables";

export default function Vision() {
    return (
        <section id="recuperacion" className={styles.vision}>
            <Image 
                src="/img/fondo_vision.webp" 
                alt="Espacio verde rodeado de naturaleza"
                fill
                className={styles.vision_bg}
                quality={75} 
                priority={false}
            />
            <div className={styles.vision_overlay}>
                <div className={styles.vision_contenido}>
                    <span className={styles.vision_etiqueta}>
                    Recuperación de espacios verdes
                    </span>

                    <h2>Volvé a disfrutar tu jardín, patio o terreno</h2>

                    <p>
                        Cuando el pasto crece demasiado, avanza la maleza o el espacio deja de usarse,
                        revisamos qué tareas necesita para recuperarlo y dejarlo limpio, ordenado y más fácil de mantener.
                    </p>

                    <ul className={styles.vision_beneficios}>
                        <li>Corte de pasto y desmalezado según el estado del lugar.</li>
                        <li>Limpieza y orden para volver a usar el espacio exterior.</li>
                        <li>Opción de mantenimiento para conservar el resultado.</li>
                    </ul>

                    <Link
                    href={`https://wa.me/${numeroUno}?text=${crearMensajeServicio("recuperación de un jardín, patio o terreno")}`}
                    className={styles.vision_cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                        Recuperar mi espacio
                    </Link>
                </div>
            </div>
        </section>
    );
}
