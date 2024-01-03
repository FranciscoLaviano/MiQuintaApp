import { StyleSheet, useWindowDimensions, Pressable, Text, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import {setProductoElejido} from '../funciones/shop/ShopSlice'

const ProductoItem = ({item, navegacion, ruta}) => {

  const {width} = useWindowDimensions()
  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container} onPress={() => { 
      dispatch(setProductoElejido(item.id))
      navegacion.navigate("Producto", {id:item.id})


    }}>

        <Image style={styles.image}
               resizeMode='cover'  
               source={{uri:item.thumbnail}} 
               />    
        <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductoItem ;

const styles = StyleSheet.create({
  container:{
       width:"80%",
       height:100,
       backgroundColor:'fcffe3',
       marginHorizontal:"10%",
       marginVertical:10,
       paddingHorizontal:10,
       paddingVertical:15,
       borderRadius:5,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       gap:30
   },
   image:{
       width:"60%",
       textAlign:"center",
       fontSize:20
   }
});