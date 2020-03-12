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
    getUsers: function () {
        return axios.get("/api/users");
    },

    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },

    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },

    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};
