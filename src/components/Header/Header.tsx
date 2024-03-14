import { FC } from 'react'

import { Title } from '../Title'

import { HeaderBasketButton } from './components/HeaderBasketButton'
import s from './Header.module.css'

export const Header: FC = () => (
  <header className={s.header}>
    <Title text="VK МАРКЕТ" />
    <HeaderBasketButton />
  </header>
)
