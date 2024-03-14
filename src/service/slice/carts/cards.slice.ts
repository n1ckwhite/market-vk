import {
  createAsyncThunk, createSlice, SerializedError,
} from '@reduxjs/toolkit'

import { ICartBasket, ICarts } from '@/types'
import { cartsReducers } from '@/service/slice'

import { cartsService } from './carts.service'

export interface IState {
  data: ICarts,
  status: 'init' | 'pending' | 'fulfilled' | 'error',
  basket: {
    totalPrice: number,
    data: ICartBasket[]
  },
  error: SerializedError
}

const initialState: IState = {
  data: {} as ICarts,
  status: 'init',
  basket: {
    totalPrice: 0,
    data: [],
  },
  error: {},
}

export const getCartsThunk = createAsyncThunk(
  'get-carts',
  cartsService.getCartsService,
)

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addBasketCartReducer: (state, action) => {
      cartsReducers.addBasketCart(state, action)
    },
    plusCartTotalReducer: (state, action) => {
      cartsReducers.plusCartTotal(state, action)
    },
    minusCartTotalReducer: (state, action) => {
      cartsReducers.minusCartTotal(state, action)
    },
    deleteCartReducer: (state, action) => {
      cartsReducers.deleteBasketCart(state, action)
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartsThunk.pending, (state) => {
        state.status = 'pending'
        state.error = {}
      })
      .addCase(getCartsThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'fulfilled'
        state.error = {}
      })
      .addCase(getCartsThunk.rejected, (state, action) => {
        state.error = action.error
        state.status = 'error'
      })
  },
  selectors: {
    cartsState: (sliceState) => sliceState,
  },
})
export const {
  cartsState,
} = cartsSlice.selectors

export const {
  addBasketCartReducer,
  plusCartTotalReducer,
  minusCartTotalReducer,
  deleteCartReducer,
} = cartsSlice.actions
