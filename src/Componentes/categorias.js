import { FlatList, StyleSheet } from "react-native";

import CategoryItem from "./categoryItem";
import {useSelector} from 'react-redux'

const Categorias = ({ navegacion, route }) => {
  const categorias = useSelector((state) => state.shop.value.categorias)
  return (
    <FlatList
      style={styles.container}
      data={categorias}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <CategoryItem
          
          categoria={item}
          navegacion={navegacion}
          route={route}
        />
      )}
    />
  );
};
export default Categorias;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
