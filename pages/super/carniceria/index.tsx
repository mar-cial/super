import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import meats from '../../../data/meats.json';

export interface Meat {
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
      meats,
    },
  };
};

const CarniceriaPage: NextPage = ({
  meats,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const all: Meat[] = meats;

  return (
    <div className="flex flex-col gap-6">
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

      <div className={'grid grid-cols-3 gap-6'}>
        {all.map((meat) => (
          <div className="relative w-32 h-32" key={meat.id}>
            <h2>{meat.nombre}</h2>

            <Image
              src={`/images/carniceria/${meat.image}.jpeg`}
              layout={'responsive'}
              width={100}
              height={100}
              alt={meat.nombre}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarniceriaPage;
