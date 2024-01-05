import {useEffect, useState} from 'react'
import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CarroItem from '../Componentes/CarroItem'
import todoCarro from '../Data/Carro.json'

const Carro = () => {

    const [carro, setCarro] = useState([])
    const [total, setTotal] = useState(0)

    useEffect (() => {
    setCarro(todoCarro)
    }, [])

    useEffect (() => {

        const total = carro.reduce((acc, producto) => acc + (producto.precio * producto.quantity), 0)
        setTotal(total)
    }, [carro])
  return (
    <View style={styles.container}>
        <FlatList
            data={carro}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CarroItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {total} </Text>
        </View>
    </View>
  )
}

export default Carro

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:130
    },
    confirmContainer:{
        backgroundColor:"#a764fa",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"white",
        fontFamily:"Joseffin"
    }
})