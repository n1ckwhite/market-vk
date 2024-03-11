import { ICarts } from '../../types'
import { getCarts } from '../../helpers/getCarts'

interface ICartsService {
  getCartsService: () => Promise<ICarts>;
}

export const cartsService: ICartsService = {
  async getCartsService() {
    const data = await getCarts()

    return data as ICarts
  },
}
