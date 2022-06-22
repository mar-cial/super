// date created dd/mm/yy: 21 / 06 / 2022 - 19 : 13 : 29 by César Marcial

//react / nextjs imports
import { NextPage } from 'next';
import TituloCartaDeUsuario from '../../components/TituloCartaDeUsuario';

// media imports

// data imports

// start of component
const CuentaPage: NextPage = () => {
  return (
    <>
      <div className="grid gap-4 p-6">
        <div>
          <p className="text-gray-400 text-mono font-main">Su cuenta</p>
          <h1 className="text-5xl font-main">¡Bienvenido, Usuario!</h1>
        </div>

        <div>
          <p>
            Aquí puede observar todas sus transacciones recientes, sus pedidos
            más populares y detalles de su cuenta.
          </p>
        </div>

        <div className="grid h-32 gap-2 md:grid-cols-3">
          {/* <-------------------- Detalles --------------------> */}
          <div className="grid gap-4 bg-blue-200">
            <header>
              <TituloCartaDeUsuario text="Sus detalles" />
            </header>
          </div>

          {/* <-------------------- Transacciones recientes --------------------> */}
          <div className="bg-red-200 ">
            <header>
              <TituloCartaDeUsuario text="Transacciones recientes" />
            </header>
          </div>

          {/* <-------------------- pedidos más populares --------------------> */}
          <div className="bg-violet-200">
            <header>
              <TituloCartaDeUsuario text="Sus pedidos favoritos" />
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuentaPage;
