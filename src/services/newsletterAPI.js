import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.NEWSLETTER_SERVICE_URL; 

const subscribe = async (email) => {
  try {
    const res = await axios.post(BASE_URL, { email });
    console.log("✅ Réponse newsletter :", res.data);

   
    return res.data?.message || JSON.stringify(res.data) || "Inscription réussie";
  } catch (error) {
    console.error("❌ Erreur dans newsletterAPI.subscribe :", error.message);
    return "Erreur lors de l'inscription à la newsletter";
  }
};

export default { subscribe };
