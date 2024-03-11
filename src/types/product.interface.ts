import { TProductId } from '@/types'

export interface IProduct {
  id: TProductId,
  title: string,
  price: number,
  quantity: number,
  total: number,
  discountPercentage: number,
  discountedPrice: number,
  thumbnail: string
}
