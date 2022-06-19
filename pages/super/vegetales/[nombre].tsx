import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import { Vegetal } from '.';
import Footer from '../../../components/Footer';
import veggies from '../../../data/vegetales.json';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = veggies.map((veg) => ({ params: { nombre: veg.image } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const veg: Vegetal | undefined = veggies.find(
    (veg) => veg.image == params?.nombre
  );

  if (!veg) {
    return {
      notFound: true,
    };
  }

  return {
    props: { veg },
  };
};

const VegetalIndividual: NextPage = ({
  veg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const v: Vegetal = veg;

  return (
    <>
      <div className="flex flex-col gap-4 p-6 md:flex-row">
        <div className="relative p-2 border-2">
          <div className="w-full h-full md:w-96 md:h-96">
            <Image
              src={`/images/vegetales/${v.image}.jpeg`}
              layout="responsive"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 p-4 border-2">
          <div>
            <p className="font-mono text-gray-500">Nombre</p>
            <h2 className="text-4xl font-bold font-main">{v.nombre}</h2>
          </div>

          <div>
            <p className="font-mono text-gray-500">Descripción</p>
            <p>{v.descripcion.beneficios}</p>
          </div>

          <div>
            <p className="font-mono text-gray-500">Precio por kilo</p>
            <p className="text-xl tracking-widest font-main">{`$${v.precio_kg.toFixed(
              2
            )}`}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VegetalIndividual;
