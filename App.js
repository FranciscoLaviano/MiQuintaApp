
import { StyleSheet, StatusBar, Text } from 'react-native';
import { useFonts } from "expo-font"
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import {Fuentes} from "./src/design/Fuentes"
import {store} from "./src/app/Store"




const App = () => {
   const [fontLoaded] = useFonts(Fuentes)
   
  if(!fontLoaded) return null

  return ( 
    <>
    <Text style={styles.text}>SUPLEMENTOS ALIMENTICIOS OMNILIFE</Text>
    <StatusBar backgroundColor={'#e2fc83'} />
    
     <Provider store={store}>
     
      <TabNavigator />
     </Provider>
     
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae8e8',
    alignItems: 'center',
    justifyContent: 'start',
  },
  text: {
    color: "#16083D",
    fontWeight: "bold",
    alignItems: "center",
    
  }
  
})


