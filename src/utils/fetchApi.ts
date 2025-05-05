import { generateQueryString } from "./generateQueryString"

type FetchProps = {
  path: string
  urlParamsObj?: Record<string, unknown>
  token?: string
  options?: RequestInit
}

export async function fetchApi<T>({
  path,
  urlParamsObj,
  token,
  options,
}: FetchProps): Promise<T | void> {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    ...options,
  }

  // Build request URL
  const queryString = 
    urlParamsObj ? generateQueryString(urlParamsObj) : null

  const requestUrl = `${process.env.API_URL}${path}${queryString ? `?${queryString}` : ''}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  if(response.status >= 200 && response.status < 300) {
    if([201, 202, 204].includes(response.status)) {
      return
    }

    const data = await response.json()

    return data
  } else if (response.status > 400 && response.status < 500) {
    const data = await response.json()

    throw new Error(data.message)
  } else {
    throw new Error("Ocorreu um erro, tente novamente mais tarde.")
  }
}