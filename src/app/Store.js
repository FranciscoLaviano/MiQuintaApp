import { configureStore } from '@reduxjs/toolkit'
import ShopReducer from "../features/shop/ShopSlice"

export const store = configureStore({
  reducer: {
    shop: ShopReducer
  },
})

