const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api').replace(/\/+$/, '')

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function apiRequest(path, { method = 'GET', body } = {}) {
  let response

  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      method,
      credentials: 'include',
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  } catch {
    throw new ApiError(
      `Could not connect to the API at ${apiBaseUrl}. Check that the backend is running and allows this frontend origin.`,
      0,
    )
  }

  const contentType = response.headers.get('content-type') || ''
  let data

  if (contentType.includes('application/json')) {
    try {
      data = await response.json()
    } catch {
      throw new ApiError('The API returned invalid JSON.', response.status)
    }
  } else if (response.ok) {
    throw new ApiError('The API returned an unexpected response.', response.status)
  }

  if (!response.ok) {
    throw new ApiError(data?.message || `The API request failed (${response.status}).`, response.status)
  }

  return data
}
