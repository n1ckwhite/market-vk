import { FC } from 'react'

import { Carts } from '../Carts'
import { Basket } from '../Basket'

import s from './Market.module.css'

export const Market: FC = () => (
  <div className={s.market}>
    <Carts />
    <Basket />
  </div>

)
