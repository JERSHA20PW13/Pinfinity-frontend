import axios from "axios";

const pins = axios.create({
  baseURL: "https://pinfinity.onrender.com/pins",
});

export default pins;
