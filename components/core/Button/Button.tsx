import { type ButtonHTMLAttributes } from 'react';

import * as Style from './styles/Button.styles';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  svariant?: 'PRIMARY' | 'SECONDARY';
  className?: string;
};

function Button({
  children,
  svariant = 'PRIMARY',
  className,
  ...rest
}: TButton) {
  return (
    <Style.Button svariant={svariant} className={className} {...rest}>
      {children}
    </Style.Button>
  );
}

export { Button };
