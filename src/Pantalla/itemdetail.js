import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import { useSelector } from 'react-redux'


const ItemDetail = ({route}) => {

    const producto = useSelector((state)=> state.shop.value.productoElejido)
    const images = producto.images ? producto.images : []

    return (
        <View style={styles.container}>
        <View style={styles.content} >
            <Image
              style={styles.thumbnail}
              source={{uri:images[2]}}
              resizeMode='cover's
            />
            <View style={styles.containerText}>
              <Text style={styles.title}>{producto.title}</Text>
              <Text>{producto.descripcion}</Text>
            </View>
            <View style={styles.containerPrice}>
              <Text style={styles.price}>$ {producto.precio}</Text>
              <Pressable style={styles.buyNow}>
                <Text style={styles.buyNowText}>Buy Now</Text>
              </Pressable>
            </View>
          </View>
      </View>
        

    )

}
export default ItemDetail;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    content:{
      width:"100%"
    },

    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:'#fbffbf',
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:20,
      fontWeight:"bold"
     },
     price:{
      fontSize:30
     },
     buyNow:{
      backgroundColor:'#71fa37',
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"white"
     }
})