import { Pressable, StyleSheet, Text, View } from 'react-native'
import CardShadow from '../Wrappers/Degradados'





const CategoryItem = ({categoria, setCategoriaElejida}) => {
    return (
      <Pressable onPress={()=>setCategoriaElejida(categoria)} >
        <CardShadow style={styles.container}>
          <Text style={styles.text}>{categoria}</Text>
        </CardShadow>
      </Pressable>
    )
  }

  export default CategoryItem;

  const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:"#ECE67F",
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
})