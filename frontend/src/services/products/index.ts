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

export const getAllProductsByName = async (query: string) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/products/search?q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching search:", error);
    throw error;
  }
};
