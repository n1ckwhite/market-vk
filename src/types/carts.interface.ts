import { IProduct, TProductId } from '@/types'

export interface ICarts {
  id: TProductId;
  products: IProduct[]
  total: number,
  discountedTotal: number,
  userId: number,
  totalProducts: number,
  totalQuantity: number
}
