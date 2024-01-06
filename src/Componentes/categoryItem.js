import { Pressable, StyleSheet, Text, View } from 'react-native'
import CardShadow from '../Wrappers/Degradados'
import {useDispatch} from 'react-redux'
import { setProductsFilteredByCategory} from "../features/shop/ShopSlice"



const CategoryItem = ({categoria, navigation}) => {
  const dispatch = useDispatch()
    return (
      <Pressable onPress={()=>{dispatch(setProductsFilteredByCategory(categoria))
                              navigation.navigate("Category", {categoria})
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