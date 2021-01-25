
import axios from 'axios';

// DOG API
const apiBaseUrl = 'https://dog.ceo/api/';

const dogService = {

  // Get all
  // Endpoint: breeds/list/all
  getAll: async () => {
    try {
      const { data } = await axios.get(`${apiBaseUrl}breeds/list/all`);
      const result = Object.values(data.message);
      const dogs = result.filter((item => item.length !== 0));
      return dogs;
    } catch (error) {
      throw error;
    }
  },

  // Find by id
  // Endpoint: breed/hound/images/random/5
  findById: async (id = 'akita') => {
    try {
    const { data } = await axios.get(`${apiBaseUrl}breed/${id}/images/random/5`);
    return data.message;
    } catch (error) {
      throw error;
    }
  }
}

export default dogService;