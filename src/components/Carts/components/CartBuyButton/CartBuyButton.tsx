import { FC } from 'react'
import { useSelector } from 'react-redux'

import { ICart } from '@/types'
import { addBasketCartReducer, cartsState, useAppDispatch } from '@/service'
import { Button } from '@/components/Button'

export const CartBuyButton: FC<ICart> = (cart) => {
  const { basket } = useSelector(cartsState)
  const dispatch = useAppDispatch()
  const findCartBasket = basket.data.find((cartBasket) => cartBasket.id === cart?.id)

  if (!findCartBasket) {
    return (
      <Button bg="blue" txt="Купить" onClick={() => dispatch(addBasketCartReducer(cart))} />
    )
  }
}
