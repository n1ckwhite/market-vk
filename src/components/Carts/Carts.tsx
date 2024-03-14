import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartsState } from '@/service'

import { Cart } from './components/Cart'
import s from './Carts.module.css'

export const Carts: FC = () => {
  const data = useSelector(cartsState)

  if (data.status === 'fulfilled') {
    return (
      <ul className={s.carts}>
        {data.data.products.map((cart) => (
          <li key={cart.id}>
            <Cart {...cart} />
          </li>
        ))}
      </ul>
    )
  }
}
