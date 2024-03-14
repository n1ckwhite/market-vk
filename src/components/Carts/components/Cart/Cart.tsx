import { FC } from 'react'

import { ICart } from '@/types'

import { CartBuyButton } from '../CartBuyButton'

import s from './Cart.module.css'

export const Cart: FC<ICart> = (cart) => {
  const {
    price,
    quantity,
    thumbnail,
    title,
  } = cart

  return (
    <div className={s.cart}>
      <img alt={title} className={s.cart__img} loading="lazy" src={thumbnail} />
      <p className={s.cart__title}>{title}</p>
      <p className={s.cart__quantity}>
        Колл-во:
        <span className={s.cart__quantity_span}>{quantity}</span>
      </p>
      <p className={s.cart__price}>
        {`${price} ₽`}
      </p>
      <CartBuyButton {...cart} />
    </div>
  )
}
