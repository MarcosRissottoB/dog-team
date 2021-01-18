import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

// Services
import dogService from '../services/dogService';

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
          {dogs.map( item => 
            <Li key={item}>
              <a><Typography>{item}</Typography></a>
            </Li>)}
        </ul>
        : 'No dogs found'
      }
    </div>
  )
}

const Li = styled.l1`
  list-style: none;
`;

export default Home;
