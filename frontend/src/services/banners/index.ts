import axios from "axios";

export const getAllBanners = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/banners`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};
