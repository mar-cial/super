import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import vegData from '../../../data/vegetales.json';

type Descripcion = {
  componentes: string[];
  beneficios: string;
};

export interface Vegetal {
  nombre: string;
  image: string;
  precio_kg: number;
  descripcion: Descripcion;
  id: string;
}

const VerdurasPage: NextPage = () => {
  return (
    <>
      <div className="grid gap-2 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {vegData.map((veg) => (
          <div className="relative grid justify-between gap-6 p-4 border-2 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-4">
              <header className="flex flex-col gap-6">
                <h3 className="text-3xl font-main">{veg.nombre}</h3>
                <p className="font-serif text-gray-500 ">
                  {veg.descripcion.toString}
                </p>
              </header>
              <div>
                <Link href={`/super/vegetales/${veg.image}`}>
                  <a className="p-2 text-lg font-semibold bg-yellow-200 font-main">
                    Saber más
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`/images/vegetales/${veg.image}.jpeg`}
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default VerdurasPage;
