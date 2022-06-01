import {AnimatePresence, motion} from 'framer-motion';
import {NextPage} from 'next';
import {useState} from 'react';
import {FiMenu} from 'react-icons/fi';
import Link from "next/link";
import Image from 'next/image'

const Home: NextPage = () => {
    const [open, setOpen] = useState<Boolean>(false)

    const toggle = () => {
        setOpen(!open)
    }

    const links: { text: string, link: string }[] = [
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

    const navVariants = {
        hidden: {
            height: 0,
            padding: '0em',
            backgroundColor: '#ffe87e',
            transition: {
                when: 'afterChildren',
                staggerChildren: '0.1',
                staggerDirection: -1
            }
        },
        enter: {
            height: 40,
            padding: '1em',
            backgroundColor: '#ffe87e',
            transition: {
                when: 'beforeChildren',
                staggerChildren: '0.1'
            }
        }
    }

    const navVariantsItems = {
        hidden: {
            height: 0,
            opacity: 0
        },
        enter: {
            height: 0,
            opacity: 1,
        }
    }

    return (
        <>
            <header className="flex justify-between px-4 py-2">
                <h1 className="text-2xl font-semibold">Groceries.</h1>

                <button onClick={toggle}>
                    <FiMenu className="text-2xl"/>
                </button>
            </header>


            <AnimatePresence>
                {
                    open && (
                        // @ts-ignore
                        <motion.nav variants={navVariants} animate={'enter'} initial={'hidden'} exit={'hidden'}
                                    className={'flex justify-between items-center'}>
                            {links.map((item, i) => (
                                <motion.div className={'text-center gap-2'}>
                                    <Link href={item.link} passHref key={i}>
                                        <motion.a variants={navVariantsItems}
                                                  className={'text-center'}>{item.text}</motion.a>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                    )
                }
            </AnimatePresence>

            <motion.main animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: -10}}>

                <motion.div className={'grid grid-row-2 lg:grid-cols-8 px-4 p-2 gap-4 '}>
                    <motion.div className={'flex flex-col gap-6 col-span-3'}>
                        <motion.h2 className={'font-semibold text-5xl md:text-6xl lg:text-7xl font-serif'}>
                            Todo lo que busca, en la puerta de su hogar.
                        </motion.h2>
                        <motion.p>
                            Contamos con una gran variedad de productos que puede pedir desde la comodidad de su casa.
                            Nuestro objetivo es facilitarle la vida conn nuestro sistema de pedidos en línea.
                        </motion.p>
                        <motion.button className={'bg-emerald-200 text-emerald-600 font-bold py-2'}>
                            Go shopping
                        </motion.button>
                    </motion.div>

                    <motion.div className={'relative lg:col-span-5'}>
                        <Image src={'/images/banner.jpeg'} width={1910} height={1080} layout={'fill'}/>
                    </motion.div>
                </motion.div>
            </motion.main>
        </>
    );
};

export default Home;
