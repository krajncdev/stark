import { companiesList } from '../config/constants';

const CompaniesTicker = () => {
  return (
    <section className='flex mt-36'>
      <ul className=' flex whitespace-nowrap items-center animate-scroll'>
        {companiesList.map((item) => (
          <li key={item.id} className='ml-28'>
            <item.Icon />
          </li>
        ))}
      </ul>
      <ul className=' flex whitespace-nowrap items-center animate-scroll'>
        {companiesList.map((item) => (
          <li key={item.id} className='ml-28'>
            <item.Icon />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompaniesTicker;
