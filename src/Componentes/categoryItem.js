import { Pressable, StyleSheet, Text } from 'react-native'
import CardShadow from '../Wrappers/Degradados'
import {useDispatch} from 'react-redux'
import { setProductsFilteredByCategory} from "../features/shop/ShopSlice"




const CategoryItem = ({categoria, navegacion, route}) => {
  const dispatch = useDispatch()
    return (
      <Pressable onPress={()=>{dispatch(setProductsFilteredByCategory(categoria))
                              navegacion.navigate("Categoria", {categoria})
      }}>
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