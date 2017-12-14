const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export const get = (url, config = {}) => {
  const request = {
    method: 'GET',
    headers: { ...defaultHeaders, ...config.headers },
  }
  return fetch(url, request)
}

export const post = (url, body) => {
  const request = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { ...defaultHeaders },
  }
  return fetch(url, request)
}
