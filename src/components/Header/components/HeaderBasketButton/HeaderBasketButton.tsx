import { FC } from 'react'
import { useSelector } from 'react-redux'

import { openModalBasketReducer } from '@/service/slice'
import { cartsState, useAppDispatch } from '@/service'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

import s from './HeaderBasketButton.module.css'

export const HeaderBasketButton: FC = () => {
  const { basket } = useSelector(cartsState)
  const dispatch = useAppDispatch()
  const basketCounts = basket.data.length
  const openBasket = () => {
    dispatch(openModalBasketReducer())
  }

  return (
    <div>
      {basket.totalPrice !== 0 && (
      <div className={s.btn}>
        {basketCounts !== 0
          && <p className={s.count}>{basketCounts}</p>}
        <Button
          icon={<Icon name="basket" />}
          size="32"
          onClick={openBasket}
        />
      </div>
      )}
    </div>
  )
}
