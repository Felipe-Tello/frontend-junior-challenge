import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/reducer';

const reducer = {
    content: todoReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;