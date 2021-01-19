import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import uuid from 'react-uuid';

// Services
import dogService from '../services/dogService';

const Li = styled.li`
  list-style: none;
`;

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
    <div>
      {dogs ? 
        <ul>
          {dogs.map( item => 
            <Li key={uuid()}>
              {/* to={{pathname: `/dog/${item}`}} */}
              {/* <Link to='/dog/miniature'><Typography>{item}</Typography></Link> */}
              <Link to={{pathname: `/dog/${item}`}}><Typography>{item}</Typography></Link>
            </Li>)}
        </ul>
        : 'No dogs found'
      }
    </div>
  )
}

export default Home;
