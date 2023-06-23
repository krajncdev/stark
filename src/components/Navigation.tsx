import { useState } from 'react';
import { navigationList } from '../config/constants';
import { Button } from './ui/button';
import React from 'react';
import PointerDown from './ui/Icons/PointerDown';

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleOnMouseOver = () => setIsMenuVisible(true);
  const handleOnMouseLeave = () => setIsMenuVisible(false);

  return (
    <nav className='hidden lg:block w-full ml-6'>
      <ul className='flex'>
        {navigationList.map((item) => (
          <React.Fragment key={item.id}>
            <li
              key={item.id}
              className='mr-6 relative'
              onMouseOver={item.id === 0 ? handleOnMouseOver : undefined}
            >
              <Button
                variant='ghost'
                size='fit'
                className=' tracking-upper px-2'
              >
                {item.content.toUpperCase()}
                {item.id === 0 && <PointerDown />}
              </Button>
            </li>
            {item.subList && (
              <ul
                className={`${
                  isMenuVisible ? 'absolute top-4 left-[18%] z-10' : 'hidden'
                } py-2.5 rounded-xl bg-white`}
                onMouseLeave={handleOnMouseLeave}
              >
                {item.subList.map((el) => (
                  <li
                    key={el.id}
                    className=' w-full px-4 py-2 hover:bg-[#f3f2fc] text-primary font-[600] '
                  >
                    <a href=''>Stark for {el.content}</a>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
