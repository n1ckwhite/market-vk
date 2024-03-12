import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  txt: string;
  size?: 'default' | '32'
}

export const Button: FC<IButton> = ({
  txt,
  size = 'default',
  ...rest
}) => (
  <button
    className={cn(
      s.btn,
      size === '32' && s.btn__32,
    )}
    {...rest}
  >
    {txt}
  </button>
)
