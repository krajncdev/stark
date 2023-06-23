import { ILeftRightSectionListItem } from '../config/types';
import { Section } from './ui/Section';
import { Intro } from './ui/Text/Intro';
import { Button } from './ui/button';

interface ILeftRightSectionProps {
  item: ILeftRightSectionListItem;
  className?: string;
}

const LeftRightSection = ({
  item: { intro, id, heading, p, Image },
  className,
}: ILeftRightSectionProps) => {
  const isEven = id % 2 == 0;

  return (
    <Section
      className={`${
        className ? className : ''
      } grid grid-cols-1 lg:grid-cols-2 gap-12 ${
        id == 0 ? 'mt-[104px]' : 'mt-[200px]'
      }`}
    >
      <div
        className={`flex ${
          isEven ? 'justify-end' : 'justify-start'
        } items-center`}
      >
        <div
          className={`${id === 4 && 'md:order-first'} ${
            isEven ? 'lg:order-first' : 'lg:order-last'
          } w-full lg:w-[460px] order-last`}
        >
          <Intro>{intro.toUpperCase()}</Intro>
          <h2 className='text-h1-small mt-4 text-secondary-foreground'>
            {heading}
          </h2>
          <p className='text-p mt-4'>{p}</p>
          <Button className='mt-8' variant='primary'>
            Get started
          </Button>
        </div>
      </div>
      <div
        className={`${id === 4 && 'md:order-last'} ${
          isEven ? 'lg:order-last' : 'lg:order-first'
        } order-first `}
      >
        {typeof Image === 'function' ? <Image /> : Image}
      </div>
    </Section>
  );
};

export default LeftRightSection;
