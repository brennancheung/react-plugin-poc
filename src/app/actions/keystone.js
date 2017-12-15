import {
  SET_UNSCOPED_TOKEN,
  SET_TENANTS,
} from '../constants'

import * as keystone from '../api/keystone'

const createAction = type => payload => ({ type, payload })
const setUnscopedToken = createAction(SET_UNSCOPED_TOKEN)
const setTenants = createAction(SET_TENANTS)

export const login = ({ username, password }) => async dispatch => {
  const unscopedToken = await keystone.getUnscopedToken({ username, password })
  dispatch(setUnscopedToken(unscopedToken))

  // load initial data
  const tenants = await keystone.getScopedProjects(unscopedToken)
  if (!tenants || tenants.length === 0) {
    // TODO: No tenant found for ${username}
  }

  // TODO: determine active tenant
  dispatch(setTenants(tenants))
}
