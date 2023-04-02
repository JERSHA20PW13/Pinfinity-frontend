import axios from "axios";

const boards = axios.create({
  baseURL: "https://pinfinity.onrender.com/boards",
});

export default boards;
