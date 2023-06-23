import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LivePreviewImage = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { amount: 0.4 });

  return (
    <div
      className='relative bg-teal flex flex-col items-center overflow-hidden rounded-[40px] '
      ref={divRef}
    >
      <motion.img
        animate={
          isInView
            ? { y: -40, transition: { bounce: 0, duration: 0.5 } }
            : { y: -100, transition: { bounce: 0, duration: 0.5 } }
        }
        src='https://images.getstark.co/marketing/highlights/homepage__live-preview-1__052023.webp'
        alt='main-image'
        className='w-[361px] relative'
      />
      <motion.img
        animate={
          isInView
            ? {
                y: -40,
                transition: { duration: 1.2, type: 'spring', bounce: 0.35 },
              }
            : {
                y: -100,
                transition: { duration: 0.5 },
              }
        }
        src='https://images.getstark.co/marketing/highlights/homepage__live-preview-2.png'
        alt='second-image'
        className='w-[361px] mt-8'
      />
    </div>
  );
};

export default LivePreviewImage;
