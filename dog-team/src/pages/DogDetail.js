import React, { useState, useEffect } from 'react';

// Services
import dogService from '../services/dogService';

function DogDetail() {
  const [dog, setDog] = useState(undefined);

  const getDog = async () => {
    const dog = await dogService.findById();
    console.log('findById in home', dog);
    setDog(dog);
  }

  useEffect( () => {
    getDog();
  }, []);

  return (
    <div>
      {dog ? 
        dog
        : 'No dog found'
      }
    </div>
  )
}

export default DogDetail;
