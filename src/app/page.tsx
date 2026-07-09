import Bienvenida from '@/components/sections/Bienvenida';
import ConfianzaInmediata from '@/components/sections/ConfianzaInmediata';
import Servicio from '@/components/sections/Servicio';
import Galeria from '@/components/sections/Galeria';
import Vision from '@/components/sections/Vision';
import Mantenimiento from '@/components/sections/Mantenimiento';
import ComoTrabajamos from '@/components/sections/ComoTrabajamos';
import Sobre from '@/components/sections/Sobre';
import Testimonios from '@/components/sections/Testimonios';
import PreguntasFrecuentes, {
  preguntasFrecuentes,
} from '@/components/sections/PreguntasFrecuentes';
import Contacto from '@/components/sections/Contacto';
import BtnWSP from '@/components/sub_components/btnWSP';

const sitioUrl = 'https://jardineriamontanez.netlify.app';

const negocioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Jardinería Montañez',
  url: sitioUrl,
  image: `${sitioUrl}/img/logo_nombre.jpg`,
  telephone: '+54 9 2226 60-7508',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Esteban',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de jardinería',
    itemListElement: [
      'Corte de césped',
      'Poda de árboles y arbustos',
      'Limpieza de terrenos y patios',
      'Desmalezado',
      'Mantenimiento de jardines',
      'Recuperación de espacios verdes',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: preguntasFrecuentes.map((item) => ({
    '@type': 'Question',
    name: item.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.respuesta,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(negocioJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
            {/* <Bienvenida />
            <ConfianzaInmediata />
            <Servicio />
            <Galeria />
            <Vision />
            <Mantenimiento />
            <ComoTrabajamos />
            <Sobre />
            <Testimonios />
            <PreguntasFrecuentes />
            <Contacto /> */}  

        <Bienvenida /> {/* Objetivo: que el usuario entienda en 5 segundos qué hacen, dónde trabajan y qué beneficio obtiene. “¿Esto es para mí?”, “¿Trabajan en mi zona?”, “¿Puedo consultar fácil?” */}
        <ConfianzaInmediata /> {/* Objetivo: Bajar dudas rápidas antes de que el usuario siga bajando.*/}
        <Servicio /> {/* Objetivo: mostrar claramente qué servicios ofrecen y captar búsquedas SEO específicas.*/}
        <Galeria /> {/* Objetivo: mostrar claramente qué servicios ofrecen y captar búsquedas SEO específicas. Acá entran las keywords fuertes: Corte de pasto, Poda, Desmalezado, Limpieza de terrenos,Mantenimiento de jardines, Recuperación de espacios verdes*/}
        <Mantenimiento /> {/* Objetivo: demostrar con imágenes que el servicio existe y que el resultado se ve. Esta sección es clave para conversión. En jardinería, la prueba visual vende mucho. */}
        <ComoTrabajamos /> {/* Objetivo: convertir una consulta puntual en un servicio más estable o recurrente. */}
        <Vision /> {/* Objetivo: conectar emocionalmente con el valor del jardín. Esta sección sirve si no es demasiado institucional. No debería hablar solo de “nuestra visión” como empresa. Debería hablar del resultado para el cliente. */}
        <Sobre /> {/* Objetivo: humildad y generar confianza. Acá la persona tiene que sentir que no está hablando con una empresa fría, sino con alguien real. Pero cuidado: no inventar años, experiencia, garantías ni frases tipo “líderes en Buenos Aires”. */}
        <Testimonios />
        <PreguntasFrecuentes />
        <Contacto />
        <BtnWSP />
    </>
  );
}
