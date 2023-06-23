import {
  footerCompaniesList,
  footerIntro,
  footerNavigationList,
  footerTitle,
} from '../config/constants';
import StarkLogo from './ui/Icons/StarkLogo';
import { Intro } from './ui/Text/Intro';

const Footer = () => {
  return (
    <footer className='mt-24 bg-blue px-6 flex justify-center'>
      <div className='max-w-[1200px] w-[1200px]'>
        <div className=' flex justify-between mt-20 gap-x-8'>
          <h2 className='text-beige max-w-[772px] text-h1-small md:text-h1 '>
            {footerTitle}
          </h2>
          <StarkLogo />
        </div>

        <ul className='mt-16 text-white grid grid-cols-1 gap-y-10 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
          {footerNavigationList.map((item) => (
            <li key={item.id}>
              <p className='mb-2 text-sm font-[900]'>
                {item.content.toUpperCase()}
              </p>
              <ul>
                {item.subList.map((subItem) => (
                  <li key={subItem.id}>
                    <p className='mb-2 hover:underline text-beige cursor-pointer font-[600] leading-[27px]'>
                      {subItem.content}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className='my-20 md:flex justify-between'>
          <ul className='flex gap-3 mb-8 md:mb-0'>
            {footerCompaniesList.map((item) => (
              <li key={item.id}>
                <a href='#'>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className='w-[30px] aspect-square hover:scale-125 transition-all duration-150 ease-in'
                  />
                </a>
              </li>
            ))}
          </ul>

          <Intro variant='yellow'>{footerIntro.toUpperCase()}</Intro>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
