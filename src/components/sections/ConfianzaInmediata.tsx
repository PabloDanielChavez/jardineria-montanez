import styles from "@/styles/sections/confianza.module.scss";
import { FaWhatsapp } from "@/components/utils/Iconos";
import { MdLocationOn, MdPhotoLibrary, MdOutlineAssignment, MdTune } from "react-icons/md";

const señales = [
    {
        titulo: "Atención por WhatsApp",
        texto: "Mandanos fotos del jardín, patio o terreno y contanos tu zona.",
        icono: <FaWhatsapp />,
    },
    {
        titulo: "Presupuesto según el trabajo",
        texto: "Vemos el estado del espacio y qué necesitás resolver.",
        icono: <MdOutlineAssignment />,
    },
    {
        titulo: "Servicio según tu necesidad",
        texto: "Puede ser un trabajo puntual, una limpieza o mantenimiento regular.",
        icono: <MdTune />,
    },
    {
        titulo: "Base en Buenos Aires",
        texto: "Trabajamos en Cañuelas, Buenos Aires y alrededores. Consultá por tu zona.",
        icono: <MdLocationOn />,
    },
];

export default function ConfianzaInmediata() {
    return (
        <section id="confianza" className={styles.confianza} aria-labelledby="confianza-titulo">
            <div className={styles.confianza_container}>
                <h2 id="confianza-titulo" className={styles.confianza_titulo}>
                    Consultá por WhatsApp y recibí una orientación clara desde el inicio
                </h2>
                <div className={styles.confianza_grid}>
                    {señales.map((señal) => (
                        <article key={señal.titulo} className={styles.confianza_item}>
                            <span className={styles.confianza_icono} aria-hidden="true">
                                {señal.icono}
                            </span>
                            <div>
                                <h3>{señal.titulo}</h3>
                                <p>{señal.texto}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
