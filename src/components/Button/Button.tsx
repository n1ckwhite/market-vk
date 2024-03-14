import { FC, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  txt?: string;
  icon?: ReactNode;
  bg?: 'default' | 'blue';
  size?: 'default' | '32';
}

export const Button: FC<IButton> = ({
  txt,
  size = 'default',
  bg = 'default',
  icon,
  ...rest
}) => (
  <button
    className={cn(
      s.btn,
      bg === 'default' && s.btn__default,
      bg === 'blue' && s.btn__blue,
      size === '32' && s.btn__32,
    )}
    {...rest}
  >
    {txt}
    {icon}
  </button>
)
