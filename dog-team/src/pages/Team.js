import React, { useState, useEffect} from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  loader: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function Team({location}) {
  const [dogs, setDogs] = useState(undefined);
  const [countMessage, setCountMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const classes = useStyles();

  let { search } = location;
  const query = new URLSearchParams(search);
  const url = query.get('url');

  const getParams = () => {
    const params = location.search.slice(1).split('?').reduce((acc, s) => {
      const [k, v] = s.split('=')
      return Object.assign(acc, {[k]: v})
    }, {})
    return params;
  }

  const updateDogTeam = (url) => {
    setLoader(true);
    const {action, id } = getParams();

    let newDogs = localStorage.getItem('InitialData').split(',');
    if (action === 'add') {
      if (newDogs.length < 10) {
        newDogs.push(url);
      } else {
        setCountMessage(true);
      }
    }
    if (action ==='remove') {
      newDogs.splice(id, 1);
    } 
    localStorage.setItem('InitialData', newDogs);
    setDogs(newDogs);
    setLoader(false);
  }

  useEffect(() => {
  }, [dogs]);

  useEffect(() => {
    updateDogTeam(url);
  }, [url]);

  return (
    <div>
      <h1>Your Dog Team </h1>
      {loader ?
        <div className={classes.loader}>
          <CircularProgress />
        </div>
        : <DogPictures dogImages={dogs} action={'remove'} />
      }
      {countMessage && 
          <div className={classes.root}>
            <Alert severity="error">Delete an image, you reached the limit of 10 images</Alert>
          </div>
      }
    </div>
  )
}

export default withRouter(Team);
