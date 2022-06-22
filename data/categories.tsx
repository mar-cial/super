import { GiFruitBowl, GiHotMeal, GiSodaCan } from 'react-icons/gi';
import { TbMeat } from 'react-icons/tb';
import meatpic from '../public/images/meat.jpg';
import fruitspic from '../public/images/fruits.jpeg';
import mealspic from '../public/images/meals.jpg';
import beveragespic from '../public/images/beverages.jpg';
import { StaticImageData } from 'next/image';

export type Category = {
  id: number;
  title: string;
  icon: JSX.Element;
  image: StaticImageData;
  path: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: 'Vegetales',
    icon: <GiFruitBowl className="text-5xl" />,
    image: fruitspic,
    path: '/super/vegetales',
  },
  {
    id: 2,
    title: 'Carnicería',
    icon: <TbMeat className="text-5xl" />,
    image: meatpic,
    path: '/super/carniceria',
  },
  {
    id: 3,
    title: 'Platillos',
    icon: <GiHotMeal className="text-5xl" />,
    image: mealspic,
    path: '/super/platillos',
  },
];

export default categories;
