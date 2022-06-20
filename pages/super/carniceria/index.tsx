import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
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
        <div className="relative z-20">
          <video loop autoPlay muted className={'w-full'}>
            <source src={'/videos/bbq.mp4'} type={'video/mp4'} />
          </video>
        </div>
        <div className="fixed z-30 bg-black">
          <h2>hello</h2>
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
