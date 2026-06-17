import dynamic from 'next/dynamic';

import Bienvenida from '@/components/sections/Bienvenida';


const Servicio = dynamic(() => import('@/components/sections/Servicio'), { loading: () => <p>Cargando...</p>, ssr: true });
const Vision = dynamic(() => import('@/components/sections/Vision'), { loading: () => <p>Cargando...</p>, ssr: true });
const Sobre = dynamic(() => import('@/components/sections/Sobre'), { loading: () => <p>Cargando...</p>, ssr: true });
const Galeria = dynamic(() => import('@/components/sections/Galeria'), { loading: () => <p>Cargando...</p>, ssr: true });
const Como = dynamic(() => import('@/components/sections/ComoTrabajamos'));
const Contacto = dynamic(() => import('@/components/sections/Contacto'), { loading: () => <p>Cargando...</p>, ssr: true, });

export default function Home() {
  return (
    <>
      <Bienvenida />
      <Servicio />
      <Vision />
      <Sobre />
      {/* <Galeria /> */}
      <Como />
      <Contacto />
    </>
  );
}
