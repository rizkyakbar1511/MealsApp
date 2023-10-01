import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />;
  };

  return <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />;
}
