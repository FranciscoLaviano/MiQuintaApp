
import { createSlice } from '@reduxjs/toolkit'
import allProductos from "../../Data/catalogo.json"
import allCategories from "../../Data/categorias.json"

const initialState = {
    value:{
        products: allProductos,
        categories:allCategories,
        productSelected:{},
        productsFilteredByCategory:[]
    }
  }

export const ShopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setProductsFilteredByCategory: (state,actions) => {
            state.value.productsFilteredByCategory = state.value.products.filter(producto => producto.category == actions.payload)
        },
        setProductoElejjido: (state,actions) =>{
            state.value.productSelected = state.value.products.find(producto => producto.id ===actions.payload)
        }
    }
})

export const { setProductsFilteredByCategory,setProductoElejido} = ShopSlice.actions

  export default ShopSlice.reducer