import { IState } from '@/service'
import { ICartBasket } from '@/types'

export const findBasketCartFunction = (
  state: IState,
  payload: ICartBasket,
): ICartBasket | null => {
  const foundCart = state.basket.data.find((cart) => cart.id === payload.id)

  return foundCart ?? null
}
