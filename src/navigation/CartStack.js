
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/header'
import Carro from "../Pantalla/Carro"

const Stack = createNativeStackNavigator()

const CartStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Carro'
            screenOptions={
                ({ruta})=>{
                    return {
                        header : () => <Header title="Carrito"/>
                    }
                }
            }
        >
            <Stack.Screen name="Carro" component={Carro} />
        </Stack.Navigator>
      )
}

export default CartStack