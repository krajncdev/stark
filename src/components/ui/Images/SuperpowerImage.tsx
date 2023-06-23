import { motion } from 'framer-motion';

const SuperPowerImage = () => {
  return (
    <div className='bg-teal rounded-[40px] flex justify-end pl-10 pt-10 w-full lg:w-fit overflow-hidden '>
      <motion.img
        initial={{ y: 100, opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.6 }}
        src='https://images.getstark.co/marketing/highlights/homepage__superpower.webp'
        alt='marketing'
        className=' rounded-tl-xl relative w-[513px]'
      />
    </div>
  );
};

export default SuperPowerImage;
