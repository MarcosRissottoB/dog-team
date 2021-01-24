import React, { useState, useEffect } from 'react';

// Services
import dogService from '../services/dogService';

// Components
import DogList from '../components/dogList';

function Home() {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const dogs = await dogService.getAll();
    setDogs(dogs);
  }

  useEffect( () => {
    getDogs();
  }, []);

  return (
    <div >
      <DogList dogs={dogs}/> 
    </div>
  )
}

export default Home;
