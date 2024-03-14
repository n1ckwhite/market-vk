import { FC } from 'react'

import { Loading } from '@/components/Loading'
import { Carts } from '@/components/Carts'

import s from './MarketWrapper.module.css'

export const MarketWrapper: FC = () => (
  <div className={s.wrapper}>
    <Loading />
    <Carts />
  </div>
)
