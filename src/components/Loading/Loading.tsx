import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartsState } from '../../service'

import s from './Loading.module.css'

export const Loading: FC = () => {
  const data = useSelector(cartsState)

  if (data.status === 'pending') return <div className={s.lds_dual_ring} />
}
