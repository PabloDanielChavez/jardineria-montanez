"use client";
import dynamic from 'next/dynamic';
import Loading from '@/app/loading'; 

import Bienvenida from '@/components/sections/Bienvenida';
import BtnWSP from '@/components/sub_components/btnWSP';

const Servicio = dynamic(() => import('@/components/sections/Servicio'), { loading: () => <Loading />, ssr: true });
const Vision = dynamic(() => import('@/components/sections/Vision'), { loading: () => <Loading />, ssr: true });
const Sobre = dynamic(() => import('@/components/sections/Sobre'), { loading: () => <Loading />, ssr: true });
const Contacto = dynamic(() => import('@/components/sections/Contacto'), { loading: () => <Loading />, ssr: true });
const Como = dynamic(() => import('@/components/sections/ComoTrabajamos'), { loading: () => <Loading /> });

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