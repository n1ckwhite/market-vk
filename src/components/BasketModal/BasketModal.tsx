import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import { cartsState, useAppDispatch } from '@/service'
import { closeModalBasketReducer, modalState } from '@/service/slice'
import { Basket } from '@/components/Basket'

import s from './BasketModal.module.css'
import { BasketModalHeader } from './BasketModalHeader'

export const BasketModal: FC = () => {
  const { basket } = useSelector(cartsState)
  const { modalBasket } = useSelector(modalState)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (basket.totalPrice === 0) {
      dispatch(closeModalBasketReducer())
    }
  }, [dispatch, basket])

  return (
    <div className={cn(
      s.modal,
      modalBasket && s.modal_active,
    )}
    >
      <BasketModalHeader />
      <Basket />
    </div>
  )
}
