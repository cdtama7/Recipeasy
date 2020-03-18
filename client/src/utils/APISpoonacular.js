import axios from "axios";

export default {
  getRandomRecipe: function() {
    return axios.get("/spoonacular/recipes/random?number=1");
  },
  getTenRandomRecipes: function() {
    return axios.get("/spoonacular/recipes/random?number=10");
  },
  // Get recipes based on user profile data for users with normal
  getUserRecipes: function(userFridge) {
    return axios.get("/spoonacular/recipes/findByIngredients?ingredients=" + userFridge + "&limitLicense=true&ignorePantry=false&ranking=2&number=5&apiKey=df41f99267594919b25d6ad4cb307750");
  },
  
  getIngredientsById: function(id) {
    return axios.get("/spoonacular/recipes/" + id + "/ingredientWidget.json")
  },

  getInstructionsById: function(id, event) {
    return axios.get("/spoonacular/recipes/" + id + "/analyzedInstructions?apiKey=df41f99267594919b25d6ad4cb307750")
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
