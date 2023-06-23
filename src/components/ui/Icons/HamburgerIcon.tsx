interface IHamburgerIconProps {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerIcon = ({
  setIsHamburgerOpen,
  isHamburgerOpen,
}: IHamburgerIconProps) => {
  const handleButtonClick = () => setIsHamburgerOpen((prev) => !prev);

  return (
    <button
      className='bg-primary-foreground lg:hidden h-8 aspect-square rounded-full flex flex-col  py-2.5 items-center relative justify-between'
      onClick={handleButtonClick}
    >
      <span
        className={`${
          isHamburgerOpen
            ? 'absolute -rotate-45 top-1/2 transform -translate-y-1/2'
            : ''
        } transition-all relative bg-primary h-[2px] w-4`}
      ></span>
      <span
        className={`${
          isHamburgerOpen ? 'right-1 opacity-0' : ' opacity-100'
        } transition-all relative bg-primary h-[2px] w-4`}
      ></span>
      <span
        className={`${
          isHamburgerOpen
            ? 'absolute rotate-45 bottom-1/2 transform translate-y-1/2'
            : ''
        } transition-all relative bg-primary h-[2px] w-4`}
      ></span>
    </button>
  );
};

export default HamburgerIcon;
