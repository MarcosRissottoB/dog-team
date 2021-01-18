import React, { useState, useEffect } from 'react';

// Services
import dogService from '../services/dogServices';

function Home() {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const dogs = await dogService.getAll();
    console.log('dogs in home', dogs);
    setDogs(dogs);
  }

  useEffect( () => {
    getDogs();
  }, []);

  return (
    <div>
      {dogs ? 
        <ul>
          {dogs.map( item => <li>{item}</li>)}
        </ul>
        : 'No dogs found'
      }
    </div>
  )
}

export default Home;
