import styles from "@/styles/sections/comotrabajamos.module.scss";
import type { IconType } from "react-icons";
import {
    FaBriefcase,
    FaCalendarCheck,
    FaCamera,
    FaClipboardList,
    FaLeaf,
    FaShieldAlt,
    FaWhatsapp,
} from "react-icons/fa";

type Paso = {
    id: number;
    titulo: string;
    desc: string;
    Icono: IconType;
};

export default function ComoTrabajamos() {
    const pasos: Paso[] = [
        {
            id: 1,
            titulo: "Nos escribís",
            desc: "Contanos por WhatsApp qué necesitás resolver en tu jardín, patio o terreno.",
            Icono: FaWhatsapp,
        },
        {
            id: 2,
            titulo: "Mandás fotos",
            desc: "Con algunas imágenes y tu zona podemos entender mejor el estado del espacio.",
            Icono: FaCamera,
        },
        {
            id: 3,
            titulo: "Vemos el trabajo",
            desc: "Revisamos qué servicio necesitás: corte de pasto, poda, limpieza, desmalezado o mantenimiento.",
            Icono: FaClipboardList,
        },
        {
            id: 4,
            titulo: "Coordinamos",
            desc: "Definimos el alcance, el presupuesto, el día y el horario antes de avanzar.",
            Icono: FaCalendarCheck,
        },
        {
            id: 5,
            titulo: "Lo realizamos",
            desc: "Trabajamos según lo acordado y dejamos el espacio limpio, ordenado y prolijo.",
            Icono: FaBriefcase,
        },
        {
            id: 6,
            titulo: "Revisamos",
            desc: "Al terminar, vemos el resultado y te orientamos si conviene mantener el jardín con visitas periódicas.",
            Icono: FaShieldAlt,
        },
    ];

    return (
        <section
            id="como-trabajamos"
            className={styles.comotrabajamos}
            aria-labelledby="como-trabajamos-titulo"
        >
            <FaLeaf
                className={`${styles.comotrabajamos_hoja} ${styles.comotrabajamos_hoja_superior_izquierda}`}
                aria-hidden="true"
            />
            <FaLeaf
                className={`${styles.comotrabajamos_hoja} ${styles.comotrabajamos_hoja_superior_derecha}`}
                aria-hidden="true"
            />
            <FaLeaf
                className={`${styles.comotrabajamos_hoja} ${styles.comotrabajamos_hoja_inferior_izquierda}`}
                aria-hidden="true"
            />
            <FaLeaf
                className={`${styles.comotrabajamos_hoja} ${styles.comotrabajamos_hoja_inferior_derecha}`}
                aria-hidden="true"
            />

            <div className={styles.comotrabajamos_container}>
                <header className={styles.comotrabajamos_header}>
                    <div className={styles.comotrabajamos_ornamento} aria-hidden="true">
                        <span />
                        <FaLeaf />
                        <span />
                    </div>

                    <h2
                        id="como-trabajamos-titulo"
                        className={styles.comotrabajamos_titulo}
                    >
                        Cómo trabajamos
                    </h2>

                    <p className={styles.comotrabajamos_subtitulo}>
                        Un proceso simple y claro para entender tu necesidad,
                        coordinar el servicio y trabajar según lo acordado.
                    </p>
                </header>

                <div className={styles.comotrabajamos_pasos} role="list">
                    {pasos.map(({ id, titulo, desc, Icono }) => (
                        <article
                            key={id}
                            className={styles.comotrabajamos_item}
                            role="listitem"
                        >
                            <span
                                className={styles.comotrabajamos_numero}
                                aria-hidden="true"
                            >
                                {id}
                            </span>

                            <span
                                className={styles.comotrabajamos_icono}
                                aria-hidden="true"
                            >
                                <Icono />
                            </span>

                            {id === 2 && (
                                <FaLeaf
                                    className={styles.comotrabajamos_acento_hoja}
                                    aria-hidden="true"
                                />
                            )}

                            <div className={styles.comotrabajamos_contenido}>
                                <h3 className={styles.comotrabajamos_heading}>
                                    {titulo}
                                </h3>

                                <div
                                    className={styles.comotrabajamos_separador}
                                    aria-hidden="true"
                                >
                                    <span />
                                    <FaLeaf />
                                    <span />
                                </div>

                                <p className={styles.comotrabajamos_desc}>{desc}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    className={`${styles.comotrabajamos_ornamento} ${styles.comotrabajamos_ornamento_inferior}`}
                    aria-hidden="true"
                >
                    <span />
                    <FaLeaf />
                    <span />
                </div>
            </div>
        </section>
    );
}
