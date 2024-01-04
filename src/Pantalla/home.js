import { StyleSheet } from 'react-native'

import Categorias from "../Componentes/categorias"

const Home = ({navegacion, route}) => {

     return (
      <>
       <Categorias navegacion={navegacion} route={route} />
      </>
       

     )

}
export default Home;
const styles = StyleSheet.create({});