import { type ButtonHTMLAttributes } from 'react';

import * as Style from './styles/Button.styles';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button = ({ children, className, ...rest }: TButton) => {
  return (
    <Style.Button className={className} {...rest}>
      {children}
    </Style.Button>
  );
};

export { Button };
