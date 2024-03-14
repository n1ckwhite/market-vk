import { FC } from 'react'

import { Basket } from '@/components/Basket'

import s from './MarketPurchasedCarts.module.css'

export const MarketPurchasedCarts:FC = () => (
  <div className={s.basket}>
    <Basket />
  </div>
)
