import axios from "axios";

const API_URL = "http://localhost:3333";

export const getAllBanners = async () => {
  try {
    const response = await axios.get(`${API_URL}/banners`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};
