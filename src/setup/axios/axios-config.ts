import axios from "axios";

const endpoint = "http://localhost:8080/api";

const axiosPrivate = axios.create({
  baseURL: endpoint,
  //   withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosPrivate as axios };
