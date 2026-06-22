import styles from "@/styles/sections/comotrabajamos.module.scss";
import { MdChatBubbleOutline, MdDescription, MdDateRange, MdWorkOutline, MdVerifiedUser } from 'react-icons/md';

export default function ComoTrabajamos() {
    const pasos = [
        { id: 1, titulo: "Contacto Inicial", desc: "Nos contactás para contarnos qué servicio de jardinería, mantenimiento de jardines o cuidado de espacios verdes necesitás.", icono: <MdChatBubbleOutline size={48} />},
        { id: 2, titulo: "Evaluación presupuesto", desc: "Analizamos las necesidades de tu jardín, terreno o espacio verde y elaboramos un presupuesto personalizado.", icono: <MdDescription     size={48} />},
        { id: 3, titulo: "Coordinación", desc: "Definimos la fecha y el horario más conveniente para realizar el trabajo.", icono: <MdDateRange size={48} />},
        { id: 4, titulo: "Ejecución", desc: "Realizamos el servicio solicitado, ya sea corte de césped, poda de árboles, desmalezado o mantenimiento de jardines.", icono: <MdWorkOutline size={48} />},
        { id: 5, titulo: "Garantía", desc: "Supervisamos cada trabajo para asegurar resultados duraderos y espacios verdes en óptimas condiciones.", icono: <MdVerifiedUser size={48} />},
    ];

    return (
        <section className={styles.comotrabajamos}>
            <div className={styles.comotrabajamos_container}>
                <h2 className={styles.comotrabajamos_titulo}>Nuestro Proceso de Trabajo en Jardinería y Mantenimiento</h2>
                <p className={styles.comotrabajamos_subtitulo}>Un proceso simple, profesional y pensado para el cuidado de jardines y espacios verdes.</p>
                
                <div className={styles.comotrabajamos_pasos}>
                    {pasos.map((paso) => (
                        <div key={paso.id}  className={styles.comotrabajamos_item}>
                            <div className={styles.comotrabajamos_wrapper}>
                                <div className={styles.comotrabajamos_numero}>{paso.id}</div>
                                <div className={styles.comotrabajamos_icono}>
                                    <div className={styles.comotrabajamos_wrapper}> 
                                        {paso.icono}
                                    </div>
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