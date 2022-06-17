import { NextPage } from 'next';
import Image from 'next/image';
import { json } from 'stream/consumers';
import vegData from '../../../data/vegetales.json';

export interface Vegetales {
  nombre: string;
  image: string;
  price_kg: number;
  desc: string;
  id: string;
}

const VerdurasPage: NextPage = () => {
  return (
    <div>
      {vegData.map((veg) => (
        <div>
          <p>{veg.name}</p>
          <Image src={require(`/public/images/vegetales/${veg.image}.jpeg`)} />
        </div>
      ))}
    </div>
  );
};

export default VerdurasPage;
