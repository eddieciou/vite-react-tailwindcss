import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const IndexPage = () => {
  const location = useLocation();

  return (
    <div>
      U1 IndexPage{location.pathname}
      <motion.div
        className="flex h-20 w-20 items-center bg-red-500 text-center"
        initial={{ x: 100 }}
        animate={{ x: 10 }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
      >
        framer motion
      </motion.div>
    </div>
  );
};
