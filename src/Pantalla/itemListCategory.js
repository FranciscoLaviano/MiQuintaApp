import { StyleSheet, FlatList } from 'react-native'

import Busqueda from '../Componentes/busqueda'
import allProductos from "../Data/catalogo.json"
import ProductoItem from "../Componentes/productoItem"
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const ItemListCategories = ({navegacion, route}) => {
  const productosFiltradosPorCategoria = useSelector(state => state.shop.value.productsFilteredByCategory)
  const [keyword,setKeyword] = useState("")
  const [productos, setProductos] = useState(allProductos)

 useEffect(() => { 
  const productosFiltrados = productosFiltradosPorCategoria.filter(producto => producto.title.includes(keyword))
  setProductos(productosFiltrados)

}, [keyword, productosFiltradosPorCategoria])


    return (
      <>
      
      <Busqueda setKeyword={setKeyword} />
      <FlatList 
       style={styles.container}
       data={productos}
       keyExtractor={item => item.id}
       renderItem={({item}) => <ProductoItem item={item} navegacion={navegacion} route={route} />  } 
       />  
       </>
    )
  }

export default ItemListCategories;  

const styles = StyleSheet.create({
  container:{
   width:"100%"
  },
  goBack:{
   width:"100%",
   backgroundColor:'#e2fc83',
   padding:10,
   paddingStart:40
  }
 })