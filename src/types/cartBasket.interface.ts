import { ICart } from '@/types/'

export interface ICartBasket extends ICart {
  total: number;
  totalPrice: number;
}
