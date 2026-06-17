import styles from "@/styles/sections/comotrabajamos.module.scss";
import { MdChatBubbleOutline, MdDescription, MdDateRange, MdWorkOutline, MdVerifiedUser } from 'react-icons/md';

export default function ComoTrabajamos() {
    const pasos = [
        { id: 1, titulo: "Contacto Inicial", desc: "Nos escribís informándonos el servicio que necesitás", icono: <MdChatBubbleOutline size={48} />},
        { id: 2, titulo: "Evaluación presupuesto", desc: "Realizamos una evaluación presencial u online.", icono: <MdDescription     size={48} />},
        { id: 3, titulo: "Coordinación", desc: "Coordinamos día y horario una vez confirmado el trabajo.", icono: <MdDateRange size={48} />},
        { id: 4, titulo: "Ejecución", desc: "Llevamos adelante el servicio con técnicos especializados.", icono: <MdWorkOutline size={48} />},
        { id: 5, titulo: "Garantía", desc: "Supervisamos y garantizamos el resultado", icono: <MdVerifiedUser size={48} />},
    ];

    return (
        <section className={styles.comotrabajamos}>
            <div className={styles.comotrabajamos_container}>
                <h2 className={styles.comotrabajamos_titulo}>CÓMO TRABAJAMOS</h2>
                <p className={styles.comotrabajamos_subtitulo}>Un proceso simple y profesional</p>
                
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