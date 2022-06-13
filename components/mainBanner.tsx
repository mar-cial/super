import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

import CategoryTile from './categoryTile'
import Link from 'next/link'
import categories from '../data/categories'

const MainBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      
    >
      <motion.div className={'lg:grid-cols-7 grid lg:gap-4 gap-y-4 pt-8 lg:px-4 lg:py-12 '}>

        {/* banner text left side*/}
        <motion.div className={'gap-8 lg:gap-12 flex flex-col text-center px-4 lg:col-span-3'}>
          <motion.h2
            className={
              'font-semibold font-main text-6xl'
            }
          > 
            Todo lo que busca, en la puerta de su hogar.
          </motion.h2>
          <motion.p className='text-md'>
            Contamos con una gran variedad de productos que puede pedir desde la
            comodidad de su casa. Nuestro objetivo es facilitarle la vida con
            nuestro sistema de pedidos en línea.
          </motion.p>

          <motion.div className="flex flex-col col-span-1 gap-4">
            <motion.div className="grid w-full grid-cols-4 gap-2 ">
              {categories.map((category) => {
                return (
                  <CategoryTile
                    title={category.title}
                    icon={category.icon}
                    key={category.id}
                    action={() => setSelectedCategory(category.id - 1)}
                  />
                )
              })}
            </motion.div>
            <Link href={'/super'}>
              <motion.a
                className={
                  'bg-emerald-200 text-emerald-600 font-bold py-2 text-center'
                }
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                Haz tu súper
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>

        
        {/* banner image right side */}
        <motion.div
          className={'relative col-span-4 h-96 lg:h-auto'}
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
              <h3 className="font-serif text-2xl font-medium">
                {categories[selectedCategory].title}
              </h3>
              <Link href={categories[selectedCategory].path}>
                <a className="px-2 py-1 text-emerald-600 bg-emerald-200">
                  Saber más
                </a>
              </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.main>
  )
}

export default MainBanner
