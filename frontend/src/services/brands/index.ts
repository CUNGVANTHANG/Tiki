import axios from "axios";

export const getAllBrands = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/brands`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};
