import axios from "axios";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default {
  getRandomRecipe: function() {
    return axios.get("/spoonacular/recipes/random?number=1");
  },
  getTenRandomRecipes: function() {
    return axios.get("/spoonacular/recipes/random?number=10");
  },
  // Get recipes based on user profile data for users with normal
  getUserRecipes: function(userFridge) {
    return axios.get("/spoonacular/recipes/findByIngredients?ingredients=" + userFridge 
    + "&limitLicense=true&ignorePantry=false&ranking=2&number=5&apiKey=" + API_KEY);
  },
  getSpecialUserRecipes: function(userFridge) {
    return axios.get("/spoonacular/recipes/findByIngredients?ingredients=" + userFridge 
    + "&limitLicense=true&ignorePantry=false&ranking=2&number=20&apiKey=" + API_KEY);
  },
  
  getInformationBulk: function(recipeIDs) {
    return axios.get("/spoonacular/recipes/informationBulk?ids=" + recipeIDs 
    + "&apiKey=" + API_KEY)
  },

  getInstructionsById: function(id, event) {
    return axios.get("/spoonacular/recipes/" + id 
    + "/analyzedInstructions?apiKey=" + API_KEY)
  }
};
