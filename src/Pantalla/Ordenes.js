import { FlatList, StyleSheet, Text, View } from 'react-native'
import todaOrden from "../Data/Ordenes.json"
import OrdenarTemas from '../Componentes/OrdenarTemas'

const Ordenes = () => {
  return (
    <FlatList
        data={todaOrden}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrdenarTemas orden={item}/>}
    />
  )
}

export default Ordenes