import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'

import { ICarts } from '@/types'

import { cartsService } from './carts.service'

interface IState {
  data: ICarts,
  status: 'init' | 'pending' | 'fulfilled' | 'error',
  basket: [],
  error: SerializedError
}

const initialState: IState = {
  data: {} as ICarts,
  status: 'init',
  basket: [],
  error: {},
}

export const getCartsThunk = createAsyncThunk(
  'get-carts',
  cartsService.getCartsService,
)

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
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

export const { cartsState } = cartsSlice.selectors
