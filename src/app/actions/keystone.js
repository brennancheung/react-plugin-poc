import {
  SET_UNSCOPED_TOKEN
} from '../constants'

import * as keystone from '../api/keystone'

const createAction = type => payload => ({ type, payload })
const setUnscopedToken = createAction(SET_UNSCOPED_TOKEN)

export const login = ({ username, password }) => async dispatch => {
  const unscopedToken = await keystone.getUnscopedToken({ username, password })
  dispatch(setUnscopedToken(unscopedToken))
  const tenants = await keystone.getScopedProjects(unscopedToken)
  if (!tenants || tenants.length === 0) {
    // TODO: No tenant found for ${username}
  }
  console.log(tenants)
}
