import { Section } from './ui/Section';

interface IAfterHeroSectionProps {
  heading: string;
  p: string;
  MarkerImage: () => JSX.Element;
}

const AfterHeroSection = ({
  heading,
  p,
  MarkerImage,
}: IAfterHeroSectionProps) => {
  return (
    <Section size='sm' className=' pt-[7.5rem] flex flex-col items-center'>
      <div className='relative flex justify-center'>
        <h2
          dangerouslySetInnerHTML={{ __html: heading }}
          className='text-h1-small sm:text-h1  text-secondary-foreground text-center z-10'
        />
        <MarkerImage />
      </div>
      <p className='text-p max-w-[718px] text-center my-10'>{p}</p>
    </Section>
  );
};

export default AfterHeroSection;
