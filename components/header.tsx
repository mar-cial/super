import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  const links = [
    {
      text: 'Inicio',
      link: '/',
    },
    {
      text: 'Súper',
      link: '/super',
    },
    {
      text: 'Nosotros',
      link: '/nosotros',
    },
    {
      text: 'Contacto',
      link: '/contacto',
    },
  ];

  return (
    <>
      
    </>
  );
};

export default Header;
