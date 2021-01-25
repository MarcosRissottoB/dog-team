import React, { useState, useEffect} from 'react';
import { withRouter } from "react-router";


function Team({location}) {
  const [dogs, setDogs] = useState([]);

  let { search } = location;
  const query = new URLSearchParams(search);
  const url = query.get("url");
  
  const addDog = (url) => {
    if (dogs.length <= 10) {
      console.log('url', url);
      dogs.push(url);
      setDogs(dogs)
    }
  }

  useEffect(() => {
    addDog(url);
  }, [url]);

  return (
    <div>
      <h1>Desde Team page</h1>
      <ul>
        {dogs.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default withRouter(Team);
