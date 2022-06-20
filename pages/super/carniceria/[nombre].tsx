import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { Carne } from '.';
import Footer from '../../../components/Footer';
import carnes from '../../../data/meats.json';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = carnes.map((c) => ({ params: { nombre: c.image } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const carne: Carne | undefined = carnes.find(
    (c) => c.image == params?.nombre
  );

  if (!carne) {
    return {
      notFound: true,
    };
  }

  return {
    props: { carne },
  };
};

const CarneIndividual = ({
  carne,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const crn: Carne = carne;
  return (
    <>
      <div className="flex flex-col text-center">
        <div className="grid p-6 md:grid-cols-2">
          <Image
            src={`/images/carniceria/${crn.image}.jpeg`}
            layout="responsive"
            height={100}
            width={100}
            className="object-cover"
          />

          <article className="flex flex-col gap-6 p-6">
            <header>
              <p className="font-mono text-gray-500">Nombre de corte</p>
              <h2 className="text-4xl font-bold underline font-main underline-offset-4">
                {crn.nombre}
              </h2>
            </header>
            <div>
              <p className="font-mono text-gray-500">Descripción</p>
              <p className="font-main">{crn.desc}</p>
            </div>
            <div>
              <p className="font-mono text-gray-500">Precio por kilo</p>
              <p className="tracking-widest font-main">{`$${crn.price_kg.toFixed(
                2
              )}`}</p>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarneIndividual;
