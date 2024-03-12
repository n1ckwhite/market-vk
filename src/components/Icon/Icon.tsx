import { FC } from 'react'

import { TIcon } from '@/types'

interface IIcon {
  name: TIcon;
}

export const Icon: FC<IIcon> = ({ name }) => (
  <img
    alt="icon"
    height={20}
    src={`/icons/${name}_icon.svg`}
    width={20}
  />
)
