import { heroHeading, heroIntro, heroParagraph } from '../config/constants';
import HeroImage from './ui/HeroImage';
import YellowArrow from './ui/Icons/YellowArrow';
import { Intro } from './ui/Text/Intro';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className='relative lg:bg-[url("https://images.getstark.co/marketing/headers/gradient-bg.webp")] animate-expand-bg bg-primary  text-white pt-[88px] pb-[164px] px-4 flex justify-center overflow-hidden'>
      <div className='grid lg:grid-cols-2 max-w-[1160px]'>
        <div>
          <Intro variant='yellow'>{heroIntro.toUpperCase()}</Intro>
          <h1 className='text-h1 md:text-h1-lg mt-4 whitespace-pre-wrap '>
            {heroHeading}
          </h1>
          <p className='mt-4 text-p'>{heroParagraph}</p>

          <div className='flex flex-col gap-4 xs:flex-row mt-8'>
            <Button variant='secondary' className='w-full xs:w-fit'>
              Create a free account
            </Button>
            <Button variant='secondaryOutline' className='w-full xs:w-fit'>
              Learn more
            </Button>
          </div>
        </div>

        <HeroImage />
        <div className='absolute  m-auto left-0 right-24 h-44 aspect-square bottom-16 hidden lg:block'>
          <YellowArrow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
