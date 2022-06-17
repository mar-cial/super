import { StaticImageData } from 'next/image';
import ribeye from '../public/images/carniceria/ribeye.jpeg';
import tomahawk from '../public/images/carniceria/tomahawk.jpeg';
import tbone from '../public/images/carniceria/tbone.jpeg';
import newyork from '../public/images/carniceria/newyork.jpeg';
import arrachera from '../public/images/carniceria/arrachera.jpeg';
import picana from '../public/images/carniceria/picana.jpeg';
import cowboy from '../public/images/carniceria/cowboy.jpeg';

export interface Meat {
  nombre: string;
  price_kg: number;
  image: StaticImageData;
  desc: string;
  id: string;
  link: string;
}

const meats: Meat[] = [
  {
    nombre: 'Rib-eye',
    price_kg: 500,
    image: ribeye,
    link: 'ribeye',
    desc: 'Si te has preguntado cuál es el corte de carne más suave y jugoso, el Rib-Eye es uno de ellos. Este corte se obtiene del costillar de la res y no tiene hueso, ideal para disfrutar a la parrilla. Su punto perfecto de cocción es tres cuartos o término medio, de esta manera al morderlo sentirás la suavidad y jugosidad que lo caracterizan.',
    id: '1c9ab584-ef35-4ada-9002-5747560e90ec',
  },
  {
    nombre: 'Tomahawk',
    image: tomahawk,
    price_kg: 600.5,
    link: 'tomahawk',
    desc: 'Entre los cortes de carnes más ricos sin dudas se encuentra el Tomahawk. Esta pieza es sacada del mismo lugar que se obtiene el Rib-Eye, la diferencia es que a este se le deja un hueso al que se le quita la grasa en su totalidad para obtener la forma que lo ha hecho tan conocido. La mejor forma de cocinarlo es a la parrilla a fuego indirecto por unos 10 minutos.',
    id: '0251a82a-739f-427a-856e-aad4a4e84a8a',
  },
  {
    nombre: 'T-bone',
    image: tbone,
    price_kg: 700.25,
    link: 'tbone',
    desc: 'Muchos se preguntan cuáles son los cortes americanos, pues el anterior y este están en la lista. El T-Bone es un filete en el que vas a disfrutar de una parte de solomillo y otra de entrecot al ser este un corte de carne de res que se obtiene de la parte media del lomo.  Además, este es una de las piezas más jugosas y por tanto, de las que mejor quedan en una parrilla de pallets.',
    id: '31d3fec3-40be-47ed-b7c9-430b5962064b',
  },
  {
    nombre: 'New York',
    image: newyork,
    price_kg: 550.5,
    link: 'newyork',
    desc: 'Esta pieza es alargada y suele venderse en trozos de más de dos centímetros de espesor por su maravilloso marmoleo y concentrado sabor. Lo encuentras en el lomo de la res, por lo que su concentración de grasa es alta. Estos cortes de carne son perfectos para el asador por su suavidad',
    id: '7ffb46bf-6263-4f5d-8456-fbaaf54a6e3c',
  },
  {
    nombre: 'Arrachera',
    image: arrachera,
    price_kg: 250,
    link: 'arrachera',
    desc: 'Esta es la excepción a la regla de los cortes de carne que van en el asador pues proviene de la falda de la res, es decir, de la pancita que cuelga. La arrachera corresponde a una parte fibrosa por lo que debe marinarse y ablandarse para que sepa rico y tenga buena textura. Hay dos opciones: la outside o capa exterior de la caja toráxica, que está en las entrañas de la res y la que tiene un poco más de grasa y la que se ubica más abajo llamada inside; es más fibrosa y por eso se marina.',
    id: 'bc570a38-282e-4ad9-8c97-da03ac8bd484',
  },
  {
    nombre: 'Picaña',
    image: picana,
    price_kg: 300,
    link: 'picana',
    desc: 'Justo donde termina el lomo y comienzan lo que los carniceros llaman cuartos traseros hay una pieza magra cubierta por un lado de una capa de grasa. Conocida en Estados Unidos como Top Sirloin o tri trap -aunque con algunas variaciones en su presentación- la picaña es una parte inferior del lomo que bien vale la pena ponerla en el asador. Da click al video y pruébala',
    id: '5e13c89d-44dc-46d7-bb98-248c40f7df5a',
  },
  {
    nombre: 'Cowboy',
    image: cowboy,
    price_kg: 400,
    link: 'cowboy',
    desc: 'Tiene el mismo origen que el Tomahawk pero se diferencia en el largo del hueso. Este corte de carne es magro con mucho marmoleo y grasita sabrosa que se obtiene con todo y hueso. La magia de ambos consiste en la concentración de jugos que causa cocinarlo a la vuelta y vuelta aunque también tenemos un secreto para eso: cualquier corte debe reposar antes de cortarlo por lo menos el 30% del tiempo que estuvo en cocción para que no se deshidrate.',
    id: 'd409b3af-cd43-458f-95c5-51aa17b985e9',
  },
];

export default meats;
