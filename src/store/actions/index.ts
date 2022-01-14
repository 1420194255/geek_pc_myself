//
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { LoginType } from './login'

// 统一暴露
export * from './login'

// 多个action的类型 最终会用 |进行合并 目前就一个
type RootActionType = LoginType

// 使用了 redux-thunk之后的action工厂函数的返回值类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootActionType>
