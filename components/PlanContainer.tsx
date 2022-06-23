// date created dd/mm/yy: 23 / 06 / 2022 - 09 : 00 : 51 by César Marcial

import { FC } from 'react';

//react / nextjs imports

// media imports

// data imports

// component imports

// interfaces
interface IPlan {
  title: string;
  data: string;
  listado: string[];
}

// start of component
const PlanContainer: FC<IPlan> = ({ title, data, listado }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-md">
      <header className="border-b-2">
        <h2 className="text-2xl font-main">{title}</h2>
      </header>

      <div className="flex flex-col">
        <div>
          <h3 className="font-mono text-sm text-gray-400">Información</h3>
          <p className="text-sm">{data}</p>
        </div>
        <div>
          <h3 className="font-mono text-sm text-gray-400">
            Este plan incluye:
          </h3>
          <ul className="grid grid-cols-3 gap-3">
            {listado.map((l) => (
              <li className="text-sm">{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
