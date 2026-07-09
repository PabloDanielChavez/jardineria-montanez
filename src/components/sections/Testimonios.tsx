"use client";

import styles from "@/styles/sections/testimonios.module.scss";

export type Testimonio = {
    id: string;
    comentario: string;
    nombre?: string;
    zona?: string;
    servicio?: string;
};

const testimonios: Testimonio[] = [];

export default function Testimonios() {
    if (testimonios.length === 0) {
        return null;
    }

    return (
        <section id="opiniones" className={styles.testimonios}>
            <div className={styles.testimonios_header}>
                <h2>Clientes que ya confiaron en Jardinería Montañez</h2>
                <p>
                    Opiniones de personas que nos contactaron para mejorar, limpiar o mantener sus espacios verdes.
                </p>
            </div>
            <div className={styles.testimonios_grid}>
                {testimonios.map((item) => (
                    <article key={item.id} className={styles.testimonios_card}>
                        <p>“{item.comentario}”</p>
                        {(item.nombre || item.zona || item.servicio) && (
                            <div className={styles.testimonios_datos}>
                                {item.nombre && <strong>{item.nombre}</strong>}
                                {item.servicio && <span>{item.servicio}</span>}
                                {item.zona && <span>{item.zona}</span>}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
