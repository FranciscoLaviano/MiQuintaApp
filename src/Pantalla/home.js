import { StyleSheet } from 'react-native'
import Header  from '../Componentes/header'
import Categorias from "../Componentes/categorias"

const Home = ({navigation, route}) => {

     return (
      <>
      <Header title='Categorias' />
       <Categorias navigation={navigation} route={route} />
      </>
       

     )

}
export default Home;
const styles = StyleSheet.create({});