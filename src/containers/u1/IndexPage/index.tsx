import { Card } from '../../../components/Card';
import { useEffect, useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import { animate, motion, useMotionValue } from 'framer-motion';

export const IndexPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const xTranslation = useMotionValue(0);

  const { width = 0 } = useResizeObserver({ ref, box: 'border-box' });

  const images = [
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner1.png`,
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner2.png`,
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner3.png`,
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner4.png`,
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner5.png`,
    `/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/banner6.png`,
  ];

  useEffect(() => {
    const finalPosition = -width - 16;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 10,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return () => {
      controls.stop;
    };
  }, [xTranslation, width]);

  return (
    <div className="w-full overflow-x-hidden py-8">
      <motion.div ref={ref} className="flex gap-4" style={{ x: xTranslation }}>
        {[...images, ...images].map((item, index) => (
          <Card image={item} key={index} width={(width - 16 * 5) / 6} />
        ))}
      </motion.div>
      width = {width}
    </div>
  );
};
