import { FC } from 'react'

import { Loading } from '../Loading'
import { getCartsThunk, useAppDispatch } from '../../service'
import { Carts } from '../Carts'
import { Basket } from '../Basket'

import s from './Market.module.css'

export const Market: FC = () => {
  const dispatch = useAppDispatch()
  dispatch(getCartsThunk())

  return (
    <div className={s.market}>
      <div className={s.wrapper}>
        <Loading />
        <Carts />
      </div>
      <Basket />
    </div>

  )
}
