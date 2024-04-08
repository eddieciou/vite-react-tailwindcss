import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CardProps {
  width: number;
  image: string;
}

export const Card = ({ image, width }: CardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative shrink-0 cursor-pointer overflow-hidden rounded-lg"
      style={{
        width: `${width}px`,
      }}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
            <motion.div
              className="z-10 rounded-full bg-white px-4 py-1 font-semibold"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              Explore Now
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img alt={image} src={image} />
    </motion.div>
  );
};
