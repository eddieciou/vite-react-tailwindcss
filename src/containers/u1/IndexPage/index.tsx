import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const IndexPage = () => {
  const location = useLocation();

  return (
    <div>
      U1 IndexPage{location.pathname}
      <motion.div
        className="m-5 flex h-20 w-20 items-center bg-red-500 text-center"
        initial={{ x: 100 }}
        animate={{ x: 10 }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
      >
        framer motion
      </motion.div>
      <motion.div
        className="m-5 flex h-20 w-20 items-center bg-red-500 text-center"
        initial={{ x: 100, rotate: 45 }}
        whileHover={{
          scale: [0.9, 1.2, 1],
          x: [100, 120, 100, 90, 100],
        }}
        transition={{
          repeat: 3,
          duration: 0.3,
        }}
      >
        framer motion
      </motion.div>
    </div>
  );
};
