import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { MdAccountCircle } from 'react-icons/md';

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
      text: 'Cuenta',
      link: '/cuenta',
    },
  ];

  const navVariants = {
    hidden: {
      height: 0,
      backgroundColor: '#ffe87e',
      transition: {
        when: 'afterChildren',
        staggerChildren: '0.1',
        staggerDirection: -1,
      },
    },
    enter: {
      height: 40,
      padding: '0em 2em',
      backgroundColor: '#ffe87e',
      transition: {
        when: 'beforeChildren',
        staggerChildren: '0.1',
      },
    },
  };

  const navVariantsItems = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    enter: {
      height: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <header className="flex justify-between p-4 lg:p-6">
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold cursor-pointer font-main">
            Súper.
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          <button onClick={toggle}>
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          // @ts-ignore
          <motion.nav
            // @ts-ignore
            variants={navVariants}
            animate={'enter'}
            initial={'hidden'}
            exit={'hidden'}
            className={'flex justify-between items-center gap-2'}
          >
            {links.map((item, i) => (
              <motion.div className={'text-center'}>
                <Link href={item.link} passHref key={i}>
                  <motion.a
                    variants={navVariantsItems}
                    className={'text-center font-main'}
                  >
                    {item.text}
                  </motion.a>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
