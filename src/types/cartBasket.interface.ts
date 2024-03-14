import { TProductId } from '@/types/product.id'

export interface ICartBasket {
  id:TProductId
  title: string;
  quantity: number;
  thumbnail: string;
  price: number;
  total: number;
  totalPrice: number;
}
