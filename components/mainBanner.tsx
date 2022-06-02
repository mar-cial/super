import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiFruitBowl, GiHotMeal, GiSodaCan } from 'react-icons/gi';
import { TbMeat } from 'react-icons/tb';
import CategoryTile from './categoryTile';
import Link from 'next/link';
import meatpic from '../public/images/meat.jpg'
import fruitspic from '../public/images/fruits.jpeg'
import mealspic from '../public/images/meals.jpg'
import beveragespic from '../public/images/beverages.jpg'


const MainBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categories = [
    {
      id: 1,
      title: 'Frutas & verduras',
      icon: <GiFruitBowl className="text-5xl" />,
      image: fruitspic,
      path: '/super/verduras'
    },
    {
      id: 2,
      title: 'Carnicería',
      icon: <TbMeat className="text-5xl" />,
      image: meatpic,
      path: '/super/carniceria'
    },
    {
      id: 3,
      title: 'Bebidas',
      icon: <GiSodaCan className="text-5xl" />,
      image: beveragespic,
      path: '/super/bebidas'

    },
    {
      id: 4,
      title: 'Platillos',
      icon: <GiHotMeal className="text-5xl" />,
      image: mealspic,
      path: '/super/platillos'

    },
  ];

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
    >
      <motion.div className={'grid lg:grid-cols-3 md:gap-6 p-4 lg:p-6 gap-y-4'}>
        <motion.div className={'flex flex-col col-span-1 gap-6'}>
          <motion.h2
            className={
              'font-semibold text-5xl md:text-6xl lg:text-7xl font-serif'
            }
          >
            Todo lo que busca, en la puerta de su hogar.
          </motion.h2>
          <motion.p>
            Contamos con una gran variedad de productos que puede pedir desde la
            comodidad de su casa. Nuestro objetivo es facilitarle la vida conn
            nuestro sistema de pedidos en línea.
          </motion.p>

          <motion.div className="flex flex-col gap-4">
            <motion.div className="grid w-full grid-cols-4 gap-2 ">
              {categories.map((category) => {
                return (
                  <CategoryTile
                    title={category.title}
                    icon={category.icon}
                    key={category.id}
                    action={() => setSelectedCategory(category.id - 1)}
                  />
                );
              })}
            </motion.div>
            <Link href={'/productos'}>
            <motion.a
              className={'bg-emerald-200 text-emerald-600 font-bold py-2 text-center'}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Haz tu súper
            </motion.a>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={'relative aspect-video lg:aspect-auto col-span-2'}
        >
          <motion.div
            animate={{y:0}}
            initial={{y: -10}}
            className='relative w-full h-full'
          >
            <Image
              src={categories[selectedCategory].image}
              className={'object-cover'}
              layout={'fill'}
              alt={categories[selectedCategory].title}
              priority
            />
            <motion.div
              className={
                'absolute bottom-2 right-2 left-2 bg-white h-12 opacity-95 flex justify-between  items-center px-4'
              }
            >
              <h3 className='font-serif text-2xl font-medium'>{categories[selectedCategory].title}</h3>
              <Link href={categories[selectedCategory].path}>
                <a className='px-2 py-1 text-emerald-600 bg-emerald-200'>Saber más</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </motion.div>
    </motion.main>
  );
};

export default MainBanner;
