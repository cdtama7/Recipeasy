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
    return axios.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + userFridge + "&ranking=2");
  },  
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
