import { StyleSheet, View, Text, Image } from 'react-native'


const ProductoItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
               resizeMode='cover'  
               source={{uri:item.thumbnail}} 
               />    
        <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default ProductoItem ;

const styles = StyleSheet.create({
  container:{
       width:"80%",
       backgroundColor:'white',
       marginHorizontal:"10%",
       marginVertical:10,
       paddingHorizontal:10,
       paddingVertical:15,
       borderRadius:5,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"start",
       gap:30
   },
   image:{
       width:50,
       height:50
   }
});