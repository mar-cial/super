// date created dd/mm/yy: 23 / 06 / 2022 - 13 : 44 : 39 by César Marcial

//react / nextjs imports

// media imports

// data imports
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Footer from '../../components/Footer';
import transactions from '../../data/transactions.json';
import { Transaction } from '../../model/transactions';

// component imports

// interfaces

// static paths and props
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = transactions.map((t) => {
    const transId = t.short_id;

    return {
      params: {
        transId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const trans: Transaction | undefined = transactions.find(
    (c) => c.short_id == params?.transId
  );

  if (!trans) {
    return {
      notFound: true,
    };
  }

  return {
    props: { trans },
  };
};

// start of component
const Recibo = ({ trans }: InferGetStaticPropsType<GetStaticProps>) => {
  const t: Transaction = trans;
  return (
    <>
      <div className="flex justify-center p-4 md:py-6">
        <div className="flex flex-col items-center md:w-1/3 ">
          <header className="pb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-main">Recibo</h1>
            <h2>{t.id}</h2>
          </header>

          <div className="w-full">
            <div className="pb-4">
              <div className="flex items-end justify-between">
                <h3 className="text-2xl italic font-main">Total</h3>
                <p className="text-2xl italic font-main">{`$${t.total.toFixed(
                  2
                )}`}</p>
              </div>

              <div className="flex justify-between">
                <h3>Fecha de la compra</h3>

                <p>{t.date}</p>
              </div>
            </div>

            {/* <-------------------- Carne comprada container --------------------> */}
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <header className="pb-2">
                  <h2 className=" font-main">Carne comprada</h2>
                </header>
                <div>
                  <ul className="flex flex-col gap-2">
                    {t.meat_bought.map((m) => (
                      <div className="pb-2 border-b-2">
                        <p className="font-mono text-sm text-gray-500">
                          Artículo
                        </p>
                        <h4 className="text-lg font-main">{m.nombre}</h4>
                        <p className="font-mono text-sm text-gray-500">
                          Cantidad comprada
                        </p>
                        <p>{`${m.cantidad_comprada.toFixed(2)}kg.`}</p>
                        <p className="font-mono text-sm text-gray-500">
                          Precio por kilo
                        </p>
                        <p>{`$${m.precio_kg.toFixed(2)}`}</p>
                        <p className="font-mono text-sm text-gray-500">
                          Total partida
                        </p>
                        <p>{`$${m.total_partida.toFixed(2)}`}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-right">
                <header className="pb-2">
                  <h2 className="font-main">Vegetales comprados</h2>
                </header>
                <div>
                  <ul className="flex flex-col gap-2">
                    {t.vegetable_bought.map((v) => (
                      <div className="pb-2 border-b-2">
                        <p className="font-mono text-sm text-gray-500">
                          Artículo
                        </p>
                        <h4 className="text-lg font-main">{v.nombre}</h4>
                        <p className="font-mono text-sm text-gray-500">
                          Cantidad comprada
                        </p>
                        <p>{`${v.cantidad_comprada.toFixed(2)}kg.`}</p>
                        <p className="font-mono text-sm text-gray-500">
                          Precio por kilo
                        </p>
                        <p>{`$${v.precio_kg.toFixed(2)}`}</p>
                        <p className="font-mono text-sm text-gray-500">
                          Total partida
                        </p>
                        <p>{`$${v.total_partida.toFixed(2)}`}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recibo;
