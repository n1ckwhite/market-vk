import { createSlice } from '@reduxjs/toolkit'

interface IState {
  modalBasket: boolean
}

const initialState: IState = {
  modalBasket: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalBasketReducer: (state) => {
      state.modalBasket = true
    },
    closeModalBasketReducer: (state) => {
      state.modalBasket = false
    },
  },
  selectors: {
    modalState: (sliceState) => sliceState,
  },
})

export const { modalState } = modalSlice.selectors

export const {
  openModalBasketReducer,
  closeModalBasketReducer,
} = modalSlice.actions
