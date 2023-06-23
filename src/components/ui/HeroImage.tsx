import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <div className='hidden lg:block relative flex-shrink-0'>
      <img
        src='https://images.getstark.co/marketing/headers/homepage__052023.webp'
        alt='hero-image'
        className='absolute w-[667px] max-w-[667px] -top-20 flex-shrink-0'
      />
      <img
        src='https://images.getstark.co/marketing/headers/homepage__sparkle.png'
        alt='three-lines'
        className='absolute -top-20 left-4 h-10 w-10'
      />
      <motion.img
        transition={{ delay: 7 }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src='https://images.getstark.co/marketing/headers/homepage__contrast-bubble.png'
        alt='dual-bubble'
        className='absolute left-[33rem] -top-4 h-20'
      />
      <img
        src='https://images.getstark.co/marketing/headers/homepage__avatar-circle.png'
        alt='spinning-circle-1'
        className=' w-44 absolute left-[30rem] top-7 animate-spin'
      />
      <img
        src='https://images.getstark.co/marketing/headers/homepage__avatar-circle.png'
        alt='spinning-circle-2'
        className=' w-36 absolute left-24 -bottom-28 animate-spin-left'
      />
      <motion.img
        transition={{ delay: 5 }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src='https://images.getstark.co/marketing/headers/homepage__alttext-bubble.png'
        alt='upper-bubble'
        className='absolute h-20 -bottom-8 left-14'
      />
      <motion.img
        transition={{ delay: 3 }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src='https://images.getstark.co/marketing/headers/homepage__focusorder-bubble.png'
        alt='focus-bubble'
        className='absolute h-20 -bottom-3 -right-20'
      />
    </div>
  );
};

export default HeroImage;
