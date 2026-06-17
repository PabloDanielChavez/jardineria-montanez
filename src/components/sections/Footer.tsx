import Link from "next/link";
import { PiPlantFill } from "react-icons/pi";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/footer.module.scss";


const footerContacto = [
    { id:"1", nombre: " Bazurco 3158, FLF, Buenos Aires.", icono: <MdLocationOn className={styles.footer_icono}/> , url:"/"},
    { id:"2", nombre: " +54 9 11 5473-5403", icono: <MdPhone className={styles.footer_icono}/> , url:"/"},
    { id:"3", nombre: " info@verdesuelo.com.ar", icono: <MdEmail className={styles.footer_icono}/> , url:"/"},
    { id:"4", nombre: " Lu. a Vi. 9 a 19hs", icono: <MdAccessTime className={styles.footer_icono}/>, url:"/"}, 
];

const footerMenu = [
    { id:"1", nombre: "Inicio", icono: <MdLocationOn className={styles.footer_icono}/> , url:"/"},
    { id:"2", nombre: "Servicios", icono: <MdEmail className={styles.footer_icono}/> , url:"/"},
    { id:"3", nombre: "Vision", icono: <MdEmail className={styles.footer_icono}/> , url:"/"},
    { id:"4", nombre: "Nosotros", icono: <MdAccessTime className={styles.footer_icono}/>, url:"/"}, 
    { id:"5", nombre: "¿Como Trabajamos?", icono: <MdAccessTime className={styles.footer_icono}/>, url:"/"}, 
    { id:"6", nombre: "Contacto", icono: <MdAccessTime className={styles.footer_icono}/>, url:"/"}, 
];

const footerRedes = [
    { id:"1", icono: <FaInstagram className={styles.footer_social}/> , url:"/"},
    { id:"2", icono: <FaWhatsapp className={styles.footer_social}/> , url:"/"},
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contenedor}>
        <div className={`${styles.footer_logo}  ${styles.footer_GRIDCOL}`}>
          <PiPlantFill className={styles.footer_logo_icono} />
          <h2 className={styles.footer_logo_h2}>Jardineria Montañez</h2>
        </div>
        <div className={styles.footer_col}>
          <h3 className={styles.footer_h3}>ENLACES</h3>
          <ul className={styles.footer_ul}>
            {footerMenu.map((item) => (
              <li key={item.id} className={styles.footer_li}>
                <Link href={item.url} className={styles.footer_LINK}>{item.nombre}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.footer_col}`}>
          <h3 className={styles.footer_h3}>CANALES DE CONTACTO</h3>
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