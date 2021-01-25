import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import DogItem from './dogItem';

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function DogList({dogs}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {dogs ?
        <Grid container spacing={2}>
            <ul>
              {dogs.map( (item) => 
                <Grid container item xs={6} spacing={1} key={uuid()}>
                  <DogItem item={item} />
                </Grid>
              )}
            </ul>
        </Grid>
        : 'Breed not found'}     
    </div>
  );
}

export default DogList;