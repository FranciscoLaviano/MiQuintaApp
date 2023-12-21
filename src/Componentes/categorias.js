import { FlatList, StyleSheet, Text, View } from "react-native";
import categorias from "../Data/categorias.json";
import CategoryItem from "./categoryItem";

const Categorias = ({ setCategoriaElejida }) => {
  return (
    <FlatList
      style={styles.container}
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem
          setCategoriaElejida={setCategoriaElejida}
          categoria={item}
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
