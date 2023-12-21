import { StyleSheet } from 'react-native'
import Header from  "../Componentes/header"
import Categorias from "../Componentes/categorias"

const Home = ({setCategoriaElejida}) => {

     return (
      <>
      
      <Header title='Categorias' />
      <Categorias setCategoriaElejida={setCategoriaElejida} />
      
      </>
       

     )

}
export default Home;
const styles = StyleSheet.create({});