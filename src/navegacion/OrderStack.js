import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/header'
import Ordenes from '../Pantalla/Ordenes'

const Stack = createNativeStackNavigator()



const OrderStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Ordernes'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Ordernes" component={Ordenes} />
    </Stack.Navigator>
  )
}

export default OrderStack