import { API } from '@/constans/endpoint'
import { checkResponse } from '@/helpers/checkResponse'

export const searchUsers = async (name: string) => {
  const response = await fetch(`${API}=${name}`)

  if (response) {
    return checkResponse(response)
  }

  return null
}
