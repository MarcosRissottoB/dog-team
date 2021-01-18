import React, { useState, useEffect } from 'react';

// Services
import dogService from '../services/dogService';

function Home() {
  const [dogs, setDogs] = useState([]);
  // const [dog, setDog] = useState(undefined);

  // const getDog = async () => {
  //   const dog = await dogService.findById();
  //   console.log('findById in home', dog);
  //   setDog(dog);
  // }

  // useEffect( () => {
  //   getDog();
  // }, []);


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
      {/* {dog ? 
        dog
        : 'No dog found'
      } */}
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
