import type { TTextCard } from 'components/core/micro/TextCard/TextCard';
import { TextCard } from 'components/core/micro/TextCard/TextCard';

import * as Style from './styles';

export type TTextCardHeadings = Pick<TTextCard, 'id' | 'description' | 'items'>;

type TTextCardList = {
  headings: TTextCardHeadings;
  items: TTextCard[];
  className?: string;
};

// TODO: Add Link (cant use next link directly here)

function TextCardList({ headings, items, className }: TTextCardList) {
  return (
    <Style.Wrapper className={className}>
      <Style.HeadingWrapper>
        <Style.IDText>{headings.id}</Style.IDText>
        <Style.DescriptionText>{headings.description}</Style.DescriptionText>
        <Style.Items>
          {headings.items.map((item) => (
            <Style.Text key={item}>{item}</Style.Text>
          ))}
        </Style.Items>
      </Style.HeadingWrapper>
      <Style.List>
        {items.map((item) => (
          <TextCard {...item} key={item.id} />
        ))}
      </Style.List>
    </Style.Wrapper>
  );
}

export { TextCardList };
