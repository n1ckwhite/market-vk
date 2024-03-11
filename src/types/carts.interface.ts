import { IProduct } from '@/types'

export interface ICarts {
  id: number;
  products: IProduct[]
  total: number,
  discountedTotal: number,
  userId: number,
  totalProducts: number,
  totalQuantity: number
}
