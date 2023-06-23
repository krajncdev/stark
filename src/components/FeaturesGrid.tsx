import FeaturesGridItemContainer from './ui/FeaturesGridItemContainer';
import StarkGradientIcon from './ui/Icons/StarkGradientIcon';
import FeaturesGridText from './ui/Text/FeaturesGridText';

const FeaturesGrid = () => {
  //backgrounds can be: bg-teal bg-secondary bg-pink and bg-purple2
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-16 mb-24 relative z-10'>
      <FeaturesGridItemContainer color='teal' className='md:row-span-2'>
        <img
          src='https://images.getstark.co/marketing/features/contrast__052023.webp'
          alt='phone-showcase'
          className='max-w-full md:max-w-[360px] mt-8 rounded-[8px]'
        />
        <FeaturesGridText content='CONTRAST CHECKER + COLOR SUGGESTIONS' />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='secondary'>
        <img
          src='https://images.getstark.co/marketing/features/focus-order.png'
          alt='focus-order'
          className='max-w-full md:max-w-[378px] mt-8'
        />
        <FeaturesGridText content='FOCUS ORDER' />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='pink'>
        <FeaturesGridText content='LANDMARKS' />
        <img
          src='https://images.getstark.co/marketing/features/landmarks.png'
          alt='focus-order'
          className='max-w-full md:max-w-[390px] translate-y-[3px]'
        />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='purple2' className='md:col-span-2'>
        <img
          src='https://images.getstark.co/marketing/features/vision-simulator.webp'
          alt='focus-order'
          className='max-w-[1100px] w-[1100px] mt-12'
        />
        <FeaturesGridText
          content='VISION SIMULATOR + GENERATOR'
          className='absolute bottom-0'
        />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='secondary'>
        <img
          src='https://images.getstark.co/marketing/features/touch-targets.png'
          alt='focus-order'
          className='max-w-full md:max-w-[342px]'
        />
        <FeaturesGridText content='TOUCH TARGETS' />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='teal' className='md:row-span-2'>
        <img
          src='https://images.getstark.co/marketing/features/platform-grid.webp'
          alt='focus-order'
          className='max-w-full md:max-w-[376px] mt-12'
        />
        <button className='absolute w-40 aspect-square rounded-[36px] overflow-hidden top-0 bottom-0 mx-0 -translate-y-4 my-auto'>
          <StarkGradientIcon />
        </button>
        <FeaturesGridText content='WORKS IN YOUR DESIGN TOOLS AND BROWSER' />
      </FeaturesGridItemContainer>
      <FeaturesGridItemContainer color='pink'>
        <FeaturesGridText content='IN-APP EDUCATION' />
        <img
          src='https://images.getstark.co/marketing/features/education.png'
          alt='focus-order'
          className='max-w-full md:max-w-[342px]'
        />
      </FeaturesGridItemContainer>
    </div>
  );
};

export default FeaturesGrid;
