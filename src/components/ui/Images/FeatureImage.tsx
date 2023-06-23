import { motion } from 'framer-motion';

const FeatureImage = () => {
  return (
    <div className='relative md:h-[666px] h-[450px] w-full flex justify-center lg:block lg:w-auto'>
      <motion.img
        initial={{ rotate: '-2deg' }}
        whileInView={{
          rotate: ['-1deg', '-4.5deg', '-4deg'],
          translate: '-10px',
        }}
        transition={{ duration: 0.5, bounce: 1.5 }}
        viewport={{ amount: 0.6 }}
        src='https://images.getstark.co/marketing/highlights/homepage__toolbox-1__052023.webp'
        alt='image-feature-a'
        className='w-[250px] sm:w-[347px] absolute -ml-32 lg:ml-0 bottom-12 lg:-left-12'
      />
      <motion.img
        initial={{ rotate: '2deg' }}
        whileInView={{
          rotate: ['1deg', '4.5deg', '4deg'],
          translate: '20px',
        }}
        transition={{ duration: 0.5, bounce: 1.5 }}
        viewport={{ amount: 0.6 }}
        src='https://images.getstark.co/marketing/highlights/homepage__toolbox-2__052023.webp'
        alt='image-feature-b'
        className='w-[261px] sm:w-[358px] absolute bottom-4 ml-32 lg:ml-0 lg:left-32'
      />
    </div>
  );
};

export default FeatureImage;
