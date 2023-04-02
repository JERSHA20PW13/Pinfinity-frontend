import axios from "axios";

const profile = axios.create({
  baseURL: "https://pinfinity.onrender.com/user",
});

export default profile;
