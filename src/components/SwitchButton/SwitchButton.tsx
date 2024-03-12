import { FC, useState } from 'react'

import { Button } from '../Button'

import s from './SwitchButton.module.css'

interface ISwitchButton {
  initCount?: number
}

export const SwitchButton: FC<ISwitchButton> = ({ initCount = 0 }) => {
  const [count, setCount] = useState(initCount)
  const minusCount = () => {
    setCount((count) => count - 1)
  }
  const plusCount = () => {
    setCount((count) => count + 1)
  }

  if (count !== 0) {
    return (
      <div className={s.flex}>
        <Button size="32" txt="-" onClick={minusCount} />
        <p className={s.count}>{count}</p>
        <Button size="32" txt="+" onClick={plusCount} />
      </div>
    )
  }
}
