import { motion } from 'framer-motion';
import { variantComeInFromRight } from '../config/animations';
import { navigationList } from '../config/constants';
import HamburgerNavigationListElement from './HamburgerNavigationListElement';

interface IHamburgerMenuProps {
  isHamburgerOpen: boolean;
}

const HamburgerMenu = ({ isHamburgerOpen }: IHamburgerMenuProps) => {
  return (
    <motion.nav
      initial='closed'
      animate={isHamburgerOpen ? 'open' : 'closed'}
      variants={variantComeInFromRight}
      className='fixed z-50 w-full overflow-y-scroll lg:hidden top-16 left-0 h-[calc(100vh-64px)] px-6 text-primary bg-primary-foreground'
    >
      <ul className='flex flex-col'>
        <li className='border-b border-[#cbcbcd] py-6'>
          <a href='#' className='text-sm font-[900]'>
            LOG IN
          </a>
        </li>
        {navigationList.map((item) => (
          <HamburgerNavigationListElement key={item.id} item={item} />
        ))}
      </ul>
    </motion.nav>
  );
};

export default HamburgerMenu;
