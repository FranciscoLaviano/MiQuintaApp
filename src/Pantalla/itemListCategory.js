import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native'
import  { useEffect, useState } from 'react'
import Header from "../Componentes/header"
import Busqueda from "../Componentes/busqueda"
import allProductos from "../Data/catalogo.json"
import ProductoItem from "../Componentes/productoItem"



const ItemListCategories = ({categoria}) => {

  const [keyword,setKeyword] = useState("")
  const [productos, setProductos] = useState(allProductos)

 useEffect(() => { if(categoria){
  const productosCategory = allProductos.filter(producto => producto.categoria === categoria)
  const productosFiltrados = productosCategory.filter(producto => producto.title.includes(keyword))
  setProductos(productosFiltrados)
}else{
  const productosFiltrados = allProductos.filter(producto => producto.title.includes(keyword))
  setProductos(productosFiltrados)
}
}, [keyword])


    return (
      <>
      <Header />
      <Busqueda setKeyword={setKeyword} />
      <FlatList 
       style={styles.container}
       data={productos}
       keyExtractor={item => item.id}
       renderItem={({item})=> <ProductoItem item={item} /> } 
       />  
       </>
    )
  }

export default ItemListCategories;  

const styles = StyleSheet.create({
  container:{
      width:"100%",
     
  }
})