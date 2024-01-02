import { StyleSheet } from 'react-native'

import Categorias from "../Componentes/categorias"

const Home = ({navegacion, ruta}) => {

     return (
      <>
       <Categorias navegacion={navegacion} ruta={ruta} />
      </>
       

     )

}
export default Home;
const styles = StyleSheet.create({});