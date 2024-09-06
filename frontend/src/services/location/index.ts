import axios from "axios";

export const getProvince = async () => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/1/0.htm`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error;
  }
};

export const getWard = async (id: string) => {
  try {
    const response = await axios.get(
      `https://esgoo.net/api-tinhthanh/3/${id}.htm`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching wards:", error);
    throw error;
  }
};

export const getDistrict = async (id: string) => {
  try {
    const response = await axios.get(
      `https://esgoo.net/api-tinhthanh/2/${id}.htm`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};
