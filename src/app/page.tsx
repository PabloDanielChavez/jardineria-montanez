import dynamic from 'next/dynamic';

import Bienvenida from '@/components/sections/Bienvenida';
import BtnWSP from '@/components/sub_components/btnWSP';


const Servicio = dynamic(() => import('@/components/sections/Servicio'), { loading: () => <p>Cargando...</p>, ssr: true });
const Vision = dynamic(() => import('@/components/sections/Vision'), { loading: () => <p>Cargando...</p>, ssr: true });
const Sobre = dynamic(() => import('@/components/sections/Sobre'), { loading: () => <p>Cargando...</p>, ssr: true });
const Como = dynamic(() => import('@/components/sections/ComoTrabajamos'));
const Contacto = dynamic(() => import('@/components/sections/Contacto'), { loading: () => <p>Cargando...</p>, ssr: true, });

export default function Home() {
  return (
    <>
      <div id="inicio"><Bienvenida /></div>
      <div id="sobre"><Sobre /></div>
      <div id="vision"><Vision /></div>
      <div id="servicio"><Servicio /></div>
      <div id="contacto"><Contacto /></div>
      <div id="como"><Como /></div>
      <div><BtnWSP /></div>
    </>
  );
}
