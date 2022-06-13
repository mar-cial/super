import { StaticImageData } from "next/image"
import meatspecial from '../public/images/meat-special.jpg'
import vegfruitspecial from '../public/images/vegetables-special.jpeg'
import mealspecial from '../public/images/meal-special.jpeg'

interface EspecialesProps {
  title: string
  desc: string
  image: StaticImageData
  path: string
}

const Especiales: EspecialesProps[] = [
  {
    title: '2 x 1 Carnes',
    desc: "En la compra de 1kg de pulpa bola, ¡llévese otro gratis!",
    image: meatspecial,
    path: "/super/especiales"
  },
  {
    title: 'Vegetales por montón',
    desc: 'La mejor selección de frutas y verduras, escogidas cuidadosamente para usted.',
    image: vegfruitspecial,
    path: "/super/especiales"
  },
  {
    title: 'Comidas por semanas',
    desc: 'Ahorre al momento de comprar paquetes semanales de comida',
    image: mealspecial,
    path: "/super/especiales"
  }
]

export default Especiales