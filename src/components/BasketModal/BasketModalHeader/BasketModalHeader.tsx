import { FC } from 'react'

import { closeModalBasketReducer } from '@/service/slice'
import { useAppDispatch } from '@/service'

import { Button } from '../../Button'
import { Icon } from '../../Icon'

import s from './BasketModalHeader.module.css'

export const BasketModalHeader: FC = () => {
  const dispatch = useAppDispatch()
  const closeModal = () => {
    dispatch(closeModalBasketReducer())
  }

  return (
    <div className={s.header}>
      <Button
        icon={
          <Icon name="close" />
}
        size="32"
        onClick={closeModal}
      />
    </div>
  )
}
