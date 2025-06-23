import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.CART_SERVICE_URL;

const getCart = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}`);
  return Object.entries(res.data).map(([productId, quantity]) => ({
    productId,
    quantity: parseInt(quantity),
  }));
};

const addToCart = async (userId, productId, quantity) => {
    await axios.post(BASE_URL, {
      user_id: userId,
      product_id: productId,
      quantity,
    });
    return "Produit ajouté au panier";
  };
  
  const removeFromCart = async (userId, productId) => {
    await axios.delete(`${BASE_URL}/${userId}/${productId}`);
    return "Produit supprimé du panier";
  };
  

export default {
  getCart,
  addToCart,
  removeFromCart,
};
