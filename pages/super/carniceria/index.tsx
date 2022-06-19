import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meats,
    },
  };
};

const CarniceriaPage: NextPage = ({
  meats,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const all: Meat[] = meats;

  return (
    <div className="p-10">
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
