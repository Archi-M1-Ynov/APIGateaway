import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.PRODUCT_SERVICE_URL;

const getAllProducts = async () => {
  const res = await axios.get(BASE_URL);
  console.log("Response from product service:", res.data);
  return res.data
};

const search = async (query) => {
  const res = await axios.post(`${BASE_URL}/search`, { query });
  return res.data;
};

export default {
  getAllProducts,
  search,
};
