import { getStartedList } from '../config/constants';
import GetStartedMarkerImage from './ui/Images/GetStartedMarkerImage';
import { Section } from './ui/Section';
import { Intro } from './ui/Text/Intro';
import { Button } from './ui/button';

const GetStartedSection = () => {
  return (
    <Section className='mt-[160px]'>
      <div className='relative flex justify-center'>
        <h2 className='text-h1-small text-secondary-foreground relative z-10 text-center max-w-[960px]'>
          So, you’re ready to get started and supercharge accessiblity?
        </h2>
        <GetStartedMarkerImage />
      </div>

      <ul className='lg:bg-[#EDEDE0] flex lg:grid lg:grid-cols-3 py-16 lg:px-[100px] gap-6 lg:gap-20 rounded-[32px] mt-20 overflow-x-scroll'>
        {getStartedList.map((item) => {
          const { id, link, p, title, buttonText } = item;
          return (
            <li
              key={id}
              className='flex rounded-[32px] lg:rounded-none flex-col justify-between flex-shrink-0 bg-[#EDEDE0] lg:bg-none p-8 lg:p-0 w-[calc(100vw-116px)] lg:w-fit'
            >
              <div>
                <Intro>STEP {id + 1}</Intro>
                <h3 className='text-h3 text-secondary-foreground mt-4'>
                  {title}
                </h3>
                <p className='text-regular font-[400] text-secondary-foreground mt-4 mb-8'>
                  {p}
                </p>
              </div>
              <Button variant='primary' className='w-fit'>
                <a href={link} target='_blank'>
                  {buttonText}
                </a>
              </Button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default GetStartedSection;
