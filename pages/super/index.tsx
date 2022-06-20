// next / react imports
import { NextPage } from 'next';
import Image from 'next/image';

// images
import tomahawk from '../../public/images/carniceria/tomahawk.jpeg';
import veggiesImg from '../../public/images/vegetales/vegetables.jpg';
import bebidasImg from '../../public/images/bebidas/bebidas.jpg';
import platillosImg from '../../public/images/platillos/meals.jpg';

// data
import veggiesData from '../../data/vegetales.json';
import cortesData from '../../data/meats.json';

// components
import Link from 'next/link';
import Footer from '../../components/Footer';

// component start
const Super: NextPage = () => {
  return (
    <>
      <div>
        {/* <-------------------- page banner --------------------> */}
        <header className="flex flex-col items-center justify-center gap-6 p-10">
          <h2 className="text-5xl font-main">¡Súper!</h2>
          <p className="text-center">
            Haga su super sin salir de su casa. <br />
            ¡Seleccione alguna de nuestras categorías para saber más!
          </p>
        </header>

        {/* <-------------------- sección de carnes --------------------> */}
        <div className="relative">
          <div>
            <div className="flex justify-center">
              <div className="w-full md:w-2/3">
                <Image
                  src={tomahawk}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6 text-center">
              <h2 className="text-3xl font-medium font-main">
                Cortes premium, seleccionados cuidadosamente por nuestros
                carniceros expertos.
              </h2>

              <div className="flex flex-col">
                {cortesData.map((corte) => (
                  <Link href={`/super/carniceria/${corte.link}`} key={corte.id}>
                    <a className={'font-main text-lg'}>{corte.nombre}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <-------------------- Sección de vegetales --------------------> */}
          <div>
            <div className="flex justify-center">
              <div className="w-full md:w-2/3">
                <Image
                  src={veggiesImg}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6 text-center">
              <h2 className="text-3xl font-medium font-main">
                Vegetales frescos escogidos cuidadosamente por verduleros
                expertos.
              </h2>

              <div className="flex flex-col">
                {veggiesData.map((veg) => (
                  <Link href={`/super/vegetales/${veg.image}`} key={veg.id}>
                    <a className={'font-main text-lg'}>{veg.nombre}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/** sección de bebidas */}
          <div>
            <div className="flex justify-center">
              <div className="w-full md:w-2/3">
                <Image
                  src={bebidasImg}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6 text-center">
              <h2 className="text-3xl font-medium font-main">
                Bebidas originales concoccionadas por maestros en bebidas
                preparadas.
              </h2>

              <div className="flex flex-col">
                <Link
                  href={'/super/bebidas'}
                  className="font-medium font-main"
                  passHref
                >
                  <a className="font-semibold md:text-xl font-main hover:underline hover:underline-offset-4 hover:text-yellow-600">
                    ¡Conozca nuestra selección de bebidas con un click aquí!
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* <-------------------- Sección de comidas / plastillos preparadas --------------------> */}
          <div>
            <div className="flex justify-center">
              <div className="w-full md:w-2/3">
                <Image
                  src={platillosImg}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
              <h2 className="text-2xl font-medium md:text-3xl md:w-1/2 font-main">
                Platillos preparados específicamente a base de sus necesidades.
                Cada platillo está medido a la perfección por nuestros cocineros
                para proporcionar los nutrientes que usted necesite.
              </h2>

              <div className="flex flex-col">
                <Link
                  href={'/super/platillos'}
                  className="font-medium font-main"
                  passHref
                >
                  <a className="font-semibold md:text-xl font-main hover:underline hover:underline-offset-4 hover:text-yellow-600">
                    ¡Conozca nuestros planes de nutrición con un click aquí!
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Super;
