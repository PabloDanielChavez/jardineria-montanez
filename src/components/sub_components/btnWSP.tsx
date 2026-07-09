"use client";
import Link from 'next/link';
import { mensajeWSP, numeroUno } from '@/components/utils/variables';
import { FaWhatsapp } from '@/components/utils/Iconos';

export default function btnWSP() {
    return (
        <Link
            href={`https://wa.me/${numeroUno}?text=${mensajeWSP}`} 
            className={`whatsapp_float`} // Usa el módulo de estilos
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Pedir presupuesto por WhatsApp"
            title="Pedir presupuesto por WhatsApp"
        >
            <FaWhatsapp />
        </Link>
    );
}
