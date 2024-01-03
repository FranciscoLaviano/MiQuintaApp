import { configureStore } from '@reduxjs/toolkit'
import ShopReducer from "../funciones/shop/ShopSlice"

export const store = configureStore({
  reducer: {
    shop: ShopReducer
  },
})

