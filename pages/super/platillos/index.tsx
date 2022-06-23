// date created dd/mm/yy: 20 / 06 / 2022 - 12 : 20 : 54 by César Marcial

//react / nextjs imports
import { NextPage } from 'next';
import Image from 'next/image';

// media imports
import platillos from '../../../public/images/especialvegetales.png';

// data imports
import { motion } from 'framer-motion';
// component imports
import Footer from '../../../components/Footer';
import PlanContainer from '../../../components/PlanContainer';
import contact from '../../../lib/contact';

// start of component
const PlatillosPage: NextPage = () => {
  const planes = [
    {
      title: 'Plan A - Paleo',
      data: 'Diseñado con un fuerte enfoque en la proteína sin tantos carbohidratos.',
      listado: [
        'Pechuga de pollo',
        'Huevos',
        'Leche vegetal',
        'Pescado',
        'Semillas',
        'Carnes selectas',
      ],
    },
    {
      title: 'Plan B - Keto',
      data: 'La dieta ceto es una de las dietas más populares para perder peso en un corto período de tiempo. Esta dieta es un tipo de plan de alimentación bajo en carbohidratos y alto en grasas.',
      listado: [
        'Vegetales',
        'Legumbres',
        'Carne de puerco',
        'Cangrejo',
        'Tocino',
        'Pastas',
      ],
    },
  ];
  return (
    <>
      {/* <-------------------- PLATILLOS CONTAINER --------------------> */}
      <div className="grid md:grid-cols-2 ">
        {/* <-------------------- image container left side --------------------> */}
        <div className="pb-6">
          <Image src={platillos} width={100} height={100} layout="responsive" />
        </div>

        {/* <-------------------- info container right side --------------------> */}
        <div className="p-6 md:p-12">
          <h2 className="text-4xl font-main">
            Platillos preparados al momento de entrega.
          </h2>
          <div className="pt-4 font-text">
            <p>
              Nuestron planes cuentan con la solución en nutrición que busca.
            </p>
            <p>Seleccione alguno de los planes para obtener más información.</p>
          </div>

          {/* <-------------------- planes --------------------> */}
          <div className="grid gap-4">
            {planes.map((plan) => (
              <PlanContainer
                title={plan.title}
                data={plan.data}
                listado={plan.listado}
              />
            ))}
            <motion.button
              className="py-2 text-emerald-500 bg-emerald-200"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={contact}
            >
              Contáctenos para saber más!
            </motion.button>
          </div>

          {/* <-------------------- contact button --------------------> */}
        </div>
      </div>

      {/* <-------------------- FOOTER SECTION --------------------> */}
      <Footer />
    </>
  );
};

export default PlatillosPage;
