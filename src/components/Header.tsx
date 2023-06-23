import { useState } from 'react';
import StarkIcon from './ui/Icons/StarkIcon';
import { Button } from './ui/button';
import HamburgerIcon from './ui/Icons/HamburgerIcon';
import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <header className=' flex justify-center bg-primary p-4'>
      <div className=' flex justify-between items-center max-w-[960px] w-full text-primary-foreground font-arminGrotesk overflow-x-hidden'>
        <StarkIcon />

        <Navigation />

        <div className='flex gap-4 lg:gap-6'>
          <Button
            variant='ghost'
            size='fit'
            className='hidden lg:block whitespace-nowrap tracking-upper'
          >
            LOG IN
          </Button>
          <Button size='sm' className=' whitespace-nowrap tracking-upper'>
            30-DAY FREE TEAM TRIAL
          </Button>
          <HamburgerIcon
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
        </div>

        <HamburgerMenu isHamburgerOpen={isHamburgerOpen} />
      </div>
    </header>
  );
};

export default Header;
