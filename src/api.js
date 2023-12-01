
const axios = require('axios');

const BASE_URL = 'http://localhost:5000'; 

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
