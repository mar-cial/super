// date created dd/mm/yy: 21 / 06 / 2022 - 13 : 13 : 39 by César Marcial

import { NextPage } from 'next';
import Image from 'next/image';
import Footer from '../../components/Footer';

//react / nextjs imports

// media imports

// data imports

// start of component
const NosotrosPage: NextPage = () => {
  return (
    <>
      <div>
        <header className="px-4 py-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl font-main">
            Nuestro enfoque es la calidad.
          </h2>
        </header>

        <div className="flex justify-center w-full">
          <div className="w-full md:w-2/3">
            <Image
              src={'/images/nosotros/calidad.jpg'}
              width={2127}
              height={1400}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center text-center">
        <article className="px-10 py-6 md:px-4 md:w-2/3">
          <h3 className="pb-4 font-bold md:text-2xl font-main text-emerald-700">
            Calidad que nos diferencia
          </h3>
          <p className="justify-center text-justify font-text">
            Nuestro principal objectivo es que usted como cliente se vaya
            contento de nuestras instalaciones. Para nosotros, preparar comida
            es un momento especial, un escape de la rutina. Por este motivo, en
            Súper descubrimos que es necesario brindarle a todas las personas un
            proceso fluido, desde comprar ingredientes hasta preparar la comida.
          </p>
        </article>

        <article className="px-10 py-6 md:px-4 md:w-2/3">
          <h3 className="pb-4 font-bold md:text-2xl font-main text-emerald-700">
            Atención al detalle
          </h3>
          <p className="justify-center text-justify font-text">
            Todos los productos que son entregados a sus hogares son
            cuidadosamente seleccionados por expertos de su respectivo
            departamento. Después de una minuciosa selección, se someten a una
            rigurosa inspección de calidad por colaboradores calificados. Una
            vez que aceptamos que todos los productos estén a la altura de
            nuestros estándares, son llevados en un camión refrigerado hasta la
            puerta de su hogar.
          </p>
        </article>

        <article className="px-10 py-6 md:px-4 md:w-2/3">
          <h3 className="pb-4 font-bold md:text-2xl font-main text-emerald-700">
            Sin atajos
          </h3>
          <p className="justify-center text-justify font-text">
            Todos los productos que tenemos cuentan con un documento que
            certifique su calidad. Nunca le vamos a entregar algo que no sea lo
            que dice, y usted puede estar seguro de ello al checar los
            documentos que se actualizarán continuamente. Sólo visite la página
            del producto, descargue el documento y confirme que le estamos
            sirviendo la mejor calidad, siempre.
          </p>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
