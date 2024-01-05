
import { createSlice } from '@reduxjs/toolkit'
import allProductos from "../../Data/catalogo.json"
import allCategories from "../../Data/categorias.json"

const initialState = {
    value:{
        products: allProductos,
        categorias:allCategories,
        productoElejido:{},
        productsFilteredByCategory:[]
    }
  }

export const ShopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setProductsFilteredByCategory: (state,actions) => {
            state.value.productsFilteredByCategory = state.value.products.filter(producto => producto.categorias == actions.payload)
        },
        setProductoElejjido: (state,actions) =>{
            state.value.productoElejido = state.value.products.find(producto => producto.id ===actions.payload)
        }
    }
})

export const { setProductsFilteredByCategory,setProductoElejido} = ShopSlice.actions

  export default ShopSlice.reducer