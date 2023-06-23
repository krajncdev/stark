import { INavigationListItem } from '../config/types';

interface IHamburgerNavigationListElementProps {
  item: INavigationListItem;
}

const HamburgerNavigationListElement = ({
  item: { id, subList, content },
}: IHamburgerNavigationListElementProps) => {
  return (
    <li
      key={id}
      className={`${!subList && 'border-b border-[#cbcbcd] pb-6'}  pt-6`}
    >
      <a href='#' className='text-sm font-[900]'>
        {content.toUpperCase()}
      </a>

      {subList && (
        <ul className='border-[#cbcbcd] border-l pl-6 mt-4'>
          {subList.map((subItem) => (
            <li key={subItem.id} className='py-2'>
              <a href='#' className='font-[600]'>
                Stark for {subItem.content}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HamburgerNavigationListElement;
