import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Services
import dogService from '../services/dogService';

function DogDetail() {
  const [dog, setDog] = useState(undefined);
  const { id } = useParams();

  const getDog = async (id = 'australian') => {
    console.log('id in dog detail', id);
    const dog = await dogService.findById(id);
    console.log('findById in dog detail', dog);
    setDog(dog);
  }

  useEffect( () => {
    getDog(id);
  }, [id]);

  console.log('desde dog detail');

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
