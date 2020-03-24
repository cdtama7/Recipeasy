import axios from "axios";

export default {
  getVideos: function(items, diet) {
    let query = items.join(" ")
    if (diet !== undefined) {
      query += " +" + diet.split(" ").join("+")
    }
    console.log("youtube query " + query);
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyD3nyQ6RsSMlsgI8j2ala6NEiR8WQj-ui8&q=" + query
    return axios.get(url);
  },
};
