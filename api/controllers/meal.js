import axios from 'axios';

export const getMealsByCountry = async (req, res, next) => {
  try {
    const country = req.params.country;

    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    const mealsData = response.data.meals;

    // Extract the required information from the API response
    const meals = mealsData.map((mealData) => {
      const { idMeal, strMeal, strCategory, strMealThumb } = mealData;
      return {
        id: idMeal,
        name: strMeal,
        category: strCategory,
        thumbnail: strMealThumb,
      };
    });

    // Send the filtered meals as the API response
    res.status(200).json(meals);
  } catch (err) {
    next(err);
  }
};
