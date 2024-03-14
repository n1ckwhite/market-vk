import { getCarts } from '@/helpers'
import { ICarts } from '@/types'

interface ICartsService {
  getCartsService: () => Promise<ICarts>;
}

export const cartsService: ICartsService = {
  async getCartsService() {
    const data = await getCarts()

    return data as ICarts
  },
}
