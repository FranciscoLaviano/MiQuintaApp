import Home from "./src/Pantalla/home";
import { StyleSheet,  View, Text } from 'react-native';
import ItemListCategories from "./src/Pantalla/itemListCategory"
import ItemDetail from "./src/Pantalla/itemdetail"
import { useState } from 'react'
import { useFonts } from "expo-font"




const App = () => {

   const [categoriaElejida, setCategoriaElejida] = useState("")
   const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf")
   })
  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      <Text>SUPLEMENTOS ALIMENTICIOS OMNILIFE</Text>
      {categoriaElejida ? <ItemListCategories categoria={categoriaElejida} />
      :
      <Home setCategoriaElejida={setCategoriaElejida} />
    }
      
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '340636',
    alignItems: 'center',
    justifyContent: 'start',
  },
})


