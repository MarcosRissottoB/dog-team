import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Style
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  li: {
    listStyle: 'none',
  },
  dogItem: {
    width: '300px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textDecoration: 'none'
  }
}));

function DogItem({item}) {
  const classes = useStyles();

  return (
    <Link to={{pathname: `/dog/${item}`}}>
      <li  className={classes.li}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={4}>
                  <Avatar style={{textDecoration: 'none'}}>W</Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Typography className={classes.dogItem}>{item}</Typography>
                </Grid>
        </Grid>
        </Paper>
      </li>
    </Link>
  )
}

export default DogItem;
