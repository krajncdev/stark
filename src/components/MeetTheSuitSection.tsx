import { meetTheSuitList } from '../config/constants';
import { Section } from './ui/Section';

const MeetTheSuitSection = () => {
  return (
    <Section className=' mt-[120px] flex justify-center'>
      <div className='  w-full pb-10 pt-12 px-4 my-0 mx-auto bg-[#EDEDE0] rounded-[32px]'>
        <h2 className='text-h1-small mt-4 text-secondary-foreground text-center'>
          Meet the suite
        </h2>
        <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 mt-12'>
          {meetTheSuitList.map((item) => {
            const { id, link, p, src } = item;
            const isEven = id % 2 == 0;
            return (
              <li key={id}>
                <a
                  href={link}
                  target='_blank'
                  className='flex flex-col items-center group'
                >
                  <img
                    src={src}
                    alt={`${p}-image`}
                    className={`h-[90px] ${
                      isEven
                        ? 'group-hover:-rotate-12'
                        : 'group-hover:rotate-12'
                    } duration-200 transition-all group-hover:shadow-[rgba(0,0,0,0.3)_0px_0px_40px]`}
                  />
                  <p className='text-regular text-secondary-foreground mt-4'>
                    Stark for {p}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default MeetTheSuitSection;
