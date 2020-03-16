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
};
