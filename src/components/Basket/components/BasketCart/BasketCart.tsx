import { FC } from 'react'

import { ICart } from '@/types'

import { SwitchButton } from '../../../SwitchButton'

import s from './BasketCart.module.css'

export const BasketCart: FC<ICart> = ({
  title, thumbnail, quantity, price,
}) => (
  <div className={s.basket}>
    <img alt={title} className={s.basket__img} loading="lazy" src={thumbnail} />
    <div className={s.basket__text}>
      <p className={s.basket__title}>{title}</p>
      <p className={s.basket__quantity}>
        Колличество:
        <span className={s.basket__quantity_span}>{quantity}</span>
      </p>
    </div>
    <div className={s.basket__price_box}>
      <p className={s.basket__price}>
        {`${price} ₽`}
      </p>
      <SwitchButton initCount={5} />
    </div>
  </div>
)
