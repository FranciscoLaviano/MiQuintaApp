import { StyleSheet, useWindowDimensions, Pressable, Text, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import {setProductoElejido} from '../features/shop/ShopSlice'

const ProductoItem = ({item, navigation, route}) => {

  const {width} = useWindowDimensions()
  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container} onPress={() => { 
      dispatch(setProductoElejido(item.id))
      navigation.navigate("Producto", {id:item.id})


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
   text:{
       width:"60%",
       textAlign:"center",
       fontSize:20
   },
   textMin:{
      width:"60%",
      textAlign:"center",
      fontSize:15
    },
    image:{
     minWidth:90,
     height:90,
     width:"30%"

    }
});