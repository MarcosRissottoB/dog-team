import React, { useState, useEffect} from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

// Components
import DogPictures from '../components/dogPictures';
// Style
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// Static data
const initialDogs = [
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg'
]
function Team({location}) {
  const [dogs, setDogs] = useState(initialDogs);
  const [countMessage, setCountMessage] = useState(false);
  const classes = useStyles();

  let { search } = location;
  const query = new URLSearchParams(search);
  const url = query.get("url");
  const action = query.get("action");

  const addDog = (url) => {
    if (action === 'add') {
      if (dogs.length <= 10) {
        console.log('url', url);
        dogs.push(url);
        setDogs(dogs)
      } else {
        setCountMessage(true);
      }
    } else {
      console.log('action', action);
        const newDogs = dogs.filter(item => item !== url)
        setDogs(newDogs)
    }
  }

  useEffect(() => {
    addDog(url);
  }, []);

  return (
    <div>
      <h1>Desde Team page</h1>
      <ul>
        {dogs.map((item) => 
          <DogPictures id={item} dogImages={dogs} action={'remove'} />   
        )}
      </ul>
        {countMessage && 
          <div className={classes.root}>
            <Alert severity="error">Delete an image, you reached the limit of 10 images</Alert>
          </div>
        }
    </div>
  )
}

export default withRouter(Team);
