import axios from "axios";

const borrowApiInstance = axios.create({
  baseURL: "https://localhost:5001/api/",
});

//borrowApiInstance.defaults.headers.common["Authorization"] = 'Bearer ...' ;
borrowApiInstance.defaults.headers.post["Content-Type"] = "application/json";

export default borrowApiInstance;
