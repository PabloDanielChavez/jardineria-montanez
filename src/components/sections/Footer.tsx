"use client"; 
import Link from "next/link";
import { PiPlantFill } from "react-icons/pi";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/footer.module.scss";
import { mensajeEmail, mensajeWSP, numero } from "../utils/variables";


const footerContacto = [
    { id:"1", nombre: " San Esteban, Cañuelas, Buenos Aires.", icono: <MdLocationOn className={styles.footer_icono}/> , url:"https://maps.app.goo.gl/F85DGScrQwF3ub8F8"},
    { id:"2", nombre: " +54 9 11 5473-5403", icono: <MdPhone className={styles.footer_icono}/> , url:`https://wa.me/${numero}?text=${mensajeWSP}`},
    { id:"3", nombre: " jardineria@gmail.com", icono: <MdEmail className={styles.footer_icono}/> , url:`mailto:jardineria@gmail.com?subject=${mensajeEmail}`},
    { id:"4", nombre: " Lu. a Vi. 9 a 19hs", icono: <MdAccessTime className={styles.footer_icono}/>, url:`https://wa.me/${numero}?text=${mensajeWSP}`}, 
];


const footerMenu = [
    { id:"1", nombre: "Inicio",target: "inicio", icono: <MdLocationOn className={styles.footer_icono}/>},
    { id:"2", nombre: "Servicios",target: "servicio", icono: <MdEmail className={styles.footer_icono}/>},
    { id:"3", nombre: "Vision",target: "vision", icono: <MdEmail className={styles.footer_icono}/>},
    { id:"4", nombre: "Nosotros",target: "sobre", icono: <MdAccessTime className={styles.footer_icono}/>}, 
    { id:"5", nombre: "Contacto",target: "contacto", icono: <MdAccessTime className={styles.footer_icono}/>}, 
    { id:"6", nombre: "¿Como Trabajamos?",target: "como", icono: <MdAccessTime className={styles.footer_icono}/>}, 
];

const footerRedes = [
    { id:"1", icono: <FaInstagram className={styles.footer_social}/> , url:"https://www.instagram.com"},
    { id:"2", icono: <FaWhatsapp className={styles.footer_social}/> , url:`https://wa.me/${numero}?text=${mensajeWSP}`},
];



export default function Footer() {
  
    
  const scrollToSection = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contenedor}>
        <div className={`${styles.footer_logo}  ${styles.footer_GRIDCOL}`}>
          <PiPlantFill className={styles.footer_logo_icono} />
          <h2 className={styles.footer_logo_h2}>Jardineria Montañez</h2>
        </div>
        <div className={styles.footer_col}>
          <h3 className={styles.footer_h3}>SECCIONES</h3>
          <ul className={styles.footer_ul}>
            {footerMenu.map((item) => (
              <li key={item.id} className={styles.footer_li}>
                <button
                  className={styles.footer_LINK}
                  onClick={() => scrollToSection(item.target)} 
                >
                    {item.nombre}
                  </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.footer_col}`}>
          <h3 className={styles.footer_h3}>CONTACTO</h3>
          <ul className={styles.footer_ul}>
            {footerContacto.map((item) => (
              <li key={item.nombre} className={styles.footer_li}>
                <Link key={item.id} href={item.url} className={styles.footer_LINK}>
                  {item.icono}
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.footer_social}>
            {footerRedes.map((item) => (
              <Link key={item.id} href={item.url} className={`${styles.footer_LINK} ${styles.footer_RED}`}>{item.icono}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer_legal}>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}