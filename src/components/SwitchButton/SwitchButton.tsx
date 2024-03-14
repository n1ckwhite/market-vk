import { FC } from 'react'

import { ICartBasket } from '@/types'
import { plusCartTotalReducer, minusCartTotalReducer, useAppDispatch } from '@/service'
import { Button } from '@/components/Button'

import s from './SwitchButton.module.css'

interface ISwitchButton {
  cart: ICartBasket
}

export const SwitchButton: FC<ISwitchButton> = ({ cart }) => {
  const dispatch = useAppDispatch()
  const minusCount = () => {
    dispatch(minusCartTotalReducer(cart))
  }
  const plusCount = () => {
    dispatch(plusCartTotalReducer(cart))
  }

  return (
    <div className={s.flex}>
      <Button bg="blue" size="32" txt="-" onClick={minusCount} />
      <p className={s.count}>{cart.total}</p>
      <Button bg="blue" size="32" txt="+" onClick={plusCount} />
    </div>
  )
}
