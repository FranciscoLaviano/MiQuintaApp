import { configureStore } from '@reduxjs/toolkit'
import ShopReducer from "./Componentes/funciones/shop/ShopSlice"

export const store = configureStore({
  reducer: {
    shop: ShopReducer
  },
})

