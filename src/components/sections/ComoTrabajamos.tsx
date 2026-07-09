import styles from "@/styles/sections/comotrabajamos.module.scss";
import { MdChatBubbleOutline, MdDescription, MdDateRange, MdWorkOutline, MdVerifiedUser, MdPhotoCamera } from 'react-icons/md';

export default function ComoTrabajamos() {
    const pasos = [
        {
            id: 1,
            titulo: "Nos escribís",
            desc: "Contanos por WhatsApp qué necesitás resolver en tu jardín, patio o terreno.",
            icono: <MdChatBubbleOutline size={44} />,
        },
        {
            id: 2,
            titulo: "Mandás fotos",
            desc: "Con algunas imágenes y tu zona podemos entender mejor el estado del espacio.",
            icono: <MdPhotoCamera size={44} />,
        },
        {
            id: 3,
            titulo: "Vemos el trabajo",
            desc: "Revisamos qué servicio necesitás: corte de pasto, poda, limpieza, desmalezado o mantenimiento.",
            icono: <MdDescription size={44} />,
        },
        {
            id: 4,
            titulo: "Coordinamos",
            desc: "Definimos el alcance, el presupuesto, el día y el horario antes de avanzar.",
            icono: <MdDateRange size={44} />,
        },
        {
            id: 5,
            titulo: "Lo realizamos",
            desc: "Trabajamos según lo acordado y dejamos el espacio limpio, ordenado y prolijo.",
            icono: <MdWorkOutline size={44} />,
        },
        {
            id: 6,
            titulo: "Revisamos",
            desc: "Al terminar, vemos el resultado y te orientamos si conviene mantener el jardín con visitas periódicas.",
            icono: <MdVerifiedUser size={44} />,
        }
    ];

    return (
        <section id="como-trabajamos" className={styles.comotrabajamos}>
            <div className={styles.comotrabajamos_container}>
                <h2 className={styles.comotrabajamos_titulo}>Cómo trabajamos</h2>
                <p className={styles.comotrabajamos_subtitulo}>
                    Un proceso simple y claro para entender tu necesidad, coordinar el servicio y trabajar según lo acordado.
                </p>
                
                <div className={styles.comotrabajamos_pasos}>
                    {pasos.map((paso) => (
                        <div key={paso.id}  className={styles.comotrabajamos_item}>
                            <div className={styles.comotrabajamos_wrapper}>
                                <div className={styles.comotrabajamos_numero}>{paso.id}</div>
                                <div className={styles.comotrabajamos_icono}>
                                    {paso.icono}
                                </div>
                            </div>
                            <h3 className={styles.comotrabajamos_heading}>{paso.titulo}</h3>
                            <p className={styles.comotrabajamos_desc}>{paso.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}