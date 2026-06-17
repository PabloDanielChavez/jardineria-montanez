"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/styles/sections/header.module.scss';
import { BiBriefcase, BiCog, BiHomeAlt2, BiMenu, MdInfoOutline, PiPlantFill, } from "@/components/utils/Iconos";

export default function Header() {
    const menu = [
        { id: 1, titulo: "Inicio", target: "/", icono: <BiHomeAlt2 size={20} />},
        { id: 2, titulo: "Trabajos", target: "/trabajos", icono: <BiBriefcase size={20} />},
        { id: 3, titulo: "Servicios", target: "/servicios", icono: <BiCog size={20} />},
        { id: 4, titulo: "Contacto", target: "/contacto", icono: <MdInfoOutline size={20} />},
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
                            <Link 
                                href={menu.target} 
                                className={`${styles.header_LINK}`}
                                prefetch={false}
                            >
                                {menu.icono}
                                <span className={`${styles.header_spanNav} ${isScrolled ? styles.header_scrolled_text : ''}`}>
                                    {menu.titulo}
                                </span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
    );
}