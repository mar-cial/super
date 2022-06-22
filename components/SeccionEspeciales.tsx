import Especiales from '../data/specials';
import Image from 'next/image';

const SeccionEspeciales = () => {
  return (
    <section className="grid gap-2 p-2 md:grid-cols-3">
      {Especiales.map((especial) => (
        <div className="grid rounded-md shadow-md ">
          <div className="relative">
            <Image
              src={especial.image}
              alt={especial.title}
              className="object-cover rounded-t-md"
              width={100}
              height={70}
              layout={'responsive'}
            />
          </div>
          <div
            className={
              'border-x-1 border-b-1 rounded-b-md flex flex-col p-4 text-center'
            }
          >
            <h3 className="text-2xl font-bold font-main">{especial.title}</h3>
            <p className={'font-text'}>{especial.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SeccionEspeciales;
