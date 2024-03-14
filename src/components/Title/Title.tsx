import { FC } from 'react'

interface ITitle { text: string }
export const Title: FC<ITitle> = ({ text }) => <h1>{text}</h1>
