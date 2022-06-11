import * as Style from './styles';

type TTextCard = {
  id: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

function TextCard({
  bgColor = '#d2d2d2',
  textColor = '#4b4b4b',
  description,
  className,
}: TTextCard) {
  return (
    <Style.Wrapper bgColor={bgColor} className={className}>
      <Style.Text textColor={textColor}>{description}</Style.Text>
    </Style.Wrapper>
  );
}

export { TextCard };
