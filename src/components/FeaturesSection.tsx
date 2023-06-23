import FeaturesGrid from './FeaturesGrid';
import FeaturesMarkerImage from './ui/Images/FeaturesMarkerImage';
import { Section } from './ui/Section';

const FeaturesSection = () => {
  return (
    <Section size='sm' className='mt-16 relative'>
      <div className='relative'>
        <h2 className='text-h1-small sm:text-h1  text-secondary-foreground text-center z-10 relative'>
          Come for the features, <br /> stay for the magic
        </h2>
        <img
          src='https://www.getstark.co/homepage__features-magic-sparkle.svg'
          alt='magic-sparkle'
          className='absolute bottom-[4.5rem] right-36 w-[60px] h-[77px] hidden lg:block'
        />
        <FeaturesMarkerImage />
      </div>

      <FeaturesGrid />

      <img
        src='https://www.getstark.co/homepage-blob-1.png'
        alt='blob-1'
        className='hidden md:block absolute top-40 right-[750px]'
      />
      <img
        src='https://www.getstark.co/homepage-blob-2.png'
        alt='blob-2'
        className='hidden md:block absolute bottom-0 w-[616px] left-[700px]'
      />
    </Section>
  );
};

export default FeaturesSection;
