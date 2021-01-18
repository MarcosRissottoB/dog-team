
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
  // Endpoint: breed/{id}/images
  findById: async (id = 'Akita') => {
    try {
    const { data } = await axios.get(`${apiBaseUrl}breed/${id}/images`);
    console.log('dog', data);
    return data.message;
    } catch (error) {
      throw error;
    }
  }
}

export default dogService;