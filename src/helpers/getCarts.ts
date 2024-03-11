import { API } from '../constans/endpoint'

import { checkResponse } from './checkResponse'

export const getCarts = async () => {
  const response = await fetch(`${API}/1`)

  if (response) {
    return checkResponse(response)
  }
}
