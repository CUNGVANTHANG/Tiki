import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
