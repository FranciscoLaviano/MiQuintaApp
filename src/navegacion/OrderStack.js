import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/header'
import Ordenes from '../Pantalla/Ordenes'

const Stack = createNativeStackNavigator()



const OrderStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({ruta})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrderStack