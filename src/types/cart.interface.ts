import { TProductId } from '@/types'

export interface ICart {
  id: TProductId,
  price:number,
  quantity : number,
  thumbnail: string,
  title : string,
}
