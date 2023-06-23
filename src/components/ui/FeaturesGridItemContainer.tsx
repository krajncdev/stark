interface IFeaturesGridItemContainerProps {
  className?: string;
  color: 'purple2' | 'secondary' | 'teal' | 'pink';
  children: any;
}

const FeaturesGridItemContainer = ({
  className,
  color,
  children,
}: IFeaturesGridItemContainerProps) => {
  return (
    <div
      className={`${
        className ? className : ''
      } px-8 bg-${color} flex flex-col items-center rounded-[40px] overflow-hidden relative justify-between`}
    >
      {children}
    </div>
  );
};

export default FeaturesGridItemContainer;
