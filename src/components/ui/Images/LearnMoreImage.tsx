import { motion } from 'framer-motion';

const LearnMoreImage = () => {
  return (
    <div className='bg-secondary relative rounded-[40px] h-[400px] sm:h-[553px] overflow-hidden w-full'>
      <motion.img
        initial={{ rotate: '-2deg' }}
        whileInView={{
          rotate: ['-1deg', '-4.5deg', '-4deg'],
          translate: '-20px',
        }}
        transition={{ duration: 0.5, bounce: 1.5 }}
        viewport={{ amount: 0.6 }}
        src='https://images.getstark.co/marketing/highlights/homepage__train-1__052023.webp'
        alt='image-learnmore-a'
        className='w-[250px] sm:w-[347px] rounded-xl absolute -bottom-12 left-8 md:left-12 '
      />
      <motion.img
        initial={{ rotate: '2deg' }}
        whileInView={{
          rotate: ['1deg', '4.5deg', '4deg'],
          translate: '20px',
        }}
        transition={{ duration: 0.5, bounce: 1.5 }}
        viewport={{ amount: 0.5 }}
        src='https://images.getstark.co/marketing/highlights/homepage__train-2__052023.webp'
        alt='image-learnmore-b'
        className='w-[261px] sm:w-[358px] rounded-xl absolute -bottom-24 left-32 md:left-64 shadow-[rgba(0,0,0,0.16)_0px_8px_60px]'
      />
    </div>
  );
};

export default LearnMoreImage;
