import axios from "axios";

const paisesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  timeout: 10000,
});

export default paisesApi;
