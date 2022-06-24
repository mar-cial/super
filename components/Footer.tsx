import { AiOutlineShoppingCart, AiOutlineMail } from 'react-icons/ai';
import contact from '../lib/contact';
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 text-white bg-gray-800 h-96">
      <h2 className="text-3xl text-center text-white font-main">Contáctenos</h2>

      <AiOutlineShoppingCart className="text-6xl" />

      <div className="flex flex-col gap-1 text-center">
        <p>Calle 123 Col. Zaragoza</p>
        <p>Mexicali, Baja California c.p. 21300</p>
        <p>México</p>
      </div>

      <div>
        <button onClick={contact}>
          <AiOutlineMail className="text-3xl" />
        </button>
      </div>

      <div>
        <a href="https://github.com/mar-cial" className="font-mono">
          Hecho por César Marcial - Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
