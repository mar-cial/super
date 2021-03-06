// date created dd/mm/yy: 21 / 06 / 2022 - 19 : 13 : 29 by César Marcial

//react / nextjs imports
import { NextPage } from 'next';
import Link from 'next/link';
import { FC } from 'react';

// components
import TituloCartaDeUsuario from '../../components/TituloCartaDeUsuario';

// media imports

// data imports
import transactions from '../../data/transactions.json';
import { Transaction } from '../../model/transactions';

// interfaces
interface IDetalleRow {
  title: string;
  content: string;
}

// local components
const DetalleRow: FC<IDetalleRow> = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-between py-1 border-b-2 border-collapse border-gray-200">
      <h3 className="font-mono text-gray-500">{title}</h3>
      <p className="text-lg font-main">{content}</p>
    </div>
  );
};

const TransaccionRow = ({ date, total, short_id }: Transaction) => {
  return (
    <div className="flex justify-between py-1 border-b-2">
      <div>
        <p className="font-mono text-gray-400">Fecha</p>
        <h3 className="text-lg font-main">{date}</h3>
        <p className="font-mono text-gray-400">Total de la orden</p>
        <h3 className="text-lg font-main">{`$${total.toFixed(2)}`}</h3>
      </div>

      <div className="flex items-center justify-center">
        <Link href={`/cuenta/${short_id}`} passHref>
          <a>
            <button className="px-4 py-2 bg-emerald-200 text-emerald-500">
              Ver recibo
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

// fn
import contact from '../../lib/contact';

// start of component
const CuentaPage: NextPage = () => {
  return (
    <>
      <div className="grid gap-4 p-4 md:p-6">
        {/* <-------------------- HEADER --------------------> */}
        <div>
          <p className="text-gray-400 text-mono font-main">Su cuenta</p>
          <h1 className="text-5xl font-main">¡Bienvenido, Usuario!</h1>
        </div>

        {/* <-------------------- PAGE INFO --------------------> */}
        <div>
          <p>
            Aquí puede observar todas sus transacciones recientes, sus pedidos
            más populares y detalles de su cuenta.
          </p>
        </div>

        {/* <-------------------- CARD CONTAINER --------------------> */}
        <div className="grid gap-2 md:grid-cols-2 md:h-96">
          {/* <-------------------- Detalles --------------------> */}
          <div className="flex flex-col gap-4 p-6 rounded-md shadow-lg">
            <header>
              <TituloCartaDeUsuario text="Sus detalles" />
            </header>

            {/* <-------------------- detalles rows --------------------> */}
            <div className="grid w-full gap-2">
              <DetalleRow
                title="Dirección de entrega"
                content="Islas Galápagos 123 Col. Industrial"
              />

              <DetalleRow
                title="Nombre completo"
                content="Mario César Marcial Quintero"
              />

              <DetalleRow
                title="Sucursal preferida"
                content="Sucursal # 3 fracc. Palmeras 21390"
              />

              <DetalleRow
                title="Método de pago"
                content="Tarjeta de débito con terminación 5555"
              />

              <button
                className="py-2 bg-emerald-200 text-emerald-500"
                onClick={contact}
              >
                Cambiar detalles
              </button>
            </div>
          </div>

          {/* <-------------------- Transacciones recientes container --------------------> */}
          <div className="flex flex-col h-screen gap-4 p-6 overflow-scroll rounded-md shadow-lg md:h-auto">
            <header>
              <TituloCartaDeUsuario text="Transacciones recientes" />
            </header>

            {/* <-------------------- TRANSACCIONES CONTAINER --------------------> */}
            <div className="gap-2 py-1">
              {transactions.map((t) => (
                <TransaccionRow
                  short_id={t.short_id}
                  date={t.date}
                  total={t.total}
                  id={t.id}
                  meat_bought={[]}
                  vegetable_bought={[]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuentaPage;
