import { PayloadAction } from '@reduxjs/toolkit'

import { ICartBasket } from '@/types'
import { IState } from '@/service'

import { findBasketCartFunction } from './helpers'

export const cartsReducers = {
  addBasketCart: (state: IState, { payload }: PayloadAction<ICartBasket>) => {
    const newBasketCart: ICartBasket = {
      ...payload, total: 1, totalPrice: payload.price,
    }
    newBasketCart.quantity -= 1
    state.basket.totalPrice += newBasketCart.price
    state.basket.data.push(newBasketCart)
  },
  plusCartTotal: (state: IState, { payload }: PayloadAction<ICartBasket>) => {
    const findBasketCart = findBasketCartFunction(state, payload)

    if (findBasketCart
      && findBasketCart.total !== 10
      && findBasketCart.total
      && findBasketCart.quantity !== 0
    ) {
      findBasketCart.total += 1
      findBasketCart.totalPrice += findBasketCart.price
      findBasketCart.quantity -= 1
      state.basket.totalPrice += findBasketCart.price

      return findBasketCart
    }
  },
  minusCartTotal: (state: IState, { payload }: PayloadAction<ICartBasket>) => {
    const findBasketCart = findBasketCartFunction(state, payload)

    if (findBasketCart && findBasketCart.total > 1) {
      findBasketCart.total -= 1
      findBasketCart.totalPrice -= findBasketCart.price
      findBasketCart.quantity += 1
      state.basket.totalPrice -= findBasketCart.price

      return findBasketCart
    }

    if (findBasketCart && findBasketCart.total === 1) {
      const findBasketCartIndex = state.basket.data.findIndex((cart) => cart.id === payload.id)
      state.basket.totalPrice -= findBasketCart.price
      state.basket.data.splice(findBasketCartIndex, 1)
    }
  },
  deleteBasketCart: (state: IState, { payload }: PayloadAction<ICartBasket>) => {
    const findBasketCart = findBasketCartFunction(state, payload)
    const findBasketCartIndex = state.basket.data.findIndex((cart) => cart.id === payload.id)

    if (findBasketCart) {
      state.basket.totalPrice -= (findBasketCart.price * findBasketCart.total)
      state.basket.data.splice(findBasketCartIndex, 1)
    }
  },
}
