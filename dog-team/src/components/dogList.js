import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  li: {
    listStyle: 'none',
  },
  item: {
    width: '230px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }
}));

function DogList({dogs}) {
  const classes = useStyles();
  console.log('dogs', dogs);
  return (
    <div className={classes.root}>
      {dogs ?
        <ul>
          {dogs.map( (item) => 
            <li key={uuid()} className={classes.li}>
              <Link to={{pathname: `/dog/${item}`}}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.item}>{item}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </li>
          )}
        </ul>
        : 'No dogs found'}     
    </div>
  );
}

export default DogList;