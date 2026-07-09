import styles from "@/styles/sections/preguntasfrecuentes.module.scss";

export const preguntasFrecuentes = [
    {
        pregunta: "¿Cómo pido presupuesto de jardinería por WhatsApp?",
        respuesta:
        "Enviá fotos del jardín, patio o terreno, indicá tu zona y contanos qué necesitás resolver. Con eso podemos orientarte mejor antes de coordinar.",
    },
    {
        pregunta: "¿Qué trabajos de jardinería se pueden coordinar?",
        respuesta:
        "Podés consultar por corte de pasto, poda, desmalezado, limpieza de terrenos, mantenimiento de jardines o recuperación de espacios verdes.",
    },
    {
        pregunta: "¿Hacen trabajos puntuales o mantenimiento periódico?",
        respuesta:
        "Sí. Puede ser un trabajo específico o visitas periódicas para mantener el jardín limpio, prolijo y cuidado.",
    },
    {
        pregunta: "¿Realizan limpieza de terrenos con pasto alto o maleza?",
        respuesta:
        "Sí. Trabajamos en terrenos, patios y espacios exteriores con pasto alto, maleza o crecimiento acumulado.",
    },
    {
        pregunta: "¿Qué zonas atiende Jardinería Montañez?",
        respuesta:
        "Jardinería Montañez tiene base en Cañuelas. También podés consultar disponibilidad para Buenos Aires, alrededores y zonas cercanas.",
    },
    {
        pregunta: "¿De qué depende el presupuesto de jardinería?",
        respuesta:
        "Depende del tamaño del espacio, su estado, el tipo de trabajo necesario y, si corresponde, la frecuencia del mantenimiento.",
    },
    {
        pregunta: "¿El retiro de residuos verdes está incluido?",
        respuesta:
        "Se define antes de coordinar, según el tipo de trabajo y el volumen de residuos verdes que se generen.",
    },
] as const;

export default function PreguntasFrecuentes() {
    return (
        <section id="preguntas" className={styles.preguntas}>
            <div className={styles.preguntas_container}>
                <div className={styles.preguntas_header}>
                    <span>Antes de escribirnos</span>
                    <h2>Preguntas frecuentes</h2>
                    <p>
                        Respuestas simples para saber cómo pedir presupuesto, qué datos enviar y qué servicios se pueden coordinar.
                    </p>
                </div>
                <div className={styles.preguntas_lista}>
                    {preguntasFrecuentes.map((item) => (
                        <details key={item.pregunta} className={styles.preguntas_item}>
                            <summary>{item.pregunta}</summary>
                            <p>{item.respuesta}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
