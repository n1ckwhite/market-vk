import { FC } from 'react'

import s from './Cart.module.css'

interface ICartProps {
  id : number,
  price:number,
  quantity : number,
  thumbnail: string,
  title : string,
}

export const Cart: FC<ICartProps> = (props) => {
  const {
    id,
    price,
    quantity,
    thumbnail,
    title,
  } = props

  return (
    <div className={s.cart}>
      <p className={s.cart__title}>{title}</p>
      <img alt={title} className={s.cart__img} loading="lazy" src={thumbnail} />
      <p className={s.cart__quantity}>
        Колличество:
        <span className={s.cart__quantity_span}>{quantity}</span>
      </p>
      <p className={s.cart__price}>
        Цена:
        <span className={s.cart__price_span}>{price}</span>
      </p>
    </div>
  )
}
