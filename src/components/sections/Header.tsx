"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/sections/header.module.scss';
import { BiBriefcase, BiEnvelope, BiHelpCircle, BiHomeAlt2, BiMenu, BiTargetLock } from "@/components/utils/Iconos";
import Image from 'next/image';
import Link from 'next/link';
import { numeroUno } from '../utils/variables';
import { MdPhone } from 'react-icons/md';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menu = [
        { id: 1, titulo: "Inicio", target: "inicio", icono: <BiHomeAlt2 size={20} /> },
        { id: 2, titulo: "Servicios", target: "servicios", icono: <BiBriefcase size={20} /> },
        { id: 3, titulo: "Contacto", target: "contacto", icono: <BiEnvelope size={20} /> },
        { id: 4, titulo: "Trabajos", target: "trabajos", icono: <BiTargetLock size={20} /> },
        { id: 5, titulo: "Cómo trabajamos", target: "como-trabajamos", icono: <BiHelpCircle size={20} /> },
        { id: 6, titulo: "Preguntas", target: "preguntas", icono: <BiHelpCircle size={20} /> },
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
                <Link href="/" className={styles.header_logo} aria-label="Ir a inicio">
                    <div className={styles.header_logo_box}>
                        <Image 
                            className={styles.header_logo_img}
                            src={`/img/logo.png`} 
                            alt={"LOGOTIPO"}
                            title={"LOGOTIPO"}
                            width={50} 
                            height={50}
                            sizes="50px"
                        />
                    </div> 
                </Link>
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
                <div className={styles.header_actions}>
                    <Link
                        href={`tel:${numeroUno}`}
                        className={styles.header_cta}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdPhone />
                        <span>Llamar</span>
                    </Link>
                    <button
                        className={styles.header_menuBtn}
                        aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <BiMenu className={`${styles.header_logo_icono} ${styles.header_logo_icono_menu}`}/>
                    </button>
                </div>
            </div>
            
        </header>
    );
}
