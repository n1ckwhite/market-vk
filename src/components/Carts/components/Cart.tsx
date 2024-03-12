import { FC } from 'react'

import { ICart } from '@/types'

import { SwitchButton } from '../../SwitchButton'
import { Button } from '../../Button'

import s from './Cart.module.css'

export const Cart: FC<ICart> = (props) => {
  const {
    price,
    quantity,
    thumbnail,
    title,
  } = props

  return (
    <div className={s.cart}>
      <img alt={title} className={s.cart__img} loading="lazy" src={thumbnail} />
      <p className={s.cart__title}>{title}</p>
      <p className={s.cart__quantity}>
        Колличество:
        <span className={s.cart__quantity_span}>{quantity}</span>
      </p>
      <p className={s.cart__price}>
        {`${price} ₽`}
      </p>
      <Button txt="Купить" />
      <SwitchButton initCount={5} />
    </div>
  )
}
