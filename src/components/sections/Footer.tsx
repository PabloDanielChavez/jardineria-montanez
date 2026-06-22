"use client"; 
import Link from "next/link";
import { PiPlantFill } from "react-icons/pi";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/footer.module.scss";
import { mensajeHorarios, mensajeWSP, numeroDos, numeroUno } from "../utils/variables";
import Image from "next/image";


const footerContacto = [
    { id:"1", nombre: " San Esteban, Cañuelas, Buenos Aires.", icono: <MdLocationOn className={styles.footer_icono}/> , url:"https://maps.app.goo.gl/F85DGScrQwF3ub8F8"},
    { id:"2", nombre: " +54 9 2226 60-7508", icono: <MdPhone className={styles.footer_icono}/> , url:`https://wa.me/${numeroUno}?text=${mensajeWSP}`},
    { id:"3", nombre: " +54 9 11 6368-3403", icono: <MdPhone className={styles.footer_icono}/> , url:`https://wa.me/${numeroDos}?text=${mensajeWSP}`},
    { id:"4", nombre: " Lu. a Sa. 9 a 19hs", icono: <MdAccessTime className={styles.footer_icono}/>, url:`https://wa.me/${numeroUno}?text=${mensajeHorarios}`}, 
];


const footerMenu = [
    { id:"1", nombre: "Inicio",target: "inicio", icono: <MdLocationOn className={styles.footer_icono}/>},
    { id:"2", nombre: "Nosotros",target: "sobre", icono: <MdAccessTime className={styles.footer_icono}/>}, 
    { id:"3", nombre: "Vision",target: "vision", icono: <MdEmail className={styles.footer_icono}/>},
    { id:"4", nombre: "Servicios",target: "servicio", icono: <MdEmail className={styles.footer_icono}/>},
    { id:"5", nombre: "Contacto",target: "contacto", icono: <MdAccessTime className={styles.footer_icono}/>}, 
    { id:"6", nombre: "¿Como Trabajamos?",target: "como", icono: <MdAccessTime className={styles.footer_icono}/>}, 
];

const footerRedes = [
    { id:"1", icono: <FaInstagram className={styles.footer_social}/> , url:"https://www.instagram.com"},
    { id:"2", icono: <FaWhatsapp className={styles.footer_social}/> , url:`https://wa.me/${numeroUno}?text=${mensajeWSP}`},
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
        <div className={styles.footer_box_logo}>
          <Image 
              className={styles.footer_logo_imagen}
              src="/img/logo_nombre_chico.png"
              alt={"LOGOTIPO"}
              width={200}
              height={57}
          />
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
      </div>
      <div className={styles.footer_legal}>
        <p className={styles.footer_copy_p}>©2026 copyright<strong className={styles.destacadoPrimary}> Jardineria Montañez </strong><strong className={styles.destacadoDorado}>|</strong>  Todos los derechos reservados</p>
        <p className={styles.footer_copy_p}>Desarrollado por
          <Link
            href={"https://paginaswebchavez.netlify.app"}
            aria-label="Desarrollador"
            className={styles.footer_LINKDESARROLLADOR}
          >
            <strong className={styles.destacadoPrimary}> PaginasWebChavez</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
}