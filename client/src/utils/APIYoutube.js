import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default {
  getVideos: function(items, diet) {
    let query = items.join(" ")
    if (diet !== undefined) {
      query += " +" + diet.split(" ").join("+")
    }
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=" + API_KEY + "&q=" + query
    return axios.get(url);
  },
};
