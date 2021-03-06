import React, { FC } from 'react';
import { motion } from 'framer-motion';

type CategoryTileProps = {
  icon: JSX.Element;
  title: string;
  action: () => void;
};

const CategoryTile: FC<CategoryTileProps> = ({ icon, title, action }) => {
  return (
    <motion.button
      className="flex flex-col items-center justify-between p-10 text-center rounded-md shadow-md"
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
      onClick={action}
    >
      {icon}
      <motion.p className="text-sm font-medium">{title}</motion.p>
    </motion.button>
  );
};

export default CategoryTile;
