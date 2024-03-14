import { FC } from 'react'

import { ICartBasket } from '@/types'
import { deleteCartReducer, useAppDispatch } from '@/service'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { SwitchButton } from '../SwitchButton'

import s from './BasketCart.module.css'

export const BasketCart: FC<ICartBasket> = (cart) => {
  const {
    title,
    thumbnail,
    totalPrice,
  } = cart
  const dispatch = useAppDispatch()

  return (
    <div className={s.basket}>
      <img
        alt={title}
        className={s.basket__img}
        loading="lazy"
        src={thumbnail}
      />
      <div className={s.basket__text}>
        <p className={s.basket__title}>{title}</p>
        <Button
          bg="blue"
          icon={<Icon name="trash" />}
          size="32"
          onClick={() => dispatch(deleteCartReducer(cart))}
        />
      </div>
      <div className={s.basket__price_box}>
        <p className={s.basket__price}>
          {`${totalPrice} ₽`}
        </p>
        <SwitchButton cart={cart} />
      </div>
    </div>
  )
}
