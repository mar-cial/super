// react / next imports
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';

// lib imports
import { motion } from 'framer-motion';

// components
import Footer from '../../../components/Footer';
import carnes from '../../../data/meats.json';

// data
import { Carne } from './index';

// assets
import { AiFillStar } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// static paths and props
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

/**
 * Regresa el estilo que aplicar a la string quality.
 * Sólo regresa un estilo relevante si la string proporcionada
 * es exactamente alguno de estos valores:
 * 1. Wagyu 12
 * 2. Prime
 * 3. Choice
 * 4. Select
 * 5. Standard
 *
 * @param {string} quality La string a checar.
 * @returns {string} string color style
 */
const checkQuality = (quality: string): string => {
  switch (quality) {
    case 'Wagyu 12':
      return 'text-emerald-700';
    case 'Prime':
      return 'text-emerald-600';
    case 'Choice':
      return 'text-emerald-500';
    case 'Select':
      return 'text-emerald-400';
    case 'Standard':
      return 'text-emerald-300';
    default:
      return 'text-black';
  }
};

/**
 * Regresa la cantidad de user rating que posee el corte en
 * forma de estrellas amarillas.
 *
 * @param {Carne} user_rating propiedad del corte actual.
 * @returns {ReactNode} Estrellas amarillas
 */
const renderUserRatingStars = ({ user_rating }: Carne): ReactNode => {
  let allStarts: JSX.Element[] = [];

  for (let i = 0; i < Math.floor(user_rating); i++) {
    allStarts.push(<FaStar className="text-3xl fill-yellow-400" key={i} />);
  }

  if (user_rating > 4.4 && user_rating < 5.0) {
    allStarts.push(
      <FaStarHalfAlt className="text-3xl fill-yellow-400" key={'half'} />
    );
  }

  return allStarts;
};

const CarneIndividual = ({
  carne,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const crn: Carne = carne;

  return (
    <>
      {/* <-------------------- container --------------------> */}
      <div className="grid p-6 md:grid-cols-3">
        {/* <-------------------- imagen del corte COL 1 --------------------> */}
        <div className="col-span-1">
          <Image
            src={`/images/carniceria/${crn.image}.jpeg`}
            layout="responsive"
            height={100}
            width={100}
            className="object-cover"
          />
        </div>

        {/* <-------------------- información básica del corte COL 2 --------------------> */}
        <article className="flex flex-col gap-6 p-6 text-center">
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
            <p className="text-2xl tracking-widest font-main">{`$${crn.price_kg.toFixed(
              2
            )}`}</p>
          </div>
        </article>

        {/* <-------------------- información avanzada del corte COL 3 --------------------> */}
        <div className="flex flex-col col-span-1 gap-6 text-center">
          <h3 className="text-4xl font-semibold underline font-main underline-offset-4">
            Parilleros avanzados
          </h3>

          <div>
            <h4 className="font-mono text-gray-400">Grados en stock</h4>
            <ul>
              {crn.available_quality.map((q) => (
                <li
                  key={q}
                  className={`text-xl font-bold font-main ${checkQuality(q)}`}
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-gray-400">
              Calificación del consumidor
            </h4>
            <div className="flex justify-center gap-2">
              {renderUserRatingStars(crn)}
            </div>
            <p className="italic font-main">{crn.user_rating}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="font-mono text-gray-400">
              Garantía de autenticidad
            </h4>
            <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
              <GrDocumentPdf className="w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarneIndividual;
