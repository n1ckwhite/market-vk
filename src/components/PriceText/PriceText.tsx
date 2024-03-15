import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartsState } from '@/service'

import s from './PriceText.module.css'

export const PriceText: FC = () => {
  const { basket } = useSelector(cartsState)

  return (
    <p className={s.basket_text}>
      Цена:
      <span className={s.basket__price}>
        {`${basket.totalPrice} ₽`}
      </span>
    </p>
  )
}
