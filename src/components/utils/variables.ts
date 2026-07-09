export const numeroUno = "5492226607508";
export const numeroDos = "5491163683403";

export const mensajeWSP = encodeURIComponent(
    "Hola, quiero pedir presupuesto para un servicio de jardinería. " +
    "Estoy en [zona] y necesito [corte de césped / poda / limpieza / desmalezado / mantenimiento]. " +
    "Puedo enviar fotos."
);

export const mensajePresupuesto = encodeURIComponent(
    "Hola, quiero pedir presupuesto para un servicio de jardinería. " +
    "Estoy en [zona] y necesito [corte de césped / poda / limpieza / desmalezado / mantenimiento]. " +
    "Puedo enviar fotos del espacio."
);

export const crearMensajeServicio = (servicio: string) =>
    encodeURIComponent(
        `Hola, quiero pedir presupuesto para ${servicio}. ` +
        "Estoy en [zona] y puedo enviar fotos del espacio."
    );

export const mensajeEmail = encodeURIComponent(
    "Hola Mauro,\n\n" +
    "Me comunico luego de visitar el sitio web de Jardinería Montañez.\n\n" +
    "Estoy interesado en conocer más sobre sus servicios de jardinería, mantenimiento de jardines y cuidado de espacios verdes.\n\n" +
    "Quedo atento a su respuesta.\n\n" +
    "Muchas gracias."
);

export const mensajeHorarios = encodeURIComponent(
    "Hola, ¿cómo estás?\n\n" +
    "Me gustaría conocer los días y horarios en los que realizan visitas, presupuestos y trabajos.\n\n" +
    "Muchas gracias."
);
