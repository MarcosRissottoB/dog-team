import React, { useState, useEffect } from 'react';

// Services
import dogService from '../services/dogService';
import initialDataServices from '../services/initialDataServices';

// Components
import DogList from '../components/dogList';

function Home() {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const dogs = await dogService.getAll();
    setDogs(dogs);
  }

  const setInitialDataInStorage = () => {
    localStorage.setItem('InitialData', initialDataServices.initialData);
  }

  useEffect( () => {
    getDogs();
    setInitialDataInStorage();
  }, []);

  return (
    <div >
      <DogList dogs={dogs}/> 
    </div>
  )
}

export default Home;
