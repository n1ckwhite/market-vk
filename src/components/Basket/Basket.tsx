import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartsState } from '@/service'
import { BasketCart } from '@/components/BasketCart'
import { PriceText } from '@/components/PriceText'

import s from './Basket.module.css'

export const Basket: FC = () => {
  const { basket } = useSelector(cartsState)

  if (basket.totalPrice !== 0) {
    return (
      <ul className={s.basket}>
        {basket.data.map((cart) => (
          <li className={s.basket__li} key={cart.id}>
            <BasketCart {...cart} />
          </li>
        ))}
        <PriceText />
      </ul>
    )
  }
}
