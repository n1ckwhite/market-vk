import { TProductId } from '@/types/product.id'

export interface ICart {
  id: TProductId,
  price:number,
  quantity : number,
  thumbnail: string,
  title : string,
}
