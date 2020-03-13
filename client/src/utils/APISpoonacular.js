import axios from "axios";

export default {
  getRandomRecipe: function() {
    return axios.get("https://api.spoonacular.com/recipes/random?number=1");
  },
  getTenRandomRecipes: function() {
    return axios.get("https://api.spoonacular.com/recipes/random?number=10");
  },
  // Get recipes based on user profile data for users with normal
  getUserRecipes: function(userFridge) {
    return axios.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + userFridge + "&ranking=2&apiKey=df41f99267594919b25d6ad4cb307750");
  },
  getIngredientsById: function(id) {
    return axios.get("https://api.spoonacular.com/recipes/" + id + "/ingredientWidget.json")
  }
  // Get recipes based on user profile data for users with special diets
//   getUserRecipesWithDiet: function(userFridge, userDiet) {
//       axios.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + userFridge + "&ranking=2&number=100")
//         .then(res => {
//           let idList = [];
//           let diet = userDiet;
//           for (let i = 0; i < res.data.length; i++) {
//             if (res.data[i].
//             idList.push(res.data[i].id)
//           }
//           axios.get()
//         }

//     )
// }
};
