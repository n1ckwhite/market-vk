import { FC } from 'react'

import { getCartsThunk, useAppDispatch } from '@/service'

import { BasketModal } from '../BasketModal'

import s from './Market.module.css'
import { MarketWrapper } from './components/MarketWrapper'
import { MarketPurchasedCarts } from './components/MarketPurchasedCarts'

export const Market: FC = () => {
  const dispatch = useAppDispatch()
  dispatch(getCartsThunk())

  return (
    <div className={s.market}>
      <MarketWrapper />
      <MarketPurchasedCarts />
      <BasketModal />
    </div>

  )
}
