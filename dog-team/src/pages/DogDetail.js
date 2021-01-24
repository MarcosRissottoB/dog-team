import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Breed from '../components/breed';

// Services
import dogService from '../services/dogService';

function DogDetail() {
  const [dogImages, setDogImages] = useState(undefined);
  const { id } = useParams();

  const getDog = async (id) => {
    try {
      const dogImages = await dogService.findById(id);
      setDogImages(dogImages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getDog(id);
  }, [id]);

  return (
    <>
      <Breed id={id} dogImages={dogImages}/>
    </>
  )
}

export default DogDetail;
