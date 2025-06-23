import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.SEARCH_SERVICE_URL;

const search = async (query) => {
  const res = await axios.post(BASE_URL, { query });
 console.log("Response from search service:", query);
  return res.data;
};

export default {
  search,
};
