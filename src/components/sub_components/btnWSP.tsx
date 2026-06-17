"use client";
import Link from 'next/link';
import { mensajeWSP, numero } from '@/components/utils/variables';
import { FaWhatsapp } from '@/components/utils/Iconos';

export default function btnWSP() {
    return (
        <Link
            href={`https://wa.me/${numero}?text=${mensajeWSP}`} 
            className={`whatsapp_float`} // Usa el módulo de estilos
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </Link>
    );
}