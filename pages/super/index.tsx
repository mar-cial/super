import { NextPage } from 'next';
import Image from 'next/image';
import tomahawk from '../../public/images/carniceria/tomahawk.jpeg';
import veggies from '../../public/images/vegetales/vegetables.jpg';
import cortes from '../../data/meats';
import veggiesData from '../../data/vegetales.json';

import Link from 'next/link';

const Super: NextPage = () => {
  return (
    <div>
      <header className="flex flex-col items-center justify-center gap-6 p-10">
        <h2 className="text-3xl font-main">Súper!</h2>
        <p className="text-center">
          Haga su super sin salir de su casa. <br />
          ¡Seleccione alguna de nuestras categorías para saber más!
        </p>
      </header>

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
              {cortes.map((corte) => (
                <Link href={`/super/carniceria/${corte.link}`}>
                  <a className={'font-main text-lg'}>{corte.nombre}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <Image
                src={veggies}
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
              {veggiesData.map((veg) => (
                <Link href={`/super/vegetales/${veg.image}`}>
                  <a className={'font-main text-lg'}>{veg.nombre}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Super;
