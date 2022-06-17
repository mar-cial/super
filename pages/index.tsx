import { NextPage } from 'next';
import Footer from '../components/Footer';
import MainBanner from '../components/mainBanner';
import SeccionEspeciales from '../components/SeccionEspeciales';
import SectionRibbon from '../components/SectionRibbon';


const Home: NextPage = () => {
  return (
    <>
      <MainBanner />

      <SectionRibbon title="¡Especiales!" />

      <SeccionEspeciales />

      <Footer />
    </>
  );
};

export default Home;
