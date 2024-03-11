import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts: [],
  loading: 'init',
  error: '',
}

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: () => {},
})
