import axios from "axios";

const Api = axios.create({
  baseURL: "https://randomuser.me/api/"
});
export default Api;
