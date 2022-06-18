import * as Style from './styles';

import { STATUS } from 'constants/index';

export type TTextCard = {
  id: string;
  description: string;
  items: string[];
  variant?: STATUS;
  className?: string;
};

function TextCard({
  id,
  description,
  items,
  variant = STATUS.DEFAULT,
  className,
}: TTextCard) {
  return (
    <Style.Wrapper
      className={className}
      variant={variant}
      itemCount={items.length}
    >
      <Style.IDText key={id}>{id}</Style.IDText>
      <Style.DescriptionText wide key={description}>
        {description}
      </Style.DescriptionText>
      <Style.Items>
        {items.map((item) => (
          <Style.Text key={item}>{item}</Style.Text>
        ))}
      </Style.Items>
    </Style.Wrapper>
  );
}

export { TextCard };
