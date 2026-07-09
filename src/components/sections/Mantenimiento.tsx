import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/sections/mantenimiento.module.scss";
import { FaWhatsapp } from "@/components/utils/Iconos";
import { crearMensajeServicio, numeroUno } from "../utils/variables";

export default function Mantenimiento() {
    return (
        <section id="mantenimiento" className={styles.mantenimiento}>
            <div className={styles.mantenimiento_container}>
                <div className={styles.mantenimiento_media}>
                    <Image
                        src="/img/jardinero_cortando.webp"
                        alt="Trabajo de mantenimiento y corte de césped"
                        fill
                        sizes="(max-width: 974px) 100vw, 50vw"
                        className={styles.mantenimiento_imagen}
                    />
                </div>
                <div className={styles.mantenimiento_contenido}>
                    <div className={styles.mantenimiento_intro}>
                        <span className={styles.mantenimiento_etiqueta}>Según lo que necesite tu espacio</span>
                        <h2>Mantenimiento de jardines puntual o periódico</h2>
                        <p>
                            Podés resolver un corte de pasto, poda, desmalezado o limpieza puntual, o coordinar visitas periódicas para mantener tu jardín limpio, cuidado y prolijo.
                        </p>
                    </div>
                    <div className={styles.mantenimiento_opciones}>
                        <article>
                            <span>01</span>
                            <div>
                                <h3>Trabajo puntual</h3>
                                <p>
                                    Ideal para resolver una necesidad concreta: corte de pasto, poda, desmalezado, limpieza de terrenos o patios.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span>02</span>
                            <div>
                                <h3>Cuidado periódico</h3>
                                <p>
                                    Para conservar el jardín ordenado con visitas coordinadas según el tamaño, el estado y el uso del espacio.
                                </p>
                            </div>
                        </article>
                    </div>
                    <Link
                        href={`https://wa.me/${numeroUno}?text=${crearMensajeServicio("mantenimiento de jardín")}`}
                        className={styles.mantenimiento_cta}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                        Mantenerlo prolijo
                    </Link>
                </div>
            </div>
        </section>
    );
}
