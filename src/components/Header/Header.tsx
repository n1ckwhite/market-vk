import { FC } from 'react'

import s from './Header.module.css'

export const Header: FC = () => (
  <header className={s.header}>
    <h1 className={s.title}>
      VK МАРКЕТ
    </h1>
  </header>
)
