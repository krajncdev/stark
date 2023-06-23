import { useEffect, useState } from 'react';
import { testimonialList } from '../config/constants';
import LocalCommunityMarkerImage from './ui/Images/LocalCommunityMarkerImage';
import { ITestimonialListItem } from '../config/types';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Intro } from './ui/Text/Intro';

const LocalCommunitySection = () => {
  const [activeTestimonial, setActiveTestimonial] =
    useState<ITestimonialListItem>(testimonialList[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTestimonial((prev) =>
        prev.id === testimonialList.length - 1
          ? testimonialList[0]
          : testimonialList[prev.id + 1]
      );
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTestimonial]);

  return (
    <Section size='sm'>
      <div className='relative mt-[160px] p-4 flex justify-center'>
        <h2 className='text-h1 text-secondary-foreground relative z-10 text-center'>
          Loved by the community, <br /> trusted by 8,000+ companies
        </h2>
        <LocalCommunityMarkerImage />
      </div>

      <div className=' w-full px-12 py-8 bg-purple min-h-[408px] mt-14 rounded-[40px]'>
        <motion.div
          className='flex flex-col-reverse  md:flex-row md:items-center gap-8'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          key={activeTestimonial.id}
        >
          <div>
            <img
              src={activeTestimonial.src}
              alt={`${activeTestimonial.name}-profile-picture`}
              className='rounded-full w-[160px]'
            />

            <Intro variant='yellow' className='mt-8 md:mt-24'>
              {activeTestimonial.name.toUpperCase()},{' '}
              {activeTestimonial.title.toUpperCase()}
            </Intro>
          </div>
          <q className='text-[2rem] leading-[35px] font-[900] md:text-h1-small text-white'>
            {activeTestimonial.quote}
          </q>
        </motion.div>
      </div>
    </Section>
  );
};

export default LocalCommunitySection;
