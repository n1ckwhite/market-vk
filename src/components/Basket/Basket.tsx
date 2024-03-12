import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartsState } from '../../service'

import { BasketCart } from './components/BasketCart'
import s from './Basket.module.css'

export const Basket: FC = () => {
  const data = useSelector(cartsState)

  if (data.status === 'fulfilled') {
    return (
      <ul className={s.basket}>
        {data.data.products.map((cart) => (
          <li key={cart.id}>
            <BasketCart {...cart} />
          </li>
        ))}
      </ul>

    )
  }
}
