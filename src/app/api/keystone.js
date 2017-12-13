import { get, post } from './http'

const baseUrl = 'https://bcheung.platform9.net/keystone/v3'

export const getUnscopedToken = async ({ username, password }) => {
  const body = {
    auth: {
      identity: {
        methods: ['password'],
        password: {
          user: {
            name: username,
            password,
            domain: { id: 'default' },
          }
        }
      }
    }
  }

  const response = await post(`${baseUrl}/auth/tokens?nocatalog`, body)
  const token = response.headers.get('X-Subject-Token')
  return token
}

export const getScopedProjects = async ({ token }) => {
  console.log('getScopedProjects')
  const config = { headers: { 'X-Auth-Token': token } }
  const response = await get(`${baseUrl}/auth/projects`, config)
  const projects = await response.json()
  return projects
}
