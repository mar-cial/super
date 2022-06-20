import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import SectionRibbon from '../../../components/SectionRibbon';
import carnes from '../../../data/meats.json';

export interface Carne {
  nombre: string;
  price_kg: number;
  image: string;
  link: string;
  desc: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      carnes: carnes,
    },
  };
};

const CarniceriaPage: NextPage = ({
  carnes,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const all: Carne[] = carnes;

  return (
    <>
      <div className="flex flex-col gap-6 pb-12">
        <div className="relative">
          <video loop autoPlay muted controls={false}>
            <h3 className="text-4xl font-main">hello?</h3>
            <source src={'/videos/bbq.mp4'} type={'video/mp4'} />
          </video>

          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-4 text-center text-white bg-black bg-opacity-50 font-main">
            <h2 className={'text-3xl md:text-5xl'}>Carnicería Súper</h2>
            <p>Cortes gourmet, realizados por carniceros expertos.</p>
          </div>
        </div>

        <SectionRibbon title="Nuestros cortes" />
        <div className={'grid grid-cols-2 md:grid-cols-4 gap-6 px-4'}>
          {all.map((meat) => (
            <div className="relative flex flex-col gap-3" key={meat.id}>
              <Image
                src={`/images/carniceria/${meat.image}.jpeg`}
                layout={'responsive'}
                width={100}
                height={100}
                alt={meat.nombre}
              />
              <h2 className="text-2xl font-medium font-main">{meat.nombre}</h2>
              <p className="italic text-gray-400">{`"${meat.desc.slice(
                0,
                150
              )}..."`}</p>
              <div className="flex items-center justify-center w-full text-center text-red-400 bg-red-200">
                <Link href={`/super/carniceria/${meat.image}`} passHref>
                  <a className="w-full h-full py-2 text-md font-main">
                    Saber más
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarniceriaPage;
