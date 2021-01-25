import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Components
import DogPictures from './dogPictures';

// Style
const useStyles = makeStyles((theme) => ({
  div: {
    margin: '5px',
  },
  link: {
    width: '230px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    underline: 'none',
  }
}));

function Breed({id, dogImages}) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      {dogImages ?
        <DogPictures id={id} dogImages={dogImages} action={'add'} /> 
        : <div>
            <Typography variant="h2">
              Breed not found
            </Typography>
            <Typography >
              Try with the australian breed
            </Typography>
            <Button color="inherit">
              <ArrowBackIcon />
              <Link to="/" className={classes.link}>
                Go home
              </Link>
            </Button>
        </div>
      }
    </div>
  )
}

export default Breed;
