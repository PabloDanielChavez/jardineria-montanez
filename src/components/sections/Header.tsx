"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/styles/sections/header.module.scss';
import { BiBriefcase, BiCog, BiHomeAlt2, BiMenu, FaWhatsapp, MdInfoOutline, PiPlantFill, } from "@/components/utils/Iconos";
import { mensajeWSP, numero } from '../utils/variables';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menu = [
        { id: 1, titulo: "Inicio", target: "inicio", icono: <BiHomeAlt2 size={20} />},
        { id: 2, titulo: "Servicio", target: "servicio", icono: <BiBriefcase size={20} />},
        { id: 3, titulo: "Vision", target: "vision", icono: <BiCog size={20} />},
        { id: 4, titulo: "Sobre", target: "sobre", icono: <MdInfoOutline size={20} />},
        { id: 5, titulo: "Contacto", target: "contacto", icono: <MdInfoOutline size={20} />},
        { id: 6, titulo: "Como", target: "como", icono: <MdInfoOutline size={20} />},
    ];
    
    const scrollToSection = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); // Cierra el menú en móvil
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, 
    []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <header className={`${styles.header} ${isScrolled ? styles.header_scrolled : ''}`}>
            <div className={styles.header_container}>
                <div className={styles.header_logo_box}>
                    <h2 className={styles.header_logo_h2}>Jardineria<PiPlantFill className={styles.header_logo_icono}/>Montañez</h2>
                </div>
                <button 
                    className={styles.header_menuBtn} 
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <BiMenu className={`${styles.header_logo_icono} ${styles.header_logo_icono_menu}`}/>
                </button>
            </div>
            <nav className={`${styles.header_nav}`} aria-label="Navegación principal">
                <ul className={`${styles.header_ul} ${isMenuOpen ? styles.header_activo : styles.header_desactivado}`}>
                    {menu.map((menu) => (
                    <li 
                        key={menu.id} 
                        className={styles.header_li} 
                        aria-label={`Navegacion ${menu.titulo}`}
                    >
                        <button 
                            className={`${styles.header_LINK}`}
                            onClick={() => scrollToSection(menu.target)} 
                        >
                            {menu.icono}
                            <span className={`${styles.header_spanNav} ${isScrolled ? styles.header_scrolled_text : ''}`}>
                                {menu.titulo}
                            </span>
                        </button>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}