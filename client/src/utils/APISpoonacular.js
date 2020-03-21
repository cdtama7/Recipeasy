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
  getSpecialUserRecipes: function(userFridge) {
    return axios.get("/spoonacular/recipes/findByIngredients?ingredients=" + userFridge + "&limitLicense=true&ignorePantry=false&ranking=2&number=20&apiKey=df41f99267594919b25d6ad4cb307750");
  },
  
  getInformationBulk: function(recipeIDs) {
    return axios.get("/spoonacular/recipes/informationBulk?ids=" + recipeIDs + "&apiKey=df41f99267594919b25d6ad4cb307750")
  },

  getInstructionsById: function(id, event) {
    return axios.get("/spoonacular/recipes/" + id + "/analyzedInstructions?apiKey=df41f99267594919b25d6ad4cb307750")
  }
};
