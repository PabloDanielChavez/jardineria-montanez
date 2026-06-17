"use client";
import Link from "next/link";
import styles from "@/styles/sections/contacto.module.scss";

export default function Contacto() {
    return (
        <section className={styles.contacto}>
            <div className={styles.contacto_container}>
                <h2 className={styles.contacto_titulo}>
                    ¿Necesitás asesoramiento o un presupuesto para nuestros servicios?
                </h2>
                <Link href="/contacto" className={styles.contacto_boton}>
                    CONTACTANOS
                </Link>
            </div>
        </section>
    );
}