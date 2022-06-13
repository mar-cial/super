import { NextPage } from 'next';
import MainBanner from '../components/mainBanner';
import SectionRibbon from '../components/SectionRibbon';
import Especiales from '../data/specials';
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />

      <SectionRibbon title="¡Especiales!" />

      <section className="grid gap-4 p-4 md:grid-cols-3">
        {Especiales.map((especial) => (
          <div className='relative grid rounded-md shadow-md'>
            <Image src={especial.image} alt={especial.title}  className='object-cover rounded-t-lg' width={500} height={500} layout={'responsive'}/>
            <div className={'p-4 border-x-1 border-b-1 rounded-b-md'}>
              <h3 className='text-2xl font-bold font-main'>{especial.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
