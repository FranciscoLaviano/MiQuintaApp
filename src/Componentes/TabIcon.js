import { StyleSheet, Text,View } from 'react-native'
import {Entypo} from "@expo/vector-icons"


const TabIcon = ({icon, label, focused}) => {
  return (
    <View style={styles.container}>
     <Entypo name={icon} size={40} color={focused ? "white" : "#243623"} />
     <Text style={{...styles.text, ...{color:focused ? "white" : "#243623"}}}>{label}</Text>

    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:'#124014',
        textAlign:"center"
    }
})