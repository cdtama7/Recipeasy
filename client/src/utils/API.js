import axios from "axios";

export default {
   
    getItemsForUser: function (userId) {
        return axios.get("/api/items/forUser/" + userId);
    },

    getItem: function (id) {
        return axios.get("/api/items/" + id);
    },

    deleteItem: function (id) {
        return axios.delete("/api/items/" + id);
    },

    saveItem: function (itemData) {
        return axios.post("/api/items", itemData);
    },


    getFavsForUser: function (userId) {
        return axios.get("/api/favs/forUser/" + userId);
    },

    getFavsForUserByRecipeId: function (userId, recipeId) {
        return axios.get("/api/favs/forUserByRecipeId/" + userId + "/" + recipeId);
    },

    deleteFavsForUserByRecipeId: function (userId, recipeId) {
        return axios.delete("/api/favs/deleteForUserByRecipeId/" + userId + "/" + recipeId);
    },

    getFav: function (id) {
        return axios.get("/api/favs/" + id);
    },

    deleteFav: function (id) {
        return axios.delete("/api/favs/" + id);
    },

    saveFav: function (favData) {
        return axios.post("/api/favs", favData);
    },


};
