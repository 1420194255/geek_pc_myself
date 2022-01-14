import { combineReducers } from 'redux'

import login from './login'

// 多个reducers合并
const rootReducer = combineReducers({
  login,
})

// 暴露出去
export default rootReducer
