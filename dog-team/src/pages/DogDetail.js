import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Breed from '../components/breed';

// Services
import dogService from '../services/dogService';

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function DogDetail() {
  const [dogImages, setDogImages] = useState(undefined);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const classes = useStyles();

  const getDog = async (id) => {
    setLoader(true);
    try {
      const dogImages = await dogService.findById(id);
      setDogImages(dogImages);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  useEffect( () => {
    getDog(id);
  }, [id]);

  return (
    <div className={classes.root}>
      {loader ?
        <CircularProgress />
        : <Breed id={id} dogImages={dogImages}/>
      }
   </div>
  )
}

export default DogDetail;
