
import axios from 'axios';

// DOG API
const apiBaseUrl = 'https://dog.ceo/api/';

const dogService = {

  // Get all
  // Endpoint: breeds/list/all
  getAll: async () => {
    try {
      const { data } = await axios.get(`${apiBaseUrl}breeds/list/all`);
      console.log('dogs', data.message);
      const result = Object.values(data.message);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Find by id
  // Endpoint: breed/hound/images/random/3
  findById: async (id = 'akita') => {
    try {
    const { data } = await axios.get(`${apiBaseUrl}breed/${id}/images/random/5`);
    console.log('dog', data);
    return data.message;
    } catch (error) {
      throw error;
    }
  }
}

export default dogService;