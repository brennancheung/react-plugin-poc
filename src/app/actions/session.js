export const getSession = () => {
  const pf9 = localStorage.getItems('pf9')
  if (!pf9) {
    return {}
  }
  return JSON.parse(pf9)
}

export const setSession = data => {
  const json = JSON.stringify(data)
  localStorage.setItem('pf9', json)
}
