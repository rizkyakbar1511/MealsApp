import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

//alternative route hook from react navigation
// import { useRoute } from '@react-navigation/native'

export default function MealsOverviewScreen({ route, navigation }) {
  //optional route hook from react navigation
  // const route = useRoute()
  // route.params.id;

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(({ categoryIds }) => categoryIds.indexOf(catId) >= 0);

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
