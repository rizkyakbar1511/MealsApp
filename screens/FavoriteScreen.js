import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavoriteScreen() {
  // const favoriteMealsCtx = React.useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(({ id }) => favoriteMealsIds.includes(id));

  if (favoriteMeals.length) {
    return <MealsList items={favoriteMeals} />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
