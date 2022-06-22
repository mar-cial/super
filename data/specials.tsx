import { StaticImageData } from 'next/image';
import meatspecial from '../public/images/especialcarne.jpg';
import vegfruitspecial from '../public/images/especialvegetales.png';
import mealspecial from '../public/images/especialcomidas.jpg';

interface EspecialesProps {
  title: string;
  desc: string;
  image: StaticImageData;
}

const Especiales: EspecialesProps[] = [
  {
    title: '2 x 1 Carnes',
    desc: 'En la compra de 1kg de Rib-Eye, ¡llévese otro gratis!',
    image: meatspecial,
  },
  {
    title: 'Vegetales por montón',
    desc: 'La mejor selección de frutas y verduras, escogidas cuidadosamente para usted.',
    image: vegfruitspecial,
  },
  {
    title: 'Comidas por semanas',
    desc: 'Ahorre al momento de comprar paquetes semanales de comida.',
    image: mealspecial,
  },
];

export default Especiales;
