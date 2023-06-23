interface IFeaturesGridTextProps {
  content: string;
  className?: string;
}

const FeaturesGridText = ({ content, className }: IFeaturesGridTextProps) => {
  return (
    <p
      className={`${
        className ? className : ''
      } font-roboto text-mono my-8 text-center`}
    >
      {content}
    </p>
  );
};

export default FeaturesGridText;
