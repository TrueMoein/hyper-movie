import axios from "axios";
const session_id = localStorage.getItem("session");

export const fench = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2d65b06dcf682524c5198a666426664c",
    ...(session_id && { session_id }),
  },
});

window.fench = fench;
