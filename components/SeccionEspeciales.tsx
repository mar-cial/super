import Especiales from '../data/specials';
import Image from 'next/image';

const SeccionEspeciales = () => {
  return (
    <section className="grid gap-4 p-4 md:grid-cols-3">
        {Especiales.map((especial) => (
          <div className="relative grid rounded-md shadow-md">
            <Image
              src={especial.image}
              alt={especial.title}
              className="object-cover rounded-t-lg"
              width={500}
              height={350}
              layout={'responsive'}
            />
            <div
              className={
                'border-x-1 border-b-1 rounded-b-md flex flex-col p-4'
              }
            >
              <h3 className="text-2xl font-bold font-main">{especial.title}</h3>
              <p className={"font-text"}>{especial.desc}</p>
            </div>
          </div>
        ))}
      </section>
  )
}

export default SeccionEspeciales